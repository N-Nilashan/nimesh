'use client'
import React from 'react'
import { motion } from 'framer-motion'
import {
  FaRocket,
  FaGaugeHigh,
  FaPalette,
  FaWandMagicSparkles,
  FaCode,
  FaBolt
} from "react-icons/fa6";



 const benefitss = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Built to Convert",
      description: "Whether it’s a landing page or a full site, every element is optimized to turn visitors into users, leads, or customers."
    },
    {
      icon: <FaGaugeHigh className="w-8 h-8" />,
      title: "Fast, Really Fast",
      description: "No bloated code, no sluggish load times. You get lightning-fast websites that keep users engaged and bounce rates low."
    },
    {
      icon: <FaPalette className="w-8 h-8" />,
      title: "Pixel-Perfect Polish",
      description: "Your site will look as good as it performs. I blend clean design with subtle animations to create a premium user experience."
    },
    {
      icon: <FaWandMagicSparkles className="w-8 h-8" />,
      title: "Meaningful Motion",
      description: "Animations aren’t just eye candy—they guide users, reinforce branding, and make your site feel alive without slowing it down."
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Custom Every Time",
      description: "Every project is handcrafted for your brand—no recycled layouts, no generic themes. You get a site that’s yours, end to end."
    },
    {
      icon: <FaBolt className="w-8 h-8" />,
      title: "Scalability & Growth",
      description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs."
    }
  ];

const Benefits = () => {
  return (
    <div className='bg-black text-center'>
      <motion.button className='text-white font-medium border-1  border-gray-900 py-2 px-4 rounded-2xl mb-6 mt-40'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >Why work with me?</motion.button>

        <motion.h1
          className="text-white text-2xl md:text-2xl font-bold leading-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          You get a site that feels premium. <br className="hidden md:block" />And performs like it.
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-sm max-w-2xl mx-auto "
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I don’t just ship pretty pages—I deliver polished, high-performing websites that make your brand look sharp and sell harder. Built fast. Built right.
        </motion.p>

      <div className="max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitss.map((benefits, index) => (
            <div
              key={index}
              className="relative border border-gray-800 rounded-lg p-4 transition-colors duration-300 group bg-black before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-24 before:bg-gradient-to-t before:from-blue-500/30 before:to-transparent before:blur-2xl before:rounded-b-lg"

            >
              <div className="text-white mb-6 group-hover:text-blue-400 transition-colors duration-300">
                {benefits.icon}
              </div>
              <h3 className="text-white text-lg font-semibold mb-4 text-left leading-tight">
                {benefits.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-left">
                {benefits.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Benefits
