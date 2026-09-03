export interface BookItem {
  text: string
  /** Marca la sección/ítem como "tiene video" aunque todavía no haya URL. */
  hasVideo?: boolean
  /** URL real de una imagen (ej: '/images/foto1.png'). Opcional. */
  image?: string
  /** URL real de un video (ej: '/videos/video.mp4'). Opcional. */
  video?: string
}

export interface BookSection {
  id: string
  title: string
  description?: string
  items: BookItem[]
}

export interface BookContent {
  /** Ciudad protagonista (título grande de la portada/intro). */
  city: string
  /** Etiqueta pequeña sobre el título (ej: país). */
  badge: string
  /** Slogan o línea secundaria bajo el título. */
  tagline: string
  /** Descripción introductoria de la experiencia. */
  intro: string
  /** Año de la edición (mostrado como etiqueta). */
  year: string
  /** Título largo de la portada del libro. */
  title: string
  /** Subtítulo de la portada del libro. */
  subtitle: string
  /** Media de la portada del libro (opcional). */
  cover?: {
    image?: string
    video?: string
  }
  sections: BookSection[]
}
