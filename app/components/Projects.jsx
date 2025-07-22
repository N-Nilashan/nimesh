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
    description: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects, showcasing advanced front-end development and interactive extraction.",
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
  initial: { opacity: 1, y: 0 },
  hover: {
    opacity: 1,
    y: -5,
    transition: { duration: 0.3 }
  }
}

const FullStackBentoGrid = () => {
  return (
    <motion.section variants={sectionVariants} className="container mb-16 ">
      <h2 className="text-4xl font-bold text-center text-[var(--color-primary)] mb-8 mt-40">
        Full-Stack Applications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fullStackApps.map((project) => (
          <motion.div
            key={project.id}
            className="relative h-80 rounded-xl overflow-hidden bg-[var(--color-background)] border border-[var(--color-background-secondary)]"
            initial="initial"
            whileHover="hover"
            variants={cardVariants}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <motion.div
              className="absolute inset-0 p-6 flex flex-col bg-[var(--color-secondary)]/80 text-white"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="text-sm px-2 py-1 bg-[var(--color-background)]/20 rounded-full">
                  {project.category}
                </span>
              </div>

              <p className="text-mdI help brands and startups stand out online by creating fast, animated websites with modern, high-conversion front-end design. With over two years of experience, I blend technical precision with creative design to craft engaging, performant UI/UX. My focus on sleek micro-interactions and functional aesthetics has driven client conversions by up to 30%, and I’m passionate about pushing the boundaries of web design to deliver exceptional digital experiences. mb-4 line-clamp-3">{project.description}</p>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-[var(--color-background)]/20 rounded-full"
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
                    className="text-sm px-3 py-2 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
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
    }, 3000)
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
    <motion.section variants={sectionVariants} className="container mb-16">
      <h2 className="text-4xl font-bold text-center text-[var(--color-primary)] mb-8">
        Landing Pages
      </h2>

      <div className="relative h-[400px]">
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-background)] rounded-full p-2 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <svg
            className="w-5 h-5 text-[var(--color-secondary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-[var(--color-background)] rounded-full p-2 shadow-md hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)]"
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <svg
            className="w-5 h-5 text-[var(--color-secondary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
          {landingPages.map((project, index) => (
            <div
              key={project.id}
              className="absolute transition-all duration-500 ease-in-out"
              style={getCardStyle(index, currentIndex, landingPages.length)}
            >
              <div className="w-80 bg-[var(--color-background)] border border-[var(--color-background-secondary)] rounded-xl shadow-md hover:shadow-lg">
                <div className="overflow-hidden rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={320}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h5 className="mb-2 text-xl font-bold text-[var(--color-secondary)]">
                    {project.title}
                  </h5>
                  <p className="mb-3 text-sm text-[var(--color-secondary)]/80 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.slice(0, 6).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-[var(--color-background-secondary)]/50 text-[var(--color-secondary)] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="px-2 py-1 text-xs bg-[var(--color-background-secondary)]/50 text-[var(--color-secondary)] rounded-full">
                        +{project.techStack.length - 6}
                      </span>
                    )}
                  </div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-2 text-sm text-white bg-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/90"
                  >
                    View Project
                    <svg
                      className="w-3.5 h-3.5 ml-2"
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
      className="py-16"
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
      transition: 'transform 0.5s ease',
    }
  }
  if (abs === 1) {
    const rotateY = diff < 0 ? 'rotateY(10deg)' : 'rotateY(-10deg)'
    return {
      transform: `translateX(${diff > 0 ? '50%' : '-50%'}) scale(0.85) ${rotateY}`,
      opacity: 0.8,
      zIndex: 20,
      transition: 'transform 0.5s ease',
    }
  }
  if (abs === 2) {
    const rotateY = diff < 0 ? 'rotateY(10deg)' : 'rotateY(-10deg)'
    return {
      transform: `translateX(${diff > 0 ? '100%' : '-100%'}) scale(0.7) ${rotateY}`,
      opacity: 0.5,
      zIndex: 10,
      transition: 'transform 0.5s ease',
    }
  }
  return {
    transform: `translateX(${diff > 0 ? '150%' : '-150%'}) scale(0.6) rotateY(0deg)`,
    opacity: 0,
    zIndex: 0,
    transition: 'transform 0.5s ease',
  }
}
