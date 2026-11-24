import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ThemeTrail application error:', error, errorInfo)
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-error">
          <div className="app-error-card">
            <span className="route-label">THEMETRAIL</span>

            <h1>Что-то пошло не так</h1>

            <p>
              Произошла непредвиденная ошибка приложения. Попробуйте
              перезагрузить страницу.
            </p>

            <button
              type="button"
              className="hero-button"
              onClick={this.handleReload}
            >
              Перезагрузить страницу
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
