import React from 'react'
import { motion } from 'framer-motion'
import { Pill, Stethoscope, GraduationCap, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-emerald-200 opacity-30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-100 opacity-50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-6 pt-6">
        <nav className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-white/70 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white shadow">
              <Pill size={18} />
            </div>
            <span className="font-semibold tracking-tight text-emerald-900">Pharmfolio</span>
          </div>
          <div className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-emerald-700">About</a>
            <a href="#skills" className="hover:text-emerald-700">Skills</a>
            <a href="#journey" className="hover:text-emerald-700">Journey</a>
            <a href="#blog" className="hover:text-emerald-700">Blog</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </div>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
            Get in touch
            <ArrowRight size={16} />
          </a>
        </nav>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700">
              <GraduationCap size={16} />
              <span className="text-xs font-medium">Pharmacy Student Portfolio</span>
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
              Advancing patient care through science, compassion, and innovation
            </h1>
            <p className="mt-4 text-slate-600">
              I’m a pharmacy student focused on clinical pharmacy, evidence-based research, and medication safety. Explore my academic journey, projects, and goals as I prepare for a career improving health outcomes.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#blog" className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-800 hover:border-emerald-300 hover:bg-emerald-50">
                Read the blog
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700">
                Contact me
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="inline-flex items-center gap-2"><Stethoscope size={18} className="text-emerald-600"/> Clinical focus</div>
              <div className="inline-flex items-center gap-2"><Pill size={18} className="text-emerald-600"/> Medication safety</div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative mx-auto aspect-square w-full max-w-sm rounded-3xl border border-emerald-100 bg-white p-6 shadow-lg">
              <div className="absolute -left-6 -top-6 h-16 w-16 rounded-2xl bg-emerald-100" />
              <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-2xl bg-emerald-200" />
              <div className="relative z-10 flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-50 to-white">
                <Stethoscope size={92} className="text-emerald-600" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
