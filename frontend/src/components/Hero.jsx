function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">

        <div className="hero-left">
          <div className="hero-eyebrow">
            <span className="hero-dot"></span>
            HUMAN SUPPORT · RESPONSE WITHIN 5 MINUTES
          </div>

          <h1>
            You Tell Us.
            <br />
            <span>We Build website.</span>
          </h1>

          <p className="hero-description">
            Tell us what you need in simple words. Our team understands
            your requirement, builds the right digital solution, and
            takes it live.
          </p>

          <div className="hero-actions">
            <a href="/start-project" className="hero-primary">
              Start a Project
              <span>→</span>
            </a>

            <a href="#services" className="hero-secondary">
              Explore Solutions
            </a>
          </div>

          <div className="hero-note">
            <div>
              <span>01</span>
              <p>Tell us what you need</p>
            </div>

            <div>
              <span>02</span>
              <p>We understand & build</p>
            </div>

            <div>
              <span>03</span>
              <p>We deliver & deploy</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">

          <div className="visual-card requirement-card">
            <div className="visual-number">1</div>
            <div>
              <strong>Your Requirement</strong>
              <p>You tell us what you need.</p>
            </div>
          </div>

          <div className="visual-card contact-card">
            <div className="visual-number">2</div>
            <div>
              <strong>We Contact You</strong>
              <p>Our employee responds within 5 minutes.</p>
            </div>
          </div>

          <div className="laptop-card">
            <div className="laptop-header">
              <span>BuildMe</span>
              <span className="live-status">● LIVE</span>
            </div>

            <div className="project-title">
              Project in Progress
            </div>

            <div className="project-progress">
              <div className="progress-step active">
                <span>✓</span>
                <p>Requirement</p>
              </div>

              <div className="progress-line"></div>

              <div className="progress-step active">
                <span>✓</span>
                <p>Build</p>
              </div>

              <div className="progress-line"></div>

              <div className="progress-step">
                <span>→</span>
                <p>Deploy</p>
              </div>
            </div>

            <div className="project-info">
              <div>
                <small>Status</small>
                <strong>In Progress</strong>
              </div>

              <div>
                <small>Assigned To</small>
                <strong>BuildMe Team</strong>
              </div>
            </div>
          </div>

          <div className="visual-card build-card">
            <div className="visual-number">3</div>
            <div>
              <strong>We Build It</strong>
              <p>Our team develops your solution.</p>
            </div>
          </div>

          <div className="visual-card deploy-card">
            <div className="visual-number">4</div>
            <div>
              <strong>We Deploy</strong>
              <p>Your solution goes live.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;