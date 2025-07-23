'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from 'next/image';

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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  initial: { opacity: 1, y: 0 },
  hover: {
    opacity: 1,
    y: -5,
    transition: { duration: 0.3 }
  }
}
const ProjectsNew = () => {
  return (
    <div className='bg-black h-full' id='projects'>
      <div className='text-center' >
        <motion.button className='text-white font-medium border-1  border-gray-900 py-2 px-4 rounded-2xl mb-6 mt-4'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >My Projects</motion.button>

        <motion.h1
          className="text-white text-2xl md:text-2xl font-bold leading-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Websites that do more than look good. <br className="hidden md:block" />They perform.
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-sm max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Browse selected projects built for brands and startups. Each one is fast, responsive, and conversion-focused.
        </motion.p>
      </div>

      <div className='flex gap-11 items-center justify-center mt-14'>
        <motion.div
          className='bg-[#0a0a0a] w-[360px] h-[300px] border-0 rounded-2xl pr-6 pl-6 pt-6'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src='/projects/skylane.png'
            alt='Project thumbnail'
            className='w-full h-full object-cover rounded-xl fade-bottom '
          />
          <div className='absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none rounded-b-xl' />
        </motion.div>

        <motion.div
          className='text-white w-[400px]'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mb-6 '
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >Hero Image</motion.button>

          <p className='font-panchangMedium -mt-1 text-2xl'>Figma to code</p>
          <p className='text-gray-300 mt-2 mb-6'>This is a recreation of a Figma design using Tailwind CSS and React. Built to capture the user's attention.</p>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mr-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >NextJs</motion.button>

          <motion.button
            className='bg-[#0a0a0a] text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >Tailwind CSS</motion.button>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl ml-3 bg-[#0a0a0a] mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >React</motion.button><br></br>
          <div className='flex justify-between'>
            <span className='font-panchangMedium '>July  15 2025</span>
            <a href='https://skylane-hero.netlify.app/'><span className='flex items-center gap-3 cursor-pointer'>Live Site <FaArrowUpRightFromSquare /></span></a>
          </div>
        </motion.div>

      </div>

      <div className='flex gap-11 items-center justify-center mt-14'>
        <motion.div
          className='text-white w-[400px]'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >Hero Image</motion.button>

          <p className='font-panchangMedium -mt-1 text-2xl'>Figma to code</p>
          <p className='text-gray-300 mt-2 mb-6'>This is a recreation of a Figma design using Tailwind CSS and React. Built to capture the user's attention.</p>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mr-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >NextJs</motion.button>

          <motion.button
            className='bg-[#0a0a0a] text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >Tailwind CSS</motion.button>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl ml-3 bg-[#0a0a0a] mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >React</motion.button>
          <div className='flex justify-between'>
            <span className='font-panchangMedium '>July  10 2025</span>
            <a href='https://sayfully-hero.netlify.app/'><span className='flex items-center gap-3 cursor-pointer'>Live Site <FaArrowUpRightFromSquare /></span></a>
          </div>
        </motion.div>

        <motion.div
          className='bg-[#0a0a0a] w-[360px] h-[300px] border-0 rounded-2xl pr-6 pl-6 pt-6 overflow-hidden'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src='/projects/sayfully.png'
            alt='Project thumbnail'
            className='w-full h-full object-cover rounded-xl fade-bottom'
          />
        </motion.div>
      </div>

      <div className='flex gap-11 items-center justify-center mt-14'>
        <motion.div
          className='bg-[#0a0a0a] w-[360px] h-[300px] border-0 rounded-2xl pr-6 pl-6 pt-6'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src='/projects/pulse.png'
            alt='Project thumbnail'
            className='w-full h-full object-cover rounded-xl fade-bottom'
          />

        </motion.div>

        <motion.div
          className='text-white w-[400px]'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >Hero Image</motion.button>

          <p className='font-panchangMedium -mt-1 text-2xl'>Figma to code</p>
          <p className='text-gray-300 mt-2 mb-6'>This is a recreation of a Figma design using Tailwind CSS and React. Built to capture the user's attention.</p>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mr-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >NextJs</motion.button>

          <motion.button
            className='bg-[#0a0a0a] text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >Tailwind CSS</motion.button>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl ml-3 bg-[#0a0a0a] mb-4'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >React</motion.button>
          <div className='flex justify-between'>
            <span className='font-panchangMedium '>July  7 2025</span>
            <a href='https://pulseai-hero.netlify.app/'><span className='flex items-center gap-3 cursor-pointer'>Live Site <FaArrowUpRightFromSquare /></span></a>
          </div>
        </motion.div>
      </div>


      //Full Stack Application section

      <div className='text-center' >
        <motion.button className='text-white font-medium border-1  border-gray-900 py-2 px-4 rounded-2xl mb-6 mt-40'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >Full-Stack Projects</motion.button>

        <motion.h1
          className="text-white text-2xl md:text-2xl font-bold leading-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          End-to-end builds with real-world impact. <br className="hidden md:block" />Front to back.
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-sm max-w-2xl mx-auto "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          These full-stack projects go beyond the UI—handling logic, data, and performance across the stack. Built to scale, ship fast, and solve real problems.
        </motion.p>

        <motion.section variants={sectionVariants} className="container mb-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto"> {/* Added max-w-4xl and mx-auto */}
            {fullStackApps.map((project) => (
              <motion.div
                key={project.id}
                className="relative h-100 rounded-xl overflow-hidden bg-[var(--color-background)] border-0 max-w-md"
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
                  className="absolute inset-0 p-6 flex flex-col bg-[#0a0a0a] text-white"
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

                  <p className="text-md mb-4 line-clamp-5 text-left">{project.description}</p>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-4 py-3 border-1 bg-black rounded-2xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs opacity-80">{project.date}</span>
                      <a href={project.link}><span className='flex items-center gap-3 cursor-pointer'>Live Site <FaArrowUpRightFromSquare /></span></a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </div>
  )
}

export default ProjectsNew
