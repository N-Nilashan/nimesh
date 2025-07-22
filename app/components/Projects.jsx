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
    category: "AI & Productivity",
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

const ProjectCard = ({ project }) => (
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
      <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
        <span>{project.date}</span>
        <span className="px-2 py-1 bg-gray-100 rounded-full">{project.category}</span>
      </div>
      <p className="mb-3 font-normal text-gray-700 text-sm line-clamp-2 font-inter">
        {project.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-1">
        {project.techStack.slice(0, 3).map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-2 py-1 text-xs bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full border border-purple-200"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>
      <a
        href={project.liveUrl || project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-purple-300 transition-all duration-300 transform hover:scale-105"
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
)

const getCardStyle = (index, currentIndex, total) => {
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

const LandingPagesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-slide interval, runs only once on mount
  useEffect(() => {
    const interval = setInterval(() => {
      // Directly advance slide ignoring isTransitioning for smooth automation
      setCurrentIndex((prev) => (prev + 1) % landingPages.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Manual controls respect isTransitioning to prevent rapid clicks
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
      <div className="relative mt-[60px] mx-auto max-w-full sm:max-w-4xl md:max-w-6xl h-[32rem] sm:min-h-[40rem]">
        <div className="text-center mb-8">
          <p
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text tracking-tight"
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
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

const FullStackAppsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-slide interval, runs only once on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % fullStackApps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Manual controls respect isTransitioning
  const nextSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev + 1) % fullStackApps.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const prevSlide = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prev) => (prev - 1 + fullStackApps.length) % fullStackApps.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }

  return (
    <motion.section variants={sectionVariants} className="relative z-10 mb-32 -mt-[50px]">
      <div className="relative mt-[60px] mx-auto max-w-full sm:max-w-4xl md:max-w-6xl h-[32rem] sm:min-h-[40rem]">
        <div className="text-center mb-8">
          <p
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text tracking-tight"
            style={{ fontFamily: 'var(--font-panchangMedium)' }}
          >
            Full-Stack Applications
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
          {fullStackApps.map((project, index) => (
            <div
              key={project.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={getCardStyle(index, currentIndex, fullStackApps.length)}
            >
              <ProjectCard project={project} />
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
      <FullStackAppsCarousel />
    </motion.div>
  )
}

export default Projects
