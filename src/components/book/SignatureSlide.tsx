import { forwardRef } from 'react'

/**
 * Hoja final del slider: cierra con la "firma" del alcalde.
 *
 * "Manfred Reyes Villa" se dibuja letra a letra (efecto escritura por steps)
 * en tipografía cursiva y elegante, centrada. La animación de dibujado la
 * orquesta <ContentOverlay/> según la dirección:
 *   - adelante: se escribe de izquierda a derecha (por steps)
 *   - atrás:    se des-dibuja de derecha a izquierda (inversa)
 *
 * Por eso cada letra va en un <tspan>: GSAP los anima (opacity/stagger) y al
 * revertir la línea de tiempo respeta el orden inverso.
 */

// La firma separada en letras (las flechas ` -> ` las funden en la SVG).
const FULL_NAME = 'Manfred Reyes Villa'

const SignatureSlide = forwardRef<HTMLDivElement, Record<string, never>>((_props, ref) => {
  const words = FULL_NAME.split(' ')

  return (
    <div className="slide signature" ref={ref}>
      <div className="signature__wrap">
        <p className="signature__kicker">Un legado que se escribe</p>

        <svg
          className="signature__svg"
          viewBox="0 0 1600 300"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={FULL_NAME}
        >
          <text
            className="signature__text"
            textAnchor="middle"
            x="800"
            y="185"
          >
            {words.map((word, wi) => (
              <tspan key={wi} xmlSpace="preserve">
                {wi > 0 ? ' ' : ''}
                {word.split('').map((char, ci) => (
                  <tspan key={ci} className="signature__char">{char}</tspan>
                ))}
              </tspan>
            ))}
          </text>
        </svg>

        <div className="signature__rule" />
        <p className="signature__role">Alcalde de Cochabamba</p>
        <p className="signature__span">2007 – 2010 · 2021 – en adelante</p>
      </div>
    </div>
  )
})

SignatureSlide.displayName = 'SignatureSlide'
export default SignatureSlide
