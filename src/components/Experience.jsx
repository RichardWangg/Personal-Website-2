import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

const experienceData = [
  {
    title: 'Software Engineering',
    company: 'Ford Pro',
    url: 'https://www.fordpro.com/en-us/',
    date: 'May 2025 – August 2025',
    description:
      'Worked on responsive web UI components using React and Tailwind CSS. Improved performance and accessibility for production applications.',
  },
  {
    title: 'Software Developer',
    company: 'Ford',
    url: 'https://www.ford.ca/',
    date: 'January 2025 – April 2025',
    description:
      'Developed and maintained open-source projects, contributing to the React ecosystem. Enhanced UI/UX and fixed issues across various repositories.',
  },
  {
    title: 'Software Developer',
    company: 'Bank of Canada',
    url: 'https://www.bankofcanada.ca/',
    date: 'May 2024 – August 2024',
    description:
      'Worked on cloud deployment tools, focusing on optimization and integration of real-time applications. Contributed to the open-source ecosystem with custom features.',
  },
  {
    title: 'Full-Stack Developer',
    company: 'ReliablyME',
    url: 'https://reliablyme.com/',
    date: 'January 2024 – April 2024',
    description:
      'Worked on cloud deployment tools, focusing on optimization and integration of real-time applications. Contributed to the open-source ecosystem with custom features.',
  },
]

const Experience = () => (
  <Element name="experience" className="section">
    <div className="experience-wrapper section-content">
      <h1 className="experience-title">Experience</h1>
      <div className="timeline-container">
        <div className="timeline-line-full" />
          {experienceData.map((exp, i) => (
            <motion.div
              className="timeline-grid"
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.8 }}
              style={{
                display: 'flex',
                gap: '1.5rem',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h2>
                  {exp.title}{' '}
                  <a
                    href={exp.url}
                    className="company-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @ {exp.company}
                  </a>
                </h2>
                <h3 className="timeline-date">{exp.date}</h3>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  </Element>
)

export default Experience
