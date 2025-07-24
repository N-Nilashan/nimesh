'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { IoMdStar } from "react-icons/io";

const benefitss = [
    {
      ratings: 4,
      description: "Working with Nimesh was seamless from start to finish. He translated my vague ideas into a polished site that feels fast, clean, and totally on-brand. If you want a developer who actually gets design, he’s your guy.",
      profile: '/hemant.jpg',
      name: 'Hemant',
      work: 'Copywriter'
    },
    {
      ratings: 4,
      description: "Nimesh took our messy Figma file and turned it into a fully responsive, production-ready site in under a week. The attention to detail, subtle animations, and clean code were way beyond what we expected.",
      profile: '/perera.png',
      name: 'Perera',
      work: 'Creative Designer'
    },
    {
      ratings: 5,
      description: "I’ve worked with developers before, but Nimesh was the first who truly understood both the technical and visual sides of the project.",
      profile: '/test.jpeg',
      name: 'Tharush',
      work: 'Figma Expert'
    },

];

const Testimonials = () => {
  return (
    <div className="bg-black text-center min-h-screen px-4 sm:px-6" id="testimonials">
      <motion.button
        className="text-white font-medium border border-gray-900 py-2 px-4 rounded-2xl mb-6 mt-20 sm:mt-40"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Testimonials
      </motion.button>

      <motion.h1
        className="text-white text-xl sm:text-2xl md:text-2xl font-bold leading-normal mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        People I've worked with say it better. <br className="hidden md:block" />Here’s proof.
      </motion.h1>

      <motion.p
        className="text-gray-300 text-base sm:text-lg md:text-sm max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Real words from founders, marketers, and teams I’ve helped.
      </motion.p>

      <div className="max-w-4xl mx-auto mt-8 sm:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {benefitss.map((benefits, index) => (
            <div
              key={index}
              className="relative border border-gray-800 rounded-lg p-4 sm:p-4 transition-colors duration-300 group bg-black
                before:content-['']
                before:absolute
                before:bottom-0
                before:right-0
                before:w-32
                before:h-24
                before:bg-blue-500/30
                before:blur-2xl
                before:rounded-br-lg
                before:translate-x-1/28
                before:translate-y-1/12"
            >
              <div className="flex mb-2 sm:mb-2">
                {[...Array(benefits.ratings)].map((_, i) => (
                  <IoMdStar key={i} className="text-yellow-400 text-base sm:text-lg" />
                ))}
              </div>

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed text-left">
                {benefits.description}
              </p>
              <div className="flex gap-3 sm:gap-4 items-center mt-3 sm:mt-4">
                <img src={benefits.profile} width={40} className="rounded-full sm:w-[50px]" />
                <span className="text-white flex-col justify-center items-center text-left">
                  <p className="text-sm sm:text-base">{benefits.name}</p>
                  <p className="text-xs sm:text-sm">{benefits.work}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
