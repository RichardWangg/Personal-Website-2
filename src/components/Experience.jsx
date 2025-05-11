import { motion } from 'framer-motion'
import { Element } from 'react-scroll'

const experienceData = [
  {
    title: 'Software Engineering',
    company: 'Ford Pro',
    url: 'https://www.fordpro.com/en-us/',
    date: 'May 2025 – August 2025',
    description:
      'Building front-end and back-end solutions for the Ford Pro website and internal tools using JavaScript, TypeScript, React, and Node.js',
  },
  {
    title: 'Software Developer',
    company: 'Ford',
    url: 'https://www.ford.ca/',
    date: 'Sep 2024 – Dec 2024',
    description:
      'Automated data workflows and built test infrastructure using Python, C++, and TypeScript to support vehicle diagnostics and software validation',
  },
  {
    title: 'Software Developer',
    company: 'Bank of Canada',
    url: 'https://www.bankofcanada.ca/',
    date: 'Jan 2024 – April 2024',
    description:
      'Worked across Python, PHP, and MySQL to improve automation, optimize APIs, and build custom frontend components for BoC Sites',
  },
  {
    title: 'Full-Stack Developer',
    company: 'ReliablyME',
    url: 'https://reliablyme.com/',
    date: 'May 2023 – August 2023',
    description:
      'Improved backend stability, rebuilt chatbot features using OpenAI APIs, and revamped admin console in React to enhance performance and UX',
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
