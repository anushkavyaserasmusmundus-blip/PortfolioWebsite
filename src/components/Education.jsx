import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'
import PhotoStack from './PhotoStack.jsx'

const certificationCategories = [
  {
    name: 'Software Development & Architecture',
    certifications: [
      { name: 'Full Stack Software Developer Professional Certificate', issuer: 'IBM', logo: '/IBM.jfif' },
      { name: 'Foundations of Coding: Full-Stack', issuer: 'Microsoft', logo: '/microsoft.png' },
      { name: 'Master System Design & Design Patterns', issuer: 'Udemy', logo: '/udemy.png' },
      { name: 'Software Architecture & Design Patterns in Java', issuer: 'Udemy', logo: '/udemy.png' },
    ],
  },
  {
    name: 'Microsoft Power Platform & Dynamics 365',
    certifications: [
      { name: 'PL-200: Power Platform Functional Consultant Associate', issuer: 'Microsoft', logo: '/microsoft.png' },
      { name: 'Create and Manage Model-Driven Apps with Power Apps and Dataverse', issuer: 'Microsoft', logo: '/microsoft.png' },
      { name: 'PL-400: Microsoft Power Platform Developer Associate', issuer: 'Microsoft', logo: '/microsoft.png' },
    ],
  },
  {
    name: 'AI & Generative AI',
    certifications: [
      { name: 'Applied Skills: Create Agents in Microsoft Copilot Studio', issuer: 'Microsoft', logo: '/microsoft.png' },
      { name: 'Claude Certified Developer — Foundation', issuer: 'Anthropic', logo: '/anthropic.png' },
    ],
  },
  {
    name: 'Linux, Security & Compliance',
    certifications: [
      { name: 'Red Hat Certified System Administrator (RHCSA)', issuer: 'Red Hat', logo: '/redhat.png' },
      { name: 'Data Protection and Cyber Security Compliance', issuer: 'Capgemini', logo: '/capgeminilogo.png' },
    ],
  },
  {
    name: 'Industry Knowledge',
    certifications: [
      { name: 'Client Industry Certification: Aerospace & Defence', issuer: 'Capgemini', logo: '/capgeminilogo.png' },
    ],
  },
]

export default function Education() {
  return (
    <section className="content-section education-section">
      <div id="education" className="anchor-target" />
      <PaperTitle text="EDUCATION & CERTIFICATIONS" icon={GraduationCap} className="education-title" />
      <div className="degree-note paper-card">
        <span className="degree-label">EDUCATION</span>
        <p><strong>Bachelor of Technology · Information Technology</strong><br />Rajasthan Technical University · 2020–2024 · 9.7 CGPA</p>
        <div className="degree-photos">
          <PhotoStack
            direction="horizontal"
            photos={[
              { src: '/graduation.png', alt: 'Anushka Vyas on graduation day at Arya College of Engineering & IT', caption: 'Graduation Day 2025', tilt: 2 },
              { src: '/graduation-campus.png', alt: 'Anushka Vyas with her degree on the Arya College campus', caption: 'Arya College campus', tilt: -2 },
            ]}
          />
        </div>
      </div>
      <div className="certifications">
        <h3>CERTIFICATIONS</h3>
        <div className="certification-groups">
          {certificationCategories.map(({ name, certifications: entries }) => (
            <section className="certification-category" key={name}>
              <h4>{name}</h4>
              <ul>
                {entries.map(({ name: certificate, issuer, logo }) => (
                  <li key={certificate}>
                    <img className="issuer-logo" src={logo} alt={`${issuer} logo`} />
                    <span className="cert-text">{certificate}<em>{issuer}</em></span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
        <div className="certifications-footer"><span className="red-stamp creative-stamp">JUST BE<br />CREATIVE</span></div>
      </div>
    </section>
  )
}