import Icon from './Icon'

function ThemeSelector({ themes, selectedTheme, onSelectTheme }) {
  return (
    <section id="themes" className="themes-section">
      <div className="section-heading">
        <div>
          <h2>Выберите тему маршрута</h2>
          <p>Три взгляда на один город. С чего начнём?</p>
        </div>

        <span className="section-number">01 — Выбор темы</span>
      </div>

      <div className="themes-grid">
        {themes.map((theme) => {
          const selected = selectedTheme?.id === theme.id

          return (
            <button
              key={theme.id}
              className={`theme-card ${selected ? 'selected' : ''}`}
              onClick={() => onSelectTheme(theme)}
              aria-pressed={selected}
            >
              <div className="theme-image">
                <img src={theme.image} alt="" />

                <span className="theme-icon">
                  <Icon name={theme.icon} />
                </span>
              </div>

              <div className="theme-content">
                <h3>{theme.title}</h3>
                <p>{theme.subtitle}</p>

                <span className="theme-status">
                  {selected ? (
                    <>
                      <Icon name="check" />
                      Выбранный маршрут
                    </>
                  ) : (
                    '4 места · Пеший маршрут'
                  )}
                </span>
              </div>

              {!selected && (
                <Icon name="arrow" className="theme-arrow" />
              )}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default ThemeSelector