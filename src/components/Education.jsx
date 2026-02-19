import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import SectionReveal from './SectionReveal'

const schools = [
  {
    degree: 'Master of Business Administration',
    school: 'Indian School of Business',
    details: 'Finance & Strategy and Leadership\nGMAT: 750',
    badges: ["Dean's List", 'Merit Scholarship'],
    direction: 'left',
  },
  {
    degree: 'B.Tech, Computer Science',
    school: 'IIIT Hyderabad',
    details: 'International Institute of Information Technology\nStudent Parliament · Dean\'s List · Merit List',
    badges: ['Sports Captain', 'Football Captain'],
    direction: 'right',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="inline-block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold pb-3 border-b border-border-gold mb-4">
            Education
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15]">
            Academic <span className="text-gold">Foundation</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {schools.map((school, i) => (
            <EduCard key={i} school={school} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function EduCard({ school, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: school.direction === 'left' ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ type: 'spring', damping: 20, stiffness: 60, delay: index * 0.15 }}
      whileHover={{ y: -4, borderColor: 'rgba(201,169,110,0.25)' }}
      className="p-9 bg-bg-card border border-border rounded-2xl transition-colors"
    >
      <h3 className="font-serif text-[1.35rem] font-semibold mb-1">{school.degree}</h3>
      <p className="text-gold font-medium text-[0.9rem] mb-3">{school.school}</p>
      <p className="text-[0.82rem] text-text-secondary leading-[1.7] whitespace-pre-line mb-4">
        {school.details}
      </p>
      <div className="flex flex-wrap gap-2">
        {school.badges.map((badge) => (
          <span
            key={badge}
            className="inline-block px-3 py-1 bg-gold/10 border border-border-gold rounded-full text-[0.65rem] text-gold font-semibold"
          >
            {badge}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
