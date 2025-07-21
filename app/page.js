'use client'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import CursorGlow from './components/CursorGlow'
import TransitionOverlay from './components/TransitionOverlay'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const sections = {
  home: (
    <motion.h1
      key="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-7xl font-bold leading-tight tracking-tight text-gray-900  whitespace-nowrap "
    >
      Fast. Animated.
      <br />
      <span className="text-gray-600 font-normal">Websites that Convert.</span>
    </motion.h1>
  ),
  about: <About />,
  projects: <Projects />,
  contact: <Contact />,
}

export default function Page() {
  const [currentSection, setCurrentSection] = useState('home')
  const [showOverlay, setShowOverlay] = useState(false)

  const navigateTo = (section) => {
    if (section === currentSection) return

    setShowOverlay(true)
    setTimeout(() => {
      setCurrentSection(section)
      setShowOverlay(false)
    }, 700) // matches overlay fade duration
  }

  return (
    <div className="relative h-screen bg-gradient-to-br from-[#f5f5f5] via-[#d4d4d4] to-[#9ca3af] overflow-hidden font-panchangRegular">
      <CursorGlow />

      {/* Navigation */}
      <nav className="absolute top-8 right-10 flex gap-6 text-gray-800 font-medium text-lg z-20">
        {['home', 'about', 'projects', 'contact'].map((section) => (
          <motion.button
            key={section}
            onClick={() => navigateTo(section)}
            whileHover={{ scale: 1.1, x: 2 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer rounded-sm ${
              currentSection === section ? 'font-bold underline' : ''
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </nav>

      {/* Background Blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-white/30 rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* Section Content */}
      <div className="absolute bottom-10 left-10 max-w-xl z-10">
        <AnimatePresence mode="wait">{sections[currentSection]}</AnimatePresence>
      </div>

      {/* Transition Overlay */}
      <TransitionOverlay isVisible={showOverlay} />
    </div>
  )
}
