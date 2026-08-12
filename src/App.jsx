import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Writing from './components/Writing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import './styles/Nav.css'
import './styles/Hero.css'
import './styles/About.css'
import './styles/Research.css'
import './styles/Projects.css'
import './styles/Writing.css'
import './styles/Contact.css'
import './styles/Footer.css'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window) || els.length === 0) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Research />
        <Projects />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
