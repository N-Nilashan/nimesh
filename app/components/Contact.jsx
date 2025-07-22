'use client'

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Mail, Linkedin, Github, Twitter, CheckCircle } from 'lucide-react'
import Lottie from 'lottie-react'
import globeAnimation from '@/public/globe-animation.json'

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const socials = [

    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: 'https://github.com/N-Nilashan' },
    { name: 'Twitter', icon: <Twitter className="w-5 h-5" />, url: 'https://x.com/N_Nilashan' },
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
        setTimeout(() => setSuccess(false), 4000)
      }
    } catch (err) {
      console.error('Submission error:', err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative px-6 md:px-10 py-16 max-w-7xl mx-auto text-gray-900 overflow-hidden"
    >

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -bottom-16 -left-16 w-[250px] h-[250px]  rounded-full blur-2xl z-0"
      />

      {/* Force entire container down by 50px */}
      <div
        style={{ position: 'relative', top: '50px' }}
        className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-12 z-10"
      >
        {/* Lottie animation (LEFT) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl"
        >
          <Lottie animationData={globeAnimation} loop autoplay />
        </motion.div>

        {/* Form (RIGHT) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-8 shadow-xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-8 h-8 text-[#4fd1c5]" />
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-panchangMedium)' }}>
              Get in Touch
            </h2>
          </div>

          <p className="mb-6 text-gray-700 text-base md:text-lg leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
            Ready to create something extraordinary? <br /> Send me a message, and let's make it happen.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-gray-700 uppercase mb-1 font-inter">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4fd1c5] focus:outline-none shadow-sm transition hover:shadow-md"
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase mb-1 font-inter">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address',
                  },
                })}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4fd1c5] focus:outline-none shadow-sm transition hover:shadow-md"
              />
              {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-700 uppercase mb-1 font-inter">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-[#4fd1c5] focus:outline-none shadow-sm transition hover:shadow-md"
              />
              {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>}
            </div>

            {/* Submit */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-2 text-white rounded-md font-semibold transition ${
                isSubmitting ? 'bg-[#4fd1c5]/60 cursor-not-allowed' : 'bg-[#4fd1c5] hover:bg-[#38b2ac]'
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                    <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>

            {success && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-center gap-2 text-green-700 mt-3 font-medium"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="w-5 h-5" /> Message sent successfully!
              </motion.div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-700 mb-3">Or connect with me on:</p>
            <div className="flex justify-center gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.2, color: '#4fd1c5' }}
                  className="text-gray-700"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-gray-700">
            Prefer email? Reach me at{' '}
            <a href="mailto:informal.nimesh@gmail.com" className="text-[#4fd1c5] hover:underline">
              informal.nimesh@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
