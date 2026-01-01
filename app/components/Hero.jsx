"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import sphereAnimation from "@/public/sphere-animation.json";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="min-h-screen w-full bg-black relative overflow-hidden">
      {/* Night Sky Background with Stars */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='stars' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='white' cx='25' cy='25' r='0.5'/%3E%3Ccircle fill='white' cx='75' cy='75' r='0.5'/%3E%3Ccircle fill='white' cx='75' cy='25' r='0.5'/%3E%3Ccircle fill='white' cx='25' cy='75' r='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='black'/%3E%3Crect width='100%25' height='100%25' fill='url(%23stars)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 ">
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
            aria-hidden
            className="w-full max-w-[600px] opacity-25 pointer-events-none"
          />
        </motion.div>

        {/* Text Content Overlay */}
        <div className="relative z-10 text-center space-y-6 max-w-4xl">
          <motion.h1
            className="text-white mt-[90px] text-4xl md:text-5xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Cybersecurity-Focused IT Student at SLIIT
          </motion.h1>

          <motion.p
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Driven by a passion for cybersecurity and the challenge of
            protecting digital systems through ethical practice. Pursuing Google
            Cybersecurity certification while developing Python security
            automation tools including port scanners, log analyzers, and threat
            detection systems.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <h3 className="text-blue-400 font-semibold text-lg mb-2">
                Core Strengths
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Self-directed learning and analytical problem-solving in
                penetration testing and digital forensics
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <h3 className="text-blue-400 font-semibold text-lg mb-2">
                Values
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Integrity in security work and continuous improvement, using
                technical skills responsibly to protect
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5">
              <h3 className="text-blue-400 font-semibold text-lg mb-2">
                Focus Areas
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Python scripting, network analysis, vulnerability assessment,
                and proactive defense strategies
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <motion.a
              href="#projects"
              aria-label="View security projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-medium transition-all transform hover:scale-105 cursor-pointer flex justify-center items-center gap-2"
              whileTap={{ scale: 0.9, duration: 0.005 }}
            >
              View My Learning Projects
            </motion.a>

            <motion.a
              href="mailto:informal.nimesh@gmail.com"
              aria-label="Email Nimesh"
              className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-all transform cursor-pointer hover:scale-105 flex justify-center items-center gap-2"
              whileTap={{ scale: 0.9, duration: 0.005 }}
            >
              <MdEmail />
              Contact
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/nimesh-nilashan/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="border border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-all transform cursor-pointer hover:scale-105 flex justify-center items-center gap-2"
              whileTap={{ scale: 0.9, duration: 0.005 }}
            >
              <FaLinkedin />
              Connect
            </motion.a>
          </motion.div>

          {/* Security Highlights */}
          <motion.div
            className="flex flex-wrap gap-2 justify-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            aria-label="Security focus areas"
          >
            {[
              "Web App Security",
              "Vulnerability Assessment",
              "Threat Modeling",
              "Secure Engineering",
              "Cloud Hardening",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-300 px-3 py-1 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
