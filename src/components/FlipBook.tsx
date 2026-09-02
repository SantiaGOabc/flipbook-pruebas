import React, { Suspense, lazy, useEffect, useState } from 'react';
import '../styles/flipbook.css';

const ReactFlipBook = lazy(() =>
  import('@vuvandinh203/react-flipbook').then((module) => ({
    default: module.ReactFlipBook,
  }))
);

const BREAKPOINT = 900;

function useDesktopMode() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isDesktop;
}

export default function FlipBook() {
  const isDesktop = useDesktopMode();

  return (
    <div className="book-wrapper">
      <Suspense fallback={<div className="loading">Cargando libro...</div>}>

        <ReactFlipBook
          key={isDesktop ? 'desktop' : 'mobile'}
          className="book-stage"
          style={{ width: '100%', height: '100%' }}
          width={500}
          height={700}
          minWidth={220}
          maxWidth={1200}
          minHeight={320}
          maxHeight={900}
          size="stretch"
          usePortrait={!isDesktop}
          showNavigationButtons={true}
          showPageNumbers={true}
          enableKeyboardNav={true}
          showCover={true}
          startPage={0}
          flippingTime={800}
          mobileScrollSupport={true}
          swipeDistance={20}
        >

          {/* =====================================================
              PORTADA
          ====================================================== */}

          <div
            style={{ backgroundColor: '#b50e0e' }}
            className="cover"
          >
            <img
              src="/images/portada.png"
              alt="Portada del libro"
              className="cover-image"
            />

            <div className="cover-overlay"></div>

            <div className="cover-content">
              <span className="cover-label">
                EDICIÓN 2026
              </span>

              <h1>
                COCHA
                <br />
                LA MEJOR CIUDAD
                <br />
                DE BOLIVIA
              </h1>

              <p>
                Historia, transformación y futuro
              </p>

              <div className="cover-line"></div>

              <span className="cover-author">
                Alcaldía de Cochabamba
              </span>
            </div>
          </div>


          {/* =====================================================
              PRESENTACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                PRESENTACIÓN
              </span>

              <h2>
                Una ciudad que mira hacia el futuro
              </h2>

              <p className="lead">
                Cochabamba es una ciudad que ha sabido crecer,
                transformarse y mirar hacia el futuro sin olvidar
                su historia.
              </p>

              <p>
                Este libro recorre diferentes momentos de la ciudad,
                sus transformaciones, sus obras y las iniciativas
                que forman parte de una visión de Cochabamba
                moderna, integrada y preparada para las nuevas
                generaciones.
              </p>

              <div className="quote">
                “La historia de una ciudad también se cuenta
                a través de sus obras, sus espacios y su gente.”
              </div>

            </div>
          </div>


          {/* =====================================================
              COCHABAMBA AYER Y HOY
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                HISTORIA
              </span>

              <h2>
                Cómo ha crecido Cochabamba
              </h2>

              <p className="lead">
                De una ciudad de ayer a una ciudad que mira al futuro.
              </p>

              <p>
                Las fotografías cuentan aquello que muchas veces
                las palabras no pueden explicar: el paso del tiempo
                y la transformación de una ciudad.
              </p>

              <p>
                Cochabamba conserva en sus calles, plazas, barrios
                y edificios la memoria de lo que fue, pero también
                muestra, en cada avenida y espacio renovado, el
                impulso de una ciudad que comenzó a proyectarse
                hacia el futuro.
              </p>

            </div>
          </div>


          {/* =====================================================
              GALERÍA HISTÓRICA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                GALERÍA
              </span>

              <h2>
                Cochabamba de ayer
              </h2>

              <img
                src="/images/foto1.png"
                alt="Cochabamba histórica"
                className="content-image"
              />

              <p className="caption">
                Fotografías comparativas de Cochabamba
                a través de los años.
              </p>

            </div>
          </div>


          {/* =====================================================
              NUEVA COCHABAMBA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                UNA NUEVA ETAPA
              </span>

              <h2>
                El inicio de una nueva Cochabamba
              </h2>

              <p className="lead">
                Manfred Reyes Villa, visión moderna de ciudad
                y planificación urbana.
              </p>

              <p>
                Con la llegada de una nueva etapa de gestión
                municipal, Cochabamba comenzó a plantearse un
                desafío distinto: dejar de responder únicamente
                a las necesidades del presente y empezar a
                planificar la ciudad que sus habitantes
                necesitarían en el futuro.
              </p>

            </div>
          </div>


          {/* =====================================================
              LAS OBRAS SON MEMORIAS
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                MEMORIA
              </span>

              <h2>
                Las obras son memorias
              </h2>

              <p className="lead">
                Cada obra forma parte de la historia de una ciudad.
              </p>

              <p>
                La transformación de Cochabamba durante los años
                90 no puede entenderse únicamente a través de
                una lista de obras.
              </p>

              <p>
                Cada avenida, parque, puente, plaza y programa
                social representa una parte de la historia de
                una ciudad que comenzaba a mirar más allá de
                su presente.
              </p>

              <p>
                Cada proyecto refleja una época en la que
                Cochabamba comenzó a imaginarse como una ciudad
                moderna, integrada y con vocación de futuro.
              </p>

            </div>
          </div>


          {/* =====================================================
              PUENTES HISTÓRICOS
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                INFRAESTRUCTURA
              </span>

              <h2>
                Pioneros en pasos a desnivel y puentes
              </h2>

              <ul className="book-list">
                <li>Puente Cala Cala — 1993</li>
                <li>
                  Puente Los Andes entre las serranías
                  de Cerro Verde y San Miguel — 1993
                </li>
                <li>Puente Kyllmann — 1994</li>
                <li>Viaducto — 1996</li>
                <li>Puente Antezana — 1996</li>
                <li>Puente Muyurina — 2004</li>
              </ul>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              CONECTIVIDAD HISTÓRICA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                CONECTIVIDAD
              </span>

              <h2>
                Motor del crecimiento urbano
              </h2>

              <p>
                La infraestructura vial ha sido uno de los
                principales motores del crecimiento de Cochabamba.
              </p>

              <h3>
                Asfalto y pavimento rígido
              </h3>

              <ul className="book-list">
                <li>Suecia</li>
                <li>Cap. Ustariz</li>
                <li>D'Orbigni</li>
                <li>Melchor Pérez</li>
                <li>Independencia</li>
                <li>Petrolera</li>
                <li>Gabriel René Moreno</li>
                <li>Beijing</li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              CIUDAD JARDÍN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                CIUDAD JARDÍN
              </span>

              <h2>
                Áreas verdes y parques
              </h2>

              <ul className="book-list">
                <li>Parque de Educación Vial</li>
                <li>Parque del Niño</li>
                <li>Parque Mariscal Santa Cruz — 1998</li>
                <li>Parque Kanata</li>
                <li>Parque San Pedro</li>
                <li>Plaza 14 de Septiembre</li>
                <li>Plaza Colón</li>
                <li>Plaza Recoleta</li>
                <li>Plaza Quintanilla</li>
                <li>Plaza de las Banderas</li>
              </ul>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              DESAYUNO ESCOLAR
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                DESARROLLO SOCIAL
              </span>

              <h2>
                Pioneros en el desayuno escolar
              </h2>

              <p className="lead">
                1994
              </p>

              <p>
                Cochabamba fue pionera en la implementación
                del Desayuno Escolar en Bolivia, logrando que
                esta iniciativa se instituyera a nivel nacional
                en beneficio de miles de estudiantes.
              </p>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              OTROS HITOS HISTÓRICOS
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                HITOS
              </span>

              <h2>
                Una ciudad pionera
              </h2>

              <ul className="book-list">
                <li>
                  Iluminación: cambio de luces de mercurio
                  a sodio — 1994
                </li>

                <li>
                  Misicuni: el sueño del agua que Cochabamba
                  no dejó de perseguir
                </li>

                <li>
                  Defensorías Municipales de la Niñez y
                  Adolescencia — 1997
                </li>

                <li>
                  Cristo de la Concordia — 1994
                </li>

                <li>
                  Primer Teleférico de Bolivia — 1999
                </li>

                <li>
                  Día del Peatón y del Ciclista — 1999
                </li>

                <li>
                  Ciclovía — 1999
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              NUEVA ETAPA 2021
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                2021
              </span>

              <h2>
                Cuando una ciudad vuelve a soñar en grande
              </h2>

              <p className="lead">
                Las obras se convierten en el camino hacia el futuro.
              </p>

              <p>
                En 2021, Cochabamba inició una nueva etapa de
                transformación urbana y social.
              </p>

              <p>
                La experiencia acumulada y una visión de ciudad
                moderna volvieron a encontrarse con las necesidades
                de una población que exigía soluciones concretas.
              </p>

              <p>
                Agua, salud, educación, movilidad, medio ambiente,
                cultura, tecnología, deporte y desarrollo productivo
                se convirtieron en parte de una agenda municipal
                orientada a recuperar espacios, modernizar servicios
                y llevar obras a los distintos distritos.
              </p>

            </div>
          </div>


          {/* =====================================================
              SALUD
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                SALUD
              </span>

              <h2>
                Salud de calidad
              </h2>

              <p>
                La emergencia sanitaria dejó una enseñanza:
                la infraestructura y el equipamiento médico
                pueden marcar la diferencia entre la vida y
                la muerte.
              </p>

              <ul className="book-list">
                <li>
                  Primera Planta Criogénica Municipal de Oxígeno
                  — Hospital del Norte
                </li>

                <li>
                  Unidades de Terapia Intensiva — Hospital del
                  Norte y Sud
                </li>

                <li>
                  Red Municipal de Ambulancias — línea gratuita 162
                </li>

                <li>
                  Tomógrafo — Hospital Cochabamba
                </li>

                <li>
                  Neonatología — Hospital Cochabamba
                </li>

                <li>
                  Torre Laparoscópica — Hospital del Sud
                </li>

                <li>
                  Mamógrafo — Hospital del Norte
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              SALUD - CONTINUACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                SALUD
              </span>

              <h2>
                Más servicios para la población
              </h2>

              <ul className="book-list">
                <li>Fichaje Virtual — INNOVA</li>

                <li>
                  Salud Sobre Ruedas — atención médica gratuita
                </li>

                <li>
                  Campañas de cirugías gratuitas de manos y pies
                  “Manitos Arriba”
                </li>

                <li>
                  Centro de Salud Ambulatorio “Gloria” — D.9
                </li>

                <li>
                  Centro de Salud Integral Villa Israel — D.9
                </li>

                <li>
                  Clínica Veterinaria y Centro Municipal de
                  Rehabilitación y Adiestramiento Canino — Zona Chimba
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              AGUA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                AGUA
              </span>

              <h2>
                Cobertura de agua potable
              </h2>

              <p className="lead">
                Una deuda social convertida en desafío.
              </p>

              <p>
                Garantizar agua significa garantizar salud,
                dignidad y oportunidades.
              </p>

              <p>
                La ampliación de redes, sistemas de abastecimiento,
                colectores y proyectos de saneamiento se convirtió
                en uno de los principales desafíos de la gestión
                municipal.
              </p>

              <ul className="book-list">
                <li>
                  Planta de tratamiento de aguas residuales
                  de Albarrancho
                </li>

                <li>
                  Renovación del sistema de agua potable
                  del centro de la ciudad
                </li>

                <li>
                  Cobertura del 96% de agua potable
                </li>

                <li>
                  Ampliaciones y renovaciones de servicios básicos
                </li>

                <li>Emisario Sud Este</li>
                <li>Hidrantes</li>
                <li>Colector Av. 6 de Agosto</li>
                <li>Colector Av. Ayacucho</li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              RECREACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                RECREACIÓN
              </span>

              <h2>
                Cochabamba, Ciudad Jardín
              </h2>

              <p>
                La Ciudad Jardín y de la Eterna Primavera renueva
                su esencia con plazas, parques y espacios llenos
                de color y vegetación.
              </p>

              <p>
                La recuperación de áreas verdes, la creación de
                nuevos espacios de encuentro y la implementación
                del Plan Maestro de Forestación y Reforestación
                Municipal, Bosques Urbanos y Arborización consolidan
                a la ciudad como un verdadero pulmón ecológico.
              </p>

              <ul className="book-list">
                <li>
                  Parque de la Integración — D.9
                </li>

                <li>
                  Plaza Julio León Prado — D.10
                </li>

                <li>
                  Prado Av. Humberto Asín
                </li>

                <li>
                  Casa de Piedra
                </li>

                <li>
                  Jardineras centrales y áreas verdes
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              PARQUES Y BOSQUES
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                ESPACIOS VERDES
              </span>

              <h2>
                Parques y bosques urbanos
              </h2>

              <ul className="book-list">
                <li>Parque Familia</li>
                <li>Parque Vial</li>
                <li>Parque El Pulpo</li>
                <li>Parque Autonomía</li>
                <li>Parque Bicentenario</li>
                <li>Parque Oblitas</li>
                <li>Parque Kanata</li>
                <li>Parque Mariscal Santa Cruz</li>
              </ul>

              <h3>
                Bosques urbanos
              </h3>

              <p>
                Fidel Anze · Lincoln · Excombatientes ·
                Demetrio Canelas · Esferas Florales
              </p>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              MEDIO AMBIENTE
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                MEDIO AMBIENTE
              </span>

              <h2>
                Un compromiso con el futuro ecológico
              </h2>

              <p>
                La llajta avanza hacia un futuro más verde,
                limpio y sostenible.
              </p>

              <p>
                La protección del medio ambiente se ha convertido
                en un compromiso con las presentes y futuras
                generaciones, impulsando acciones para recuperar
                áreas naturales, mejorar la calidad del aire,
                promover una movilidad sostenible y fortalecer
                la conciencia ambiental.
              </p>

              <p className="lead">
                Construir una mejor ciudad también significa
                proteger el agua, cuidar el aire y recuperar
                la naturaleza.
              </p>

            </div>
          </div>


          {/* =====================================================
              CIUDAD SOSTENIBLE
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                COCHA CIUDAD SOSTENIBLE
              </span>

              <h2>
                Acciones ambientales
              </h2>

              <ul className="book-list">
                <li>
                  Cierre definitivo de ladrilleras
                </li>

                <li>
                  Plan Maestro de Ciclovías
                </li>

                <li>
                  Centro de Inspección Vehicular Ambiental — CIVAM
                </li>

                <li>
                  Centro de Educación Ambiental Municipal — CEAM
                </li>

                <li>
                  “Rompiendo Aceras” — iniciativa de arborización
                  urbana
                </li>

                <li>
                  Manfred Reyes Villa — “Embajador de la
                  Organización Mundial Ciudades Sostenibles 2026”
                  — París, Francia
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              ESPEJOS DE AGUA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                MEDIO AMBIENTE
              </span>

              <h2>
                Nuestros espejos de agua
              </h2>

              <p>
                Cochabamba vuelve a mirar hacia sus espejos
                de agua como espacios de vida, encuentro y
                recreación.
              </p>

              <p>
                La recuperación de la Laguna Alalay y Coña Coña
                se convirtió en uno de los grandes desafíos
                ambientales de la ciudad.
              </p>

              <p>
                Las labores de dragado y tratamiento en Alalay
                permitieron avanzar en la recuperación del
                espejo de agua y del ecosistema asociado.
              </p>

              <ul className="book-list">
                <li>
                  Dragado y recuperación de la Laguna Alalay
                </li>

                <li>
                  Complejo Recreacional Coña Coña — D.4
                </li>
              </ul>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              EDUCACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                EDUCACIÓN
              </span>

              <h2>
                Educación integral
              </h2>

              <p>
                El gobierno municipal ha destinado importantes
                esfuerzos a la construcción, ampliación y
                mejoramiento de infraestructuras educativas.
              </p>

              <p>
                Cada aula renovada y cada espacio equipado
                representan una apuesta por el talento, los
                sueños y las capacidades de las nuevas
                generaciones.
              </p>

              <h3>
                Nuevas infraestructuras
              </h3>

              <ul className="book-list">
                <li>U.E. Buenas Nuevas A-B — D.6</li>
                <li>U.E. Innova Belén — D.15</li>
                <li>U.E. San Pedro Secundaria — D.9</li>
                <li>U.E. René Barrientos “B” — D.8</li>
                <li>U.E. San Pedrito — Inicial y Primaria — D.9</li>
                <li>U.E. Oscar Rojas Caballero — D.5</li>
                <li>U.E. Club de Leones — D.2</li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              EDUCACIÓN - CONTINUACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                EDUCACIÓN
              </span>

              <h2>
                Más oportunidades para aprender
              </h2>

              <ul className="book-list">
                <li>U.E. Taquiña A-B — D.13</li>
                <li>U.E. 27 de Mayo — D.10</li>
                <li>U.E. Genoveva Ríos — D.2</li>
                <li>U.E. Ángel Honorato Salazar — D.5</li>
                <li>U.E. Bolivia “B” — D.9</li>
                <li>
                  Ampliación y mejoramiento de infraestructuras
                  educativas
                </li>
                <li>
                  Alimentación Complementaria Escolar,
                  desde el primer día de clases
                </li>
                <li>Entrega de mobiliario educativo</li>
                <li>
                  Internet gratuito para Unidades Educativas
                </li>
                <li>
                  500 km de fibra óptica propia
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              INFRAESTRUCTURA VIAL
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                INFRAESTRUCTURA VIAL
              </span>

              <h2>
                Cochabamba conectada
              </h2>

              <p className="lead">
                Infraestructura vial para una ciudad que avanza.
              </p>

              <p>
                Puentes, distribuidores, pavimento rígido,
                asfaltos, recarpetados y nuevas conexiones
                buscan responder a una ciudad que crece y
                necesita desplazarse mejor.
              </p>

              <ul className="book-list">
                <li>Distribuidor Quintanilla</li>
                <li>
                  Distribuidor Av. Perú y Av. Blanco Galindo
                </li>
                <li>
                  Reposición de la plataforma del “Puente caído”
                </li>
                <li>Pavimento rígido Av. París — D.8</li>
                <li>Pavimento rígido Av. Pisiga — D.14</li>
                <li>Pavimento rígido Av. Segunda Circunvalación</li>
                <li>Pavimento rígido Av. Humberto Asín — D.8</li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              INFRAESTRUCTURA VIAL 2
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                CONEXIONES
              </span>

              <h2>
                Nuevas vías y conexiones
              </h2>

              <ul className="book-list">
                <li>
                  Pavimento rígido Av. Costanera del Sur — D.9
                </li>

                <li>
                  Pavimento rígido Av. Segunda — D.3
                </li>

                <li>
                  Pavimento rígido Av. de la Integración — D.9
                </li>

                <li>Micropavimento</li>

                <li>
                  Asfalto Av. Circunvalación Oeste —
                  Parque Bicentenario
                </li>

                <li>
                  Recarpetado Av. Villarroel
                </li>

                <li>
                  Recarpetado Av. Santa Cruz
                </li>

                <li>
                  Recarpetado Av. Juana Azurduy
                </li>

                <li>
                  Recarpetado Av. Pando
                </li>

                <li>
                  Reconfiguración rotonda Muyurina — D.11
                </li>

                <li>
                  Túnel de la Integración entre Cercado
                  y Sacaba
                </li>

                <li>
                  Instalación de postes dodecágonos
                  en principales avenidas
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              VANGUARDIA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                INNOVACIÓN
              </span>

              <h2>
                Cochabamba a la vanguardia del progreso
              </h2>

              <p>
                La ciudad avanza con soluciones innovadoras
                que mejoran la vida cotidiana, recuperan y
                hacen más accesibles los espacios públicos,
                optimizan los servicios y fortalecen su
                infraestructura.
              </p>

              <ul className="book-list">
                <li>
                  Contenedores soterrados
                </li>

                <li>
                  Cambio de aceras inclusivas en el Casco Viejo
                </li>

                <li>
                  Renovación de Alumbrado Público a tecnología LED
                </li>

                <li>
                  Construcción del Edificio Municipal — D.10
                </li>

                <li>
                  Accesos a la Nueva Terminal de Buses
                  — D.5 y D.9
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              ALIANZAS PÚBLICO PRIVADAS
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                DESARROLLO
              </span>

              <h2>
                Pioneros en alianzas público privadas
              </h2>

              <p>
                Cuando las ideas se suman, el desarrollo
                multiplica su fuerza.
              </p>

              <p>
                El municipio abre nuevas oportunidades a través
                de alianzas que unen la visión pública con la
                iniciativa privada, convirtiendo proyectos en
                espacios para el encuentro, la inversión,
                el entretenimiento y el desarrollo económico.
              </p>

              <h3>
                FEXCO
              </h3>

              <ul className="book-list">
                <li>
                  Feria Exposición Internacional de Cochabamba
                </li>

                <li>Pórtico de acceso principal</li>
                <li>Pabellón Kanata</li>
                <li>Pabellón del Emprendedor y Artesanos</li>
                <li>Ampliación Plaza de Comidas</li>
                <li>FEXCO Arena</li>
                <li>Auditorio FEXCO</li>
                <li>Karting</li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              TURISMO Y APP
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                TURISMO Y DESARROLLO
              </span>

              <h2>
                Nuevas experiencias
              </h2>

              <ul className="book-list">
                <li>
                  Construcción Complejo Deportivo de Pádel
                </li>

                <li>
                  Iluminación camino al Cristo de la Concordia
                </li>

                <li>
                  Jardín Botánico — destino nacional
                </li>

                <li>
                  Café de experiencia Casona Santivañez
                </li>

                <li>
                  Café de experiencia Teatro Achá
                </li>

                <li>
                  Restaurante Temático Casona Mayorazgo
                </li>

                <li>
                  Restaurante Casa de Piedra
                </li>

                <li>
                  Tirolesa en la serranía de San Pedro
                </li>

                <li>
                  Parque de Diversiones FEXCO
                </li>

                <li>
                  Hotel para mascotas y horno crematorio
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              DESTINO TURÍSTICO
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                TURISMO
              </span>

              <h2>
                Cochabamba se visita, se vive
              </h2>

              <p>
                La ciudad de la eterna primavera cautiva con
                un clima privilegiado, paisajes que invitan
                a quedarse, parques y espacios que respiran
                naturaleza, y una gastronomía que convierte
                cada plato en parte de su identidad.
              </p>

              <p>
                Pero su mayor atractivo está en su gente:
                amable, trabajadora y orgullosa de sus raíces.
              </p>

              <ul className="book-list">
                <li>
                  14 Estaciones del Viacrucis
                </li>

                <li>
                  Pórtico de ingreso y renovación de
                  1.400 escalinatas
                </li>

                <li>
                  Restaurante Patrimonio
                </li>

                <li>Apoyo al Evento Madness</li>
                <li>Carnaval de la Concordia</li>
                <li>Cochabamba, Ciudad de la Navidad</li>
                <li>Feria de la Chicha y el Chicharrón</li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              TURISMO - CONTINUACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                DESTINOS
              </span>

              <h2>
                Historia, cultura y naturaleza
              </h2>

              <ul className="book-list">
                <li>Pasaje Portales</li>
                <li>Casonas</li>
                <li>Coronilla</li>
                <li>Gastronomía</li>
                <li>Leuquepampa — miradores</li>
                <li>Tunari</li>
              </ul>

              <div className="quote">
                “Cochabamba es una experiencia que se vive,
                se disfruta y siempre invita a volver.”
              </div>

            </div>
          </div>


          {/* =====================================================
              CIUDAD INTELIGENTE
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                TECNOLOGÍA
              </span>

              <h2>
                Cochabamba, primera ciudad inteligente de Bolivia
              </h2>

              <p>
                La tecnología se convierte en servicio cuando
                está al alcance de todos.
              </p>

              <p>
                La ciudad avanza hacia una nueva forma de vivir
                y gestionar la ciudad, incorporando innovación,
                conectividad y herramientas digitales para hacer
                más ágiles los servicios municipales y acercarlos
                a la población.
              </p>

              <p>
                La digitalización de trámites, pagos QR, internet
                gratuito y una red propia de 500 kilómetros de
                fibra óptica conectan escuelas, centros de salud,
                plazas y espacios públicos.
              </p>

            </div>
          </div>


          {/* =====================================================
              TECNOLOGÍA - SERVICIOS
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                INNOVACIÓN
              </span>

              <h2>
                Servicios digitales
              </h2>

              <ul className="book-list">
                <li>
                  Digitalización de servicios municipales
                </li>

                <li>
                  Permisos de viaje
                </li>

                <li>
                  CochaMarket
                </li>

                <li>
                  Visita Cocha
                </li>

                <li>
                  Pagos QR a través de la app INNOVA
                </li>

                <li>
                  Semáforos inteligentes sonoros
                </li>

                <li>
                  Paneles LED y señalética inteligente
                </li>

                <li>
                  Fortalecimiento del talento tecnológico
                </li>

                <li>
                  Centro de Atención Virtual y línea gratuita 151
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              FIBRA ÓPTICA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                CONECTIVIDAD DIGITAL
              </span>

              <h2>
                Una ciudad conectada
              </h2>

              <div className="stat-box">
                <strong>500 KM</strong>
                <span>de red de fibra óptica</span>
              </div>

              <ul className="book-list">
                <li>
                  Internet gratuito y WiFi libre
                </li>

                <li>
                  Interconexión de 150 establecimientos educativos
                </li>

                <li>
                  33 centros de salud
                </li>

                <li>
                  50 puntos WiFi libre
                </li>

                <li>
                  Plazas, áreas verdes y zonas turísticas
                  e históricas conectadas
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              CULTURA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                CULTURA
              </span>

              <h2>
                Revalorización de la cultura
              </h2>

              <p>
                Cochabamba guarda en sus calles, monumentos,
                teatros y en la música de su gente una identidad
                que atraviesa generaciones.
              </p>

              <p>
                Hoy, esa memoria vuelve a cobrar vida con la
                preservación de la Torre de la Catedral
                Metropolitana, la restauración del Teatro Achá
                y el fortalecimiento de la Orquesta Sinfónica,
                los Coros y la Banda Municipal.
              </p>

              <ul className="book-list">
                <li>
                  Preservación Torre Catedral Metropolitana
                </li>

                <li>
                  Orquesta Sinfónica Municipal
                </li>

                <li>
                  Coro Municipal y Coro de Niños
                </li>

                <li>
                  Restauración del Teatro Achá
                </li>

                <li>
                  Recuperación de espacio para la construcción
                  del Teatro Municipal — D.12
                </li>

                <li>
                  Banda Municipal
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              DEPORTE
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                DEPORTE
              </span>

              <h2>
                Semillero de campeones
              </h2>

              <p>
                Cada deportista comienza con un sueño,
                una oportunidad y un espacio para entrenar.
              </p>

              <p>
                La Alcaldía de Cochabamba impulsa el deporte
                como una escuela de disciplina, esfuerzo y
                superación.
              </p>

              <ul className="book-list">
                <li>
                  Apoyo y fomento al deporte
                </li>

                <li>
                  Dotación de material deportivo
                </li>

                <li>
                  Trofeos y reconocimientos
                </li>

                <li>
                  Campeonatos internacionales, nacionales,
                  departamentales y municipales
                </li>

                <li>
                  Campos deportivos y canchas múltiples
                </li>

                <li>
                  Juegos Universitarios “Cap. Manfred Reyes Villa”
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              DEPORTE - CONTINUACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                DEPORTE
              </span>

              <h2>
                Espacios para nuevos campeones
              </h2>

              <ul className="book-list">
                <li>
                  Escuelas deportivas municipales
                </li>

                <li>
                  Reapertura piscina Julio León Prado
                </li>

                <li>
                  Complejo Deportivo Los Pinos Japón — D.1
                </li>
              </ul>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              PROTECCIÓN SOCIAL
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                INCLUSIÓN
              </span>

              <h2>
                Protección social e inclusión
              </h2>

              <p>
                Una ciudad que avanza no deja a nadie atrás.
              </p>

              <p>
                Se fortalece una política social centrada en
                las personas, promoviendo igualdad de
                oportunidades, protección y acompañamiento
                para niñas, niños, adolescentes y familias.
              </p>

              <ul className="book-list">
                <li>
                  Ley Municipal de Corresponsabilidad en el
                  Trabajo del Cuidado no Remunerado
                </li>

                <li>
                  Centros Infantiles Municipales
                </li>

                <li>
                  Ludotecas Municipales
                </li>

                <li>
                  Parvulario Municipal
                </li>

                <li>
                  Línea de Atención al Adolescente — LIA
                </li>

                <li>
                  Centro de Atención Integral a la Familia — CAIF
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              INCLUSIÓN - CONTINUACIÓN
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                INCLUSIÓN
              </span>

              <h2>
                Una ciudad para todos
              </h2>

              <p>
                Cuidar, escuchar y acompañar también es
                transformar la ciudad.
              </p>

              <ul className="book-list">
                <li>
                  Centros Infantiles Municipales
                </li>

                <li>
                  Ludotecas Municipales
                </li>

                <li>
                  Parvulario Edificio Municipal
                </li>

                <li>
                  Línea de Atención al Adolescente — LIA
                </li>

                <li>
                  Centro de Atención Integral a la Familia — CAIF
                </li>

                <li>
                  Línea de emergencias inclusivas
                  con interpretación en señas
                </li>
              </ul>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              PRODUCTIVA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                DESARROLLO PRODUCTIVO
              </span>

              <h2>
                Cochabamba productiva
              </h2>

              <p className="lead">
                Oportunidades para todos.
              </p>

              <p>
                La Alcaldía de Cochabamba fortalece su vocación
                productiva apoyando a quienes trabajan la tierra,
                impulsando la producción agropecuaria y generando
                espacios dignos para la comercialización y
                el encuentro.
              </p>

              <ul className="book-list">
                <li>
                  Entrega de semillas
                </li>

                <li>
                  Campañas de desparasitación
                </li>

                <li>
                  Vitaminización y sanidad animal
                </li>

                <li>
                  “Noches Creativas”
                </li>

                <li>
                  “Cocha se reactiva”
                </li>

                <li>
                  Ferias “CochaEmprende”
                </li>
              </ul>

            </div>
          </div>


          {/* =====================================================
              MERCADOS
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                ECONOMÍA LOCAL
              </span>

              <h2>
                Mercados y espacios de encuentro
              </h2>

              <ul className="book-list">
                <li>
                  Mercado Integración del Sur
                </li>

                <li>
                  Conclusión del Mercado Coraca — D.4
                </li>

                <li>
                  Construcción Mercado Calatayud
                </li>

                <li>
                  Construcción Mercado Papa Paulo
                </li>

                <li>
                  Construcción Plaza de Comidas
                  Islas del Sur — D.6
                </li>
              </ul>

              <div className="video-container">
                <video controls playsInline preload="metadata">
                  <source src="/videos/video.mp4" type="video/mp4" />
                  Tu navegador no soporta reproducción de video.s
                </video>
              </div>

            </div>
          </div>


          {/* =====================================================
              DERECHO PROPIETARIO
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                FAMILIAS
              </span>

              <h2>
                Cochabamba sigue construyendo su historia
              </h2>

              <p>
                A través de la regularización del derecho
                propietario mediante las Resoluciones
                Administrativas Municipales (RAMs) y el programa
                “Mi Casa Segura”, Cochabamba avanza en la
                consolidación de hogares con mayor seguridad
                jurídica y patrimonial.
              </p>

              <p>
                Porque detrás de cada documento existe una
                historia, un esfuerzo y el sueño de una familia
                de llamar suyo al lugar que construyó.
              </p>

              <div className="quote">
                “Regularizar un hogar es también construir
                tranquilidad y futuro.”
              </div>

            </div>
          </div>


          {/* =====================================================
              ÚLTIMA PÁGINA
          ====================================================== */}

          <div className="page">
            <div className="page-content">

              <span className="eyebrow">
                CIERRE
              </span>

              <h2>
                Una historia que sigue escribiéndose
              </h2>

              <p className="lead">
                De los primeros puentes a la tecnología;
                de los parques a los hospitales; del agua
                a las grandes avenidas.
              </p>

              <p>
                La historia de Cochabamba sigue escribiéndose.
              </p>

              <div className="quote">
                “Porque una obra puede cambiar un lugar.
                <br />
                Pero una visión puede cambiar una ciudad.”
              </div>

            </div>
          </div>


          {/* =====================================================
              CONTRAPORTADA
          ====================================================== */}

          <div className="page back-cover">

            <div className="back-content">

              <h2>
                COCHABAMBA
              </h2>

              <p>
                La mejor ciudad de Bolivia
              </p>

              <div className="back-line"></div>

              <span>
                Alcaldía de Cochabamba
              </span>

              <small>
                Edición 2026
              </small>

            </div>

          </div>

        </ReactFlipBook>
      </Suspense>
    </div>
  );
}
