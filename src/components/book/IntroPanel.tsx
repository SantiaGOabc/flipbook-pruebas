import type { BookContent } from '../../types/book/content'

interface IntroPanelProps {
  /** Arranca la experiencia (libro al centro + apertura). */
  onStart: () => void
  /** Contenido centralizado (textos y media) de la portada/intro. */
  content: BookContent
}

/**
 * Pantalla inicial: textos a la izquierda + libro decorativo a la derecha.
 * Se alimenta de `content` (content.ts); al pulsar "Iniciar" todo se desvanece.
 */
export default function IntroPanel({ onStart, content }: IntroPanelProps) {
  return (
    <div className="experience__intro">
      <div className="intro__copy">
        <span className="intro__badge">{content.badge}</span>
        <h1 className="intro__title">{content.city}</h1>
        <p className="intro__tagline">{content.tagline}</p>
        <p className="intro__desc">{content.intro}</p>

        <ul className="intro__tags">
          <li>{content.year}</li>
        </ul>

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
            {content.cover?.image ? (
              <img
                className="cover-poster"
                src={content.cover.image}
                alt={`Portada de ${content.city}`}
              />
            ) : (
              <div className="cover-inner">
                <div className="cover-rule"></div>
                <span className="cover-category">{content.subtitle}</span>
                <h2 className="cover-title">{content.city}</h2>
                <p className="cover-year">{content.year}</p>
                <div className="cover-rule"></div>
              </div>
            )}
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
