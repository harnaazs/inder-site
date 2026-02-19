import { motion } from 'motion/react'
import { useInView } from 'react-intersection-observer'
import SectionReveal from './SectionReveal'

const posts = [
  {
    tag: 'Data Strategy',
    title: 'The Future of Commercial Data in Cell Therapy',
    excerpt: 'How next-generation data platforms are reshaping patient access and commercial operations in the rapidly evolving CAR-T landscape.',
    date: 'Jan 2026',
    readTime: '6 min read',
    featured: true,
  },
  {
    tag: 'Digital Innovation',
    title: 'From CRM to Intelligent Engagement',
    excerpt: 'Why traditional CRM is dead — and how AI-powered omnichannel platforms are redefining how pharma connects with HCPs.',
    date: 'Dec 2025',
    readTime: '5 min read',
  },
  {
    tag: 'Leadership',
    title: 'Building Data Teams That Actually Ship',
    excerpt: 'Lessons from scaling cross-functional data and analytics teams across two Fortune 500 pharma companies.',
    date: 'Nov 2025',
    readTime: '4 min read',
  },
  {
    tag: 'Analytics',
    title: 'Real-World Evidence Meets Commercial Strategy',
    excerpt: 'Bridging the gap between clinical data and commercial decision-making in oncology.',
    date: 'Oct 2025',
    readTime: '5 min read',
  },
]

export default function Insights() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <section id="insights" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <span className="inline-block text-[0.6rem] font-semibold tracking-[0.2em] uppercase text-gold pb-3 border-b border-border-gold mb-4">
            Insights
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.15]">
            Thoughts &amp; <span className="text-gold">Perspectives</span>
          </h2>
        </SectionReveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          {/* Featured post — large card */}
          <FeaturedCard post={featured} />

          {/* Stacked smaller cards */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <ArticleCard key={i} post={post} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ post }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group relative glass rounded-2xl overflow-hidden flex flex-col justify-between lg:row-span-1 min-h-[400px]"
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] via-transparent to-teal/[0.02] pointer-events-none" />

      <div className="relative p-8 md:p-10 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-gold/10 border border-border-gold rounded-full text-[0.6rem] font-semibold text-gold uppercase tracking-wider">
              {post.tag}
            </span>
            <span className="px-3 py-1 bg-gold/5 border border-border-gold/50 rounded-full text-[0.6rem] font-semibold text-gold/70 uppercase tracking-wider">
              Featured
            </span>
          </div>

          <h3 className="font-serif text-[clamp(1.5rem,3vw,2rem)] font-semibold leading-[1.2] mb-4 group-hover:text-gold transition-colors duration-400">
            {post.title}
          </h3>

          <p className="text-text-secondary text-[0.95rem] leading-[1.8] max-w-lg">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
          <div className="flex items-center gap-4 text-[0.75rem] text-text-muted">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gold/40" />
            <span>{post.readTime}</span>
          </div>
          <span className="text-gold text-[0.75rem] font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
            Read
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </span>
        </div>
      </div>
    </motion.article>
  )
}

function ArticleCard({ post, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 + index * 0.1 }}
      className="group glass rounded-2xl p-6 md:p-7 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-gold/10 border border-border-gold rounded-full text-[0.55rem] font-semibold text-gold uppercase tracking-wider">
            {post.tag}
          </span>
        </div>

        <h3 className="font-serif text-[1.1rem] font-semibold leading-[1.3] mb-2 group-hover:text-gold transition-colors duration-400">
          {post.title}
        </h3>

        <p className="text-text-secondary text-[0.82rem] leading-[1.7]">
          {post.excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
        <div className="flex items-center gap-3 text-[0.7rem] text-text-muted">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gold/40" />
          <span>{post.readTime}</span>
        </div>
        <span className="text-gold text-[0.7rem] font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
          Read
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </span>
      </div>
    </motion.article>
  )
}
