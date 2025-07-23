'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { IoMdStar } from "react-icons/io";

const benefitss = [
    {
      ratings:4,
      description: "Whether it’s a landing page or a full site, every element is optimized to turn visitors into users, leads, or customers.",
      profile:'/hemant.jpg',
      name:'hemant',
      work:'Copywriter'
    },
    {
      ratings:4,
      description: "No bloated code, no sluggish load times. You get lightning-fast websites that keep users engaged and bounce rates low.",
      profile:'/hemant.jpg',
      name:'hemant',
      work:'Copywriter'
    },
    {
      ratings:5,
      description: "Your site will look as good as it performs. I blend clean design with subtle animations to create a premium user experience.",
      profile:'/hemant.jpg',
      name:'hemant',
      work:'Copywriter'
    },
    {
      ratings:5,
      description: "Animations aren’t just eye candy—they guide users, reinforce branding, and make your site feel alive without slowing it down.",
      profile:'/hemant.jpg',
      name:'hemant',
      work:'Copywriter'
    },

  ];

const Testimonials = () => {
  return (
    <div className='bg-black text-center min-h-screen'>
      <motion.button className='text-white font-medium border-1  border-gray-900 py-2 px-4 rounded-2xl mb-6 mt-40'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >Testimonials</motion.button>

              <motion.h1
                className="text-white text-2xl md:text-2xl font-bold leading-normal mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                People I've worked with say it better. <br className="hidden md:block" />Here’s proof.
              </motion.h1>

              <motion.p
                className="text-gray-300 text-lg md:text-sm max-w-2xl mx-auto "
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Real words from founders, marketers, and teams I’ve helped.
              </motion.p>

              <div className="max-w-4xl mx-auto mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {benefitss.map((benefits, index) => (
                    <div
                      key={index}
                      className="relative border border-gray-800 rounded-lg p-4 transition-colors duration-300 group bg-black
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

                     <div className="flex mb-2">
                        {[...Array(benefits.ratings)].map((_, i) => (
                          <IoMdStar key={i} className="text-yellow-400 text-lg" />
                        ))}
                     </div>

                      <p className="text-gray-400 text-sm leading-relaxed text-left">
                        {benefits.description}
                      </p>
                      <div className='flex gap-4 items-center mt-4'>
                        <img src={benefits.profile} width={50} className='rounded-full '/>
                        <span className='text-white flex-col justify-center items-center text-left'>
                          <p>{benefits.name}</p>
                          <p>{benefits.work}</p>
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
