/**
 * Tipo de bloque de contenido dentro de una página del flipbook.
 * Cubre todos los diseños que hoy existen en FlipBook.tsx hardcodeados:
 * portada, eyebrow, títulos, leads, párrafos, listas, citas, estadísticas,
 * imágenes y videos.
 */
export type FlipBlock =
  | { type: 'eyebrow'; text: string }
  | { type: 'heading'; text: string; section?: boolean }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string; lead?: boolean; caption?: boolean }
  | { type: 'list'; items: string[]; compact?: boolean }
  | { type: 'quote'; text: string }
  | { type: 'stat'; value: string; label: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'video'; src: string }

/** Una página (hoja) del libro. */
export interface FlipPage {
  id: string
  /** Clase extra sobre la página (ej: 'back-cover' para la contraportada). */
  className?: string
  blocks: FlipBlock[]
}

/** Portada real del libro: imagen de fondo + texto encima. */
export interface FlipCover {
  image: string
  alt: string
  /** Etiqueta pequeña superior (ej: "EDICIÓN 2026"). */
  label: string
  /** Líneas del título grande. */
  titleLines: string[]
  subtitle: string
  author: string
}

/** Contraportada. */
export interface FlipBackCover {
  title: string
  subtitle: string
  author: string
  edition: string
}

export interface FlipBookContent {
  cover: FlipCover
  backCover: FlipBackCover
  pages: FlipPage[]
}
