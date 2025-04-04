import { useState } from 'react'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to your backend
    console.log('Form submitted:', formData)
    // Show success message
    setSubmitted(true)
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    // Hide success message after 5 seconds
    setTimeout(() => {
      setSubmitted(false)
    }, 5000)
  }
  
  return (
    <div className="contact-page">
      <div className="container">
        {/* Header Section */}
        <section className="contact-header">
          <h1 className="page-title">Contact Us</h1>
          <p className="subtitle">
            Have questions or want to learn more about our products? We'd love to hear from you.
          </p>
        </section>
        
        <div className="contact-content">
          {/* Contact Information */}
          <section className="contact-info">
            <div className="info-card">
              <h3>Visit Our Office</h3>
              <address>
                123 Design Avenue<br />
                San Francisco, CA 94107<br />
                United States
              </address>
            </div>
            
            <div className="info-card">
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong> <a href="mailto:info@apple-inspired.com">info@apple-inspired.com</a>
              </p>
              <p>
                <strong>Phone:</strong> <a href="tel:+14155551234">+1 (415) 555-1234</a>
              </p>
              <p>
                <strong>Support:</strong> <a href="mailto:support@apple-inspired.com">support@apple-inspired.com</a>
              </p>
            </div>
            
            <div className="info-card">
              <h3>Business Hours</h3>
              <p>
                <strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM
              </p>
              <p>
                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
              </p>
              <p>
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </section>
          
          {/* Contact Form */}
          <section className="contact-form-container">
            <div className="form-card">
              <h2 className="form-title">Send Us a Message</h2>
              
              {submitted ? (
                <div className="success-message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Product Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      rows={5} 
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="apple-button">Send Message</button>
                </form>
              )}
            </div>
          </section>
        </div>
        
        {/* Map Section */}
        <section className="map-section">
          <h2 className="section-title">Find Us</h2>
          <div className="map-container">
            {/* In a real app, you would integrate Google Maps or another mapping service here */}
            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                alt="Map" 
                className="map-image"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact 