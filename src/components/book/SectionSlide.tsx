import { forwardRef, useMemo } from 'react'
import type { BookSection } from '../../types/book/content'
import { getSectionMedia } from './media'
import MediaDeck from './MediaDeck'

interface SectionSlideProps {
  section: BookSection
  /** Número de la sección (1-based), se muestra en grande. */
  number: number
}

// Foto del alcalde para la hoja de cierre (busto/foto formal).
// Deja el archivo en public/images/alcalde.webp y se mostrará solo.
// Si no existe, se ve una marqueta de respaldo con las iniciales "MRV".
const MAYOR_PHOTO = '/images/alcalde.webp'

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

  // Hoja de cierre: foto del alcalde a la izquierda (entra de izquierda a
  // derecha) con el "33" detrás, y el texto de despedida a la derecha.
  if (section.id === 'cierre') {
    return (
      <div className="slide slide--cierre" ref={ref}>
        <div className="slide__inner slide__inner--cierre">
          <div className="cierre__photo" data-slide-in>
            <span className="cierre__num">33</span>
            <img
              className="cierre__img"
              src={MAYOR_PHOTO}
              alt="Manfred Reyes Villa"
              onError={(e) => {
                // Sin foto real aún: muestra el busto/marqueta de respaldo.
                ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                const el = e.currentTarget.previousElementSibling?.previousElementSibling
                const fallback = document.querySelector<HTMLElement>('.cierre__fallback')
                if (fallback) fallback.style.display = 'flex'
                void el
              }}
            />
            <div className="cierre__fallback">MRV</div>
          </div>

          <div className="slide__text">
            <div className="rvl">
              <div className="rvl__i" data-reveal>
                <span className="slide__eyebrow slide__eyebrow--cierre">{eyebrow}</span>
              </div>
            </div>

            <div className="rvl">
              <div className="rvl__i" data-reveal>
                <h2 className="slide__title slide__title--cierre">Porque una visión puede cambiar una ciudad</h2>
              </div>
            </div>

            {section.description && (
              <div className="rvl">
                <div className="rvl__i" data-reveal>
                  <p className="slide__desc slide__desc--cierre">{section.description}</p>
                </div>
              </div>
            )}

            <div className="rvl">
              <div className="rvl__i" data-reveal>
                <p className="cierre__next">→ Continúa a la firma</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
