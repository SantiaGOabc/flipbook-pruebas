import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import type { MediaItem } from './media'
import MediaLightbox from './MediaLightbox'

interface MediaDeckProps {
  items: MediaItem[]
}

// Cada cuántos ms se pasa sola a la siguiente tarjeta.
const AUTOPLAY_MS = 3800

/**
 * Posición de una tarjeta según su distancia a la del frente (offset).
 * offset 0 = al frente; 1 y 2 = asomando en abanico; 3+ = aparcadas fuera.
 * Cambia estos valores para abrir/cerrar el abanico.
 */
function slot(offset: number) {
  switch (offset) {
    case 0: return { xPercent: 0, yPercent: 0, scale: 1, rotation: 0, opacity: 1, zIndex: 30 }
    case 1: return { xPercent: 14, yPercent: 9, scale: 0.92, rotation: 5, opacity: 0.5, zIndex: 20 }
    case 2: return { xPercent: 26, yPercent: 18, scale: 0.84, rotation: 10, opacity: 0.22, zIndex: 10 }
    default: return { xPercent: 150, yPercent: 0, scale: 0.8, rotation: 18, opacity: 0, zIndex: 0 }
  }
}

/**
 * Galería en forma de baraja: las tarjetas se van pasando solas (y con las
 * flechas). Click en la del frente -> visor; click en una de atrás -> la trae.
 */
export default function MediaDeck({ items }: MediaDeckProps) {
  const total = items.length
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [paused, setPaused] = useState(false)

  const cardRefs = useRef<(HTMLButtonElement | null)[]>([])
  const firstRun = useRef(true)

  // Coloca cada tarjeta en su hueco (instantáneo la 1ª vez, animado después).
  useLayoutEffect(() => {
    cardRefs.current.forEach((el, i) => {
      if (!el) return
      const offset = (i - active + total) % total
      gsap.to(el, {
        ...slot(offset),
        duration: firstRun.current ? 0 : 0.6,
        ease: 'power3.inOut',
        overwrite: true,
      })
    })
    firstRun.current = false
  }, [active, total])

  // Autoplay: las tarjetas avanzan solas (pausado al pasar el ratón o con el visor abierto).
  useEffect(() => {
    if (paused || lightbox !== null || total <= 1) return
    const id = window.setInterval(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [paused, lightbox, total])

  const move = (dir: number) => setActive((a) => (a + dir + total) % total)

  return (
    <div
      className="deck"
      data-fade
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="deck__stack">
        {items.map((item, i) => {
          const offset = (i - active + total) % total
          return (
            <button
              key={item.id}
              ref={(el) => { cardRefs.current[i] = el }}
              className="deck__card"
              style={{ background: item.color }}
              onClick={() => (offset === 0 ? setLightbox(i) : setActive(i))}
              aria-label={item.label}
            >
              {item.type === 'image' && (
                <img className="deck__media" src={item.src} alt={item.label} />
              )}
              {item.type === 'video' && (
                <>
                  <video className="deck__media" src={item.src} muted playsInline preload="metadata" />
                  <span className="deck__badge">▶</span>
                </>
              )}
              {/* 'placeholder': se ve el color de fondo de la tarjeta. */}
              <span className="deck__label">{item.label}</span>
            </button>
          )
        })}

        {/* Controles manuales sobre la propia baraja (no añaden altura). */}
        {total > 1 && (
          <>
            <button className="deck__nav deck__nav--prev" onClick={() => move(-1)} aria-label="Tarjeta anterior">‹</button>
            <button className="deck__nav deck__nav--next" onClick={() => move(1)} aria-label="Tarjeta siguiente">›</button>
            <span className="deck__counter">{active + 1} / {total}</span>
          </>
        )}
      </div>

      {lightbox !== null && (
        <MediaLightbox items={items} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}
    </div>
  )
}
