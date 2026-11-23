import '../App.css'

function AboutPage() {
  return (
    <div className="app">
      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <i />
              ABOUT
            </span>

            <h1>About ThemeTrail</h1>

            <p>
              ThemeTrail is a web application for thematic walking routes.
              It helps travellers discover a city through structured routes
              based on their interests.
            </p>

            <a href="/" className="hero-button">
              Back to ThemeTrail
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default AboutPage