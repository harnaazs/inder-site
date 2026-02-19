import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import SectionReveal from './SectionReveal'

const experiences = [
  {
    year: '2022 — Present',
    role: 'Executive Director — Global Head of Commercial Data & Digital Innovation',
    org: 'Kite Pharma (Gilead)',
    desc: 'Leading global commercial data strategy, digital innovation, and next-generation data products for one of the world\'s leading cell therapy companies.',
  },
  {
    year: '2021 — 2022',
    role: 'Executive Director — Data Products & Enablement',
    org: 'Novartis Oncology',
    desc: 'Spearheaded enterprise data products and enablement initiatives for Novartis\'s oncology division.',
  },
  {
    year: '2018 — 2021',
    role: 'Senior Director — Strategic Data Enablement',
    org: 'Novartis Oncology',
    desc: 'Led strategic data enablement across the oncology portfolio, building analytics capabilities and data-driven decision frameworks.',
  },
  {
    year: '2017 — 2018',
    role: 'Director — Omnichannel Insights',
    org: 'Novartis',
    desc: 'Pioneered omnichannel analytics and customer engagement insights for the commercial organization.',
  },
  {
    year: '2015 — 2017',
    role: 'Associate Director — Transformation Office',
    org: 'Novartis',
    desc: 'Drove organizational transformation initiatives, aligning strategy with operational excellence.',
  },
  {
    year: '2013 — 2015',
    role: 'Manager — Strategy & Ops Excellence',
    org: 'Novartis',
    desc: 'Joined Novartis post-MBA to lead strategy and operational excellence programs.',
  },
  {
    year: '2012 — 2013',
    role: 'MBA — Finance & Strategy',
    org: 'Indian School of Business',
    desc: 'Dean\'s List and Merit List honors. GMAT: 750. Finance and strategic leadership.',
  },
  {
    year: '2008 — 2012',
    role: 'Consulting Engineer',
    org: 'Cisco',
    desc: 'Built a strong technical foundation in networking and enterprise solutions at one of the world\'s leading tech companies.',
  },
  {
    year: '2004 — 2008',
    role: 'B.Tech, Computer Science & Technology',
    org: 'IIIT Hyderabad',
    desc: 'International Institute of Information Technology. Sports Captain, Football Captain, Member of Student Parliament. Dean\'s List and Merit List.',
  },
]

export default function Timeline() {
  return (
    <section id="journey" className="py-28 px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        <SectionReveal className="text-center mb-16">
          <span className="inline-block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold pb-3 border-b border-border-gold mb-4">
            Career Journey
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15]">
            From Engineering to
            <br />
            <span className="text-gold">Executive Leadership</span>
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.3), rgba(201,169,110,0.5), rgba(201,169,110,0.3), transparent)' }}
          />
          {/* Mobile left line */}
          <div
            className="absolute left-5 top-0 bottom-0 w-px md:hidden"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.3), rgba(201,169,110,0.5), rgba(201,169,110,0.3), transparent)' }}
          />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} isLeft={i % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ exp, index, isLeft }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
      className={`relative flex items-start md:items-center ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } pl-14 md:pl-0`}
    >
      <div className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
        <div className="p-6 glass rounded-2xl">
          <div className="font-serif text-[0.8rem] text-gold font-semibold mb-2">{exp.year}</div>
          <div className="text-[1rem] font-semibold leading-snug mb-1">{exp.role}</div>
          <div className="text-[0.82rem] text-teal-light font-medium mb-2">{exp.org}</div>
          <div className="text-[0.8rem] text-text-secondary leading-relaxed">{exp.desc}</div>
        </div>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.06 + 0.1 }}
        className="absolute left-5 md:left-1/2 top-7 md:top-1/2 w-3 h-3 -translate-x-1/2 md:-translate-y-1/2 rounded-full bg-bg border-2 border-gold z-10 hover:bg-gold hover:shadow-[0_0_20px_rgba(201,169,110,0.4)] transition-all"
      />

      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  )
}
