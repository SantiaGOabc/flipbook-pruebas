import type { BookSection } from '../../types/book/content'

/**
 * Convierte una sección del libro en una lista de "medios" para la galería.
 *
 * Reglas (de más específica a más general):
 *  1. El ítem tiene `image`  -> tile de imagen real.
 *  2. El ítem tiene `video`  -> tile de video real.
 *  3. El ítem tiene `hasVideo` (sin URL) -> tile de video usando el video de ejemplo.
 *  4. Cualquier otro caso    -> cuadro de color, "imaginando" que ahí hay una imagen.
 *
 * Si la sección no tiene ítems, se devuelve un único cuadro de color con el título.
 */

export type MediaType = 'image' | 'video' | 'placeholder'

export interface MediaItem {
  id: string
  type: MediaType
  label: string
  /** Sólo para 'image' y 'video': URL del recurso. */
  src?: string
  /** Color de fondo del cuadro (siempre presente). */
  color: string
}

// Medios de ejemplo mientras content.ts no tenga URLs reales.
// Borra estas constantes (y su uso más abajo) cuando cargues los medios definitivos.
const SAMPLE_VIDEO = '/videos/video.mp4'

// Paleta para los cuadros de color. Añade o cambia colores libremente.
const PLACEHOLDER_COLORS = [
  '#7c3aed', '#0ea5e9', '#f59e0b', '#10b981',
  '#ef4444', '#3b82f6', '#ec4899', '#14b8a6',
]

/** Elige un color estable a partir de un texto (el mismo texto -> el mismo color). */
function pickColor(text: string): string {
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0
  }
  return PLACEHOLDER_COLORS[Math.abs(hash) % PLACEHOLDER_COLORS.length]
}

export function getSectionMedia(section: BookSection): MediaItem[] {
  const media = section.items.map((item, index): MediaItem => {
    const id = `${section.id}-${index}`
    const color = pickColor(section.id + item.text)

    if (item.image) {
      return { id, type: 'image', label: item.text, src: item.image, color }
    }
    if (item.video) {
      return { id, type: 'video', label: item.text, src: item.video, color }
    }
    if (item.hasVideo) {
      return { id, type: 'video', label: item.text, src: SAMPLE_VIDEO, color }
    }
    return { id, type: 'placeholder', label: item.text, color }
  })

  if (media.length > 0) return media

  // Sección sin ítems: un cuadro de color que representa la foto de la sección.
  return [{
    id: `${section.id}-0`,
    type: 'placeholder',
    label: section.title,
    color: pickColor(section.id),
  }]
}
