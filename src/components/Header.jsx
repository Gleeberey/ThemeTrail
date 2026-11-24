import Icon from './Icon'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">
            <Icon name="walk" />
          </span>

          <span>
            Theme<span>Trail</span>
          </span>
        </a>

        <div className="header-right">
          <a href="/#themes">Тематические маршруты</a>

          <span className="city-pill">
            <Icon name="pin" />
            Вильнюс, Литва
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
