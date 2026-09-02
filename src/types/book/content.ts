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
  title: string
  subtitle: string
  sections: BookSection[]
}
