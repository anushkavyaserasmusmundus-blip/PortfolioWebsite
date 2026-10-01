import { motion } from 'framer-motion'
import { Wrench, Settings, ArrowRight, Heart, Sparkles, Github, Linkedin, ExternalLink } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'
import { EMAIL, gmailComposeUrl, GITHUB_PROFILE, LINKEDIN_PROFILE } from '../links.js'

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section paper-texture torn-both">
        <PaperTitle text="LET'S COLLABORATE" icon={Wrench} className="contact-title" />
        <Settings className="gear-icon" size={24} strokeWidth={1.8} aria-hidden="true" />
        <p>I'm open to new opportunities and collaborations —<br className="desktop-break" /> let's build something impactful together!</p>
        <motion.a className="contact-button" href={gmailComposeUrl} target="_blank" rel="noopener noreferrer" whileHover={{ rotate: [-2, 2, -1, 0], scale: 1.02 }} whileTap={{ scale: 0.97 }}><span>GET IN TOUCH</span><ArrowRight size={19} aria-hidden="true" /><span>{EMAIL}</span></motion.a>
        <div className="contact-links">
          <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer"><Github size={17} aria-hidden="true" /> GitHub <ExternalLink size={13} aria-hidden="true" /></a>
          <a href={LINKEDIN_PROFILE} target="_blank" rel="noopener noreferrer"><Linkedin size={17} aria-hidden="true" /> LinkedIn <ExternalLink size={13} aria-hidden="true" /></a>
        </div>
        <div className="contact-doodle left-doodle" aria-hidden="true"><Sparkles size={32} /><Heart size={19} fill="#ff8da1" /></div>
        <div className="contact-doodle right-doodle" aria-hidden="true"><Sparkles size={36} /></div>
      </section>
      <footer className="site-footer grid-paper">© 2026 Anushka Vyas <span>•</span> Built with Coffee &amp; Code <span>•</span> India</footer>
    </>
  )
}