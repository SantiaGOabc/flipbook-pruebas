import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import type { BookSection } from '../../types/book/content'

/**
 * Panel inferior tipo app móvil (bottom sheet) para el responsive de los
 * sliders. Muestra el número grande, el título, la descripción y los ítems
 * de la sección.
 *
 *  - Sin interacción: queda plegado mostrando solo un "disparador" (handle).
 *  - Deslizando HACIA ARRIBA se abre (muestra el texto completo).
 *  - Deslizando HACIA ABAJO se cierra (vuelve a plegarse).
 *  - Un toque en el handle también alterna abrir/cerrar.
 *
 * Se oculta por completo en escritorio (solo se ve en tablets/móvil), donde
 * el texto va en las dos columnas habituales.
 */

interface MobileSheetProps {
  section: BookSection
  /** Número de la sección (1-based). */
  number: number
}

const CLOSED = 0
const OPENED = 1

const MobileSheet = forwardRef<HTMLDivElement, MobileSheetProps>(({ section, number }, ref) => {
  const [open, setOpen] = useState(false)

  // Referencias para el gesto de arrastre (pointer events).
  const dragRef = useRef<{
    startY: number
    startOpen: boolean
    dragging: boolean
    moved: boolean
  }>({ startY: 0, startOpen: false, dragging: false, moved: false })
  const sheetRef = useRef<HTMLDivElement | null>(null)

  // Estado "abierto" en una variable para leerlo dentro del handler.
  const openRef = useRef(open)
  openRef.current = open

  // Cierra el panel al cambiar de sección.
  useEffect(() => {
    setOpen(false)
  }, [section.id])

  const apply = useCallback((toOpen: boolean) => {
    setOpen(toOpen)
    const el = sheetRef.current
    if (el) {
      const body = el.querySelector<HTMLElement>('[data-sheet-body]')
      el.style.transform = toOpen ? 'translateY(0)' : `translateY(calc(100% - 64px))`
      if (body) body.style.transform = toOpen ? 'translateY(0)' : 'translateY(0)'
    }
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    dragRef.current = {
      startY: e.clientY,
      startOpen: openRef.current,
      dragging: true,
      moved: false,
    }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const d = dragRef.current
    if (!d.dragging) return
    const dy = e.clientY - d.startY
    if (Math.abs(dy) > 4) d.moved = true
    const el = sheetRef.current
    if (!el) return
    // Arrastrar hacia arriba (dy negativo) abre; hacia abajo cierra.
    const delta = d.startOpen ? dy : Math.max(dy, -300)
    const base = d.startOpen ? 0 : -300
    el.style.transform = `translateY(${base + delta}px)`
  }, [])

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    const d = dragRef.current
    if (!d.dragging) return
    d.dragging = false
    const el = sheetRef.current
    if (!el) return
    const dy = e.clientY - d.startY
    // Decide: si se movió lo suficiente hacia arriba -> abierto; si hacia
    // abajo -> cerrado. Sin arrastre (toque simple) se alterna con el handle.
    if (d.moved) {
      apply(d.startOpen ? dy < -40 : dy < -70)
    } else {
      apply(!d.startOpen)
    }
  }, [apply])

  const eyebrow = section.title.split(':')[0]

  return (
    <div
      className={`sheet ${open ? 'is-open' : 'is-closed'}`}
      ref={(el) => {
        sheetRef.current = el
        if (typeof ref === 'function') ref(el)
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = el
      }}
      style={{ transform: 'translateY(calc(100% - 64px))' }}
    >
      {/* Zona de arrastre disparador */}
      <div
        className="sheet__handle"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        <span className="sheet__grip" />
        <span className="sheet__hint">{open ? 'Desliza para cerrar' : section.title}</span>
      </div>

      {/* Cuerpo del texto */}
      <div className="sheet__body" data-sheet-body>
        <div className="rvl">
          <div className="rvl__i">
            <span className="sheet__index">{String(number).padStart(2, '0')}</span>
          </div>
        </div>

        <div className="rvl">
          <div className="rvl__i">
            <span className="sheet__eyebrow">{eyebrow}</span>
          </div>
        </div>

        <div className="rvl">
          <div className="rvl__i">
            <h2 className="sheet__title">{section.title}</h2>
          </div>
        </div>

        {section.description && (
          <div className="rvl">
            <div className="rvl__i">
              <p className="sheet__desc">{section.description}</p>
            </div>
          </div>
        )}

        {section.items.length > 0 && (
          <ul className="sheet__items">
            {section.items.map((item) => (
              <li key={item.text}>{item.text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
})

MobileSheet.displayName = 'MobileSheet'
export default MobileSheet
