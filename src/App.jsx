import Hero from './components/Hero.jsx'
import TableOfContents from './components/TableOfContents.jsx'
import Horizon from './components/Horizon.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import CodingActivity from './components/CodingActivity.jsx'
import Community from './components/Community.jsx'
import ExtraCurricular from './components/ExtraCurricular.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <main className="portfolio-shell mx-auto">
      <Hero />
      <TableOfContents />
      <div className="work-paper">
        <Horizon />
        <Experience />
        <Skills />
        <Projects />
        <CodingActivity />
        <Education />
        <Community />
        <ExtraCurricular />
      </div>
      <Contact />
    </main>
  )
}