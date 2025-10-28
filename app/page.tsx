export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Transform Your Business with AI</h1>
        <p>Expert AI consulting services tailored to your needs</p>
        <a href="#contact" className="cta-button">Get Started</a>
      </section>

      <section className="services">
        <div className="service-card">
          <h3>AI Strategy</h3>
          <p>
            Develop a comprehensive AI roadmap aligned with your business goals.
            We help you identify opportunities and create actionable plans.
          </p>
        </div>

        <div className="service-card">
          <h3>Implementation</h3>
          <p>
            From proof of concept to production deployment, we guide you through
            every step of your AI journey with proven methodologies.
          </p>
        </div>

        <div className="service-card">
          <h3>Training & Support</h3>
          <p>
            Empower your team with the knowledge and tools they need to succeed
            in an AI-driven future through hands-on training.
          </p>
        </div>
      </section>
    </main>
  )
}
