import { motion } from 'framer-motion'
import { PencilRuler } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'

const skills = [
  { name: 'Languages', detail: 'Java, C#, JavaScript, Python, SQL, Bash / Shell Scripting', color: 'teal' },
  { name: 'Frontend', detail: 'React, HTML5, CSS, Tailwind CSS, Bootstrap, JavaScript', color: 'pink' },
  { name: 'Backend & Full-Stack', detail: 'Spring Boot, Spring Security, C#/.NET, ASP.NET Core MVC & Web API, Node.js, REST APIs, JWT', color: 'yellow' },
  { name: 'Power Platform & Dynamics 365', detail: 'Dynamics 365 CE, Dataverse, Power Automate, Power Pages, Power BI, Copilot Studio, model-driven apps, BPFs, CRM plugins', color: 'green' },
  { name: 'AI & Data', detail: 'TensorFlow, Keras, CNNs, data augmentation, pandas / NumPy, ETL pipelines, data lake & warehouse workflows, Jupyter', color: 'pink' },
  { name: 'Cloud & DevOps', detail: 'AWS, Docker, Git, GitHub Actions, Jenkins, Linux', color: 'green' },
  { name: 'Databases & Caching', detail: 'PostgreSQL, SQL Server, MongoDB, Redis, Entity Framework Core', color: 'teal' },
  { name: 'Monitoring & Testing', detail: 'Prometheus, Grafana, Spring Boot Actuator, .NET health checks, JUnit, Mockito', color: 'yellow' },
  { name: 'Engineering Practices', detail: 'Data Structures & Algorithms, OOP, design patterns, CI/CD, Agile Scrum, role-based access control, API integration', color: 'pink' },
]

export default function Skills() {
  return (
    <section id="skills" className="content-section education-section">
      <PaperTitle text="SKILLS & TOOLKIT" icon={PencilRuler} className="education-title" />
      <div className="skill-grid">
        {skills.map(({ name, detail, color }, index) => (
          <motion.article className="skill-card paper-card" key={name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ rotate: [-2, 2, -1, 0], scale: 1.02 }}>
            <h3 className={`skill-label ${color}`}>{name}</h3>
            <p>{detail}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}