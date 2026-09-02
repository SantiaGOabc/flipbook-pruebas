import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import type { BookSection } from '../../types/book/content'
import SectionSlide from './SectionSlide'
import SignatureSlide from './SignatureSlide'
import { TRANSITIONS, revealChildren, hideReveal } from './transitions'

interface ContentOverlayProps {
  sections: BookSection[]
  /** Página del slider: 0..sections.length (la última es la firma). */
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

/** La página pasada a `sections.length` es la hoja de la firma. */

/**
 * Slider de contenido por delante del libro. Usa doble buffer: una capa
 * "frontal" con la hoja actual y una capa "trasera" que sólo existe durante
 * la transición. GSAP anima ambas y, al terminar, la trasera pasa a frontal.
 */
export default function ContentOverlay({
  sections, index, direction, navKey,
  canPrev, canNext, onPrev, onNext, onRest,
}: ContentOverlayProps) {
  const total = sections.length
  // Hoja "confirmada" que se ve en la capa frontal.
  const [committed, setCommitted] = useState({ navKey, index })
  const inTransition = navKey !== committed.navKey

  const frontRef = useRef<HTMLDivElement>(null)
  const backRef = useRef<HTMLDivElement>(null)

  const frontIsSig = committed.index >= total
  const backIsSig = index >= total

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

    const tl = gsap.timeline()

    if (committed.index >= total) {
      // Vamos ATRÁS: la firma se des-dibuja (de derecha a izquierda) y vuelve el cierre.
      if (outgoing) tl.add(signatureOut(outgoing), 0)
      if (incoming) tl.fromTo(incoming, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.15)
      tl.add(revealChildren(incoming), 0.25)
    } else if (index >= total) {
      // Vamos ADELANTE hacia la firma: el cierre se desvanece y la firma se escribe.
      if (outgoing) tl.to(outgoing, { opacity: 0, duration: 0.4, ease: 'power2.in' }, 0)
      tl.add(signatureIn(incoming), 0.15)
    } else {
      const run = TRANSITIONS[navKey % TRANSITIONS.length]
      tl.add(run({ incoming, outgoing, direction }))
    }

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
        {frontIsSig
          ? <SignatureSlide ref={frontRef} />
          : <SectionSlide ref={frontRef} section={sections[committed.index]} number={committed.index + 1} />}
        {inTransition && (backIsSig
          ? <SignatureSlide ref={backRef} />
          : <SectionSlide ref={backRef} section={sections[index]} number={index + 1} />)}
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

/**
 * Dibuja la firma "por steps", letra a letra de izquierda a derecha.
 * Devuelve la línea de tiempo para que ContentOverlay la inserte en la suya.
 */
function signatureIn(el: HTMLElement): gsap.core.Timeline {
  const tl = gsap.timeline()
  const chars = el.querySelectorAll('.signature__text tspan')
  if (chars.length) {
    tl.from(chars, { opacity: 0, duration: 0.14, ease: 'none', stagger: { each: 0.06, from: 'start' } })
  }
  return tl
}

/**
 * Des-dibuja la firma en orden inverso (de derecha a izquierda), para "ir
 * para atrás" como pide el usuario.
 */
function signatureOut(el: HTMLElement): gsap.core.Timeline {
  const tl = gsap.timeline()
  const chars = el.querySelectorAll('.signature__text tspan')
  if (chars.length) {
    tl.to(chars, { opacity: 0, duration: 0.12, ease: 'none', stagger: { each: 0.05, from: 'end' } })
  }
  return tl
}
