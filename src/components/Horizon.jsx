import { motion } from 'framer-motion'
import { Rocket } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'
import Snapshot from './Snapshot.jsx'

const features = [
  'Modular areas for goals, learning, coding activity, wellness, and analytics in one unified React dashboard.',
  'Secure accounts with JWT authentication and role-based authorization over REST APIs.',
  'Scheduled GitHub synchronization, caching, and background processing keep activity insights current.',
  'Containerized deployment with health checks, Prometheus, and Grafana for monitoring and performance.',
]

// Drop the real screenshots into /public using these file names.
const screens = [
  { src: '/horizonhome.png', alt: 'Horizon LifeOS home screen', caption: 'Home' },
  { src: '/horizondashboard.png', alt: 'Horizon LifeOS dashboard', caption: 'Dashboard' },
  { src: '/horizonshare.png', alt: 'Horizon LifeOS sharing screen', caption: 'Share' },
]

export default function Horizon() {
  return (
    <section id="horizon" className="content-section horizon-section">
      <p className="section-kicker">Check out my own SaaS product</p>
      <PaperTitle text="HORIZON LIFEOS" icon={Rocket} />
      <motion.article className="paper-card project-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ rotate: [-0.5, 0.5, -0.2, 0], scale: 1.01 }}>
        <div className="project-heading"><h3>Horizon LifeOS</h3><span className="project-subtitle">All-in-One Lifestyle &amp; Productivity OS</span></div>
        <p className="project-intro">A modular personal productivity platform bringing goals, learning, coding activity, health, and analytics into a unified React dashboard.</p>
        <div className="screen-gallery">
          {screens.map(({ src, alt, caption }, index) => <Snapshot key={src} src={src} alt={alt} caption={caption} className="screen-shot" tilt={[-1.5, 1, -1][index]} />)}
        </div>
        <h4>Key Features:</h4>
        <ul className="hand-list">{features.map((text) => <li key={text}>{text}</li>)}</ul>
        <span className="red-stamp featured-stamp">FEATURED<br />PRODUCT</span>
      </motion.article>
    </section>
  )
}

