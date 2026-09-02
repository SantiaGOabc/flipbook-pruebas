import { forwardRef, useMemo } from 'react'
import type { BookSection } from '../../types/book/content'
import { getSectionMedia } from './media'
import MediaDeck from './MediaDeck'

interface SectionSlideProps {
  section: BookSection
  /** Número de la sección (1-based), se muestra en grande. */
  number: number
}

/**
 * Una hoja del slider dividida en dos: texto a la izquierda, baraja de
 * tarjetas a la derecha.
 *
 * Cada texto va envuelto en `.rvl` (overflow: hidden) y marcado con
 * `data-reveal`: GSAP lo hace subir desde detrás de esa máscara.
 * Ver transitions.ts.
 */
const SectionSlide = forwardRef<HTMLDivElement, SectionSlideProps>(({ section, number }, ref) => {
  const media = useMemo(() => getSectionMedia(section), [section])
  const eyebrow = section.title.split(':')[0]

  return (
    <div className="slide" ref={ref}>
      <div className="slide__inner">
        <div className="slide__text">
          <div className="rvl">
            <div className="rvl__i" data-reveal>
              <span className="slide__index">{String(number).padStart(2, '0')}</span>
            </div>
          </div>

          <div className="rvl">
            <div className="rvl__i" data-reveal>
              <span className="slide__eyebrow">{eyebrow}</span>
            </div>
          </div>

          <div className="rvl">
            <div className="rvl__i" data-reveal>
              <h2 className="slide__title">{section.title}</h2>
            </div>
          </div>

          {section.description && (
            <div className="rvl">
              <div className="rvl__i" data-reveal>
                <p className="slide__desc">{section.description}</p>
              </div>
            </div>
          )}
        </div>

        <div className="slide__visual">
          {/* key: al cambiar de sección la baraja se reinicia desde la 1ª tarjeta. */}
          <MediaDeck key={section.id} items={media} />
        </div>
      </div>
    </div>
  )
})

SectionSlide.displayName = 'SectionSlide'
export default SectionSlide
