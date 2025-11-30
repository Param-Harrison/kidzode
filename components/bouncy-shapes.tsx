"use client"

import { useEffect, useRef } from "react"

interface Shape {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  type: 'circle' | 'square' | 'triangle'
  color: string
  rotation: number
  rotationSpeed: number
}

const COLORS = [
  '#FFDB58', // Yellow
  '#FFB6C1', // Pink
  '#0099FF', // Blue
  '#FFFFFF', // White
  '#00FF00', // Green
]

export function BouncyShapes({ minShapes = 4, maxShapes = 6 }: { minShapes?: number; maxShapes?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let shapes: Shape[] = []

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
    }

    const createShapes = () => {
      const shapeCount = Math.floor(Math.random() * (maxShapes - minShapes + 1)) + minShapes
      const newShapes: Shape[] = []

      for (let i = 0; i < shapeCount; i++) {
        const size = Math.random() * 30 + 20
        newShapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size,
          type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.02,
        })
      }
      shapes = newShapes
    }

    const drawShape = (shape: Shape) => {
      ctx.save()
      ctx.translate(shape.x, shape.y)
      ctx.rotate(shape.rotation)
      ctx.fillStyle = shape.color
      ctx.strokeStyle = '#000000'
      ctx.lineWidth = 2

      ctx.beginPath()
      if (shape.type === 'circle') {
        ctx.arc(0, 0, shape.size, 0, Math.PI * 2)
      } else if (shape.type === 'square') {
        ctx.rect(-shape.size / 2, -shape.size / 2, shape.size, shape.size)
      } else if (shape.type === 'triangle') {
        ctx.moveTo(0, -shape.size)
        ctx.lineTo(shape.size, shape.size)
        ctx.lineTo(-shape.size, shape.size)
        ctx.closePath()
      }

      ctx.fill()
      ctx.stroke()
      ctx.restore()
    }

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        // Move
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Bounce off walls
        if (shape.x - shape.size < 0 || shape.x + shape.size > canvas.width) {
          shape.vx *= -1
          shape.x = Math.max(shape.size, Math.min(canvas.width - shape.size, shape.x))
        }
        if (shape.y - shape.size < 0 || shape.y + shape.size > canvas.height) {
          shape.vy *= -1
          shape.y = Math.max(shape.size, Math.min(canvas.height - shape.size, shape.y))
        }

        drawShape(shape)
      })

      animationFrameId = requestAnimationFrame(update)
    }

    // Initialize
    resizeCanvas()
    createShapes()
    update()

    const handleResize = () => {
      resizeCanvas()
      createShapes()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [minShapes, maxShapes])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
