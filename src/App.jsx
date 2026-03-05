import React from 'react'
import './index.css'
import Navbar from './Components/Layout/Navbar'
import Hero from './Components/Sections/Hero'
import { ABOUT_STATS } from './utils/constants'
import About from './Components/Sections/About'
import Skills from './Components/Sections/Skills'
import Projects from './Components/Sections/Projects'
import Services from './Components/Sections/Services'
import Testimonials from './Components/Sections/Testimonials'
import Contact from './Components/Sections/Contact'
import Footer from './Components/Layout/Footer'

const App = () => {
  return (
    <div className='min-height-screen bg-black '>
      <Navbar />
      

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
