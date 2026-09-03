import type { FlipBookContent } from '../../types/flipbook/content'

/**
 * Contenido centralizado del flipbook de la portada (página principal).
 * Sustituye el texto/medias que estaban hardcodeados en FlipBook.tsx.
 */
export const flipbookContent: FlipBookContent = {
  cover: {
    image: '/images/portada.png',
    alt: 'Portada del libro',
    label: 'EDICIÓN 2026',
    titleLines: ['COCHA', 'LA MEJOR CIUDAD', 'DE BOLIVIA'],
    subtitle: 'Historia, transformación y futuro',
    author: 'Alcaldía de Cochabamba',
  },

  backCover: {
    title: 'COCHABAMBA',
    subtitle: 'La mejor ciudad de Bolivia',
    author: 'Alcaldía de Cochabamba',
    edition: 'Edición 2026',
  },

  pages: [
    {
      id: 'presentacion',
      blocks: [
        { type: 'eyebrow', text: 'PRESENTACIÓN' },
        { type: 'heading', text: 'Una ciudad que mira hacia el futuro' },
        {
          type: 'paragraph',
          lead: true,
          text:
            'Cochabamba es una ciudad que ha sabido crecer, transformarse y mirar hacia el futuro sin olvidar su historia.',
        },
        {
          type: 'paragraph',
          text:
            'Este libro recorre diferentes momentos de la ciudad, sus transformaciones, sus obras y las iniciativas que forman parte de una visión de Cochabamba moderna, integrada y preparada para las nuevas generaciones.',
        },
        {
          type: 'quote',
          text:
            '“La historia de una ciudad también se cuenta a través de sus obras, sus espacios y su gente.”',
        },
      ],
    },
    {
      id: 'crecimiento',
      blocks: [
        { type: 'eyebrow', text: 'HISTORIA' },
        { type: 'heading', text: 'Cómo ha crecido Cochabamba' },
        {
          type: 'paragraph',
          lead: true,
          text: 'De una ciudad de ayer a una ciudad que mira al futuro.',
        },
        {
          type: 'paragraph',
          text:
            'Las fotografías cuentan aquello que muchas veces las palabras no pueden explicar: el paso del tiempo y la transformación de una ciudad.',
        },
        {
          type: 'paragraph',
          text:
            'Cochabamba conserva en sus calles, plazas, barrios y edificios la memoria de lo que fue, pero también muestra, en cada avenida y espacio renovado, el impulso de una ciudad que comenzó a proyectarse hacia el futuro.',
        },
      ],
    },
    {
      id: 'galeria-historica',
      blocks: [
        { type: 'eyebrow', text: 'GALERÍA' },
        { type: 'heading', text: 'Cochabamba de ayer' },
        {
          type: 'image',
          src: '/images/foto1.png',
          alt: 'Cochabamba histórica',
          caption: 'Fotografías comparativas de Cochabamba a través de los años.',
        },
      ],
    },
    {
      id: 'nueva-cochabamba',
      blocks: [
        { type: 'eyebrow', text: 'UNA NUEVA ETAPA' },
        { type: 'heading', text: 'El inicio de una nueva Cochabamba' },
        {
          type: 'paragraph',
          lead: true,
          text: 'Manfred Reyes Villa, visión moderna de ciudad y planificación urbana.',
        },
        {
          type: 'paragraph',
          text:
            'Con la llegada de una nueva etapa de gestión municipal, Cochabamba comenzó a plantearse un desafío distinto: dejar de responder únicamente a las necesidades del presente y empezar a planificar la ciudad que sus habitantes necesitarían en el futuro.',
        },
      ],
    },
    {
      id: 'obras-memorias',
      blocks: [
        { type: 'eyebrow', text: 'MEMORIA' },
        { type: 'heading', text: 'Las obras son memorias' },
        { type: 'paragraph', lead: true, text: 'Cada obra forma parte de la historia de una ciudad.' },
        {
          type: 'paragraph',
          text:
            'La transformación de Cochabamba durante los años 90 no puede entenderse únicamente a través de una lista de obras.',
        },
        {
          type: 'paragraph',
          text:
            'Cada avenida, parque, puente, plaza y programa social representa una parte de la historia de una ciudad que comenzaba a mirar más allá de su presente.',
        },
        {
          type: 'paragraph',
          text:
            'Cada proyecto refleja una época en la que Cochabamba comenzó a imaginarse como una ciudad moderna, integrada y con vocación de futuro.',
        },
      ],
    },
    {
      id: 'puentes-historicos',
      blocks: [
        { type: 'eyebrow', text: 'INFRAESTRUCTURA' },
        { type: 'heading', text: 'Pioneros en pasos a desnivel y puentes' },
        {
          type: 'list',
          items: [
            'Puente Cala Cala — 1993',
            'Puente Los Andes entre las serranías de Cerro Verde y San Miguel — 1993',
            'Puente Kyllmann — 1994',
            'Viaducto — 1996',
            'Puente Antezana — 1996',
            'Puente Muyurina — 2004',
          ],
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'conectividad',
      blocks: [
        { type: 'eyebrow', text: 'CONECTIVIDAD' },
        { type: 'heading', text: 'Motor del crecimiento urbano' },
        {
          type: 'paragraph',
          text: 'La infraestructura vial ha sido uno de los principales motores del crecimiento de Cochabamba.',
        },
        { type: 'subheading', text: 'Asfalto y pavimento rígido' },
        {
          type: 'list',
          compact: true,
          items: [
            'Suecia',
            "Cap. Ustariz",
            "D'Orbigni",
            'Melchor Pérez',
            'Independencia',
            'Petrolera',
            'Gabriel René Moreno',
            'Beijing',
          ],
        },
      ],
    },
    {
      id: 'ciudad-jardin',
      blocks: [
        { type: 'eyebrow', text: 'CIUDAD JARDÍN' },
        { type: 'heading', text: 'Áreas verdes y parques' },
        {
          type: 'list',
          items: [
            'Parque de Educación Vial',
            'Parque del Niño',
            'Parque Mariscal Santa Cruz — 1998',
            'Parque Kanata',
            'Parque San Pedro',
            'Plaza 14 de Septiembre',
            'Plaza Colón',
            'Plaza Recoleta',
            'Plaza Quintanilla',
            'Plaza de las Banderas',
          ],
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'desayuno-escolar',
      blocks: [
        { type: 'eyebrow', text: 'DESARROLLO SOCIAL' },
        { type: 'heading', text: 'Pioneros en el desayuno escolar' },
        { type: 'paragraph', lead: true, text: '1994' },
        {
          type: 'paragraph',
          text:
            'Cochabamba fue pionera en la implementación del Desayuno Escolar en Bolivia, logrando que esta iniciativa se instituyera a nivel nacional en beneficio de miles de estudiantes.',
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'hitos-historicos',
      blocks: [
        { type: 'eyebrow', text: 'HITOS' },
        { type: 'heading', text: 'Una ciudad pionera' },
        {
          type: 'list',
          items: [
            'Iluminación: cambio de luces de mercurio a sodio — 1994',
            'Misicuni: el sueño del agua que Cochabamba no dejó de perseguir',
            'Defensorías Municipales de la Niñez y Adolescencia — 1997',
            'Cristo de la Concordia — 1994',
            'Primer Teleférico de Bolivia — 1999',
            'Día del Peatón y del Ciclista — 1999',
            'Ciclovía — 1999',
          ],
        },
      ],
    },
    {
      id: 'nueva-etapa-2021',
      blocks: [
        { type: 'eyebrow', text: '2021' },
        { type: 'heading', text: 'Cuando una ciudad vuelve a soñar en grande' },
        { type: 'paragraph', lead: true, text: 'Las obras se convierten en el camino hacia el futuro.' },
        {
          type: 'paragraph',
          text: 'En 2021, Cochabamba inició una nueva etapa de transformación urbana y social.',
        },
        {
          type: 'paragraph',
          text:
            'La experiencia acumulada y una visión de ciudad moderna volvieron a encontrarse con las necesidades de una población que exigía soluciones concretas.',
        },
        {
          type: 'paragraph',
          text:
            'Agua, salud, educación, movilidad, medio ambiente, cultura, tecnología, deporte y desarrollo productivo se convirtieron en parte de una agenda municipal orientada a recuperar espacios, modernizar servicios y llevar obras a los distintos distritos.',
        },
      ],
    },
    {
      id: 'salud',
      blocks: [
        { type: 'eyebrow', text: 'SALUD' },
        { type: 'heading', text: 'Salud de calidad' },
        {
          type: 'paragraph',
          text:
            'La emergencia sanitaria dejó una enseñanza: la infraestructura y el equipamiento médico pueden marcar la diferencia entre la vida y la muerte.',
        },
        {
          type: 'list',
          items: [
            'Primera Planta Criogénica Municipal de Oxígeno — Hospital del Norte',
            'Unidades de Terapia Intensiva — Hospital del Norte y Sud',
            'Red Municipal de Ambulancias — línea gratuita 162',
            'Tomógrafo — Hospital Cochabamba',
            'Neonatología — Hospital Cochabamba',
            'Torre Laparoscópica — Hospital del Sud',
            'Mamógrafo — Hospital del Norte',
          ],
        },
      ],
    },
    {
      id: 'salud-cont',
      blocks: [
        { type: 'eyebrow', text: 'SALUD' },
        { type: 'heading', text: 'Más servicios para la población' },
        {
          type: 'list',
          items: [
            'Fichaje Virtual — INNOVA',
            'Salud Sobre Ruedas — atención médica gratuita',
            'Campañas de cirugías gratuitas de manos y pies “Manitos Arriba”',
            'Centro de Salud Ambulatorio “Gloria” — D.9',
            'Centro de Salud Integral Villa Israel — D.9',
            'Clínica Veterinaria y Centro Municipal de Rehabilitación y Adiestramiento Canino — Zona Chimba',
          ],
        },
      ],
    },
    {
      id: 'agua',
      blocks: [
        { type: 'eyebrow', text: 'AGUA' },
        { type: 'heading', text: 'Cobertura de agua potable' },
        { type: 'paragraph', lead: true, text: 'Una deuda social convertida en desafío.' },
        {
          type: 'paragraph',
          text: 'Garantizar agua significa garantizar salud, dignidad y oportunidades.',
        },
        {
          type: 'paragraph',
          text:
            'La ampliación de redes, sistemas de abastecimiento, colectores y proyectos de saneamiento se convirtió en uno de los principales desafíos de la gestión municipal.',
        },
        {
          type: 'list',
          items: [
            'Planta de tratamiento de aguas residuales de Albarrancho',
            'Renovación del sistema de agua potable del centro de la ciudad',
            'Cobertura del 96% de agua potable',
            'Ampliaciones y renovaciones de servicios básicos',
            'Emisario Sud Este',
            'Hidrantes',
            'Colector Av. 6 de Agosto',
            'Colector Av. Ayacucho',
          ],
        },
      ],
    },
    {
      id: 'recreacion',
      blocks: [
        { type: 'eyebrow', text: 'RECREACIÓN' },
        { type: 'heading', text: 'Cochabamba, Ciudad Jardín' },
        {
          type: 'paragraph',
          text:
            'La Ciudad Jardín y de la Eterna Primavera renueva su esencia con plazas, parques y espacios llenos de color y vegetación.',
        },
        {
          type: 'paragraph',
          text:
            'La recuperación de áreas verdes, la creación de nuevos espacios de encuentro y la implementación del Plan Maestro de Forestación y Reforestación Municipal, Bosques Urbanos y Arborización consolidan a la ciudad como un verdadero pulmón ecológico.',
        },
        {
          type: 'list',
          items: [
            'Parque de la Integración — D.9',
            'Plaza Julio León Prado — D.10',
            'Prado Av. Humberto Asín',
            'Casa de Piedra',
            'Jardineras centrales y áreas verdes',
          ],
        },
      ],
    },
    {
      id: 'parques-bosques',
      blocks: [
        { type: 'eyebrow', text: 'ESPACIOS VERDES' },
        { type: 'heading', text: 'Parques y bosques urbanos' },
        {
          type: 'list',
          items: [
            'Parque Familia',
            'Parque Vial',
            'Parque El Pulpo',
            'Parque Autonomía',
            'Parque Bicentenario',
            'Parque Oblitas',
            'Parque Kanata',
            'Parque Mariscal Santa Cruz',
          ],
        },
        { type: 'subheading', text: 'Bosques urbanos' },
        {
          type: 'paragraph',
          text: 'Fidel Anze · Lincoln · Excombatientes · Demetrio Canelas · Esferas Florales',
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'medio-ambiente',
      blocks: [
        { type: 'eyebrow', text: 'MEDIO AMBIENTE' },
        { type: 'heading', text: 'Un compromiso con el futuro ecológico' },
        { type: 'paragraph', text: 'La llajta avanza hacia un futuro más verde, limpio y sostenible.' },
        {
          type: 'paragraph',
          text:
            'La protección del medio ambiente se ha convertido en un compromiso con las presentes y futuras generaciones, impulsando acciones para recuperar áreas naturales, mejorar la calidad del aire, promover una movilidad sostenible y fortalecer la conciencia ambiental.',
        },
        {
          type: 'paragraph',
          lead: true,
          text: 'Construir una mejor ciudad también significa proteger el agua, cuidar el aire y recuperar la naturaleza.',
        },
      ],
    },
    {
      id: 'ciudad-sostenible',
      blocks: [
        { type: 'eyebrow', text: 'COCHA CIUDAD SOSTENIBLE' },
        { type: 'heading', text: 'Acciones ambientales' },
        {
          type: 'list',
          items: [
            'Cierre definitivo de ladrilleras',
            'Plan Maestro de Ciclovías',
            'Centro de Inspección Vehicular Ambiental — CIVAM',
            'Centro de Educación Ambiental Municipal — CEAM',
            '“Rompiendo Aceras” — iniciativa de arborización urbana',
            'Manfred Reyes Villa — “Embajador de la Organización Mundial Ciudades Sostenibles 2026” — París, Francia',
          ],
        },
      ],
    },
    {
      id: 'espejos-agua',
      blocks: [
        { type: 'eyebrow', text: 'MEDIO AMBIENTE' },
        { type: 'heading', text: 'Nuestros espejos de agua' },
        {
          type: 'paragraph',
          text:
            'Cochabamba vuelve a mirar hacia sus espejos de agua como espacios de vida, encuentro y recreación.',
        },
        {
          type: 'paragraph',
          text:
            'La recuperación de la Laguna Alalay y Coña Coña se convirtió en uno de los grandes desafíos ambientales de la ciudad.',
        },
        {
          type: 'paragraph',
          text:
            'Las labores de dragado y tratamiento en Alalay permitieron avanzar en la recuperación del espejo de agua y del ecosistema asociado.',
        },
        {
          type: 'list',
          items: ['Dragado y recuperación de la Laguna Alalay', 'Complejo Recreacional Coña Coña — D.4'],
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'educacion',
      blocks: [
        { type: 'eyebrow', text: 'EDUCACIÓN' },
        { type: 'heading', text: 'Educación integral' },
        {
          type: 'paragraph',
          text:
            'El gobierno municipal ha destinado importantes esfuerzos a la construcción, ampliación y mejoramiento de infraestructuras educativas.',
        },
        {
          type: 'paragraph',
          text:
            'Cada aula renovada y cada espacio equipado representan una apuesta por el talento, los sueños y las capacidades de las nuevas generaciones.',
        },
        { type: 'subheading', text: 'Nuevas infraestructuras' },
        {
          type: 'list',
          compact: true,
          items: [
            'U.E. Buenas Nuevas A-B — D.6',
            'U.E. Innova Belén — D.15',
            'U.E. San Pedro Secundaria — D.9',
            'U.E. René Barrientos “B” — D.8',
            'U.E. San Pedrito — Inicial y Primaria — D.9',
            'U.E. Oscar Rojas Caballero — D.5',
            'U.E. Club de Leones — D.2',
          ],
        },
      ],
    },
    {
      id: 'educacion-cont',
      blocks: [
        { type: 'eyebrow', text: 'EDUCACIÓN' },
        { type: 'heading', text: 'Más oportunidades para aprender' },
        {
          type: 'list',
          compact: true,
          items: [
            'U.E. Taquiña A-B — D.13',
            'U.E. 27 de Mayo — D.10',
            'U.E. Genoveva Ríos — D.2',
            'U.E. Ángel Honorato Salazar — D.5',
            'U.E. Bolivia “B” — D.9',
            'Ampliación y mejoramiento de infraestructuras educativas',
            'Alimentación Complementaria Escolar, desde el primer día de clases',
            'Entrega de mobiliario educativo',
            'Internet gratuito para Unidades Educativas',
            '500 km de fibra óptica propia',
          ],
        },
      ],
    },
    {
      id: 'infraestructura-vial',
      blocks: [
        { type: 'eyebrow', text: 'INFRAESTRUCTURA VIAL' },
        { type: 'heading', text: 'Cochabamba conectada' },
        { type: 'paragraph', lead: true, text: 'Infraestructura vial para una ciudad que avanza.' },
        {
          type: 'paragraph',
          text:
            'Puentes, distribuidores, pavimento rígido, asfaltos, recarpetados y nuevas conexiones buscan responder a una ciudad que crece y necesita desplazarse mejor.',
        },
        {
          type: 'list',
          items: [
            'Distribuidor Quintanilla',
            'Distribuidor Av. Perú y Av. Blanco Galindo',
            'Reposición de la plataforma del “Puente caído”',
            'Pavimento rígido Av. París — D.8',
            'Pavimento rígido Av. Pisiga — D.14',
            'Pavimento rígido Av. Segunda Circunvalación',
            'Pavimento rígido Av. Humberto Asín — D.8',
          ],
        },
      ],
    },
    {
      id: 'infraestructura-vial-2',
      blocks: [
        { type: 'eyebrow', text: 'CONEXIONES' },
        { type: 'heading', text: 'Nuevas vías y conexiones' },
        {
          type: 'list',
          compact: true,
          items: [
            'Pavimento rígido Av. Costanera del Sur — D.9',
            'Pavimento rígido Av. Segunda — D.3',
            'Pavimento rígido Av. de la Integración — D.9',
            'Micropavimento',
            'Asfalto Av. Circunvalación Oeste — Parque Bicentenario',
            'Recarpetado Av. Villarroel',
            'Recarpetado Av. Santa Cruz',
            'Recarpetado Av. Juana Azurduy',
            'Recarpetado Av. Pando',
            'Reconfiguración rotonda Muyurina — D.11',
            'Túnel de la Integración entre Cercado y Sacaba',
            'Instalación de postes dodecágonos en principales avenidas',
          ],
        },
      ],
    },
    {
      id: 'vanguardia',
      blocks: [
        { type: 'eyebrow', text: 'INNOVACIÓN' },
        { type: 'heading', text: 'Cochabamba a la vanguardia del progreso' },
        {
          type: 'paragraph',
          text:
            'La ciudad avanza con soluciones innovadoras que mejoran la vida cotidiana, recuperan y hacen más accesibles los espacios públicos, optimizan los servicios y fortalecen su infraestructura.',
        },
        {
          type: 'list',
          items: [
            'Contenedores soterrados',
            'Cambio de aceras inclusivas en el Casco Viejo',
            'Renovación de Alumbrado Público a tecnología LED',
            'Construcción del Edificio Municipal — D.10',
            'Accesos a la Nueva Terminal de Buses — D.5 y D.9',
          ],
        },
      ],
    },
    {
      id: 'alianzas-app',
      blocks: [
        { type: 'eyebrow', text: 'DESARROLLO' },
        { type: 'heading', text: 'Pioneros en alianzas público privadas' },
        { type: 'paragraph', text: 'Cuando las ideas se suman, el desarrollo multiplica su fuerza.' },
        {
          type: 'paragraph',
          text:
            'El municipio abre nuevas oportunidades a través de alianzas que unen la visión pública con la iniciativa privada, convirtiendo proyectos en espacios para el encuentro, la inversión, el entretenimiento y el desarrollo económico.',
        },
        { type: 'subheading', text: 'FEXCO' },
        {
          type: 'list',
          items: [
            'Feria Exposición Internacional de Cochabamba',
            'Pórtico de acceso principal',
            'Pabellón Kanata',
            'Pabellón del Emprendedor y Artesanos',
            'Ampliación Plaza de Comidas',
            'FEXCO Arena',
            'Auditorio FEXCO',
            'Karting',
          ],
        },
      ],
    },
    {
      id: 'turismo-app',
      blocks: [
        { type: 'eyebrow', text: 'TURISMO Y DESARROLLO' },
        { type: 'heading', text: 'Nuevas experiencias' },
        {
          type: 'list',
          compact: true,
          items: [
            'Construcción Complejo Deportivo de Pádel',
            'Iluminación camino al Cristo de la Concordia',
            'Jardín Botánico — destino nacional',
            'Café de experiencia Casona Santivañez',
            'Café de experiencia Teatro Achá',
            'Restaurante Temático Casona Mayorazgo',
            'Restaurante Casa de Piedra',
            'Tirolesa en la serranía de San Pedro',
            'Parque de Diversiones FEXCO',
            'Hotel para mascotas y horno crematorio',
          ],
        },
      ],
    },
    {
      id: 'destino-turistico',
      blocks: [
        { type: 'eyebrow', text: 'TURISMO' },
        { type: 'heading', text: 'Cochabamba se visita, se vive' },
        {
          type: 'paragraph',
          text:
            'La ciudad de la eterna primavera cautiva con un clima privilegiado, paisajes que invitan a quedarse, parques y espacios que respiran naturaleza, y una gastronomía que convierte cada plato en parte de su identidad.',
        },
        {
          type: 'paragraph',
          text: 'Pero su mayor atractivo está en su gente: amable, trabajadora y orgullosa de sus raíces.',
        },
        {
          type: 'list',
          items: [
            '14 Estaciones del Viacrucis',
            'Pórtico de ingreso y renovación de 1.400 escalinatas',
            'Restaurante Patrimonio',
            'Apoyo al Evento Madness',
            'Carnaval de la Concordia',
            'Cochabamba, Ciudad de la Navidad',
            'Feria de la Chicha y el Chicharrón',
          ],
        },
      ],
    },
    {
      id: 'turismo-cont',
      blocks: [
        { type: 'eyebrow', text: 'DESTINOS' },
        { type: 'heading', text: 'Historia, cultura y naturaleza' },
        {
          type: 'list',
          compact: true,
          items: ['Pasaje Portales', 'Casonas', 'Coronilla', 'Gastronomía', 'Leuquepampa — miradores', 'Tunari'],
        },
        {
          type: 'quote',
          text: '“Cochabamba es una experiencia que se vive, se disfruta y siempre invita a volver.”',
        },
      ],
    },
    {
      id: 'ciudad-inteligente',
      blocks: [
        { type: 'eyebrow', text: 'TECNOLOGÍA' },
        { type: 'heading', text: 'Cochabamba, primera ciudad inteligente de Bolivia' },
        {
          type: 'paragraph',
          text: 'La tecnología se convierte en servicio cuando está al alcance de todos.',
        },
        {
          type: 'paragraph',
          text:
            'La ciudad avanza hacia una nueva forma de vivir y gestionar la ciudad, incorporando innovación, conectividad y herramientas digitales para hacer más ágiles los servicios municipales y acercarlos a la población.',
        },
        {
          type: 'paragraph',
          text:
            'La digitalización de trámites, pagos QR, internet gratuito y una red propia de 500 kilómetros de fibra óptica conectan escuelas, centros de salud, plazas y espacios públicos.',
        },
      ],
    },
    {
      id: 'servicios-digitales',
      blocks: [
        { type: 'eyebrow', text: 'INNOVACIÓN' },
        { type: 'heading', text: 'Servicios digitales' },
        {
          type: 'list',
          compact: true,
          items: [
            'Digitalización de servicios municipales',
            'Permisos de viaje',
            'CochaMarket',
            'Visita Cocha',
            'Pagos QR a través de la app INNOVA',
            'Semáforos inteligentes sonoros',
            'Paneles LED y señalética inteligente',
            'Fortalecimiento del talento tecnológico',
            'Centro de Atención Virtual y línea gratuita 151',
          ],
        },
      ],
    },
    {
      id: 'fibra-optica',
      blocks: [
        { type: 'eyebrow', text: 'CONECTIVIDAD DIGITAL' },
        { type: 'heading', text: 'Una ciudad conectada' },
        { type: 'stat', value: '500 KM', label: 'de red de fibra óptica' },
        {
          type: 'list',
          compact: true,
          items: [
            'Internet gratuito y WiFi libre',
            'Interconexión de 150 establecimientos educativos',
            '33 centros de salud',
            '50 puntos WiFi libre',
            'Plazas, áreas verdes y zonas turísticas e históricas conectadas',
          ],
        },
      ],
    },
    {
      id: 'cultura',
      blocks: [
        { type: 'eyebrow', text: 'CULTURA' },
        { type: 'heading', text: 'Revalorización de la cultura' },
        {
          type: 'paragraph',
          text:
            'Cochabamba guarda en sus calles, monumentos, teatros y en la música de su gente una identidad que atraviesa generaciones.',
        },
        {
          type: 'paragraph',
          text:
            'Hoy, esa memoria vuelve a cobrar vida con la preservación de la Torre de la Catedral Metropolitana, la restauración del Teatro Achá y el fortalecimiento de la Orquesta Sinfónica, los Coros y la Banda Municipal.',
        },
        {
          type: 'list',
          items: [
            'Preservación Torre Catedral Metropolitana',
            'Orquesta Sinfónica Municipal',
            'Coro Municipal y Coro de Niños',
            'Restauración del Teatro Achá',
            'Recuperación de espacio para la construcción del Teatro Municipal — D.12',
            'Banda Municipal',
          ],
        },
      ],
    },
    {
      id: 'deporte',
      blocks: [
        { type: 'eyebrow', text: 'DEPORTE' },
        { type: 'heading', text: 'Semillero de campeones' },
        {
          type: 'paragraph',
          text: 'Cada deportista comienza con un sueño, una oportunidad y un espacio para entrenar.',
        },
        {
          type: 'paragraph',
          text: 'La Alcaldía de Cochabamba impulsa el deporte como una escuela de disciplina, esfuerzo y superación.',
        },
        {
          type: 'list',
          items: [
            'Apoyo y fomento al deporte',
            'Dotación de material deportivo',
            'Trofeos y reconocimientos',
            'Campeonatos internacionales, nacionales, departamentales y municipales',
            'Campos deportivos y canchas múltiples',
            'Juegos Universitarios “Cap. Manfred Reyes Villa”',
          ],
        },
      ],
    },
    {
      id: 'deporte-cont',
      blocks: [
        { type: 'eyebrow', text: 'DEPORTE' },
        { type: 'heading', text: 'Espacios para nuevos campeones' },
        {
          type: 'list',
          compact: true,
          items: [
            'Escuelas deportivas municipales',
            'Reapertura piscina Julio León Prado',
            'Complejo Deportivo Los Pinos Japón — D.1',
          ],
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'proteccion-social',
      blocks: [
        { type: 'eyebrow', text: 'INCLUSIÓN' },
        { type: 'heading', text: 'Protección social e inclusión' },
        { type: 'paragraph', text: 'Una ciudad que avanza no deja a nadie atrás.' },
        {
          type: 'paragraph',
          text:
            'Se fortalece una política social centrada en las personas, promoviendo igualdad de oportunidades, protección y acompañamiento para niñas, niños, adolescentes y familias.',
        },
        {
          type: 'list',
          items: [
            'Ley Municipal de Corresponsabilidad en el Trabajo del Cuidado no Remunerado',
            'Centros Infantiles Municipales',
            'Ludotecas Municipales',
            'Parvulario Municipal',
            'Línea de Atención al Adolescente — LIA',
            'Centro de Atención Integral a la Familia — CAIF',
          ],
        },
      ],
    },
    {
      id: 'inclusion-cont',
      blocks: [
        { type: 'eyebrow', text: 'INCLUSIÓN' },
        { type: 'heading', text: 'Una ciudad para todos' },
        { type: 'paragraph', text: 'Cuidar, escuchar y acompañar también es transformar la ciudad.' },
        {
          type: 'list',
          items: [
            'Centros Infantiles Municipales',
            'Ludotecas Municipales',
            'Parvulario Edificio Municipal',
            'Línea de Atención al Adolescente — LIA',
            'Centro de Atención Integral a la Familia — CAIF',
            'Línea de emergencias inclusivas con interpretación en señas',
          ],
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'productiva',
      blocks: [
        { type: 'eyebrow', text: 'DESARROLLO PRODUCTIVO' },
        { type: 'heading', text: 'Cochabamba productiva' },
        { type: 'paragraph', lead: true, text: 'Oportunidades para todos.' },
        {
          type: 'paragraph',
          text:
            'La Alcaldía de Cochabamba fortalece su vocación productiva apoyando a quienes trabajan la tierra, impulsando la producción agropecuaria y generando espacios dignos para la comercialización y el encuentro.',
        },
        {
          type: 'list',
          items: [
            'Entrega de semillas',
            'Campañas de desparasitación',
            'Vitaminización y sanidad animal',
            '“Noches Creativas”',
            '“Cocha se reactiva”',
            'Ferias “CochaEmprende”',
          ],
        },
      ],
    },
    {
      id: 'mercados',
      blocks: [
        { type: 'eyebrow', text: 'ECONOMÍA LOCAL' },
        { type: 'heading', text: 'Mercados y espacios de encuentro' },
        {
          type: 'list',
          items: [
            'Mercado Integración del Sur',
            'Conclusión del Mercado Coraca — D.4',
            'Construcción Mercado Calatayud',
            'Construcción Mercado Papa Paulo',
            'Construcción Plaza de Comidas Islas del Sur — D.6',
          ],
        },
        { type: 'video', src: '/videos/video.mp4' },
      ],
    },
    {
      id: 'derecho-propietario',
      blocks: [
        { type: 'eyebrow', text: 'FAMILIAS' },
        { type: 'heading', text: 'Cochabamba sigue construyendo su historia' },
        {
          type: 'paragraph',
          text:
            'A través de la regularización del derecho propietario mediante las Resoluciones Administrativas Municipales (RAMs) y el programa “Mi Casa Segura”, Cochabamba avanza en la consolidación de hogares con mayor seguridad jurídica y patrimonial.',
        },
        {
          type: 'paragraph',
          text:
            'Porque detrás de cada documento existe una historia, un esfuerzo y el sueño de una familia de llamar suyo al lugar que construyó.',
        },
        { type: 'quote', text: '“Regularizar un hogar es también construir tranquilidad y futuro.”' },
      ],
    },
    {
      id: 'cierre',
      blocks: [
        { type: 'eyebrow', text: 'CIERRE' },
        { type: 'heading', text: 'Una historia que sigue escribiéndose' },
        {
          type: 'paragraph',
          lead: true,
          text: 'De los primeros puentes a la tecnología; de los parques a los hospitales; del agua a las grandes avenidas.',
        },
        { type: 'paragraph', text: 'La historia de Cochabamba sigue escribiéndose.' },
        {
          type: 'quote',
          text: '“Porque una obra puede cambiar un lugar. Pero una visión puede cambiar una ciudad.”',
        },
      ],
    },
  ],
}
