import { motion } from 'motion/react'
import SectionReveal from './SectionReveal'

export default function Footer() {
  return (
    <footer id="connect" className="py-20 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <p className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-snug mb-8">
            Let's connect and create
            <br />
            <em className="text-gold">what's possible.</em>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/in/ikochar/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, boxShadow: '0 8px 35px rgba(201,169,110,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-gold-dark to-gold text-bg font-semibold text-[0.85rem] tracking-wide rounded-full transition-shadow"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Connect on LinkedIn
            </motion.a>

            <motion.a
              href="mailto:inder@ikochar.com"
              whileHover={{ y: -3, boxShadow: '0 8px 35px rgba(201,169,110,0.15)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-gold/40 text-gold font-semibold text-[0.85rem] tracking-wide rounded-full hover:border-gold transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              inder@ikochar.com
            </motion.a>
          </div>
        </SectionReveal>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-[0.7rem] text-text-muted"
        >
          &copy; 2026 Inder Kochar. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
