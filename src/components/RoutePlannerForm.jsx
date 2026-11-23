import { useState } from 'react'
import { useRoutePreferencesStore } from '../store/routePreferencesStore'

function RoutePlannerForm() {
  const duration = useRoutePreferencesStore((state) => state.duration)
  const startPoint = useRoutePreferencesStore((state) => state.startPoint)
  const setDuration = useRoutePreferencesStore((state) => state.setDuration)
  const setStartPoint = useRoutePreferencesStore((state) => state.setStartPoint)

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = {}

    if (!startPoint.trim()) {
      newErrors.startPoint = 'Укажите стартовую точку маршрута.'
    } else if (startPoint.trim().length < 3) {
      newErrors.startPoint = 'Введите более точное название места.'
    }

    if (duration < 60 || duration > 180) {
      newErrors.duration = 'Продолжительность должна быть от 60 до 180 минут.'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
    } else {
      setIsSubmitted(false)
    }
  }

  return (
    <section className="planner-section">
      <div className="section-heading">
        <div>
          <h2>Настройте прогулку</h2>
          <p>
            Укажите стартовую точку и желаемую продолжительность маршрута.
          </p>
        </div>

        <span className="section-number">02 — Параметры</span>
      </div>

      <form className="planner-form" onSubmit={handleSubmit}>
        <div className="planner-field">
          <label htmlFor="startPoint">Стартовая точка</label>

          <input
            id="startPoint"
            type="text"
            value={startPoint}
            placeholder="Например, Hotel Vilnia"
            onChange={(event) => {
              setStartPoint(event.target.value)
              setIsSubmitted(false)
            }}
          />

          {errors.startPoint && (
            <span className="form-error">
              {errors.startPoint}
            </span>
          )}
        </div>

        <div className="planner-field">
          <label htmlFor="duration">Продолжительность</label>

          <select
            id="duration"
            value={duration}
            onChange={(event) => {
              setDuration(Number(event.target.value))
              setIsSubmitted(false)
            }}
          >
            <option value={60}>1 час</option>
            <option value={90}>1,5 часа</option>
            <option value={120}>2 часа</option>
            <option value={150}>2,5 часа</option>
            <option value={180}>3 часа</option>
          </select>

          {errors.duration && (
            <span className="form-error">
              {errors.duration}
            </span>
          )}
        </div>

        <button type="submit" className="hero-button">
          Применить параметры
        </button>
      </form>

      {isSubmitted && (
        <div className="form-success" aria-live="polite">
          Параметры сохранены. Маршрут будет рассчитан от точки «{startPoint}»
          примерно на {duration} минут.
        </div>
      )}
    </section>
  )
}

export default RoutePlannerForm