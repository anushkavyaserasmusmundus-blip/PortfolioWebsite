import { motion } from 'framer-motion'
import { Music } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'
import PhotoStack from './PhotoStack.jsx'

const points = [
  'Singer and guitarist with RubberBand, the in-house band at Capgemini.',
  'Performed at and helped organise TGIM (Thank God It’s Monday) — the weekly Monday engagement session for employees.',
  'Performed at and coordinated 5–6 company-wide get-together events, handling setlists, rehearsals, and stage logistics.',
  'Rehearsed and arranged covers with the band alongside a full-time engineering role.',
]

// Drop the band photos into /public using these file names.
const photos = [
  { src: '/band-1.png', alt: 'RubberBand performing at a Capgemini event', caption: 'RubberBand live', tilt: -2 },
  { src: '/band-2.png', alt: 'TGIM performance with RubberBand', caption: 'TGIM', tilt: 1.5 },
  { src: '/band-3.png', alt: 'Company get-together performance', caption: 'Get-together', tilt: -1 },
]

export default function ExtraCurricular() {
  return (
    <section id="hobbies" className="content-section community-section">
      <PaperTitle text="HOBBIES & MUSIC" icon={Music} />
      <motion.article className="paper-card community-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} whileHover={{ rotate: [-0.5, 0.5, -0.2, 0], scale: 1.01 }}>
        <span className="tape pink-tape" aria-hidden="true" />
        <h3><Music size={21} aria-hidden="true" /> SINGER · GUITARIST · BAND</h3>
        <div className="community-entry">
          <div>
            <h4>RubberBand · Capgemini in-house band</h4>
            <p className="role-meta">Vocals &amp; guitar · performer and organiser</p>
            <ul className="hand-list">{points.map((text) => <li key={text}>{text}</li>)}</ul>
          </div>
        </div>
        <PhotoStack photos={photos} direction="horizontal" className="band-photos" />
      </motion.article>
    </section>
  )
}
