import { Element } from 'react-scroll';

const Footer = () => (
  <Element name="footer" className="section">
    <div className="section-content footer-content">
      <h1>Let's connect!</h1>
      <p className="footer-text">
        I would love for you to reach out and continue the conversation further — looking forward to meeting you soon...
      </p>
      <p className="footer-email">
        <a href="mailto:richard.wang@uwaterloo.ca">richard.wang@uwaterloo.ca</a>
      </p>
      <p className="footer-link">
        <a href="https://github.com/YOUR_USERNAME/YOUR_REPO" target="_blank" rel="noopener noreferrer">
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
