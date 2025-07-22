'use client'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import sphereAnimation from '@/public/sphere-animation.json'
import Navbar from './components/Navbar'

const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Night Sky Background with Stars */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='stars' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='white' cx='25' cy='25' r='0.5'/%3E%3Ccircle fill='white' cx='75' cy='75' r='0.5'/%3E%3Ccircle fill='white' cx='75' cy='25' r='0.5'/%3E%3Ccircle fill='white' cx='25' cy='75' r='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='black'/%3E%3Crect width='100%25' height='100%25' fill='url(%23stars)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        {/* Animation Background */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Lottie
            animationData={sphereAnimation}
            loop
            autoplay
            className="w-full max-w-[600px] opacity-30 pointer-events-none"
          />
        </motion.div>

        {/* Text Content Overlay */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <motion.h1
            className="text-white text-4xl md:text-4xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I build websites that move fast <br className="hidden md:block" />and sell hard
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I help startups and brands turn visitors into users with clean code and sharp animations.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105">
              Get in touch
            </button>
            <button className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105">
              View projects
            </button>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default HomePage
