import { motion } from 'framer-motion'
import { HeartHandshake, Trophy, Users } from 'lucide-react'
import PaperTitle from './PaperTitle.jsx'
import Snapshot from './Snapshot.jsx'

const groups = [
  {
    icon: HeartHandshake,
    heading: 'VOLUNTEERING',
    tape: 'pink-tape',
    entries: [
      {
        title: 'Developer · Reskilll × Microsoft × Snapchat',
        meta: 'Oct 2022 — Nov 2022 · Science and Technology',
        points: [
          'Built around 5,000+ AR Spark filters for Snapchat as part of the Reskilll developer community.',
          'Helped host a live community event at our college, supporting sessions and hands-on AR workshops.',
        ],
      },
    ],
  },
  {
    icon: Trophy,
    heading: 'HACKATHONS',
    tape: 'teal-tape',
    entries: [
      {
        title: 'Flow Hackathon · Arya College of Engineering & IT',
        meta: 'Institution’s Innovation Council',
        points: [
          'Built and pitched a working prototype with my team during the on-campus Flow hackathon.',
          'Worked through the night with the team to take the idea from whiteboard to a working end-to-end demo.',
          'Presented the solution to an industry jury from the Institution’s Innovation Council.',
        ],
        photo: { src: '/flo-hackathon.png', alt: 'Flow Hackathon team at Arya College of Engineering & IT', caption: 'Flow Hackathon · Arya College', tilt: -2 },
      },
      {
        title: 'Hack the League · 30-hour hackathon',
        meta: '30 hours of non-stop building',
        points: [
          'Designed, built, and demoed a full product in a 30-hour sprint with a cross-functional team.',
          'Owned the backend and API layer while coordinating integration with the frontend and design tracks.',
          'Shipped a demo-ready build inside the deadline and presented it live to the judging panel.',
        ],
      },
    ],
  },
  {
    icon: Users,
    heading: 'LEADERSHIP',
    tape: 'teal-tape',
    entries: [
      {
        title: 'Tech & Operations Head · LINCOM Club',
        meta: 'Arya College of Engineering & IT',
        points: [
          'Led the tech and operations team to host 20+ webinars, coding contests, and technical sessions for the student community.',
          'Coordinated speakers, schedules, registrations, and on-ground logistics end to end for every event.',
          'Grew participation across batches by running regular contests and inviting industry mentors to speak.',
        ],
      },
    ],
  },
]

export default function Community() {
  return (
    <section id="beyond-work" className="content-section community-section">
      <PaperTitle text="BEYOND WORK" icon={Trophy} />
      {groups.map(({ icon: Icon, heading, tape, entries }) => (
        <motion.article className="paper-card community-card" key={heading} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} whileHover={{ rotate: [-0.5, 0.5, -0.2, 0], scale: 1.01 }}>
          <span className={`tape ${tape}`} aria-hidden="true" />
          <h3><Icon size={21} aria-hidden="true" /> {heading}</h3>
          {entries.map(({ title, meta, points, photo }) => (
            <div className={photo ? 'community-entry with-photo' : 'community-entry'} key={title}>
              <div>
                <h4>{title}</h4>
                <p className="role-meta">{meta}</p>
                <ul className="hand-list">{points.map((text) => <li key={text}>{text}</li>)}</ul>
              </div>
              {photo && <Snapshot {...photo} className="community-photo" />}
            </div>
          ))}
        </motion.article>
      ))}
    </section>
  )
}
