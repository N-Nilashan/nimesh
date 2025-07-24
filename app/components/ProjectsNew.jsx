'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import Image from 'next/image'

// --- Project Data ---
const redesigns = [
  {
    id: 1,
    title: "Skylane Hero Section",
    description: "Rebuilt from a clean SaaS design shared on X. Focused on layout structure, attention hierarchy, and responsive execution.",
    date: "July 15, 2025",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/skylane.png",
    tweetUrl: "https://x.com/ShruPosts/status/1946260450687262851",
    liveLink: "https://skylane-hero.netlify.app"
  },
]

const extractTweetId = (url) => url.split('/').pop()

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
  },
]

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
  initial: { opacity: 1, y: 0, scale: 1 },
  hover: {
    opacity: 1,
    y: -5,
    scale: 1.02,
    transition: { duration: 0.3 }
  }
}

const ProjectsNew = () => {
  return (
    <div className="bg-black h-full" id="projects">

      {/* ─────────────────────────── UI Replicas Section ─────-───────────────────── */}
      <section className="px-4 md:px-12 mb-28" id="ui-replicas">
        <div className="text-center mb-12">
          <motion.h2
            className="text-white text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            UI Replicas From Design Inspiration
          </motion.h2>
          <motion.p
            className="text-gray-400 text-md max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Pixel-perfect recreations of unique designs shared online. Built to push frontend precision and interaction fidelity.
          </motion.p>
        </div>

        <div className="space-y-8 max-w-3xl mx-auto ">
          {redesigns.map((project) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-2 md:grid-cols-2  gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Grid 1: Project Image */}
              <motion.div
                className="relative h-48 rounded-2xl overflow-hidden border border-[#1f1f1f] shadow-lg"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 left-2 text-xs bg-white/10 px-2 py-1 rounded text-white backdrop-blur-sm">
                  Inspired by <a href={project.tweetUrl} className="underline" target="_blank">X Post</a>
                </div>
              </motion.div>

              {/* Grid 2: Project Details */}
              <motion.div
                className="bg-[#111] p-4 rounded-2xl border border-[#1f1f1f] shadow-lg text-white flex flex-col justify-between"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className=" text-gray-400 mb-3 line-clamp-3">{project.description}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs font-panchangMedium text-shadow-white">{project.date}</span>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-400 border border-blue-400 px-3 py-1 rounded-lg hover:bg-blue-400/10 flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Live Site <FaArrowUpRightFromSquare />
                  </motion.a>
                </div>
              </motion.div>

              {/* Grid 3: Twitter Embed */}
              <motion.div
                className="bg-[#111] p-4 rounded-2xl border border-[#1f1f1f] shadow-lg"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold text-white">Inspiration</h3>
                </div>
                <div className="h-36 overflow-y-auto">
                  <TwitterTweetEmbed tweetId={extractTweetId(project.tweetUrl) || ''} />
                </div>
              </motion.div>

              {/* Grid 4: Tech Stack */}
              <motion.div
                className="bg-[#0a0a0a] p-4 rounded-2xl border border-gray-900 text-white"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <h3 className="font-medium mb-3 text-white font-panchangMedium ">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      className="text-xs font-medium px-3 py-2 rounded-2xl border border-gray-900 bg-[#0a0a0a]"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "#111111",
                        transition: { duration: 0.2 }
                      }}
                      transition={{ duration: 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className='text-center'>
        <motion.button
          className='text-white font-medium border border-gray-900 py-2 px-4 rounded-2xl mb-6 mt-40'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Full-Stack Projects
        </motion.button>

        <motion.h1
          className="text-white text-2xl md:text-3xl font-bold leading-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          End-to-end builds with real-world impact. <br className="hidden md:block" />Front to back.
        </motion.h1>

        <motion.p
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          These full-stack projects go beyond the UI—handling logic, data, and performance across the stack. Built to scale, ship fast, and solve real problems.
        </motion.p>

        <div className='mt-14 px-4 max-w-6xl mx-auto'>
          {fullStackApps.map((project, index) => (
            <React.Fragment key={project.id}>
              <motion.div
                className={`flex flex-col md:flex-row gap-11 items-stretch justify-center mt-14 px-4 w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Text Content - will dictate the height */}
                <motion.div
                  className='text-white w-full md:w-[430px] order-2 md:order-none border-[#111] border-2 p-4 rounded-2xl flex flex-col'
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="text-left">
                    <motion.span
                      className='inline-block text-white font-medium border border-gray-900 py-2 px-4 rounded-2xl mb-6'
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>

                  <p className='font-panchangMedium text-left -mt-1 text-2xl'>{project.title}</p>
                  <p className='text-gray-300 text-left mt-2 mb-6'>{project.description}</p>

                  <div className='flex flex-wrap gap-3 mb-4'>
                    {project.techStack.map((tech, techIndex) => (
                      <motion.button
                        key={techIndex}
                        className='text-white font-medium border border-gray-900 py-2 px-4 rounded-2xl bg-[#0a0a0a]'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + techIndex * 0.1, duration: 0.5 }}
                      >
                        {tech}
                      </motion.button>
                    ))}
                  </div>

                  <div className='flex justify-between mt-auto'>
                    <span className='font-panchangMedium'>{project.date}</span>
                    <a href={project.link}>
                      <span className='flex items-center gap-3 cursor-pointer'>
                        Live Site <FaArrowUpRightFromSquare />
                      </span>
                    </a>
                  </div>
                </motion.div>

                {/* Image Container - will match text height */}
                <motion.div
                  className='bg-[#0a0a0a] w-full md:w-[440px] border-0 rounded-2xl overflow-hidden order-1 md:order-none flex'
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <div className='w-full h-full relative'>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className='object-cover rounded-xl'
                    />
                  </div>
                </motion.div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsNew
