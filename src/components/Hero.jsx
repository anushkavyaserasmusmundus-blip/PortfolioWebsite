import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, Github, MapPin, GraduationCap, Sparkles } from 'lucide-react'
import { CutoutText } from './PaperTitle.jsx'
import { EMAIL, gmailComposeUrl, GITHUB_PROFILE, LINKEDIN_PROFILE } from '../links.js'

const contactDetails = [
  { icon: Mail, text: EMAIL, href: gmailComposeUrl },
  { icon: Phone, text: '+91 7228022981', href: 'tel:+917228022981' },
  { icon: Linkedin, text: 'LinkedIn / anushka-vyas-799199249', href: LINKEDIN_PROFILE },
  { icon: Github, text: 'GitHub / anushkavyaserasmusmundus-blip', href: GITHUB_PROFILE },
  { icon: MapPin, text: 'India' },
]

export default function Hero() {
  return (
    <section id="hero" className="hero paper-texture torn-bottom">
      <div className="hero-inner">
        <motion.h1 className="hero-title" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="hey-label">HELLO</span>
          <span className="iam-label"><span>I</span> AM</span>
          <span className="hero-name">ANUSHKA <CutoutText text="V" className="hero-initial" /></span>
        </motion.h1>
        <motion.p className="role-strip" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          Sr. Software Engineer <span>•</span> JAVA <span>•</span> C#/.NET <span>•</span> REACT
        </motion.p>

        <div className="hero-columns">
          <div className="hero-about">
            <motion.p className="bio" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              I'm a software engineer based in India, building enterprise applications at Capgemini. My work spans C#/.NET and Dynamics 365, Java and Spring Boot, React, REST APIs, and cloud-native development. I enjoy designing reliable backend services, crafting thoughtful interfaces, and making deployments easier to operate with Docker and observability tools.
            </motion.p>
            <motion.aside className="contact-note" initial={{ opacity: 0, rotate: -5, y: 20 }} animate={{ opacity: 1, rotate: -2, y: 0 }} transition={{ delay: 0.45 }} aria-label="Contact details">
              <span className="tape note-tape" aria-hidden="true" />
              <h2>CONTACT <GraduationCap size={27} strokeWidth={2} aria-hidden="true" /></h2>
              <ul>
                {contactDetails.map(({ icon: Icon, text, href }) => (
                  <li key={text}><Icon size={17} strokeWidth={2.5} aria-hidden="true" />{href ? <a href={href} target={href.startsWith('https') ? '_blank' : undefined} rel={href.startsWith('https') ? 'noopener noreferrer' : undefined}>{text}</a> : <span>{text}</span>}</li>
                ))}
              </ul>
            </motion.aside>
          </div>

          <motion.div className="portrait-area" initial={{ opacity: 0, rotate: 2, y: 20 }} animate={{ opacity: 1, rotate: 3, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="polaroid">
              <img src="/anushka-portrait.jpg" alt="Portrait of Anushka Vyas" width="1600" height="1600" />
              <span className="paperclip clip-blue" aria-hidden="true" /><span className="paperclip clip-gold" aria-hidden="true" />
              <span className="polaroid-smile" aria-hidden="true">☺</span>
              <span className="tape portrait-tape" aria-hidden="true" />
            </div>
            <div className="hello-note"><strong>HELLO</strong><span>Open to SDE-1,<br />SDE-2 roles onsite<br />and hybrid</span></div>
            <Sparkles className="portrait-sparkle" size={24} fill="#f2719b" color="#f2719b" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}