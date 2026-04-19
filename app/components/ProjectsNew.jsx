"use client";

import React from "react";
import { motion } from "framer-motion";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Image from "next/image";

// --- Python Cybersecurity Projects ---
const cyberProjects = [
  {
    id: 4,
    title: "OSINT Reconnaissance Tool",
    description:
      "A Python-based OSINT tool that automates information gathering on any domain or IP. Pulls WHOIS data, DNS records, subdomains, breach database checks via HaveIBeenPwned API, and reputation scores via VirusTotal API. Aggregates all findings into a clean markdown reconnaissance report — replicating the first phase of a real penetration test.",
    date: "2026",
    techStack: ["Python", "WHOIS", "DNS", "VirusTotal API", "HaveIBeenPwned API"],
    image: "/projects/osinttool.png", // ADD YOUR IMAGE HERE
    github: "https://github.com/N-Nilashan/osint-recon-tool",
    category: "OSINT & Recon",
  },
  {
    id: 3,
    title: "Log Analysis & Threat Detection Tool",
    description:
      "A Python tool that parses Apache and Nginx web server logs and automatically detects suspicious activity — including SQL injection attempts, directory traversal attacks, XSS attempts, and brute force login patterns. Generates a structured HTML security report with all findings categorized by severity.",
    date: "2026",
    techStack: ["Python", "Regex", "Log Parsing", "HTML Reports", "Threat Detection"],
    image: "/projects/log-analyzer.png", // ADD YOUR IMAGE HERE
    github: "https://github.com/N-Nilashan/log-analyzer",
    category: "Threat Detection",
  },
  {
    id: 2,
    title: "Multi-Threaded Port Scanner",
    description:
      "A Python-based port scanner that scans a target IP for open ports using multi-threading for high-speed performance. Identifies running services on open ports, performs banner grabbing to capture service information, and exports results to a scan report. Built for network security assessments and penetration testing reconnaissance.",
    date: "2026",
    techStack: ["Python", "Socket", "Threading", "argparse", "Colorama"],
    image: "/projects/port.png", // ADD YOUR IMAGE HERE
    github: "https://github.com/N-Nilashan/multi-threaded-port-scanner",
    category: "Network Recon",
  },
  {
    id: 1,
    title: "File Integrity Checker",
    description:
      "A Python CLI tool that detects unauthorized file tampering using cryptographic hashing. Calculates MD5, SHA-1, and SHA-256 hashes, stores them in a JSON database with UTC timestamps, and verifies file integrity on demand. Built for forensic use cases, malware analysis, and incident response.",
    date: "January 2026",
    techStack: ["Python", "hashlib", "argparse", "JSON", "SHA-256"],
    image: "/projects/file-integrity-checker.png", // ADD YOUR IMAGE HERE
    github: "https://github.com/N-Nilashan/File_Hash_Calculator_and_Integrity_Checker",
    category: "Forensics & Integrity",
  },
];

// --- UI Replicas ---
const redesigns = [
  {
    id: 1,
    title: "Skylane Hero Section",
    description:
      "Rebuilt from a clean SaaS design shared on X. Focused on layout structure, attention hierarchy, and responsive execution.",
    date: "July 15, 2025",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/projects/skylane.png",
    tweetUrl: "https://x.com/ShruPosts/status/1946260450687262851",
    liveLink: "https://skylane-hero.netlify.app",
  },
  {
    id: 2,
    title: "Apple Site Clone",
    description:
      "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects, showcasing advanced front-end development and interactive extraction.",
    date: "November 20, 2024",
    techStack: ["Next.js", "Three.js", "GSAP", "TailwindCSS"],
    image: "/apple.png",
    liveLink: "https://apple-clone-site-phi.vercel.app/",
    tweetUrl: null,
  },
];

// --- Full Stack Apps ---
const fullStackApps = [
  {
    id: 1,
    title: "ChoosyAI",
    description:
      "Chrome extension that generates intelligent, context-aware LinkedIn replies using AI. Users connect their OpenRouter API key to access various AI models and create professional responses with customizable tones.",
    image: "/choosy.png",
    date: "May 10, 2025",
    techStack: ["Next.js", "OpenRouter", "Supabase", "AI Automation"],
    category: "AI Automation",
    link: "https://choosy-ai.vercel.app",
  },
  {
    id: 3,
    title: "Expense Tracker",
    description:
      "SpendSense is a full-stack expense tracker built with Next.js, Tailwind CSS, and Neon Database, showcasing expertise in full-stack development and secure financial app development.",
    image: "/expense.png",
    date: "February 28, 2025",
    techStack: ["Next.js", "Tailwind CSS", "Neon Database", "React"],
    category: "Personal Tool",
    link: "https://spend-sense-eight.vercel.app/",
  },
  {
    id: 2,
    title: "AI-Powered Note Taking App",
    description:
      "Note organization system that allows users to store and categorize their thoughts effortlessly. Leveraging the Gemini API, it provides intelligent summarization capabilities.",
    image: "/noteapp.png",
    date: "April 4, 2025",
    techStack: ["Next.js", "TailwindCSS", "Gemini API", "MongoDB"],
    category: "Automation",
    link: "https://note-taker-ai.vercel.app/",
  },
];

const extractTweetId = (url) => url.split("/").pop();

const cardVariants = {
  initial: { opacity: 1, y: 0, scale: 1 },
  hover: {
    opacity: 1,
    y: -5,
    scale: 1.02,
    transition: { duration: 0.3 },
  },
};

const ProjectsNew = () => {
  return (
    <div className="bg-black min-h-screen relative" id="projects">
      {/* Cyber background overlays */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none" />

      {/* ─────────────────────────── Python Cybersecurity Projects ─────────────────────────── */}
      <section className="px-4 md:px-12 mb-28 pt-16" id="cyber-projects">
        <div className="text-center mb-12">
          <motion.button
            className="text-cyan-400 font-medium border border-cyan-600 py-2 px-4 rounded-2xl mb-6 hover:bg-cyan-500/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Cybersecurity Projects
          </motion.button>
          <motion.h2
            className="text-white text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Python Security Tools Built From Scratch
          </motion.h2>
          <motion.p
            className="text-gray-400 text-md max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Real-world cybersecurity tools built with Python — covering forensics,
            network reconnaissance, threat detection, and OSINT intelligence gathering.
          </motion.p>
        </div>
        <div className="mx-auto w-28 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mt-3 mb-10" />

        <div className="space-y-8 max-w-5xl mx-auto">
          {cyberProjects.map((project) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]/60 shadow-lg hover:shadow-cyan-500/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left: Project Image */}
              <motion.div
                className="relative h-full min-h-[14rem] md:min-h-[20rem] rounded-2xl overflow-hidden border border-[#1f1f1f] bg-[#0d0d0d] flex items-center justify-center"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                
                <Image 
                src={project.image} 
                alt={project.title} 
                fill 
                className="object-cover" />
                <div className="absolute inset-0 ring-0 hover:ring-1 hover:ring-cyan-500/30 transition" />
              </motion.div>

              {/* Right: Details */}
              <div className="bg-[#0b0b0b] p-4 rounded-2xl border border-[#1f1f1f] text-white flex flex-col">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block text-xs text-cyan-400 border border-cyan-600 px-2 py-1 rounded-2xl">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-2 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xs text-gray-400">{project.date}</span>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 border border-cyan-600 px-3 py-1 rounded-lg hover:bg-cyan-500/10 flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    GitHub <FaArrowUpRightFromSquare />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── Full-Stack Projects ─────────────────────────── */}
      <div className="text-center">
        <motion.button
          className="text-cyan-400 font-medium border border-cyan-600 py-2 px-4 rounded-2xl mb-6 mt-20 hover:bg-cyan-500/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Full-Stack Projects
        </motion.button>

        <motion.h1
          className="text-white text-2xl md:text-3xl font-bold leading-normal mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          End-to-end builds with real-world impact.{" "}
          <br className="hidden md:block" />
          Front to back.
        </motion.h1>

        <motion.p
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          These full-stack projects go beyond the UI—handling logic, data, and
          performance across the stack. Built to scale, ship fast, and solve
          real problems.
        </motion.p>
        <div className="mx-auto w-28 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mt-12 -mb-14" />

        <div className="mt-14 px-4 max-w-6xl mx-auto">
          {fullStackApps.map((project) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]/60 shadow-lg hover:shadow-cyan-500/10 transition mt-14"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left: Project Image */}
              <div className="relative h-full min-h-[14rem] md:min-h-[20rem] rounded-2xl overflow-hidden border border-[#1f1f1f]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 ring-0 hover:ring-1 hover:ring-cyan-500/30 transition" />
              </div>

              {/* Right: Details, CTA, Tech */}
              <div className="bg-[#0b0b0b] p-4 rounded-2xl border border-[#1f1f1f] text-white flex flex-col h-full">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block text-xs text-cyan-400 border border-cyan-600 px-2 py-1 rounded-2xl">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-300 mb-4 mt-8 flex-1 text-left">
                  {project.description}
                </p>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium px-3 py-2 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-xs font-panchangMedium text-gray-400">
                      {project.date}
                    </span>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 border border-cyan-600 px-3 py-1 rounded-lg hover:bg-cyan-500/10 flex items-center gap-1"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      Live Site <FaArrowUpRightFromSquare />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ─────────────────────────── UI Replicas Section ─────────────────────────── */}
      <section className="px-4 md:px-12 mb-28 mt-40" id="ui-replicas">
        <div className="text-center mb-12">
          <motion.button
            className="text-cyan-400 font-medium border border-cyan-600 py-2 px-4 rounded-2xl mb-6 hover:bg-cyan-500/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            UI Replicas
          </motion.button>
          <motion.h2
            className="text-white text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            UI Replicas From Design Inspiration
          </motion.h2>
          <motion.p
            className="text-gray-400 text-md max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Pixel-perfect recreations of unique designs shared online. Built to
            push frontend precision and interaction fidelity.
          </motion.p>
        </div>
        <div className="mx-auto w-28 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent mt-3" />

        <div className="space-y-8 max-w-5xl mx-auto -mb-[115px]">
          {redesigns.map((project) => (
            <motion.div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]/60 shadow-lg hover:shadow-cyan-500/10 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left: Project Image */}
              <motion.div
                className="relative h-full min-h-[14rem] md:min-h-[20rem] rounded-2xl overflow-hidden border border-[#1f1f1f]"
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {project.tweetUrl && (
                  <div className="absolute top-2 left-2 text-xs bg-white/10 px-2 py-1 rounded text-white backdrop-blur-sm">
                    Inspired by{" "}
                    <a
                      href={project.tweetUrl}
                      className="underline"
                      target="_blank"
                    >
                      X Post
                    </a>
                  </div>
                )}
                <div className="absolute inset-0 ring-0 hover:ring-1 hover:ring-cyan-500/30 transition" />
              </motion.div>

              {/* Right: Details, CTA, Tech and optional Tweet */}
              <div className="bg-[#0b0b0b] p-4 rounded-2xl border border-[#1f1f1f] text-white flex flex-col">
                <div>
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-panchangMedium text-gray-400">
                    {project.date}
                  </span>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-cyan-400 border border-cyan-600 px-3 py-1 rounded-lg hover:bg-cyan-500/10 flex items-center gap-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Live Site <FaArrowUpRightFromSquare />
                  </motion.a>
                </div>

                <div className="flex flex-wrap gap-2 mb-4 ">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-2 rounded-2xl border border-[#1f1f1f] bg-[#0a0a0a]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.tweetUrl && (
                  <div className="bg-[#0a0a0a] p-3 rounded-xl border border-[#1f1f1f]">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-sm font-bold text-white">
                        Inspiration
                      </h4>
                    </div>
                    <div className="h-36 overflow-y-auto">
                      <TwitterTweetEmbed
                        tweetId={extractTweetId(project.tweetUrl) || ""}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectsNew;