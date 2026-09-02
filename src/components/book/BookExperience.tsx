import { useCallback, useEffect, useRef, useState } from 'react'
import '../../styles/experience.css'
import { bookContent } from '../../constants/book/content'
import BookStage from './BookStage'
import type { BookStageRef } from './BookStage'
import IntroPanel from './IntroPanel'
import ContentOverlay from './ContentOverlay'

/**
 * Orquesta las 3 fases de la experiencia:
 *
 *   intro    -> textos + libro decorativo + botón "Iniciar la experiencia"
 *   opening  -> el libro va al centro, se abre y se ojea hasta la primera hoja
 *   reading  -> el contenido aparece "salido de la hoja" y se navega con flechas
 *
 * La fase se refleja en la clase del contenedor (.is-intro / .is-opening /
 * .is-reading) y experience.css se encarga de las animaciones.
 */

type Phase = 'intro' | 'opening' | 'reading'

// Tiempos del ojeo del libro (ms). Bajo = más rápido.
const OPEN_DELAY = 120       // margen para que el flipbook termine de montarse
const RIFFLE_STEPS = 6       // cuántas hojas se pasan volando
const RIFFLE_INTERVAL = 90   // pausa entre hoja y hoja (muy corta = ojeo veloz)
const SETTLE_DELAY = 140     // tras el ojeo, antes de mostrar el contenido

const sections = bookContent.sections
const FIRST_CONTENT_PAGE = 1 // referencia para sincronizar el libro con la sección

export default function BookExperience() {
  const [phase, setPhase] = useState<Phase>('intro')
  const [index, setIndex] = useState(0)   // sección visible
  const [direction, setDirection] = useState(1) // 1 = siguiente, -1 = anterior
  const [navCount, setNavCount] = useState(0)    // sube en cada click (elige animación)
  const [bookReady, setBookReady] = useState(false)

  const bookRef = useRef<BookStageRef>(null)
  // true mientras corre una transición: bloquea nuevos clicks.
  const busyRef = useRef(false)

  const start = () => setPhase('opening')

  // Precarga el código del flipbook mientras se lee la intro, para que al
  // pulsar "Iniciar" el ojeo empiece al instante.
  useEffect(() => {
    import('@vuvandinh203/react-flipbook')
  }, [])

  // Red de seguridad: si onInit no llega, damos el libro por listo igualmente.
  useEffect(() => {
    if (phase === 'intro') return
    const t = window.setTimeout(() => setBookReady(true), 700)
    return () => window.clearTimeout(t)
  }, [phase])

  // Fase "opening": ojear el libro rápido (sólo hojas, sin portada) y entrar a leer.
  useEffect(() => {
    if (phase !== 'opening' || !bookReady) return

    let riffleTimer: number
    let steps = 0

    const openTimer = window.setTimeout(() => {
      riffleTimer = window.setInterval(() => {
        bookRef.current?.flipNext()
        steps++
        if (steps >= RIFFLE_STEPS) {
          window.clearInterval(riffleTimer)
          window.setTimeout(() => {
            setIndex(0)
            setPhase('reading')
          }, SETTLE_DELAY)
        }
      }, RIFFLE_INTERVAL)
    }, OPEN_DELAY)

    return () => {
      window.clearTimeout(openTimer)
      window.clearInterval(riffleTimer)
    }
  }, [phase, bookReady])

  // Cambiar de sección. `delta` es +1 (siguiente) o -1 (anterior).
  // La animación la hace <ContentOverlay/>; aquí sólo movemos el estado y el libro.
  const goTo = useCallback((delta: number) => {
    if (busyRef.current) return
    const next = index + delta
    if (next < 0 || next >= sections.length) return
    busyRef.current = true
    setIndex(next)
    setDirection(delta)
    setNavCount((c) => c + 1)
    bookRef.current?.flip(next + FIRST_CONTENT_PAGE)
  }, [index])

  // Se llama cuando la transición del slider termina: desbloquea la navegación.
  const handleRest = useCallback(() => {
    busyRef.current = false
  }, [])

  // Flechas del teclado durante la lectura.
  useEffect(() => {
    if (phase !== 'reading') return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goTo(1)
      if (e.key === 'ArrowLeft') goTo(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [phase, goTo])

  return (
    <div className={`experience is-${phase}`}>
      {/* Se mantiene durante 'opening' para que se desvanezca en vez de cortar. */}
      {phase !== 'reading' && <IntroPanel onStart={start} />}

      {/* El flipbook real sólo se monta al arrancar (en la intro se ve el
          libro decorativo). Así se evita el parpadeo de carga. */}
      {phase !== 'intro' && (
        <div className="experience__stage">
          <BookStage
            ref={bookRef}
            content={bookContent}
            onReady={() => setBookReady(true)}
          />
        </div>
      )}

      {phase === 'reading' && (
        <ContentOverlay
          sections={sections}
          index={index}
          direction={direction}
          navKey={navCount}
          canPrev={index > 0}
          canNext={index < sections.length - 1}
          onPrev={() => goTo(-1)}
          onNext={() => goTo(1)}
          onRest={handleRest}
        />
      )}
    </div>
  )
}
