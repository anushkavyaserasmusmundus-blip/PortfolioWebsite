import { Code2, ExternalLink } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'
import { GITHUB_PROFILE, LEETCODE_PROFILE, NEETCODE_PROFILE } from '../links.js'

const codingLinks = [
  { name: 'LeetCode', detail: 'Data structures and algorithms practice in Java.', url: LEETCODE_PROFILE },
  { name: 'NeetCode', detail: 'Pattern-based problem solving across the roadmap.', url: NEETCODE_PROFILE },
  { name: 'GitHub', detail: 'Open-source work and personal projects.', url: GITHUB_PROFILE },
]

export default function CodingActivity() {
  return (
    <section id="coding-activity" className="content-section coding-activity-section">
      <PaperTitle text="CODING ACTIVITY" icon={Code2} />
      <div className="github-activity">
        <div className="activity-heading">
          <div><h3>200+ QUESTIONS SOLVED</h3><p>Problem solving and open-source development</p></div>
        </div>
        <ul className="activity-links">
          {codingLinks.map(({ name, detail, url }) => (
            <li key={name}>
              <div><strong>{name}</strong><span>{detail}</span></div>
              <a href={url} target="_blank" rel="noopener noreferrer">Visit profile <ExternalLink size={14} aria-hidden="true" /></a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}