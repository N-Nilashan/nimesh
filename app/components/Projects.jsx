'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

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

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    rotateY: 5,
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
    transition: {
      duration: 0.3,
    },
  },
}

const ProjectCard = ({ project }) => (
  <motion.div
    variants={cardVariants}
    whileHover="hover"
    className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col"
  >
    {/* Project Image */}
    <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>

    {/* Project Title */}
    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'var(--font-panchangMedium)' }}>
      {project.title}
    </h3>

    {/* Project Meta */}
    <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
      <span>{project.date}</span>
      <span className="px-2 py-1 bg-gray-100 rounded-full">{project.category}</span>
    </div>

    {/* Project Description */}
    <p className="text-gray-700 mb-4 font-inter flex-grow">{project.description}</p>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-gray-100/80 border border-gray-300 rounded-full text-sm text-gray-700 font-inter"
        >
          {tech}
        </span>
      ))}
    </div>

    {/* Live Site Link */}
    <motion.a
      href={project.liveUrl || project.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ x: 5 }}
      className="inline-flex items-center gap-2 text-[#4fd1c5] font-semibold hover:underline mt-auto"
    >
      View Live Site
      <ExternalLink className="w-4 h-4" />
    </motion.a>
  </motion.div>
)

const Projects = () => {
  return (
    <motion.div
      key="projects"
      initial="hidden"
      animate="visible"
      className="text-gray-900 max-w-7xl mx-auto px-6 py-16 h-auto"
    >
      {/* Decorative Blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-[#4fd1c5]/30 rounded-full blur-3xl pointer-events-none z-0"
      />



      {/* Landing Pages Section */}
      <motion.section
        variants={sectionVariants}
        className="relative z-10"
      >
        <h2
          className="text-3xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-panchangMedium)' }}
        >
          Landing Pages
        </h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {landingPages.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.section>

 {/* Full-Stack Apps Section */}
      <motion.section
        variants={sectionVariants}
        className="mt-16 relative z-10"
      >
        <h2
          className="text-3xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-panchangMedium)' }}
        >
          Full-Stack Applications
        </h2>
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {fullStackApps.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </motion.section>
      {/* Footer Text */}

    </motion.div>
  )
}

export default Projects
