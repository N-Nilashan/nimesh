'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import CursorGlow from './components/CursorGlow'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Lottie from 'lottie-react'
import sphereAnimation from '@/public/sphere-animation.json'

const HomeSection = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center items-center py-16">
    <div className="container">
      <motion.div
        className="flex justify-center -mt-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Lottie
          animationData={sphereAnimation}
          loop
          autoplay
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
        />
      </motion.div>

      <motion.h1
        key="home"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-center text-[var(--color-secondary)]"
      >
        Fast. Animated. Websites that Convert.
      </motion.h1>
    </div>
  </section>
)

export default function Page() {
  const homeRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

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
    <div className="relative">
      <CursorGlow />

      <nav className="fixed top-0 left-0 right-0 z-20 bg-[var(--color-background)]/80 backdrop-blur-md border-b border-[var(--color-background-secondary)] h-[50px] flex items-center">
        <div className="container py-4 flex justify-between items-center">
          <motion.h1
            className="text-xl font-semibold text-[var(--color-secondary)]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            NIMESH NILASHAN
          </motion.h1>

          <div className="flex gap-6 text-[var(--color-secondary)] font-medium text-lg">
            {[
              { name: 'home', ref: homeRef },
              { name: 'projects', ref: projectsRef },
              { name: 'about', ref: aboutRef },
              { name: 'contact', ref: contactRef },
            ].map((section) => (
              <motion.button
                key={section.name}
                onClick={() => navigateTo(section.ref)}
                whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] capitalize"
              >
                {section.name}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-accent)] z-30 origin-left"
        style={{ scaleX }}
      />

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="fixed -top-32 -left-32 w-[400px] h-[400px] bg-[var(--color-background-secondary)]/30 rounded-full blur-3xl pointer-events-none z-0"
      />

      <div className="space-y-16">
        <div ref={homeRef}>
          <HomeSection />
        </div>
        <div ref={projectsRef} className="py-16">
          <Projects />
        </div>
        <div ref={aboutRef} className="py-16">
          <About />
        </div>
        <div ref={contactRef} className="py-16">
          <Contact />
        </div>
      </div>
    </div>
  )
}
