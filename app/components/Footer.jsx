import React from 'react'

const Footer = () => {
  return (
    <div className="relative bg-black min-h-full overflow-hidden">
  {/* Top Center Glow */}
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[700px] h-28 bg-blue-500/20 blur-2xl rounded-full pointer-events-none z-0" />

  {/* Content */}
  <div className="relative z-10">
    <div className="flex justify-between p-8 border-b border-t">
      <div className="text-white">
        <h2 className="mb-4">Nimesh Nilashan</h2>
        <p>Let’s build something fast, sharp, and unforgettable.</p>
        <p className="mb-4">Reach out — I’m ready when you are.</p>
        <a href="https://x.com/N_Nilashan" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
          Contact
        </a>
      </div>
      <div className="flex gap-6 justify-center mr-4">
        <div className='mr-4'>
          <p className="text-white font-semibold ">Links</p>
          <ul className="text-gray-200 ">
            <li className='hover:text-gray-400'><a href="#projects">Projects</a></li>
            <li className='hover:text-gray-400'><a href="#Testimonials">Testimonials</a></li>
            <li className='hover:text-gray-400'><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold mr-8">Socials</p>
          <ul className="text-gray-200 ">
            <li className='hover:text-gray-400'><a href="https://x.com/N_Nilashan">Twitter</a></li>
            <li className='hover:text-gray-400'><a href='https://github.com/N-Nilashan'>Github</a></li>
            <li className='hover:text-gray-400'><a href='https://www.linkedin.com/in/nimesh-nilashan/'>LinkedIn</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex justify-between p-4">
      <p className="text-white ml-4">
        Made with ❤ by{' '}
        <span>
          <a className="text-blue-400" href="https://x.com/N_Nilashan">
            Nimesh
          </a>
        </span>
      </p>
      <p className="text-white mr-4">&copy; All rights reserved</p>
    </div>
  </div>
</div>

  )
}

export default Footer
