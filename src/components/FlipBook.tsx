import React, { Suspense, lazy, useEffect, useState } from 'react';
import '../styles/flipbook.css';
import { flipbookContent } from '../constants/flipbook/content';
import type { FlipBlock } from '../types/flipbook/content';

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

/** Renderiza un bloque de contenido según su tipo. */
function renderBlock(block: FlipBlock, index: number) {
  switch (block.type) {
    case 'eyebrow':
      return (
        <span className="eyebrow" key={index}>
          {block.text}
        </span>
      );
    case 'heading':
      return block.section ? (
        <h2 className="section-title" key={index}>
          {block.text}
        </h2>
      ) : (
        <h2 key={index}>{block.text}</h2>
      );
    case 'subheading':
      return (
        <h3 className="sub-title" key={index}>
          {block.text}
        </h3>
      );
    case 'paragraph':
      if (block.caption) {
        return (
          <p className="caption" key={index}>
            {block.text}
          </p>
        );
      }
      return block.lead ? (
        <p className="lead" key={index}>
          {block.text}
        </p>
      ) : (
        <p key={index}>{block.text}</p>
      );
    case 'list':
      return (
        <ul
          className={block.compact ? 'book-list book-list--compact' : 'book-list'}
          key={index}
        >
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return (
        <div className="quote" key={index}>
          {block.text}
        </div>
      );
    case 'stat':
      return (
        <div className="stat-box" key={index}>
          <strong>{block.value}</strong>
          <span>{block.label}</span>
        </div>
      );
    case 'image':
      return (
        <React.Fragment key={index}>
          <img
            src={block.src}
            alt={block.alt}
            className="content-image image-flex-fill"
          />
          {block.caption && <p className="caption">{block.caption}</p>}
        </React.Fragment>
      );
    case 'video':
      return (
        <div className="video-container" key={index}>
          <video controls playsInline preload="metadata">
            <source src={block.src} type="video/mp4" />
            Tu navegador no soporta reproducción de video.
          </video>
        </div>
      );
    default:
      return null;
  }
}

export default function FlipBook() {
  const isDesktop = useDesktopMode();
  const { cover, backCover, pages } = flipbookContent;

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
            <img src={cover.image} alt={cover.alt} className="cover-image" />

            <div className="cover-overlay"></div>

            <div className="cover-content">
              <span className="cover-label">{cover.label}</span>

              <h1>
                {cover.titleLines.map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < cover.titleLines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>

              <p>{cover.subtitle}</p>

              <div className="cover-line"></div>

              <span className="cover-author">{cover.author}</span>
            </div>
          </div>

          {/* PÁGINAS */}
          {pages.map((page) => (
            <div
              className={page.className ? `page ${page.className}` : 'page'}
              key={page.id}
            >
              <div className="page-content">{page.blocks.map(renderBlock)}</div>
            </div>
          ))}

          {/* CONTRAPORTADA */}
          <div className="page back-cover">
            <div className="back-content">
              <h2>{backCover.title}</h2>
              <p>{backCover.subtitle}</p>
              <div className="back-line"></div>
              <span>{backCover.author}</span>
              <small>{backCover.edition}</small>
            </div>
          </div>

        </ReactFlipBook>
      </Suspense>
    </div>
  );
}
