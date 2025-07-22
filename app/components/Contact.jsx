'use client'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Mail, Github, Twitter, CheckCircle } from 'lucide-react'
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
      className="container py-16"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-16 -left-16 w-[200px] h-[200px] bg-[var(--color-background-secondary)]/30 rounded-full blur-2xl z-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Lottie animationData={globeAnimation} loop autoplay className="w-[300px] h-[300px]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[var(--color-background)]/80 backdrop-blur-lg border border-[var(--color-background-secondary)] rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-7 h-7 text-[var(--color-accent)]" />
            <h2 className="text-3xl font-bold text-[var][--color-primary)]">
              Get in Touch
            </h2>
          </div>

          <p className="mb-6 text-lg text-[var(--color-secondary)]/80">
            Ready to create something extraordinary? Send me a message, and let's make it happen.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-secondary)]/80 uppercase mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-background-secondary)] rounded-md focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none transition placeholder:text-[var(--color-secondary)]/60"
                placeholder="Your name"
              />
              {errors.name && <p className="text-sm text-red-400 mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-secondary)]/80 uppercase mb-1">
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
                className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-background-secondary)] rounded-md focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none transition placeholder:text-[var(--color-secondary)]/60"
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="text-sm text-red-400 mt-1">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-secondary)]/80 uppercase mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                {...register('message', { required: 'Message is required' })}
                className="w-full px-4 py-2 bg-[var(--color-background)] border border-[var(--color-background-secondary)] rounded-md focus:ring-2 focus:ring-[var(--color-accent)] focus:outline-none transition placeholder:text-[var(--color-secondary)]/60"
                placeholder="Your message here..."
              />
              {errors.message && <p className="text-sm text-red-400 mt-1">{errors.message.message}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`w-full flex items-center justify-center gap-2 px-6 py-2 text-white rounded-md font-semibold transition ${
                isSubmitting ? 'bg-[var(--color-accent)]/60 cursor-not-allowed' : 'bg-[var(--color-accent)] hover:bg-[var(--color-accent)]/90'
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
                className="flex items-center justify-center gap-2 text-green-400 mt-3 font-medium"
                role="status"
                aria-live="polite"
              >
                <CheckCircle className="w-5 h-5" /> Message sent successfully!
              </motion.div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--color-secondary)]/80 mb-3">Or connect with me on:</p>
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
                  whileHover={{ scale: 1.1, color: 'var(--color-accent)' }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-sm text-[var(--color-secondary)]/80">
            Prefer email? Reach me at{' '}
            <a href="mailto:informal.nimesh@gmail.com" className="text-[var(--color-accent)] hover:underline">
              informal.nimesh@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact
