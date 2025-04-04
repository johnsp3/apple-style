import '../styles/About.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        {/* Header Section */}
        <section className="about-header">
          <h1 className="page-title">About Us</h1>
          <p className="subtitle">
            Discovering the story behind our Apple-inspired designs and the philosophy that drives us.
          </p>
        </section>
        
        {/* Company Story */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2023, our company was born from a passion for beautiful, functional design. 
                We've always been inspired by Apple's commitment to creating products that are both 
                aesthetically pleasing and incredibly intuitive to use.
              </p>
              <p>
                What started as a small team of designers and engineers has grown into a community of 
                creative minds working together to bring elegant, user-friendly products to market.
                Our approach combines minimalist aesthetics with cutting-edge technology, ensuring that 
                every product not only looks beautiful but performs exceptionally.
              </p>
            </div>
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Modern office space" 
                className="about-image"
              />
            </div>
          </div>
        </section>
        
        {/* Our Vision */}
        <section className="about-section alternate">
          <div className="about-grid reverse">
            <div className="about-image-container">
              <img 
                src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Design process" 
                className="about-image"
              />
            </div>
            <div className="about-content">
              <h2>Our Vision</h2>
              <p>
                We believe that technology should enhance our lives through thoughtful design and intuitive 
                functionality. Our vision is to create products that are not only powerful tools but also 
                beautiful objects that inspire joy in everyday use.
              </p>
              <p>
                By focusing on the user experience and maintaining the highest standards in design and 
                engineering, we aim to build products that feel almost invisible in their ease of use, yet 
                indispensable in the value they provide.
              </p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="about-section">
          <h2 className="section-title">Our Team</h2>
          <p className="subtitle">Meet the creative minds behind our Apple-inspired products.</p>
          
          <div className="team-grid">
            <div className="team-member">
              <div className="team-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team member" 
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Alex Johnson</h3>
              <p className="team-role">Founder & Design Director</p>
            </div>
            
            <div className="team-member">
              <div className="team-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team member" 
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Sarah Chen</h3>
              <p className="team-role">Lead Product Engineer</p>
            </div>
            
            <div className="team-member">
              <div className="team-image-container">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team member" 
                  className="team-image"
                />
              </div>
              <h3 className="team-name">Michael Torres</h3>
              <p className="team-role">Head of Innovation</p>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="values-section">
          <div className="container">
            <h2 className="section-title">Our Values</h2>
            <p className="subtitle">The principles that guide our design and business decisions.</p>
            
            <div className="values-grid">
              <div className="value-item">
                <h3 className="value-title">Simplicity</h3>
                <p className="value-description">
                  We believe in the power of simplicity. Our designs eliminate the unnecessary, making room for the essential.
                </p>
              </div>
              
              <div className="value-item">
                <h3 className="value-title">Quality</h3>
                <p className="value-description">
                  We're committed to exceptional quality in every aspect of our products, from materials to user experience.
                </p>
              </div>
              
              <div className="value-item">
                <h3 className="value-title">Innovation</h3>
                <p className="value-description">
                  We continuously push boundaries to create solutions that address real needs in elegant ways.
                </p>
              </div>
              
              <div className="value-item">
                <h3 className="value-title">User-Focused</h3>
                <p className="value-description">
                  Every decision we make centers around enhancing the user experience and bringing joy through interaction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 