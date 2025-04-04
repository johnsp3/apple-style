import { Link } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Apple-Inspired</h3>
            <p className="footer-description">
              Beautiful design inspired by Apple's aesthetic. 
              Clean, minimal, and elegant user interfaces.
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <ul className="footer-links">
              <li><a href="#" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {year} Apple-Inspired. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 