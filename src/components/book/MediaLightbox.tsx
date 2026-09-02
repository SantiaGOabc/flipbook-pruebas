import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import type { MediaItem } from './media'

interface MediaLightboxProps {
  items: MediaItem[]
  startIndex: number
  onClose: () => void
}

/** Visor a pantalla completa. Se abre al hacer click en un medio de la galería. */
export default function MediaLightbox({ items, startIndex, onClose }: MediaLightboxProps) {
  const [index, setIndex] = useState(startIndex)
  const current = items[index]

  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const goNext = () => setIndex((i) => (i + 1) % items.length)

  // Cerrar con Escape y navegar con las flechas del teclado.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Se monta en <body> (portal): así ocupa TODA la pantalla y no lo limita
  // ningún contenedor con transform del slider.
  return createPortal(
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">
        &times;
      </button>

      {items.length > 1 && (
        <>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); goPrev() }}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); goNext() }}
            aria-label="Siguiente"
          >
            ›
          </button>
        </>
      )}

      {/* stopPropagation para que el click sobre el medio no cierre el visor. */}
      <figure className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
        {current.type === 'image' && (
          <img className="lightbox__media" src={current.src} alt={current.label} />
        )}

        {current.type === 'video' && (
          <video className="lightbox__media" src={current.src} controls autoPlay playsInline />
        )}

        {current.type === 'placeholder' && (
          <div className="lightbox__box" style={{ background: current.color }}>
            <span>Imagen ilustrativa</span>
          </div>
        )}

        <figcaption className="lightbox__caption">
          {current.label}
          {items.length > 1 && (
            <span className="lightbox__count">{index + 1} / {items.length}</span>
          )}
        </figcaption>
      </figure>
    </div>,
    document.body,
  )
}
