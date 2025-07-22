'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const landingPages = [
  {
    id: 1,
    title: 'SkyLane Hero',
    image: '/projects/skylane.png',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://skylane-hero.netlify.app/',
    description: 'A fully responsive e-commerce platform with seamless payment integration.',
    date: 'June 15, 2024',
    category: 'Landing Page'
  },
  {
    id: 2,
    title: 'SayFully Hero',
    image: '/projects/sayfully.png',
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Next.js'],
    liveUrl: 'https://sayfully-hero.netlify.app/',
    description: 'A dynamic portfolio site with engaging animations and modern design.',
    date: 'May 22, 2024',
    category: 'Landing Page'
  },
  {
    id: 3,
    title: 'PulseAI Hero',
    image: '/projects/pulse.png',
    techStack: ['Next.js', 'Framer Motion', 'ThreeJS', 'Tailwind CSS', 'React'],
    liveUrl: 'https://pulseai-hero.netlify.app/',
    description: 'A collaborative task management tool with real-time updates.',
    date: 'April 30, 2024',
    category: 'Landing Page'
  }
]

const fullStackApps = [
  {
    id: 1,
    title: "ChoosyAI",
    description: "Chrome extension that generates intelligent, context-aware LinkedIn replies using AI. Users connect their OpenRouter API key to access various AI models and create professional responses with customizable tones.",
    image: "/choosy.png",
    date: "May 10, 2025",
    techStack: ["Next.js", "OpenRouter", "Supabase", "AI Automation"],
    category: "AI Automation",
    link: "https://choosy-ai.vercel.app"
  },
  {
    id: 2,
    title: "AI-Powered Note Taking App",
    description: "Note organization system that allows users to store and categorize their thoughts effortlessly. Leveraging the Gemini API, it provides intelligent summarization capabilities.",
    image: "/noteapp.png",
    date: "April 4, 2025",
    techStack: ["Next.js", "TailwindCSS", "Gemini API", "MongoDB"],
    category: "Automation",
    link: "https://note-taker-ai.vercel.app/"
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "SpendSense is a full-stack expense tracker built with Next.js, Tailwind CSS, and Neon Database, showcasing expertise in full-stack development and secure financial app development.",
    image: "/expense.png",
    date: "February 28, 2025",
    techStack: ["Next.js", "Tailwind CSS", "Neon Database", "React"],
    category: "Personal Tool",
    link: "https://spend-sense-eight.vercel.app/"
  },
  {
    id: 4,
    title: "Apple Site Clone",
    description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects, showcasing advanced front-end development and interactive design skills.",
    image: "/apple.png",
    date: "November 20, 2024",
    techStack: ["Next.js", "Three.js", "GSAP", "TailwindCSS"],
    category: "Cloned Project",
    link: "https://apple-clone-site-phi.vercel.app/"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const cardVariants = {
  initial: {
    opacity: 1,
    y: 0
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const imageVariants = {
  initial: {
    opacity: 1,
    scale: 1
  },
  hover: {
    opacity: 0,
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  }
}

const contentVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
}

const FullStackBentoGrid = () => {
  return (
    <motion.section variants={sectionVariants} className="relative z-10 mb-32">
      <div className="text-center mb-12">
        <p
          className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900/90 to-amber-950 bg-clip-text text-transparent tracking-tight"
          style={{ fontFamily: 'var(--font-panchangMedium)' }}
        >
          Full-Stack Applications
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 -mb-[130px] gap-4 max-w-6xl mx-auto">
        {fullStackApps.map((project) => (
          <motion.div
            key={project.id}
            className="relative h-80 rounded-xl overflow-hidden group"
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
          >
            {/* Grain texture overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmZUNvbXBvc2l0ZSBpZD0ibm9pc2UiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIG9wZXJhdG9yPSJvdmVybGF5IiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC4wNSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIxIDAgMCAwIDAgMCAxIDAgMCAwIDAgMCAxIDAgMCAwIDAgMCAwLjAzIDAiLz48L2ZlQ29tcG9zaXRlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjbmdpbnNlKSIgb3BhY2l0eT0iMC4wMiIvPjwvc3ZnPg==')] opacity-10 pointer-events-none z-10" />

            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 animate-gradient-shift bg-[length:200%_200%]"></div>
            </div>

            {/* Main card content */}
            <div className="relative h-full w-full bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Image Cover */}
              <motion.div
                className="absolute inset-0 w-full h-full"
                variants={imageVariants}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Content */}
              <motion.div
                className="absolute inset-0 p-6 flex flex-col bg-gradient-to-br from-gray-900/90 to-amber-800 text-white"
                variants={contentVariants}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className="text-xl font-bold"
                    style={{ fontFamily: 'var(--font-panchangMedium)' }}
                  >
                    {project.title}
                  </h3>
                  <span className="text-sm px-2 font-inter py-1 bg-white/20 rounded-full">
                    {project.category}
                  </span>
                </div>

                <p className="text-md mb-4 line-clamp-3 font-inter">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-white/20 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-xs opacity-80">{project.date}</span>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium px-3 py-2 bg-white text-purple-800 rounded-lg hover:bg-white/90 transition-colors"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Dynamic shadow */}
            <div className="absolute inset-0 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 -z-10" style={{
              background: 'radial-gradient(at center center, rgba(120, 113, 255, 0.3) 0%, rgba(0, 0, 0, 0) 70%)',
              transform: 'translateZ(0)'
            }}></div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

const LandingPagesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % landingPages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % landingPages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + landingPages.length) % landingPages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <motion.section variants={sectionVariants} className="relative z-10 mb-32 -mt-[50px]">
      <div className="relative mt-[10px] mx-auto max-w-full sm:max-w-4xl md:max-w-6xl h-[32rem] sm:min-h-[40rem]">
        <div className="text-center mb-8">
           <p
          className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900/90 to-amber-950 bg-clip-text text-transparent tracking-tight"
          style={{ fontFamily: 'var(--font-panchangMedium)' }}
        >
          Landing Pages
        </p>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-40 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500"
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl p-4 sm:p-8"
          style={{ perspective: '1000px' }}
        >
          {landingPages.map((project, index) => (
            <div
              key={project.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={getCardStyle(index, currentIndex, landingPages.length)}
            >
              <div className="w-72 sm:w-80 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={160}
                    className="w-full h-36 sm:h-40 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h5
                    className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900"
                    style={{ fontFamily: 'var(--font-panchangMedium)' }}
                  >
                    {project.title}
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 text-sm line-clamp-2 font-inter">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-1">
                    {project.techStack.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-gradient-to-r from-amber-50 to-gray-100 text-amber-800 rounded-full border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-amber-800 to-gray-900/90 rounded-lg hover:from-amber-600 hover:to-gray-600 focus:ring-4 focus:outline-none focus:ring-purple-300 transition-all duration-300 transform hover:scale-105"
                  >
                    View Project
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const Projects = () => {
  return (
    <motion.div
      key="projects"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-gray-900 max-w-7xl mx-auto px-6 py-16 h-auto"
    >
      <LandingPagesCarousel />
      <FullStackBentoGrid />
    </motion.div>
  )
}

export default Projects

function getCardStyle(index, currentIndex, total) {
  let diff = index - currentIndex
  if (diff < -Math.floor(total / 2)) diff += total
  if (diff > Math.floor(total / 2)) diff -= total

  const abs = Math.abs(diff)
  if (abs === 0) {
    return {
      transform: 'translateX(0) scale(1) rotateY(0deg)',
      opacity: 1,
      zIndex: 30,
      filter: 'none',
      transition: 'transform 0.5s ease',
      transformStyle: 'preserve-3d',
    }
  }
  if (abs === 1) {
    const rotateY = diff < 0 ? 'rotateY(15deg)' : 'rotateY(-15deg)'
    return {
      transform: `translateX(${diff > 0 ? '80%' : '-80%'}) scale(0.8) ${rotateY}`,
      opacity: 0.7,
      zIndex: 20,
      filter: 'blur(1px)',
      transition: 'transform 0.5s ease',
      transformStyle: 'preserve-3d',
    }
  }
  if (abs === 2) {
    const rotateY = diff < 0 ? 'rotateY(15deg)' : 'rotateY(-15deg)'
    return {
      transform: `translateX(${diff > 0 ? '140%' : '-140%'}) scale(0.65) ${rotateY}`,
      opacity: 0.4,
      zIndex: 10,
      filter: 'blur(2px)',
      transition: 'transform 0.5s ease',
      transformStyle: 'preserve-3d',
    }
  }
  return {
    transform: `translateX(${diff > 0 ? '200%' : '-200%'}) scale(0.5) rotateY(0deg)`,
    opacity: 0,
    zIndex: 0,
    filter: 'blur(3px)',
    transition: 'transform 0.5s ease',
    transformStyle: 'preserve-3d',
  }
}
