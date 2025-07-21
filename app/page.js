'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import CursorGlow from './components/CursorGlow'
import TransitionOverlay from './components/TransitionOverlay'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const testimonials = [
  {
    id: 1,
    content: "Nimesh built our site in half the expected time with perfect animations that increased our conversions by 30%.",
    name: "Sarah K.",
    role: "Design Director",
    image: "/hemant.jpg"
  },
  {
    id: 2,
    content: "The attention to detail in the micro-interactions made all the difference for our brand perception.",
    name: "James L.",
    role: "Brand Manager",
    image: "/hemant.jpg"
  },
  {
    id: 3,
    content: "Finally a developer who understands both technical excellence and aesthetic sensibility.",
    name: "Priya M.",
    role: "Creative Lead",
    image: "/hemant.jpg"
  },
  {
    id: 4,
    content: "I’ve never worked with someone this fast and accurate. Highly recommended for startup founders.",
    name: "Alex R.",
    role: "Startup CEO",
    image: "/hemant.jpg"
  },
  {
    id: 5,
    content: "The perfect blend of art and code. Our site became the benchmark in our niche.",
    name: "Ravi T.",
    role: "Product Designer",
    image: "/hemant.jpg"
  }
]

const TestimonialCarousel = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    let animationFrameId
    const scroll = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 0.5
        if (
          scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
          scrollRef.current.scrollWidth
        ) {
          scrollRef.current.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }
    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Left and right fade overlays */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-[#f5f5f5] via-[#f5f5f5]/80 to-transparent z-10" />

      <div
        ref={scrollRef}
        className="flex gap-6 w-full overflow-x-auto scroll-smooth px-28"
        style={{
          scrollbarWidth: 'none', // For Firefox
          msOverflowStyle: 'none', // For IE and Edge
        }}
      >
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="min-w-[300px] max-w-[300px] flex-shrink-0 bg-white/60 backdrop-blur-md border border-gray-300 rounded-xl p-4 shadow-md"
          >
            <div className="flex items-center gap-3 mb-2">
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full border border-white/70 object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                <p className="text-md text-gray-600 font-inter">{t.role}</p>
              </div>
            </div>

            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < 4 ? 'fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>

            <p className="text-lg italic text-gray-700 font-inter">"{t.content}"</p>
          </div>
        ))}
      </div>

      {/* Hide scrollbar for WebKit browsers */}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

const HomeSection = () => (
  <div className="relative w-full max-w-full px-10 ">


    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-16"
    >
      <TestimonialCarousel />
    </motion.div>

    <motion.h1
      key="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-4xl sm:text-7xl font-bold leading-tight tracking-tight text-gray-900 whitespace-nowrap"
    >
      Fast. Animated.
      <br />
      <span className="text-gray-600 font-normal">Websites that Convert.</span>
    </motion.h1>
  </div>
)

const sections = {
  home: <HomeSection />,
  about: <About />,
  projects: <Projects />,
  contact: <Contact />
}

export default function Page() {
  const [currentSection, setCurrentSection] = React.useState('home')
  const [showOverlay, setShowOverlay] = React.useState(false)

  const navigateTo = (section) => {
    if (section === currentSection) return
    setShowOverlay(true)
    setTimeout(() => {
      setCurrentSection(section)
      setShowOverlay(false)
    }, 700)
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
      <div className="absolute bottom-10 left-10 right-10 z-10">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
        >
          {sections[currentSection]}
        </motion.div>
      </div>

      {/* Transition Overlay */}
      <TransitionOverlay isVisible={showOverlay} />
    </div>
  )
}
