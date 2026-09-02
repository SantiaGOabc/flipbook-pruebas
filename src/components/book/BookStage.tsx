import { Suspense, forwardRef, lazy, useEffect, useImperativeHandle, useRef, useState } from 'react'
import type { BookContent } from '../../types/book/content'

/** Métodos del flipbook que usamos desde el padre (vía ref). */
export interface BookStageRef {
  flip: (page: number) => void
  flipNext: () => void
  flipPrev: () => void
  getPageCount: () => number | undefined
}

// El flipbook sólo se carga en el navegador (usa APIs del DOM).
const ReactFlipBook = lazy(() =>
  import('@vuvandinh203/react-flipbook').then((m) => ({ default: m.ReactFlipBook }))
)

const DESKTOP_MIN_WIDTH = 900

interface BookStageProps {
  content: BookContent
  /** Se llama cuando el flipbook termina de inicializarse. */
  onReady?: () => void
}

/**
 * El libro en sí. Cada sección es una hoja decorativa (portadilla): el
 * contenido real se muestra en <ContentOverlay />. Se controla desde el padre
 * con el ref: bookRef.current.flip(pagina).
 */
const BookStage = forwardRef<BookStageRef, BookStageProps>(({ content, onReady }, ref) => {
  const isDesktop = useIsDesktop()
  // Ref interno al componente de la librería (su API tiene más métodos que BookStageRef).
  const flipRef = useRef<any>(null)

  useImperativeHandle(ref, () => ({
    flip: (page: number) => flipRef.current?.flip(page),
    flipNext: () => flipRef.current?.flipNext(),
    flipPrev: () => flipRef.current?.flipPrev(),
    getPageCount: () => flipRef.current?.getPageCount(),
  }))

  return (
    <div className="stage__book">
      <Suspense fallback={<div className="stage__loading" />}>
        <ReactFlipBook
          ref={flipRef}
          // key: si cambia orientación (móvil/escritorio) el libro se reconstruye.
          key={isDesktop ? 'desktop' : 'mobile'}
          style={{ width: '100%', height: '100%' }}
          width={500}
          height={700}
          minWidth={300}
          maxWidth={900}
          minHeight={420}
          maxHeight={820}
          size="stretch"
          // Empieza pasada la portada: el ojeo muestra sólo hojas, nunca la tapa.
          startPage={4}
          showCover={false}
          usePortrait={!isDesktop}
          drawShadow
          // Volteo rápido para que el ojeo se sienta veloz.
          flippingTime={300}
          // La navegación la maneja el overlay, no el propio libro.
          useMouseEvents={false}
          showPageCorners={false}
          disableFlipByClick
          enableKeyboardNav={false}
          showNavigationButtons={false}
          onInit={() => onReady?.()}
        >
          <div className="stage-page stage-cover">
            <span className="stage-cover__label">{content.subtitle}</span>
            <h1 className="stage-cover__title">{content.title}</h1>
          </div>

          {content.sections.map((section, i) => (
            <div className="stage-page" key={section.id}>
              <span className="stage-page__eyebrow">{section.title.split(':')[0]}</span>
              <h2 className="stage-page__title">{section.title}</h2>
              <span className="stage-page__index">{String(i + 1).padStart(2, '0')}</span>
            </div>
          ))}

          <div className="stage-page stage-back">
            <h2>{content.title}</h2>
            <span>Edición 2026</span>
          </div>
        </ReactFlipBook>
      </Suspense>
    </div>
  )
})

BookStage.displayName = 'BookStage'
export default BookStage

/** Devuelve true en pantallas anchas (para abrir el libro a doble página). */
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_MIN_WIDTH}px)`)
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isDesktop
}
