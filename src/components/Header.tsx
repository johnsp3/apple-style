import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <NavLink to="/" className="logo">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="currentColor">
              <path d="M70.698 49.869c-.114-11.334 9.244-16.793 9.67-17.059-5.271-7.714-13.449-8.772-16.346-8.886-6.922-.705-13.55 4.097-17.06 4.097-3.539 0-8.94-4.012-14.721-3.903-7.53.113-14.514 4.407-18.394 11.158-7.879 13.66-2.006 33.824 5.6 44.887 3.761 5.414 8.199 11.489 14.016 11.262 5.652-.227 7.772-3.642 14.609-3.642 6.807 0 8.771 3.642 14.721 3.516 6.097-.114 9.94-5.508 13.636-10.953 4.352-6.297 6.12-12.447 6.211-12.754-.137-.057-11.856-4.548-11.97-18.113h.028z" />
              <path d="M59.248 15.044c3.078-3.76 5.163-8.943 4.588-14.139-4.445.199-9.925 2.986-13.129 6.721-2.845 3.319-5.366 8.65-4.7 13.73 4.984.38 10.074-2.521 13.24-6.312z" />
            </svg>
            <span>Apple-Inspired</span>
          </NavLink>
          
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
          
          <nav className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 