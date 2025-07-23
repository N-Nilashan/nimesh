import React from 'react'
import Hero from './components/Hero'
import ProjectsNew from './components/ProjectsNew'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const page = () => {
  return (
    <section>
      <Hero/>
      <ProjectsNew/>
      <Benefits/>
      <Testimonials/>
      <Footer/>
    </section>
  )
}

export default page
