import { Element } from 'react-scroll';

const Footer = () => (
  <Element name="footer" className="section">
    <div className="section-content footer-content">
      <h1>Let's connect!</h1>
      <p className="footer-text">
        I would love for you to reach out and continue the conversation further — looking forward to meeting you soon...
      </p>
      <p className="footer-email">
        <a href="mailto:r58wang@uwaterloo.ca">r58wang@uwaterloo.ca</a>
      </p>
      <p className="footer-link">
        <a href="https://github.com/RichardWangg/Personal-Website-2" target="_blank" rel="noopener noreferrer">
          View this site’s GitHub repository
        </a>
      </p>
    </div>

    <div className="footer-credit-wrapper">
      <p className="footer-credit">Created by Richard Wang © 2025</p>
    </div>
  </Element>
);

export default Footer;
