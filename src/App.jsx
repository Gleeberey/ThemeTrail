import { useState } from 'react'
import './App.css'

import { images, themes } from './data/places'
import ThemeSelector from './components/ThemeSelector'
import PlaceCard from './components/PlaceCard'
import Icon from './components/Icon'

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themes[0])

  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <span className="logo-icon">
              <Icon name="walk" />
            </span>

            <span>
              Theme<span>Trail</span>
            </span>
          </a>

          <div className="header-right">
            <a href="#themes">Тематические маршруты</a>

            <span className="city-pill">
              <Icon name="pin" />
              Вильнюс, Литва
            </span>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-content">
            <span className="eyebrow">
              <i />
              ГОРОД. ИСТОРИИ. ПРОГУЛКИ.
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
              {selectedTheme.places.length} места
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
            Следуйте по порядку — от первого места к четвёртому
          </p>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>
            <strong>ThemeTrail</strong>
            <i>·</i>
            Преддипломная практика
            <i>·</i>
            2026
          </span>

          <span>Открывайте город шаг за шагом.</span>
        </div>
      </footer>
    </div>
  )
}

export default App