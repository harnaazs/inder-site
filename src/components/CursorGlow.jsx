import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handler = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <motion.div
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0"
      style={{
        background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
        left: pos.x - 250,
        top: pos.y - 250,
      }}
      animate={{ left: pos.x - 250, top: pos.y - 250 }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    />
  )
}
