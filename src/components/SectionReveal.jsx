import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

export default function SectionReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: '0px 0px -60px 0px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 60,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
