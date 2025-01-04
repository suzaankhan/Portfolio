import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <TechStack />
      <Projects />
      <Contact />
    </>
  )
}

export default App
