'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lottie from 'lottie-react'
import devAnimation from '@/public/dev-animation.json'

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
      className="container text-[var(--color-secondary)]"
    >
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-[var(--color-background-secondary)]/30 rounded-full blur-3xl pointer-events-none z-0"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.div variants={childVariants}>
            <Image
              src="/profile.png"
              alt="Nimesh"
              width={120}
              height={120}
              className="rounded-full mb-6 border border-[var(--color-background-secondary)]"
            />
          </motion.div>

          <motion.h2
            id="about-heading"
            variants={childVariants}
            className="text-4xl font-bold mb-4 text-[var(--color-primary)]"
          >
            About Me
          </motion.h2>

          <motion.p variants={childVariants} className="mb-4 text-lg">
            I'm Nimesh, a web developer with over 2 years of experience crafting fast, animated websites that drive conversions.
            <b> I help brands and startups stand out online by creating fast, animated websites with modern, high-conversion front-end design.</b>
          </motion.p>

          <motion.p variants={childVariants} className="text-lg">
            From sleek micro-interactions to performant UI/UX, I focus on building experiences that are both beautiful and functional.
            My work has boosted client conversions by up to 30%, and I’m passionate about pushing the boundaries of web design.
          </motion.p>

          <motion.div variants={childVariants} className="mt-6">
            <h3 className="text-xl font-semibold mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, backgroundColor: 'var(--color-background-secondary)' }}
                  className="px-3 py-1 bg-[var(--color-background)]/80 border border-[var(--color-background-secondary)] rounded-full text-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.a
            href="/contact"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-block px-6 py-2 bg-[var(--color-accent)] text-white rounded-full"
          >
            Get in Touch
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Lottie
            animationData={devAnimation}
            loop
            autoplay
            className="w-[280px] h-[280px]"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
