import SectionReveal from './SectionReveal'
import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'

const highlights = [
  {
    icon: '⚡',
    title: 'Data & Digital Innovation',
    desc: 'Building enterprise-wide commercial data platforms and digital capabilities that power decision-making across global markets.',
  },
  {
    icon: '🧬',
    title: 'Cell Therapy & Oncology',
    desc: 'Driving commercial strategy in the transformative field of CAR-T cell therapy — focused on the cure because lives depend on it.',
  },
  {
    icon: '🌐',
    title: 'Global Leadership',
    desc: 'Leading cross-functional teams across U.S. and international markets to build scalable data products and insights capabilities.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="inline-block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold pb-3 border-b border-border-gold mb-4">
            About
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15] mb-4">
            Bridging Data, Innovation
            <br />
            <span className="text-gold">&amp; Oncology</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div className="space-y-6">
            <SectionReveal delay={0.1} direction="left">
              <p className="text-text-secondary text-[1.05rem] leading-[1.85]">
                Inder Kochar is a seasoned executive leading{' '}
                <strong className="text-text-primary font-medium">
                  global commercial data strategy and digital innovation
                </strong>{' '}
                at Kite Pharma, where cutting-edge cell therapy is transforming the fight against cancer.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.2} direction="left">
              <p className="text-text-secondary text-[1.05rem] leading-[1.85]">
                With a career spanning{' '}
                <strong className="text-text-primary font-medium">Cisco, Novartis, and Kite Pharma</strong>,
                Inder uniquely bridges the worlds of technology and life sciences. His journey from software
                engineering to pharma leadership reflects a deep commitment to using data and innovation to create
                meaningful impact in patients' lives.
              </p>
            </SectionReveal>

            <SectionReveal delay={0.3} direction="left">
              <p className="text-text-secondary text-[1.05rem] leading-[1.85]">
                At Kite, he leads teams building{' '}
                <strong className="text-text-primary font-medium">next-generation commercial data products</strong>,
                customer engagement platforms, and analytics capabilities across U.S. and global markets — all in
                service of ensuring patients have access to potentially curative therapies.
              </p>
            </SectionReveal>
          </div>

          <div className="space-y-5">
            {highlights.map((item, i) => (
              <HighlightCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function HighlightCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.12 * index }}
      className="p-7 glass rounded-2xl"
    >
      <div className="text-2xl mb-3">{item.icon}</div>
      <h3 className="text-[0.95rem] font-semibold mb-1.5">{item.title}</h3>
      <p className="text-[0.82rem] text-text-secondary leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}
