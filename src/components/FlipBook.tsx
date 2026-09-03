import React, { Suspense, lazy, useEffect, useState } from 'react';
import '../styles/flipbook.css';
import { bookContent } from '../constants/book/content';
import type { BookSection } from '../types/book/content';

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

/** Convierte los items de una sección en una lista simple de textos. */
function toItemList(section: BookSection): string[] {
  return section.items.map((item) => item.text);
}

/** Convierte la primera media real (imagen/video) de la sección, si existe. */
function toMedia(section: BookSection): { type: 'image' | 'video'; src: string } | null {
  const first = section.items.find((item) => item.image || item.video);
  if (!first) return null;
  if (first.image) return { type: 'image', src: first.image };
  if (first.video) return { type: 'video', src: first.video };
  return null;
}

export default function FlipBook() {
  const isDesktop = useDesktopMode();

  const coverImage = bookContent.cover?.image;
  const coverTitleLines = [bookContent.city, `EDICIÓN ${bookContent.year}`];

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

          {/* PORTADA */}
          <div className="cover">
            {coverImage && <img src={coverImage} alt={`Portada de ${bookContent.city}`} className="cover-image" />}
            <div className="cover-overlay" />
            <div className="cover-content">
              <span className="cover-label">{bookContent.badge?.toUpperCase() || bookContent.subtitle}</span>
              <h1>
                {coverTitleLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < coverTitleLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              <p>{bookContent.tagline}</p>
              <div className="cover-line" />
              <span className="cover-author">{bookContent.subtitle}</span>
            </div>
          </div>

          {/* PÁGINAS (una por sección del contenido central) */}
          {bookContent.sections.map((section) => {
            const media = toMedia(section);
            return (
              <div className="page" key={section.id}>
                <div className="page-content">
                  <span className="eyebrow">{section.title.split(':')[0]}</span>
                  <h2>{section.title}</h2>

                  {section.description && <p className="lead">{section.description}</p>}

                  {media?.type === 'image' && (
                    <img src={media.src} alt={section.title} className="content-image image-flex-fill" />
                  )}
                  {media?.type === 'video' && (
                    <div className="video-container">
                      <video controls playsInline preload="metadata" src={media.src} />
                    </div>
                  )}

                  {toItemList(section).length > 0 && (
                    <ul className="book-list book-list--compact">
                      {toItemList(section).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}

          {/* CONTRAPORTADA */}
          <div className="page back-cover">
            <div className="back-content">
              <h2>{bookContent.city}</h2>
              <p>{bookContent.subtitle}</p>
              <div className="back-line" />
              <span>{bookContent.badge}</span>
              <small>Edición {bookContent.year}</small>
            </div>
          </div>

        </ReactFlipBook>
      </Suspense>
    </div>
  );
}
