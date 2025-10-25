import React from 'react'
import { motion } from 'framer-motion'
import { User, Award, FlaskConical, Pill } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <User size={18} />
            </div>
            <h2 className="text-xl font-semibold text-emerald-900">About Me</h2>
          </div>
          <p className="mt-4 text-slate-600">
            I am a dedicated pharmacy student passionate about clinical therapeutics, pharmacovigilance, and patient education. My interests include antimicrobial stewardship, chronic disease management, and leveraging data to support safe medication practices. I enjoy translating research into accessible insights for patients and providers.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-800">
              <div className="font-medium">Research Interests</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Medication safety & pharmacovigilance</li>
                <li>Antibiotic stewardship</li>
                <li>Cardiometabolic therapeutics</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-emerald-800">
              <div className="font-medium">Career Goals</div>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                <li>Clinical pharmacy residency</li>
                <li>Evidence-based practice leadership</li>
                <li>Patient-centered education initiatives</li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white">
              <Award size={18} />
            </div>
            <h2 className="text-xl font-semibold text-emerald-900">Selected Achievements</h2>
          </div>
          <ul className="mt-4 space-y-4">
            {[
              {
                icon: <FlaskConical className="text-emerald-600" size={18} />,
                title: 'Undergraduate research poster',
                desc: 'Presented findings on adverse drug event reporting in ambulatory care.'
              },
              {
                icon: <Pill className="text-emerald-600" size={18} />,
                title: 'Medication safety project',
                desc: 'Led a quality improvement initiative to optimize high-alert medication labeling.'
              },
              {
                icon: <Award className="text-emerald-600" size={18} />,
                title: 'Dean’s list (multiple terms)',
                desc: 'Recognized for academic excellence and campus leadership.'
              }
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                <div className="mt-1">{a.icon}</div>
                <div>
                  <div className="font-medium text-emerald-900">{a.title}</div>
                  <p className="text-sm text-slate-600">{a.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
