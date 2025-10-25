import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, PenLine, Mail } from 'lucide-react'

const timeline = [
  {
    period: 'Year 1',
    title: 'Foundations in Pharmacy',
    details: 'Completed core coursework in pharmaceutics, biochemistry, and patient communication.'
  },
  {
    period: 'Year 2',
    title: 'Clinical Therapeutics I',
    details: 'Focused on cardiovascular and endocrine modules with case-based learning.'
  },
  {
    period: 'Year 3',
    title: 'Experiential Rotations',
    details: 'Ambulatory care and hospital pharmacy rotations emphasizing medication safety.'
  }
]

const posts = [
  {
    title: '5 ways to talk about statins with patients',
    tag: 'Patient Education',
    excerpt: 'Simple, respectful conversations that improve adherence and outcomes.'
  },
  {
    title: 'Antibiotic stewardship in the community setting',
    tag: 'Clinical Practice',
    excerpt: 'How pharmacists can curb resistance while supporting patient care.'
  },
  {
    title: 'Reading clinical trials: a quick checklist',
    tag: 'Research',
    excerpt: 'A concise framework for evaluating evidence at the point of care.'
  }
]

export default function JourneyBlogContact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div id="journey" className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
          <GraduationCap size={18} />
        </div>
        <h2 className="text-xl font-semibold text-emerald-900">Academic Journey</h2>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          {timeline.map((t, idx) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="relative rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm"
            >
              <div className="mb-1 inline-flex items-center gap-2 text-xs font-medium text-emerald-700">
                <Calendar size={14} /> {t.period}
              </div>
              <div className="text-emerald-900 font-medium">{t.title}</div>
              <p className="text-sm text-slate-600">{t.details}</p>
            </motion.div>
          ))}
        </div>

        <div id="blog" className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <PenLine size={18} />
            </div>
            <h3 className="text-lg font-semibold text-emerald-900">Latest from the Blog</h3>
          </div>
          <div className="grid gap-4">
            {posts.map((p, idx) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5 hover:bg-emerald-50"
              >
                <div className="text-xs font-medium text-emerald-700">{p.tag}</div>
                <h4 className="mt-1 font-medium text-emerald-900">{p.title}</h4>
                <p className="text-sm text-slate-600">{p.excerpt}</p>
                <a href="#contact" className="mt-2 inline-block text-sm font-medium text-emerald-700 underline-offset-2 hover:underline">Discuss this</a>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="mt-12 rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
            <Mail size={18} />
          </div>
          <h3 className="text-lg font-semibold text-emerald-900">Contact Me</h3>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="text-sm text-slate-600">Name</label>
            <input
              type="text"
              required
              placeholder="Your full name"
              className="mt-1 w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-slate-800 placeholder-slate-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="text-sm text-slate-600">Email</label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-slate-800 placeholder-slate-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="text-sm text-slate-600">Message</label>
            <textarea
              rows={4}
              required
              placeholder="Tell me about your project, research, or opportunity..."
              className="mt-1 w-full rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-slate-800 placeholder-slate-400 outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100"
            />
          </div>
          <div className="sm:col-span-2">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
