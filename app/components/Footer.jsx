import React from 'react'

const Footer = () => {
  return (
    <div className="relative bg-black min-h-full overflow-hidden px-4 sm:px-6">
  {/* Content */}
  <div className="relative z-10 mt-6">
    {/* Top Center Glow - now aligned with the top border */}
    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-[700px] h-18 bg-blue-500/20 blur-2xl rounded-full pointer-events-none z-0" />

    <div className="flex flex-col sm:flex-row justify-between p-6 sm:p-8 border-b border-t items-center sm:items-start">
      <div className="text-white mb-6 sm:mb-0 text-center sm:text-left">
        <h2 className="text-lg sm:text-xl mb-4">Nimesh Nilashan</h2>
        <p className="text-sm sm:text-base">Let’s build something fast, sharp, and unforgettable.</p>
        <p className="text-sm sm:text-base mb-4">Reach out — I’m ready when you are.</p>
        <a
          href="https://x.com/N_Nilashan"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer inline-block"
        >
          Contact
        </a>
      </div>

      <div className="flex flex-row sm:flex-row gap-6 sm:gap-6 justify-center">
        <div className="mb-6 sm:mb-0 text-center sm:text-left">
          <p className="text-white font-semibold text-sm sm:text-base">Links</p>
          <ul className="text-gray-200 text-sm sm:text-base">
            <li className="hover:text-gray-400"><a href="#projects">Projects</a></li>
            <li className="hover:text-gray-400"><a href="#Testimonials">Testimonials</a></li>
            <li className="hover:text-gray-400"><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-white font-semibold text-sm sm:text-base">Socials</p>
          <ul className="text-gray-200 text-sm sm:text-base">
            <li className="hover:text-gray-400"><a href="https://x.com/N_Nilashan">Twitter</a></li>
            <li className="hover:text-gray-400"><a href="https://github.com/N-Nilashan">Github</a></li>
            <li className="hover:text-gray-400"><a href="https://www.linkedin.com/in/nimesh-nilashan/">LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row justify-between p-4 items-center">
      <p className="text-white text-sm sm:text-base mb-4 sm:mb-0">
        Made with ❤ by{' '}
        <span>
          <a className="text-blue-400" href="https://x.com/N_Nilashan">
            Nimesh
          </a>
        </span>
      </p>
      <p className="text-white text-sm sm:text-base">© All rights reserved</p>
    </div>
  </div>
</div>

  )
}

export default Footer
