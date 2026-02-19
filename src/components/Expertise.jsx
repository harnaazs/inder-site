import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import SectionReveal from './SectionReveal'

const expertise = [
  {
    num: '01',
    name: 'Commercial Data Strategy',
    desc: 'Architecting enterprise-wide data platforms that power commercial decision-making across global pharmaceutical markets.',
  },
  {
    num: '02',
    name: 'Digital Innovation',
    desc: 'Leading next-generation digital transformation in life sciences — from CRM and omnichannel to AI-powered customer engagement.',
  },
  {
    num: '03',
    name: 'Cell Therapy & Oncology',
    desc: 'Driving commercial operations in one of medicine\'s most promising frontiers — CAR-T cell therapy for cancer treatment.',
  },
  {
    num: '04',
    name: 'Analytics & Insights',
    desc: 'Building forecasting, market access insights, and business intelligence capabilities that translate data into actionable strategy.',
  },
  {
    num: '05',
    name: 'Team Building & Leadership',
    desc: 'Cultivating high-performing, cross-functional teams across data science, engineering, analytics, and commercial operations.',
  },
  {
    num: '06',
    name: 'Strategic Transformation',
    desc: 'Driving large-scale organizational change — from Novartis\'s Transformation Office to Kite\'s global data & digital evolution.',
  },
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="inline-block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold pb-3 border-b border-border-gold mb-4">
            Expertise
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15]">
            Domains of <span className="text-gold">Impact</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {expertise.map((item, i) => (
            <ExpertiseCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExpertiseCard({ item, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
      className="group relative p-8 glass rounded-2xl overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="font-serif text-5xl font-semibold text-gold/50 leading-none mb-4">
        {item.num}
      </div>
      <h3 className="text-[1.05rem] font-semibold mb-3">{item.name}</h3>
      <p className="text-[0.82rem] text-text-secondary leading-[1.7]">{item.desc}</p>
    </motion.div>
  )
}
