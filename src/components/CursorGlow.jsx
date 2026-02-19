import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let x = 0, y = 0
    const handler = (e) => {
      x = e.clientX
      y = e.clientY
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`
      }
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      ref={ref}
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
