import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import JourneyBlogContact from './components/JourneyBlogContact'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-slate-800">
      <Hero />
      <main className="relative">
        <About />
        <Skills />
        <JourneyBlogContact />
      </main>
      <footer className="border-t border-emerald-100 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Pharmacy Portfolio</p>
          <nav className="flex items-center gap-5">
            <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-700 transition-colors">Skills</a>
            <a href="#journey" className="hover:text-emerald-700 transition-colors">Journey</a>
            <a href="#blog" className="hover:text-emerald-700 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
