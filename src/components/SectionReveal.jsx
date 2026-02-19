import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export default function SectionReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08, rootMargin: '0px 0px -40px 0px' })

  const y = direction === 'up' ? 30 : direction === 'down' ? -30 : 0
  const x = direction === 'left' ? 30 : direction === 'right' ? -30 : 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
