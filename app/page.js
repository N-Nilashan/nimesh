import React from 'react'
import Hero from './components/Hero'
import ProjectsNew from './components/ProjectsNew'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'

const page = () => {
  return (
    <section>
      <Hero/>
      <ProjectsNew/>
      <Benefits/>
      <Testimonials/>
    </section>
  )
}

export default page
