import { motion } from 'framer-motion'

export function CutoutText({ text, className = '' }) {
  let letterIndex = -1
  return (
    <span className={`cutout-text ${className}`} aria-label={text}>
      {text.split(' ').map((word, wordIndex) => (
        <span className="cutout-word" key={`${word}-${wordIndex}`} aria-hidden="true">
          {[...word].map((letter) => {
            letterIndex += 1
            return <span className="cutout-letter" style={{ '--letter': letterIndex % 10, '--tilt': `${[-3, 2, -1, 3, -2, 1][letterIndex % 6]}deg` }} key={letterIndex}>{letter}</span>
          })}
        </span>
      ))}
    </span>
  )
}

export default function PaperTitle({ text, icon: Icon, className = '' }) {
  return (
    <motion.div className={`section-title ${className}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5 }}>
      <h2><CutoutText text={text} /></h2>
      {Icon && <Icon className="title-icon" strokeWidth={1.8} aria-hidden="true" />}
    </motion.div>
  )
}