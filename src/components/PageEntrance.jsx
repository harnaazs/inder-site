import { motion } from 'motion/react'

export default function PageEntrance() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-bg pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      onAnimationComplete={(def) => {
        if (def.opacity === 0) {
          const el = document.querySelector('[data-entrance]')
          if (el) el.remove()
        }
      }}
      data-entrance
    />
  )
}
