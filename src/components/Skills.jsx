import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, BookOpen, Syringe, Microscope, FileSearch, Users } from 'lucide-react'

const skills = [
  { icon: BookOpen, title: 'Therapeutics', items: ['Cardiology', 'Infectious Disease', 'Endocrinology'] },
  { icon: Syringe, title: 'Immunizations', items: ['ACIP guidelines', 'Patient screening', 'Aseptic technique'] },
  { icon: Microscope, title: 'Research', items: ['Study appraisal', 'Data analysis', 'Literature reviews'] },
  { icon: FileSearch, title: 'Medication Safety', items: ['ADR reporting', 'Medication reconciliation', 'High-alert meds'] },
  { icon: Users, title: 'Patient Counseling', items: ['Motivational interviewing', 'Health literacy', 'Adherence'] },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
          <CheckCircle2 size={18} />
        </div>
        <h2 className="text-xl font-semibold text-emerald-900">Skills</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                <s.icon size={18} />
              </div>
              <div className="font-medium text-emerald-900">{s.title}</div>
            </div>
            <ul className="mt-4 space-y-1 text-sm text-slate-600">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  {i}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
