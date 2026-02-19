import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full -top-52 -right-52 animate-float-1"
          style={{ background: 'radial-gradient(circle, rgba(201,169,110,0.07) 0%, transparent 70%)' }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full -bottom-32 -left-32 animate-float-2"
          style={{ background: 'radial-gradient(circle, rgba(58,143,167,0.05) 0%, transparent 70%)' }}
        />
        {[20, 50, 80].map((left) => (
          <div
            key={left}
            className="absolute top-0 bottom-0 w-px opacity-30"
            style={{
              left: `${left}%`,
              background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.15), transparent)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center max-w-4xl">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-44 h-44 md:w-56 md:h-56 mx-auto mb-6 relative"
        >
          <div
            className="absolute inset-[-3px] rounded-full animate-spin-slow"
            style={{ background: 'conic-gradient(from 0deg, #c9a96e, #3a8fa7, #a08244, #c9a96e)' }}
          />
          <img
            src="/inder.jpeg"
            alt="Inder Kochar"
            className="w-full h-full rounded-full object-cover relative z-10 border-[3px] border-bg"
          />
        </motion.div>

        {/* Title under photo */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[clamp(1.05rem,2vw,1.35rem)] text-text-secondary font-light tracking-wide mb-2"
        >
          Executive Director, Global Head of Commercial Data &amp; Digital Innovation
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gold/80 font-medium text-[clamp(0.85rem,1.5vw,1.05rem)] mb-10"
        >
          Kite Pharma (Gilead) · New York City
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          className="font-serif text-[clamp(3.5rem,9vw,7.5rem)] font-semibold leading-[1.05] mb-6 bg-gradient-to-r from-text-primary via-gold-light to-text-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer"
        >
          Inder Kochar
        </motion.h1>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-text-muted text-[0.6rem] uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
