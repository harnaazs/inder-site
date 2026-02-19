import { useState, useEffect } from 'react'
import { motion } from 'motion/react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Education', href: '#education' },
  { label: 'Connect', href: '#connect' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 border-b border-border ${
        scrolled
          ? 'py-3 px-6 bg-bg/95 backdrop-blur-2xl'
          : 'py-5 px-8 bg-transparent'
      }`}
    >
      <span className="font-serif text-3xl font-semibold text-gold tracking-wide">
        IK
      </span>

      <ul className="hidden md:flex items-center gap-8">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-text-secondary text-[0.7rem] font-medium uppercase tracking-[0.12em] hover:text-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
