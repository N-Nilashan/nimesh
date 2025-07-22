'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import CursorGlow from './components/CursorGlow'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import sphereAnimation from '@/public/sphere-animation.json'
import Lottie from 'lottie-react'

const HomeSection = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center py-16">

      <motion.div
        className="flex items-center justify-center -mt-28"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Lottie
          animationData={sphereAnimation}
          loop
          autoplay
          className="w-[760px] h-[760px] md:w-[720px] md:h-[720px] -mb-8 "
        />
      </motion.div>

      <motion.h1
        key="home"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl sm:text-4xl font-bold leading-tight tracking-tight text-gray-900 whitespace-nowrap flex justify-between w-full max-w-6xl px-6 "
      >
        <span>Fast. <br />Animated.</span>
        <span className="text-gray-900 font-bold">Websites<br /> that Convert.</span>
      </motion.h1>
  </section>
)

export default function Page() {
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  // Smooth scroll spring animation
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const navigateTo = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="relative bg-gradient-to-br from-[#f5f5f5] via-[#4a4848] to-[#9ca3af] font-panchangRegular">
      <CursorGlow />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-white/10 backdrop-blur-md border-b border-gray-300/30">
        <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center">
          <motion.h1
            className="font-semibold text-2xl text-gray-800"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            NIMESH NILASHAN
          </motion.h1>

          <div className="flex gap-6 text-gray-800 font-medium text-lg">
            {[
              { name: 'home', ref: homeRef },
              { name: 'projects', ref: projectsRef },
              { name: 'about', ref: aboutRef },
              { name: 'contact', ref: contactRef },
            ].map((section) => (
              <motion.button
                key={section.name}
                onClick={() => navigateTo(section.ref)}
                whileHover={{ scale: 1.1, x: 2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black cursor-pointer rounded-sm capitalize"
              >
                {section.name}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#4fd1c5] z-30 origin-left"
        style={{ scaleX }}
      />

      {/* Background Blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="fixed -top-32 -left-32 w-[600px] h-[600px] bg-white/30 rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* Sections */}
      <div className="relative z-10 space-y-16">
        <div ref={homeRef} className="pt-24">
          <HomeSection />
        </div>
        <div ref={projectsRef} className="min-h-screen py-16 px-6">
          <Projects />
        </div>
        <div ref={aboutRef} className="min-h-screen py-16 px-6">
          <About />
        </div>
        <div ref={contactRef} className="min-h-screen py-16 px-6">
          <Contact />
        </div>
      </div>
    </div>
  )
}
