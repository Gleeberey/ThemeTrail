import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import PlaceCard from '../components/PlaceCard'
import { getThemeById } from '../services/routeService'

function RoutePage() {
  const { themeId } = useParams()

  const [theme, setTheme] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadRoute() {
      try {
        setIsLoading(true)
        setError(null)

        const data = await getThemeById(themeId)
        setTheme(data)
      } catch {
        setError('Маршрут не найден.')
      } finally {
        setIsLoading(false)
      }
    }

    loadRoute()
  }, [themeId])

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="route-section">
          {isLoading && <div className="empty-state">Загрузка маршрута...</div>}

          {!isLoading && error && (
            <>
              <div className="empty-state">{error}</div>

              <div style={{ marginTop: '24px' }}>
                <Link to="/routes" className="hero-button">
                  Вернуться к маршрутам
                </Link>
              </div>
            </>
          )}

          {!isLoading && !error && theme && (
            <>
              <div className="route-header">
                <div>
                  <span className="route-label">ТЕМАТИЧЕСКИЙ МАРШРУТ</span>

                  <h2>{theme.title}</h2>

                  <p>{theme.intro}</p>
                </div>
              </div>

              {theme.places.length > 0 ? (
                <ol className="places-grid">
                  {theme.places.map((place, index) => (
                    <PlaceCard key={place.name} place={place} index={index} />
                  ))}
                </ol>
              ) : (
                <div className="empty-state">
                  В этом маршруте пока нет мест.
                </div>
              )}

              <div style={{ marginTop: '32px' }}>
                <Link to="/routes" className="hero-button">
                  Все маршруты
                </Link>
              </div>
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default RoutePage
