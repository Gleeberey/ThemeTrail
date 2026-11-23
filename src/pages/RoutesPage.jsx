import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { getThemes } from '../services/routeService'

function RoutesPage() {
  const [routes, setRoutes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadRoutes() {
      try {
        setIsLoading(true)
        setError(null)

        const data = await getThemes()
        setRoutes(data)
      } catch {
        setError('Не удалось загрузить маршруты.')
      } finally {
        setIsLoading(false)
      }
    }

    loadRoutes()
  }, [])

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="route-section">
          <div className="route-header">
            <div>
              <span className="route-label">THEMETRAIL ROUTES</span>

              <h2>Тематические маршруты</h2>

              <p>
                Выберите интересующую тему, чтобы посмотреть маршрут и его точки.
              </p>
            </div>
          </div>

          {isLoading && (
            <div className="empty-state">
              Загрузка маршрутов...
            </div>
          )}

          {!isLoading && error && (
            <div className="empty-state">
              {error}
            </div>
          )}

          {!isLoading && !error && routes.length === 0 && (
            <div className="empty-state">
              Маршруты пока не найдены.
            </div>
          )}

          {!isLoading && !error && routes.length > 0 && (
            <div className="themes-grid">
              {routes.map((theme, index) => (
                <Link
                  key={theme.title}
                  to={`/routes/${index}`}
                  className="theme-card"
                >
                  <div className="theme-content">
                    <h3>{theme.title}</h3>

                    <p>{theme.intro}</p>

                    <div className="theme-status">
                      {theme.places.length} мест
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default RoutesPage