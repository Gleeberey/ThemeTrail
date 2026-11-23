import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

import Header from '../components/Header'
import Footer from '../components/Footer'
import RouteFilters from '../components/RouteFilters'
import { getThemes } from '../services/routeService'

function RoutesPage() {
  const [routes, setRoutes] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('default')

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

  const filteredRoutes = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase()

    let result = routes.filter((route) => {
      if (!normalizedQuery) {
        return true
      }

      return (
        route.title.toLowerCase().includes(normalizedQuery) ||
        route.intro.toLowerCase().includes(normalizedQuery)
      )
    })

    if (sortOrder === 'title-asc') {
      result = [...result].sort((a, b) =>
        a.title.localeCompare(b.title, 'ru'),
      )
    }

    if (sortOrder === 'title-desc') {
      result = [...result].sort((a, b) =>
        b.title.localeCompare(a.title, 'ru'),
      )
    }

    return result
  }, [routes, searchQuery, sortOrder])

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
                Найдите маршрут по интересующей теме и откройте его точки.
              </p>
            </div>
          </div>

          {!isLoading && !error && (
            <RouteFilters
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              sortOrder={sortOrder}
              onSortChange={setSortOrder}
            />
          )}

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

          {!isLoading &&
            !error &&
            routes.length > 0 &&
            filteredRoutes.length === 0 && (
              <div className="empty-state">
                По вашему запросу маршруты не найдены.
              </div>
            )}

          {!isLoading &&
            !error &&
            filteredRoutes.length > 0 && (
              <div className="themes-grid">
                {filteredRoutes.map((theme) => {
                  const originalIndex = routes.indexOf(theme)

                  return (
                    <Link
                      key={theme.title}
                      to={`/routes/${originalIndex}`}
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
                  )
                })}
              </div>
            )}
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default RoutesPage