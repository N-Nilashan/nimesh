'use client'
import { motion } from 'framer-motion'

const Projects = () => {
  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6 }}
      className="text-gray-900 max-w-xl"
    >
      <h2 className="text-4xl font-bold mb-4">Projects</h2>
      <p>Here are a few cool things I’ve built. (Insert cards or showcase here)</p>
    </motion.div>
  )
}

export default Projects
