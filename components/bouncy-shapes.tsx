"use client";

import { useEffect, useRef } from "react";

interface Shape {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: "circle" | "square" | "triangle" | "pentagon";
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const COLORS = [
  "#FFDB58", // Primary (Yellow)
  "#FFB6C1", // Secondary (Pink)
  "#0099FF", // Accent (Blue)
  "#FFFFFF", // White
];

interface BouncyShapesProps {
  constrainToRight?: boolean;
  minShapes?: number;
  maxShapes?: number;
}

export function BouncyShapes({ constrainToRight = false, minShapes = 6, maxShapes = 10 }: BouncyShapesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let shapes: Shape[] = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    // Shuffle Bag implementation for better distribution
    class ShuffleBag<T> {
      private items: T[] = [];
      private currentItemIndex = -1;
      private initialItems: T[];

      constructor(items: T[]) {
        this.initialItems = [...items];
        this.fill();
      }

      private fill() {
        this.items = [...this.initialItems];
        // Fisher-Yates shuffle
        for (let i = this.items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
        }
        this.currentItemIndex = this.items.length - 1;
      }

      next(): T {
        if (this.currentItemIndex < 0) {
          this.fill();
        }
        return this.items[this.currentItemIndex--];
      }
    }

    const createShapes = () => {
      const shapeCount = Math.floor(Math.random() * (maxShapes - minShapes + 1)) + minShapes;
      const newShapes: Shape[] = [];
      
      // Create shuffle bags for properties to ensure even distribution
      const colorBag = new ShuffleBag(COLORS);
      const typeBag = new ShuffleBag<"circle" | "square" | "triangle" | "pentagon">([
        "circle", "square", "triangle", "pentagon",
        "circle", "square", "triangle", "pentagon" // Double up to have enough for the bag
      ]);

      // Calculate the spawn area based on constrainToRight prop
      const minX = constrainToRight ? canvas.width / 2 : 0;
      const maxX = canvas.width;

      for (let i = 0; i < shapeCount; i++) {
        const size = Math.random() * 30 + 18;
        let x = 0;
        let y = 0;
        let attempts = 0;
        let overlap = true;

        // Try to find a non-overlapping position
        while (overlap && attempts < 50) {
          x = minX + Math.random() * (maxX - minX);
          y = Math.random() * canvas.height;
          
          // Keep away from edges
          if (x < minX + size || x > maxX - size || y < size || y > canvas.height - size) {
            attempts++;
            continue;
          }

          overlap = false;
          for (const existingShape of newShapes) {
            const dx = x - existingShape.x;
            const dy = y - existingShape.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const minDistance = size + existingShape.size + 10; // Add some padding

            if (distance < minDistance) {
              overlap = true;
              break;
            }
          }
          attempts++;
        }

        newShapes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 2.5,
          vy: (Math.random() - 0.5) * 2.5,
          size,
          type: typeBag.next(),
          color: colorBag.next(),
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
      shapes = newShapes;
    };

    const drawShape = (shape: Shape) => {
      ctx.save();
      ctx.translate(shape.x, shape.y);
      ctx.rotate(shape.rotation);
      ctx.fillStyle = shape.color;
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;

      ctx.beginPath();
      if (shape.type === "circle") {
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2);
      } else if (shape.type === "square") {
        ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
      } else if (shape.type === "triangle") {
        ctx.moveTo(0, -shape.size);
        ctx.lineTo(shape.size, shape.size);
        ctx.lineTo(-shape.size, shape.size);
        ctx.closePath();
      } else if (shape.type === "pentagon") {
        // Draw a pentagon (5 sides)
        for (let i = 0; i < 5; i++) {
          const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2;
          const x = shape.size * Math.cos(angle);
          const y = shape.size * Math.sin(angle);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
      }
      
      ctx.fill();
      ctx.stroke();
      ctx.restore();
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Check for shape-to-shape collisions
      for (let i = 0; i < shapes.length; i++) {
        for (let j = i + 1; j < shapes.length; j++) {
          const shape1 = shapes[i];
          const shape2 = shapes[j];

          const dx = shape2.x - shape1.x;
          const dy = shape2.y - shape1.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = shape1.size + shape2.size;

          if (distance < minDistance) {
            // Collision detected! Calculate elastic collision response
            const angle = Math.atan2(dy, dx);
            const sin = Math.sin(angle);
            const cos = Math.cos(angle);

            // Rotate velocities
            const vx1 = shape1.vx * cos + shape1.vy * sin;
            const vy1 = shape1.vy * cos - shape1.vx * sin;
            const vx2 = shape2.vx * cos + shape2.vy * sin;
            const vy2 = shape2.vy * cos - shape2.vx * sin;

            // Swap velocities (assuming equal mass)
            const vx1Final = vx2;
            const vx2Final = vx1;

            // Rotate back
            shape1.vx = vx1Final * cos - vy1 * sin;
            shape1.vy = vy1 * cos + vx1Final * sin;
            shape2.vx = vx2Final * cos - vy2 * sin;
            shape2.vy = vy2 * cos + vx2Final * sin;

            // Separate shapes to prevent overlap
            const overlap = minDistance - distance;
            const separationX = (overlap / 2) * cos;
            const separationY = (overlap / 2) * sin;
            shape1.x -= separationX;
            shape1.y -= separationY;
            shape2.x += separationX;
            shape2.y += separationY;
          }
        }
      }

      shapes.forEach((shape) => {
        // Move
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.rotation += shape.rotationSpeed;

        // Calculate wall boundaries based on constrainToRight
        const leftBoundary = constrainToRight ? canvas.width / 2 : 0;
        const rightBoundary = canvas.width;

        // Bounce off walls
        if (shape.x - shape.size < leftBoundary || shape.x + shape.size > rightBoundary) {
          shape.vx *= -1;
          // Clamp position to prevent getting stuck
          if (shape.x - shape.size < leftBoundary) {
            shape.x = leftBoundary + shape.size;
          }
          if (shape.x + shape.size > rightBoundary) {
            shape.x = rightBoundary - shape.size;
          }
        }
        if (shape.y - shape.size < 0 || shape.y + shape.size > canvas.height) {
          shape.vy *= -1;
          // Clamp position to prevent getting stuck
          if (shape.y - shape.size < 0) {
            shape.y = shape.size;
          }
          if (shape.y + shape.size > canvas.height) {
            shape.y = canvas.height - shape.size;
          }
        }

        drawShape(shape);
      });

      animationFrameId = requestAnimationFrame(update);
    };

    // Initialize
    resizeCanvas();
    createShapes();
    update();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createShapes(); // Re-create shapes on resize to fit new bounds
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [constrainToRight, minShapes, maxShapes]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
