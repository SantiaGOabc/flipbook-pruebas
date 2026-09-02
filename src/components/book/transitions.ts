import gsap from 'gsap'

// Fuerza aceleración por GPU en todas las animaciones -> menos parpadeos.
gsap.defaults({ force3D: true })

/**
 * Transiciones GSAP del slider de contenido.
 *
 * Cada transición:
 *   1. `hideReveal(incoming)` esconde el texto y las tarjetas de la hoja nueva.
 *   2. Mueve la hoja que SALE y la que ENTRA (el "gesto" grande, distinto en
 *      cada click).
 *   3. `revealChildren(incoming)` hace que el texto aparezca "de golpe" desde
 *      detrás de una máscara (efecto tipo scroll-reveal) y las tarjetas entren.
 *
 * Marcado que se anima:
 *   [data-reveal] -> texto: sube desde detrás de su contenedor (overflow: hidden)
 *   [data-fade]   -> bloques (galería de tarjetas): aparecen con un leve empuje
 *
 * Para añadir una animación: crea una `Transition` y métela en `TRANSITIONS`.
 */

export interface TransitionContext {
  incoming: HTMLElement
  outgoing: HTMLElement | null
  direction: number // 1 = siguiente (entra por la derecha), -1 = anterior
}

export type Transition = (ctx: TransitionContext) => gsap.core.Timeline

/** Deja el texto/tarjetas de una hoja en su estado "escondido" inicial. */
export function hideReveal(el: HTMLElement): void {
  gsap.set(el.querySelectorAll('[data-reveal]'), { yPercent: 115 })
  gsap.set(el.querySelectorAll('[data-fade]'), { opacity: 0, y: 28 })
  gsap.set(el.querySelectorAll('[data-slide-in]'), { xPercent: -100 })
}

/** Revela el texto (máscara) y las tarjetas de una hoja. */
export function revealChildren(el: HTMLElement, at: number | string = 0): gsap.core.Timeline {
  const tl = gsap.timeline()
  const masked = el.querySelectorAll('[data-reveal]')
  const faded = el.querySelectorAll('[data-fade]')
  const slid = el.querySelectorAll('[data-slide-in]')
  const fadeAt = typeof at === 'number' ? at + 0.15 : at

  if (masked.length) {
    tl.to(masked, { yPercent: 0, duration: 0.7, ease: 'power4.out', stagger: 0.09 }, at)
  }
  if (slid.length) {
    tl.to(slid, { xPercent: 0, duration: 0.9, ease: 'power3.out' }, at)
  }
  if (faded.length) {
    tl.to(faded, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, fadeAt)
  }
  return tl
}

// 1 · Deslizamiento limpio.
const slide: Transition = ({ incoming, outgoing, direction }) => {
  hideReveal(incoming)
  const tl = gsap.timeline()
  if (outgoing) tl.to(outgoing, { xPercent: -100 * direction, opacity: 0, duration: 0.6, ease: 'power3.inOut' }, 0)
  tl.fromTo(incoming, { xPercent: 100 * direction }, { xPercent: 0, duration: 0.6, ease: 'power3.inOut' }, 0)
  tl.add(revealChildren(incoming), 0.28)
  return tl
}

// 2 · Empujón con rebote.
const push: Transition = ({ incoming, outgoing, direction }) => {
  hideReveal(incoming)
  const tl = gsap.timeline()
  if (outgoing) tl.to(outgoing, { xPercent: -55 * direction, scale: 0.9, opacity: 0, duration: 0.5, ease: 'power2.in' }, 0)
  tl.fromTo(incoming, { xPercent: 115 * direction, scale: 0.94 }, { xPercent: 0, scale: 1, duration: 0.8, ease: 'back.out(1.4)' }, 0)
  tl.add(revealChildren(incoming), 0.3)
  return tl
}

// 3 · Cortina con clip-path.
const wipe: Transition = ({ incoming, outgoing, direction }) => {
  hideReveal(incoming)
  const from = direction > 0 ? 'inset(0% 100% 0% 0%)' : 'inset(0% 0% 0% 100%)'
  const tl = gsap.timeline()
  if (outgoing) tl.to(outgoing, { xPercent: -12 * direction, opacity: 0, duration: 0.5, ease: 'power2.in' }, 0)
  tl.fromTo(incoming, { clipPath: from, xPercent: 10 * direction }, { clipPath: 'inset(0% 0% 0% 0%)', xPercent: 0, duration: 0.75, ease: 'power4.inOut' }, 0)
  tl.add(revealChildren(incoming), 0.3)
  return tl
}

// 4 · Cinemático: entra inclinada y se endereza.
const skew: Transition = ({ incoming, outgoing, direction }) => {
  hideReveal(incoming)
  const tl = gsap.timeline()
  if (outgoing) tl.to(outgoing, { xPercent: -60 * direction, skewX: 8 * direction, opacity: 0, duration: 0.55, ease: 'power2.in' }, 0)
  tl.fromTo(
    incoming,
    { xPercent: 115 * direction, skewX: -12 * direction, scale: 1.08 },
    { xPercent: 0, skewX: 0, scale: 1, duration: 0.85, ease: 'expo.out' },
    0,
  )
  tl.add(revealChildren(incoming), 0.35)
  return tl
}

// 5 · Zoom suave ("cámara que se acerca"). Sin blur para evitar parpadeos.
const zoom: Transition = ({ incoming, outgoing, direction }) => {
  hideReveal(incoming)
  const tl = gsap.timeline()
  if (outgoing) tl.to(outgoing, { scale: 1.18, opacity: 0, duration: 0.5, ease: 'power2.in' }, 0)
  tl.fromTo(
    incoming,
    { scale: 0.9, opacity: 0, xPercent: 18 * direction },
    { scale: 1, opacity: 1, xPercent: 0, duration: 0.7, ease: 'power3.out' },
    0,
  )
  tl.add(revealChildren(incoming), 0.3)
  return tl
}

/** Orden en el que se alternan las animaciones (una por click). */
export const TRANSITIONS: Transition[] = [slide, push, wipe, skew, zoom]
