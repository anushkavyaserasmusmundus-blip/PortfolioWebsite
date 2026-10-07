import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'
import PhotoStack from './PhotoStack.jsx'

const roles = [
  {
    company: 'Capgemini',
    title: 'Sr Software Engineer',
    period: 'Sep 2026 — Present',
    previously: 'Software Engineer · Jan 2025 — Sep 2026',
    location: 'India · On-site',
    stamp: 'BACKEND • DEVOPS',
    tape: 'teal-tape',
    photos: [
      { src: '/capgemini.png', alt: 'Anushka Vyas at the Capgemini office', caption: 'Capgemini', tilt: 2 },
      { src: '/capgemini-ace.png', alt: 'Ace of Capgemini celebration with the team', caption: 'Ace of Capgemini', tilt: -2 },
    ],
    highlights: [
      'Spearheaded the end-to-end development of the CRM software for a premier French client, architecting complex business workflows, BPFs, and backend automation logic.',
      'Engineered seamless frontend interfaces for the 360 Sales Dashboard and Customer Service Hub; built and maintained high-throughput REST APIs to facilitate real-time, secure data synchronization across the enterprise ecosystem.',
      'Modernized legacy workflows by containerizing components with Docker for consistent CI/CD; integrated Prometheus and Grafana to monitor system health and API latency, significantly reducing Mean Time to Resolution.',
      'Partnered directly with Product Owners to groom and refine high-priority backlog items, consistently delivering ~40 user story points per sprint. Contributed to a high-performing delivery team that maintained a ~98% sprint performance metric across production releases.',
      'Led initiatives in debugging and platform tuning, and custom plugin development to enhance system reliability and overall operational efficiency.',
    ],
  },
  {
    company: 'NielsenIQ',
    title: 'Data Processing Specialist',
    period: 'Oct 2024 — Dec 2024',
    location: 'India · On-site · Full-time',
    stamp: 'DATA • ETL',
    tape: 'pink-tape',
    photos: [
      { src: '/nielsen.png', alt: 'Anushka Vyas at NielsenIQ', caption: 'NielsenIQ', tilt: -2 },
    ],
    highlights: [
      'Processed large-scale consumer datasets and performed data validation, cleaning, and preprocessing to maintain high data accuracy.',
      'Wrote automation scripts that reduced recurring ETL processing time by nearly 40%.',
      'Collaborated with the analytics team on feature readiness, preprocessing pipelines, and statistical checks to support analytics accuracy.',
    ],
  },
  {
    company: 'BITS Vadodara',
    title: 'Software Engineering Intern',
    period: 'June 2024 - Sept 2024',
    location: 'Vadodara, India',
    stamp: 'SOFTWARE • EDUCATION',
    tape: 'pink-tape',
    highlights: [
      "Contributed to the development of BITS Vadodara's educational institution management system using C#, ASP.NET Core, Entity Framework Core, and SQL Server.",
      'Developed workflows for student admissions, course and batch allocation, attendance tracking, and fee management.',
      'Implemented JWT-secured APIs and role-based dashboards for administrators, faculty, and students, with automated academic reports and fee receipts.',
    ],
  },
  {
    company: 'Celebal Technologies',
    title: 'Data Engineering Intern',
    period: 'May 2023 — Jul 2023',
    location: 'India · Remote · Internship',
    stamp: 'PYTHON • DATA',
    tape: 'teal-tape',
    highlights: [
      'Worked on large datasets in data lake and data warehouse environments, ensuring availability and accessibility for downstream analytics.',
      'Used Python to clean, transform, and validate operational data, improving structure and reliability for business reporting.',
      'Collaborated closely with data engineers and analysts to enable data-driven decision-making and analytics readiness.',
    ],
  },
  
]

export default function Experience() {
  return (
    <section id="experience" className="content-section experience-section">
      <PaperTitle text="EXPERIENCE" icon={BriefcaseBusiness} />
      {roles.map(({ company, title, period, previously, location, stamp, tape, photos, highlights }) => (
        <motion.article className="paper-card experience-card" key={`${company}-${title}`} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} whileHover={{ rotate: [-0.5, 0.5, -0.2, 0], scale: 1.01 }}>
          <span className={`tape ${tape}`} aria-hidden="true" />
          <h3>{company} <span>•</span> {title}{period && <> <span>•</span> {period}</>}</h3>
          <p className="role-meta">{location}{previously && <> · Previously {previously}</>}</p>
          <div className={photos ? 'experience-body with-photo' : 'experience-body'}>
            <ul className="hand-list">{highlights.map((text) => <li key={text}>{text}</li>)}</ul>
            {photos && <PhotoStack photos={photos} direction="horizontal" className="experience-photo" />}
          </div>
          <span className="mini-stamp remote-stamp">{stamp}</span>
        </motion.article>
      ))}
    </section>
  )
}
