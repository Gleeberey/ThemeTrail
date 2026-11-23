import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import '../App.css'

import { images, themes } from '../data/places'
import ThemeSelector from '../components/ThemeSelector'
import PlaceCard from '../components/PlaceCard'
import Icon from '../components/Icon'

function HomePage() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0])

  return (
    <div className="app">
      <Header />

      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <i />
              ГОРОД · ТЕМА · ПРОГУЛКА
            </span>

            <h1>
              Откройте Вильнюс
              <br />
              по-новому
            </h1>

            <p>
              У каждого города — много историй. Выберите тему и
              познакомьтесь с Вильнюсом через места, которые её
              рассказывают.
            </p>

            <a href="#themes" className="hero-button">
              Найти свой маршрут
              <Icon name="arrow" />
            </a>
          </div>

          <div className="hero-image">
            <img
              src={images.panorama}
              alt="Панорама Вильнюса"
            />

            <div className="hero-badge">
              <Icon name="pin" />
              Вильнюс — город, который хочется узнать
            </div>
          </div>
        </section>

        <ThemeSelector
          themes={themes}
          selectedTheme={selectedTheme}
          onSelectTheme={setSelectedTheme}
        />

        <section className="route-section" aria-live="polite">
          <div className="route-header">
            <div>
              <span className="route-label">ВАШ МАРШРУТ</span>

              <h2>{selectedTheme.title}</h2>

              <p>{selectedTheme.intro}</p>
            </div>

            <span className="walking-pill">
              <Icon name="walk" />
              Пешком
              <span>·</span>
              {selectedTheme.places.length} мест
            </span>
          </div>

          {selectedTheme.places.length > 0 ? (
            <ol className="places-grid">
              {selectedTheme.places.map((place, index) => (
                <PlaceCard
                  key={place.name}
                  place={place}
                  index={index}
                />
              ))}
            </ol>
          ) : (
            <div className="empty-state">
              Объекты по выбранной теме не найдены.
            </div>
          )}

          <p className="route-hint">
            <Icon name="walk" />
            Следуйте по порядку — от первого места к последнему
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default HomePage