/**
 * ═══════════════════════════════════════════════════════════════════
 *  ADAPTER DE MEDIOS – Rutas centralizadas de imágenes y videos
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Si necesitas renombrar, mover o reemplazar un archivo de media,
 *  SOLO cambia la ruta aquí. El resto del código se actualiza solo.
 *
 *  Convención:
 *    - Imágenes → /images/alcalde/*.jpg, /images/gente/*.jpg
 *    - Videos   → /videos/book/*.mp4
 * ═══════════════════════════════════════════════════════════════════
 */

/* ────────────── BASES (cambia aquí si reorganizas carpetas) ────── */
const IMG_ALCALDE = '/images/alcalde'
const IMG_GENTE   = '/images/gente'
const VIDEO_BOOK  = '/videos/book'

/* ────────────── PORTADA ────────────── */
export const COVER_IMAGE = '/images/portada.png'

/* ────────────── FOTO DEL ALCALDE (cierre / sección firma) ────── */
export const MAYOR_PHOTO = '/images/alcalde.webp'

/* ────────────── VIDEO DE FALLBACK (items con hasVideo sin URL propia) ────── */
export const SAMPLE_VIDEO = `${VIDEO_BOOK}/01_playa_turquesa.mp4`

/* ════════════════════════════════════════════════════════════════════
 *  VIDEOS – Asignados por contenido real del archivo
 * ════════════════════════════════════════════════════════════════════ */

/** Playa Turquesa – Complejo Recreacional Coña Coña */
export const V_PLAYA_TURQUESA      = `${VIDEO_BOOK}/01_playa_turquesa.mp4`
/** Laguna Alalay – Dragado y recuperación */
export const V_LAGUNA_ALALAY        = `${VIDEO_BOOK}/02_laguna_alalay.mp4`
/** Accesos Nueva Terminal de Buses */
export const V_TERMINAL_BUSES      = `${VIDEO_BOOK}/03_accesos_nueva_terminal_de_buses.mp4`
/** FEXCO Arena */
export const V_FEXCO_ARENA         = `${VIDEO_BOOK}/04_fexco_arena.mp4`
/** Permiso de Viaje Digital */
export const V_PERMISO_VIAJE       = `${VIDEO_BOOK}/05_permiso_de_viaje_digital.mp4`
/** Cocha Market */
export const V_COCHA_MARKET        = `${VIDEO_BOOK}/06_cocha_market.mp4`
/** Clínica Veterinaria Municipal */
export const V_CLINICA_VETERINARIA = `${VIDEO_BOOK}/07_clinica_veterinaria_municipal.mp4`

/* ════════════════════════════════════════════════════════════════════
 *  IMÁGENES – Rutas por carpeta
 * ════════════════════════════════════════════════════════════════════ */

/* ── Fotos del alcalde (formales) ──────────────────────────────── */
export const IMG_ALCALDE_1 = `${IMG_ALCALDE}/DSC_0802.jpg`
export const IMG_ALCALDE_2 = `${IMG_ALCALDE}/DSC_0792.jpg`
export const IMG_ALCALDE_3 = `${IMG_ALCALDE}/DSC_0807.jpg`
export const IMG_ALCALDE_4 = `${IMG_ALCALDE}/DSC_0819.jpg`
export const IMG_ALCALDE_5 = `${IMG_ALCALDE}/DSC_0790.jpg`
export const IMG_ALCALDE_6 = `${IMG_ALCALDE}/6P9A0583.jpg`
export const IMG_ALCALDE_7 = `${IMG_ALCALDE}/IMG_0643.jpg`

/** Array ordenado de todas las fotos del alcalde (para iterar). */
export const ALCALDE_PHOTOS = [
  IMG_ALCALDE_1, IMG_ALCALDE_2, IMG_ALCALDE_3,
  IMG_ALCALDE_4, IMG_ALCALDE_5, IMG_ALCALDE_6, IMG_ALCALDE_7,
] as const

/* ── Fotos del alcalde con la gente ────────────────────────────── */
export const IMG_GENTE_1  = `${IMG_GENTE}/IMG_0455.jpg`
export const IMG_GENTE_2  = `${IMG_GENTE}/IMG_1088.jpg`
export const IMG_GENTE_3  = `${IMG_GENTE}/IMG_0655.jpg`
export const IMG_GENTE_4  = `${IMG_GENTE}/615408712_1448890453462194_3542619835815169117_n.jpg`
export const IMG_GENTE_5  = `${IMG_GENTE}/618256839_1459986802352559_4544324257238850894_n.jpg`
export const IMG_GENTE_6  = `${IMG_GENTE}/IMG_2406.jpg`
export const IMG_GENTE_7  = `${IMG_GENTE}/IMG_1215.jpg`
export const IMG_GENTE_8  = `${IMG_GENTE}/IMG_1916.jpg`
export const IMG_GENTE_9  = `${IMG_GENTE}/IMG_2650.jpg`
export const IMG_GENTE_10 = `${IMG_GENTE}/IMG_2941.jpg`
export const IMG_GENTE_11 = `${IMG_GENTE}/IMG_3890.jpg`
export const IMG_GENTE_12 = `${IMG_GENTE}/IMG_4043.jpg`
export const IMG_GENTE_13 = `${IMG_GENTE}/IMG_4511.jpg`
export const IMG_GENTE_14 = `${IMG_GENTE}/IMG_4807.jpg`
export const IMG_GENTE_15 = `${IMG_GENTE}/IMG_1498.jpg`
export const IMG_GENTE_16 = `${IMG_GENTE}/apoyo de la gente al alcalde.jpg`

/** Array ordenado de todas las fotos de la gente (para iterar). */
export const GENTE_PHOTOS = [
  IMG_GENTE_1, IMG_GENTE_2, IMG_GENTE_3, IMG_GENTE_4, IMG_GENTE_5,
  IMG_GENTE_6, IMG_GENTE_7, IMG_GENTE_8, IMG_GENTE_9, IMG_GENTE_10,
  IMG_GENTE_11, IMG_GENTE_12, IMG_GENTE_13, IMG_GENTE_14, IMG_GENTE_15,
  IMG_GENTE_16,
] as const
