export interface BookItem {
  text: string
  hasVideo?: boolean
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
