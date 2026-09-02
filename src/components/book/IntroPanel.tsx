interface IntroPanelProps {
  /** Arranca la experiencia (libro al centro + apertura). */
  onStart: () => void
}

/**
 * Pantalla inicial: textos a la izquierda + libro decorativo a la derecha.
 * Al pulsar "Iniciar la experiencia" todo esto se desvanece.
 */
export default function IntroPanel({ onStart }: IntroPanelProps) {
  return (
    <div className="experience__intro">
      <div className="intro__copy">
        <span className="intro__badge">Bolivia</span>
        <h1 className="intro__title">Cochabamba</h1>
        <p className="intro__tagline">La Ciudad de la Eterna Primavera</p>
        <p className="intro__desc">
          Historia, transformación y futuro de la mejor ciudad de Bolivia.
        </p>

        <button className="btn-start" onClick={onStart}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
          Iniciar la experiencia
        </button>
      </div>

      {/* Libro decorativo en 3D (CSS). Se define en global.css con la clase .book */}
      <div className="intro__book">
        <div className="book">
          <div className="book-face book-front">
            <div className="cover-inner">
              <div className="cover-rule"></div>
              <span className="cover-category">Guía Turística</span>
              <h2 className="cover-title">Cochabamba</h2>
              <p className="cover-year">2026</p>
              <div className="cover-rule"></div>
            </div>
          </div>
          <div className="book-face book-back"></div>
          <div className="book-stack">
            <span className="book-page"></span>
            <span className="book-page"></span>
            <span className="book-page"></span>
            <span className="book-page"></span>
          </div>
          <div className="book-spine"></div>
        </div>
      </div>
    </div>
  )
}
