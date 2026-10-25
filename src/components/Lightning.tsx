import { useEffect, useRef } from 'react'

// Procedural pixel-art lightning behind the page. When a page loads, a fresh random
// zig-zag drawn on a grid of square "art pixels" strikes once, flickers and
// dissolves pixel by pixel, then the canvas stays empty. Skipped with reduced motion.

const CELL = 6 // CSS pixels per art pixel
const FRAME_MS = 40 // ~25 fps keeps the motion steppy, like pixel animation
const LIFETIME_MS = 1600

type Pixel = { x: number; y: number; glow: boolean; threshold: number }
type Bolt = { pixels: Pixel[]; born: number; core: string; glow: string }

const randInt = (min: number, max: number) => min + Math.floor(Math.random() * (max - min + 1))

function generateBolt(cols: number, rows: number): Omit<Pixel, 'threshold'>[] {
  const cells = new Map<string, boolean>() // key -> isGlow

  const mark = (x: number, y: number, glow: boolean) => {
    if (x < 0 || y < 0 || x >= cols || y >= rows) return
    const key = `${x},${y}`
    if (!glow || !cells.has(key)) cells.set(key, glow)
  }

  // Bresenham line between grid cells: gives the stair-step diagonals of pixel art
  const line = (x0: number, y0: number, x1: number, y1: number, thickness: number) => {
    const dx = Math.abs(x1 - x0)
    const dy = -Math.abs(y1 - y0)
    const sx = x0 < x1 ? 1 : -1
    const sy = y0 < y1 ? 1 : -1
    let error = dx + dy
    for (;;) {
      for (let t = 0; t < thickness; t++) mark(x0 + t, y0, false)
      if (x0 === x1 && y0 === y1) break
      const e2 = 2 * error
      if (e2 >= dy) {
        error += dy
        x0 += sx
      }
      if (e2 <= dx) {
        error += dx
        y0 += sy
      }
    }
  }

  const walk = (x: number, y: number, length: number, thickness: number, drift: number, depth: number) => {
    while (length > 0 && y < rows) {
      const stepY = randInt(2, 5)
      const stepX = randInt(-3, 3) + drift
      line(x, y, x + stepX, y + stepY, thickness)
      x += stepX
      y += stepY
      length -= stepY
      if (depth < 2 && Math.random() < 0.18) {
        const side = Math.random() < 0.5 ? -1 : 1
        walk(x, y, randInt(6, Math.max(8, Math.floor(rows * 0.2))), 1, side * 2, depth + 1)
      }
    }
  }

  // Always strike from the top edge of the screen
  walk(randInt(0, cols - 1), 0, randInt(Math.floor(rows * 0.4), rows), 2, 0, 0)

  // Sparse halo of dimmer pixels around the core
  for (const key of [...cells.keys()]) {
    const [x, y] = key.split(',').map(Number)
    for (const [nx, ny] of [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ]) {
      if (Math.random() < 0.3) mark(nx, ny, true)
    }
  }

  return [...cells].map(([key, glow]) => {
    const [x, y] = key.split(',').map(Number)
    return { x, y, glow }
  })
}

export function Lightning() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const styles = getComputedStyle(document.documentElement)
    const color = (name: string) => styles.getPropertyValue(name).trim()
    const palettes = [
      { core: color('--bright'), glow: color('--text') },
      { core: color('--link-hover'), glow: color('--link') },
      { core: color('--bright'), glow: color('--pages') },
    ]

    let cols = 0
    let rows = 0
    let bolts: Bolt[] = []
    const strikeAt = performance.now() + 300
    let struck = false
    let lastFrame = 0
    let frame = 0

    const makeBolt = (born: number): Bolt => {
      const palette = palettes[randInt(0, palettes.length - 1)]
      return {
        pixels: generateBolt(cols, rows).map((pixel) => ({ ...pixel, threshold: Math.random() })),
        born,
        ...palette,
      }
    }

    const drawBolt = (bolt: Bolt, visible: (pixel: Pixel) => boolean) => {
      for (const pixel of bolt.pixels) {
        if (!visible(pixel)) continue
        ctx.fillStyle = pixel.glow ? bolt.glow : bolt.core
        ctx.fillRect(pixel.x * CELL, pixel.y * CELL, CELL, CELL)
      }
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.ceil(window.innerWidth * dpr)
      canvas.height = Math.ceil(window.innerHeight * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      cols = Math.ceil(window.innerWidth / CELL)
      rows = Math.ceil(window.innerHeight / CELL)
      // Resizing clears the canvas; a strike still in progress just ends
      bolts = []
    }

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick)
      if (now - lastFrame < FRAME_MS) return
      lastFrame = now

      // One strike per page load, now and then followed by a second one
      if (!struck && now >= strikeAt) {
        struck = true
        bolts.push(makeBolt(now))
        if (Math.random() < 0.25) bolts.push(makeBolt(now + 250))
      }

      ctx.clearRect(0, 0, cols * CELL, rows * CELL)
      bolts = bolts.filter((bolt) => now - bolt.born < LIFETIME_MS)
      if (struck && bolts.length === 0) {
        cancelAnimationFrame(frame)
        return
      }
      for (const bolt of bolts) {
        const age = now - bolt.born
        if (age < 0) continue
        // Strike, one dark flicker, back on, then dissolve pixel by pixel
        if (age > 100 && age < 160) continue
        const fade = Math.max(0, (age - 250) / (LIFETIME_MS - 250))
        drawBolt(bolt, (pixel) => pixel.threshold > fade)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    frame = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} className="lightning" aria-hidden="true" />
}
