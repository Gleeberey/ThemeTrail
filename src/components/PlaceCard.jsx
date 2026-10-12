import { useEffect, useState } from 'react'
import Icon from './Icon'

function PlaceCard({ place, index }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <li className="route-place">
        <div className="route-step">
          <span className="route-number">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="route-line" />

          <Icon name="arrow" />
        </div>

        <article
          className="place-card place-card-clickable"
          onClick={() => setIsOpen(true)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              setIsOpen(true)
            }
          }}
          tabIndex="0"
        >
          <img
            src={place.image}
            alt={place.alt}
            loading="lazy"
          />

          <div className="place-content">
            <h3>{place.name}</h3>

            <p>{place.description}</p>

            <div className="place-address">
              <Icon name="pin" />
              {place.address}
            </div>
          </div>
        </article>
      </li>

      {isOpen && (
        <div
          className="place-modal-backdrop"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="place-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="place-modal-close"
              onClick={() => setIsOpen(false)}
              aria-label="Закрыть"
            >
              ×
            </button>

            <img
              className="place-modal-image"
              src={place.image}
              alt={place.alt}
            />

            <div className="place-modal-content">
              <span className="place-modal-number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h2>{place.name}</h2>

              <p>{place.description}</p>

              <div className="place-modal-address">
                <Icon name="pin" />
                {place.address}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PlaceCard