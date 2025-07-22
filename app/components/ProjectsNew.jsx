'use client'
import React from 'react'
import { motion } from 'framer-motion'

const ProjectsNew = () => {
  return (
    <div className='bg-black h-full' id='projects'>
      <div className='text-center' >
        <motion.button className='text-white font-medium border-1  border-gray-900 py-2 px-4 rounded-2xl mb-6'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >My Projects</motion.button>

        <motion.h1
          className="text-white text-2xl md:text-2xl font-bold leading-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Websites that do more than look good. <br className="hidden md:block" />They perform.
        </motion.h1>

        <motion.p
          className="text-gray-300 text-lg md:text-sm max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Browse selected projects built for brands and startups. Each one is fast, responsive, and conversion-focused.
        </motion.p>
      </div>

      <div className='flex gap-11 items-center justify-center mt-14'>
        <motion.div
          className='bg-[#0a0a0a] w-[360px] h-[300px] border-0 rounded-2xl pr-6 pl-6 pt-6'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src='/projects/skylane.png'
            alt='Project thumbnail'
            className='w-full h-full object-cover rounded-xl fade-bottom '
          />
          <div className='absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none rounded-b-xl' />
        </motion.div>

        <motion.div
          className='text-white w-[400px]'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >Hero Image</motion.button>

          <p className='font-panchangMedium -mt-1 text-2xl'>Figma to code</p>
          <p className='text-gray-300 mt-2 mb-6'>This is a recreation of a Figma design using Tailwind CSS and React. Built to capture the user's attention.</p>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mr-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >NextJs</motion.button>

          <motion.button
            className='bg-[#0a0a0a] text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >Tailwind CSS</motion.button>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl ml-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >React</motion.button>
        </motion.div>
      </div>

      <div className='flex gap-11 items-center justify-center mt-14'>
        <motion.div
          className='text-white w-[400px]'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >Hero Image</motion.button>

          <p className='font-panchangMedium -mt-1 text-2xl'>Figma to code</p>
          <p className='text-gray-300 mt-2 mb-6'>This is a recreation of a Figma design using Tailwind CSS and React. Built to capture the user's attention.</p>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mr-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >NextJs</motion.button>

          <motion.button
            className='bg-[#0a0a0a] text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >Tailwind CSS</motion.button>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl ml-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >React</motion.button>
        </motion.div>

        <motion.div
          className='bg-[#0a0a0a] w-[360px] h-[300px] border-0 rounded-2xl pr-6 pl-6 pt-6 overflow-hidden'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src='/projects/sayfully.png'
            alt='Project thumbnail'
            className='w-full h-full object-cover rounded-xl fade-bottom'
          />
        </motion.div>
      </div>

      <div className='flex gap-11 items-center justify-center mt-14'>
        <motion.div
          className='bg-[#0a0a0a] w-[360px] h-[300px] border-0 rounded-2xl pr-6 pl-6 pt-6'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <img
            src='/projects/pulse.png'
            alt='Project thumbnail'
            className='w-full h-full object-cover rounded-xl fade-bottom'
          />

        </motion.div>

        <motion.div
          className='text-white w-[400px]'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mb-6'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >Hero Image</motion.button>

          <p className='font-panchangMedium -mt-1 text-2xl'>Figma to code</p>
          <p className='text-gray-300 mt-2 mb-6'>This is a recreation of a Figma design using Tailwind CSS and React. Built to capture the user's attention.</p>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl mr-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >NextJs</motion.button>

          <motion.button
            className='bg-[#0a0a0a] text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >Tailwind CSS</motion.button>

          <motion.button
            className='text-white font-medium border-1 border-gray-900 py-2 px-4 rounded-2xl ml-3 bg-[#0a0a0a]'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >React</motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default ProjectsNew
