'use client'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="text-gray-900 max-w-xl"
    >
      <h2 className="text-4xl font-bold mb-4">Contact</h2>
      <p>Let's build something amazing. (Insert form or email here)</p>
    </motion.div>
  )
}

export default Contact
