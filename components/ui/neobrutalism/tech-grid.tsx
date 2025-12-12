"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface TechGridProps {
  className?: string;
  gridSize?: number;
}

export function TechGrid({ className, gridSize = 50 }: TechGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    let animationFrameId: number;
    let mouseX = -100;
    let mouseY = -100;

    // Signal trails
    const maxSignals = 10;
    const signals: { x: number; y: number; dx: number; dy: number; life: number; maxLife: number }[] = [];

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
        width = canvas.width;
        height = canvas.height;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    resize();

    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // 1. Draw Static Grid
      ctx.strokeStyle = "rgba(0, 0, 0, 0.08)"; // Darker, cleaner
      ctx.lineWidth = 1;
      
      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      
      // 2. Interactive Mouse Effect (Highlight cells)
      const cellX = Math.floor(mouseX / gridSize) * gridSize;
      const cellY = Math.floor(mouseY / gridSize) * gridSize;

      if (mouseX > 0 && mouseY > 0) {
          ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
          ctx.fillRect(cellX, cellY, gridSize, gridSize);
          
          // Crosshair highlight
          ctx.strokeStyle = "rgba(0,0,0, 0.4)";
          ctx.lineWidth = 2;
          ctx.strokeRect(cellX, cellY, gridSize, gridSize);
      }

      // 3. Signals (Smooth "data" flow)
      // Spawn occasionally
      if (signals.length < maxSignals && Math.random() > 0.98) {
          const isHorizontal = Math.random() > 0.5;
          signals.push({
              x: isHorizontal ? 0 : Math.floor(Math.random() * (width/gridSize)) * gridSize,
              y: isHorizontal ? Math.floor(Math.random() * (height/gridSize)) * gridSize : 0,
              dx: isHorizontal ? 2 : 0,
              dy: isHorizontal ? 0 : 2,
              life: 0,
              maxLife: width + height // safe upper bound
          });
      }

      // Update and draw signals
      ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      for (let i = signals.length - 1; i >= 0; i--) {
          const s = signals[i];
          s.x += s.dx;
          s.y += s.dy;
          s.life++;

          // Draw head
          ctx.fillRect(s.x - 2, s.y - 2, 4, 4);

          // Draw trail
          ctx.strokeStyle = `rgba(0, 0, 0, ${1 - (s.life / 200)})`; // Fade out
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.dx * 20, s.y - s.dy * 20); // 20px trail
          ctx.stroke();

          // Bound check
          if (s.x > width || s.y > height) {
              signals.splice(i, 1);
          }
      }
      
      animationFrameId = requestAnimationFrame(() => drawGrid(time + 1));
    };

    drawGrid(0);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [gridSize]);

  return (
    <canvas 
        ref={canvasRef} 
        className={cn("absolute inset-0 w-full h-full pointer-events-none opacity-60", className)}
    />
  );
}