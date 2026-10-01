import { motion } from 'framer-motion'

const links = [
  { label: 'Hero', target: 'hero' },
  { label: 'Horizon', target: 'horizon' },
  { label: 'Experience', target: 'experience' },
  { label: 'Skills', target: 'skills' },
  { label: 'Projects', target: 'projects' },
  { label: 'Coding Activity', target: 'coding-activity' },
  { label: 'Education', target: 'education' },
  { label: 'Beyond Work', target: 'beyond-work' },
  { label: 'Hobbies', target: 'hobbies' },
  { label: 'Contact', target: 'contact' },
]

export default function TableOfContents() {
  return (
    <nav id="toc" className="toc grid-paper torn-bottom" aria-label="Table of contents">
      <h2>TABLE OF CONTENTS</h2>
      <svg className="scribble" viewBox="0 0 260 22" aria-hidden="true"><path d="M4 9 Q65 1 135 9 T256 8 M60 19 Q122 10 208 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" /></svg>
      <div className="toc-links">
        {links.map(({ label, target }, index) => (
          <motion.a key={target} href={`#${target}`} className="toc-link" whileHover={{ scale: 1.1, rotate: [-2, 2, -1, 0] }} whileTap={{ scale: 0.96 }} onClick={(event) => { event.preventDefault(); document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }); history.replaceState(null, '', `#${target}`) }}>
            <span>{index + 1} {label.toUpperCase()}</span>
          </motion.a>
        ))}
      </div>
    </nav>
  )
}