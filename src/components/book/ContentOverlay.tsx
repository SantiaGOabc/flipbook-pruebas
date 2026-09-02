import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import type { BookSection } from '../../types/book/content'
import SectionSlide from './SectionSlide'
import { TRANSITIONS, revealChildren, hideReveal } from './transitions'

interface ContentOverlayProps {
  sections: BookSection[]
  index: number
  /** 1 = fuimos a "siguiente", -1 = "anterior". */
  direction: number
  /** Sube en cada click. Elige qué animación de TRANSITIONS se usa. */
  navKey: number
  canPrev: boolean
  canNext: boolean
  onPrev: () => void
  onNext: () => void
  /** Se llama cuando termina la animación (el padre desbloquea la navegación). */
  onRest: () => void
}

/**
 * Slider de contenido por delante del libro. Usa doble buffer: una capa
 * "frontal" con la hoja actual y una capa "trasera" que sólo existe durante
 * la transición. GSAP anima ambas y, al terminar, la trasera pasa a frontal.
 */
export default function ContentOverlay({
  sections, index, direction, navKey,
  canPrev, canNext, onPrev, onNext, onRest,
}: ContentOverlayProps) {
  // Hoja "confirmada" que se ve en la capa frontal.
  const [committed, setCommitted] = useState({ navKey, index })
  const inTransition = navKey !== committed.navKey

  const frontRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)

  // Entrada de la primera hoja al pasar a la fase de lectura.
  useLayoutEffect(() => {
    if (!frontRef.current) return
    hideReveal(frontRef.current)
    const tl = gsap.timeline()
    tl.from(frontRef.current, { opacity: 0, duration: 0.35, ease: 'power2.out' })
    tl.add(revealChildren(frontRef.current), 0.1)
    return () => { tl.kill() }
  }, [])

  useLayoutEffect(() => {
    if (navKey === committed.navKey) return

    const incoming = backRef.current
    const outgoing = frontRef.current
    if (!incoming) return

    const run = TRANSITIONS[navKey % TRANSITIONS.length]
    const tl = run({ incoming, outgoing, direction })

    tl.eventCallback('onComplete', () => {
      gsap.set([incoming, outgoing].filter(Boolean) as HTMLElement[], { clearProps: 'all' })
      setCommitted({ navKey, index })
      onRest()
    })

    return () => { tl.kill() }
    // Sólo navKey dispara la transición; index/direction se leen de este render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navKey])

  return (
    <div className="experience__overlay">
      <button
        className="nav-arrow nav-arrow--prev"
        onClick={onPrev}
        disabled={!canPrev || inTransition}
        aria-label="Hoja anterior"
      >
        ‹
      </button>

      <div className="slide-stage">
        <SectionSlide ref={frontRef} section={sections[committed.index]} number={committed.index + 1} />
        {inTransition && <SectionSlide ref={backRef} section={sections[index]} number={index + 1} />}
      </div>

      <button
        className="nav-arrow nav-arrow--next"
        onClick={onNext}
        disabled={!canNext || inTransition}
        aria-label="Hoja siguiente"
      >
        ›
      </button>
    </div>
  )
}
