'use client'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.6 }}
      className="text-gray-900 max-w-xl"
    >
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p>I help brands and startups stand out online by building fast, animated websites with high-conversion UI/UX.</p>
    </motion.div>
  )
}

export default About
