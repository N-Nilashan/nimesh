'use client'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const socials = [
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/your-profile' },
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/your-profile' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://x.com/your-profile' },
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setSuccess(true)
        reset()
        setTimeout(() => setSuccess(false), 3000) // Hide success message after 3s
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      key="contact"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-gray-900 max-w-2xl mx-auto relative p-6"
      role="form"
      aria-labelledby="contact-heading"
    >
      {/* Decorative Blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute -top-16 -right-16 w-[300px] h-[300px] bg-[#4fd1c5]/30 rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* Card Container */}
      <motion.div
        variants={childVariants}
        className="bg-white/60 backdrop-blur-md border border-gray-300 rounded-xl p-8 shadow-md"
      >
        {/* Heading */}
        <motion.div variants={childVariants} className="flex items-center gap-3 mb-4">
          <Mail className="w-8 h-8 text-[#4fd1c5]" />
          <h2
            id="contact-heading"
            className="text-3xl font-bold"
            style={{ fontFamily: 'var(--font-panchangMedium)' }}
          >
            Get in Touch
          </h2>
        </motion.div>

        {/* Intro Text */}
        <motion.p
          variants={childVariants}
          className="mb-6 text-gray-700"
          style={{ fontFamily: 'var(--font-inter)', lineHeight: '1.6' }}
        >
          Ready to create something extraordinary? Send me a message, and let’s make it happen!
        </motion.p>

        {/* Form */}
        <motion.form
          variants={childVariants}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Name
            </label>
            <motion.input
              id="name"
              type="text"
              {...register('name', { required: 'Name is required' })}
              whileFocus={{ scale: 1.02 }}
              className="mt-1 w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4fd1c5] focus:outline-none text-gray-900"
              style={{ fontFamily: 'var(--font-inter)' }}
            />
            {errors.name && (
              <p
                className="mt-1 text-sm text-red-600"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Email
            </label>
            <motion.input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              whileFocus={{ scale: 1.02 }}
              className="mt-1 w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4fd1c5] focus:outline-none text-gray-900"
              style={{ fontFamily: 'var(--font-inter)' }}
            />
            {errors.email && (
              <p
                className="mt-1 text-sm text-red-600"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Message
            </label>
            <motion.textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              rows="4"
              whileFocus={{ scale: 1.02 }}
              className="mt-1 w-full px-4 py-2 bg-white/80 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4fd1c5] focus:outline-none text-gray-900"
              style={{ fontFamily: 'var(--font-inter)' }}
            />
            {errors.message && (
              <p
                className="mt-1 text-sm text-red-600"
                style={{ fontFamily: 'var(--font-inter)' }}
              >
                {errors.message.message}
              </p>
            )}
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05, backgroundColor: '#374151' }}
            whileTap={{ scale: 0.95 }}
            className={`w-full px-6 py-2 bg-gray-900 text-white rounded-md text-center ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
          {success && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-600 text-center"
              style={{ fontFamily: 'var(--font-inter)' }}
            >
              Message sent successfully!
            </motion.p>
          )}
        </motion.form>

        {/* Social Links */}
        <motion.div variants={childVariants} className="mt-6 text-center">
          <p
            className="text-gray-700 mb-3"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Or connect with me on:
          </p>
          <div className="flex justify-center gap-4">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={childVariants}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, color: '#4fd1c5' }}
                className="text-gray-700"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Email Fallback */}
        <motion.p
          variants={childVariants}
          className="mt-4 text-center text-gray-700"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Prefer email? Reach me at{' '}
          <a
            href="mailto:informal.nimesh@gmail.com"
            className="text-[#4fd1c5] hover:underline"
          >
            informal.nimesh@gmail.com
          </a>
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

export default Contact
