import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'

const categories = {
  java: {
    label: 'Java / Spring Boot',
    projects: [
      {
        title: 'Horizon LifeOS · Java / Spring Boot build',
        stack: [['JAVA', '#3B82F6'], ['SPRING BOOT', '#22C55E'], ['SPRING SECURITY', '#279160'], ['REACT', '#06B6D4'], ['POSTGRESQL', '#1E3A8A'], ['REDIS', '#DC2626'], ['DOCKER', '#2563EB']],
        points: [
          'Modular Spring Boot services for authentication, users, goals, and dashboards, backed by PostgreSQL and REST APIs.',
          'Spring Security and JWT protect account data with role-based authorization across every module.',
          'Scheduled GitHub synchronization, Redis caching, and background jobs keep activity insights current.',
          'Docker deployment with Spring Boot Actuator, Prometheus, and Grafana for health and performance monitoring.',
        ],
        note: 'This is the engineering build behind Horizon LifeOS — see the featured product section above.',
      },
    ],
  },
  dotnet: {
    label: 'C# / .NET',
    projects: [
      {
        title: 'Cargo Management System',
        stack: [['C#', '#6A4C93'], ['ASP.NET CORE MVC', '#512BD4'], ['EF CORE', '#247BA0'], ['SQL SERVER', '#A4262C'], ['REST API', '#1E3A8A'], ['BOOTSTRAP', '#7952B3']],
        points: [
          'Built a cargo and shipment tracking system covering consignment booking, carriers, routes, and live delivery status.',
          'Modelled the shipment lifecycle with Entity Framework Core over SQL Server and exposed REST endpoints for booking and tracking.',
          'Added role-based access for admins, operators, and customers, with validation, audit logging, and exportable shipment reports.',
        ],
      },
      {
        title: 'Educational Institute Management System',
        stack: [['C#', '#6A4C93'], ['ASP.NET CORE', '#512BD4'], ['EF CORE', '#247BA0'], ['SQL SERVER', '#A4262C'], ['JWT', '#2C3E50'], ['BOOTSTRAP', '#7952B3']],
        points: [
          'Developed a management platform for student admissions, course and batch allocation, attendance, and fee records.',
          'Implemented JWT-secured REST APIs and role-based dashboards for administrators, faculty, and students.',
          'Automated report cards, attendance summaries, and fee receipts, cutting manual record keeping for staff.',
        ],
      },
    ],
  },
  ai: {
    label: 'AI & Python',
    projects: [
      {
        title: 'CNN-Based Image Classification Model',
        stack: [['PYTHON', '#3776AB'], ['TENSORFLOW', '#D35400'], ['KERAS', '#C0392B'], ['JUPYTER', '#8A5A2B']],
        points: [
          'Developed a Convolutional Neural Network (CNN) in TensorFlow to classify clothing images for an image-based filter feature on an e-commerce platform.',
          'Implemented multiple layers with ReLU and softmax activations and applied data augmentation to broaden the training set.',
          'Optimized the model using dropout and batch normalization for improved accuracy.',
        ],
      },
    ],
  },
  power: {
    label: 'Power Platform',
    projects: [
      {
        title: 'Enterprise Customer Service Portal',
        stack: [['DYNAMICS 365 CE', '#0F6CBD'], ['POWER AUTOMATE', '#0B6A0B'], ['POWER PAGES', '#742774'], ['DATAVERSE', '#1A5FB4'], ['POWER BI', '#A38100']],
        points: [
          'Customized the Dynamics 365 Sales module, focusing on account and contact management, lead management, business process flows (BPFs), and Power Automate for email automation.',
          'Created sales dashboards, lead scoring, and customer journeys, and used Power Pages to enhance marketing campaigns and customer engagement.',
          'Configured case management, knowledge base, SLAs, and security roles, and monitored security privileges for secure, role-based access and efficient customer support.',
        ],
      },
      {
        title: 'Customer Support Copilot',
        stack: [['MICROSOFT COPILOT STUDIO', '#5B2D90'], ['POWER AUTOMATE', '#0B6A0B']],
        points: [
          'An intelligent customer support assistant built with Microsoft Copilot Studio that uses generative AI for contextual responses and automates interactions.',
          'Enhanced self-service and user experience through configured conversation flows, custom topics, knowledge base integration, authentication, and analytics.',
        ],
      },
    ],
  },
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('power')
  const category = categories[activeCategory]

  return (
    <section id="projects" className="content-section projects-section">
      <PaperTitle text="PROJECTS" icon={Lightbulb} />
      <div className="track-tabs category-tabs" role="tablist" aria-label="Project categories">
        {Object.entries(categories).map(([key, option]) => <button type="button" role="tab" id={`category-tab-${key}`} aria-controls="category-panel" aria-selected={activeCategory === key} className={activeCategory === key ? 'active' : ''} onClick={() => setActiveCategory(key)} key={key}>{option.label}</button>)}
      </div>
      <div id="category-panel" role="tabpanel" aria-labelledby={`category-tab-${activeCategory}`} className="category-panel">
        {category.projects.length === 0
          ? <p className="category-empty">More {category.label} projects are on the way — Horizon LifeOS is featured above.</p>
          : category.projects.map((project) => (
            <motion.article className="paper-card project-card" key={project.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} whileHover={{ rotate: [-0.5, 0.5, -0.2, 0], scale: 1.01 }}>
              <div className="project-heading"><h3>{project.title}</h3></div>
              <h4>Tech Stack:</h4>
              <div className="stack-list">{project.stack.map(([label, color]) => <span key={label} style={{ backgroundColor: color }}>{label}</span>)}</div>
              <h4>Key Highlights:</h4>
              <ul className="hand-list">{project.points.map((text) => <li key={text}>{text}</li>)}</ul>
              {project.note && <p className="project-source-note">{project.note}</p>}
            </motion.article>
          ))}
      </div>

    </section>
  )
}
