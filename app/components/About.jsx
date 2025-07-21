'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const skills = ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'UI/UX Design']

  return (
    <motion.div
      role="region"
      aria-labelledby="about-heading"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-gray-900 max-w-xl relative"
    >
      {/* Background Blob */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-white/30 rounded-full blur-3xl pointer-events-none z-0"
      />

      {/* Profile Image */}
      <motion.div variants={childVariants}>
        <Image
          src="/profile.png"
          alt="Nimesh"
          width={128}
          height={128}
          className="rounded-full mb-4 border border-gray-300 object-cover"
        />
      </motion.div>

      {/* Heading */}
      <motion.h2
        id="about-heading"
        variants={childVariants}
        className="text-4xl font-bold mb-4"
        style={{ fontFamily: 'var(--font-panchangMedium)' }}
      >
        About Me
      </motion.h2>

      {/* Bio */}
      <motion.p variants={childVariants} className="mb-4 text-2xl font-inter">
        I'm Nimesh, a web developer with over 2 years of experience crafting fast, animated websites that drive conversions.
        My expertise lies at the intersection of technical precision and creative design, helping brands and startups stand out.
      </motion.p>
      <motion.p variants={childVariants} className=' text-2xl font-inter'>
        From sleek micro-interactions to performant UI/UX, I focus on building experiences that are both beautiful and functional.
        My work has boosted client conversions by up to 30%, and I’m passionate about pushing the boundaries of web design.
      </motion.p>

      {/* Skills */}
      <motion.div variants={childVariants} className="mt-6">
        <h3 className="text-2xl font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, backgroundColor: '#e5e7eb' }}
              className="px-3 py-1 bg-white/60 backdrop-blur-md border border-gray-300 rounded-full text-sm text-gray-700"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.a
        href="/contact"
        variants={childVariants}
        whileHover={{ scale: 1.05 }}
        className="mt-6 inline-block px-6 py-2 bg-gray-900 text-white rounded-full"
      >
        Get in Touch
      </motion.a>
    </motion.div>
  )
}

export default About

