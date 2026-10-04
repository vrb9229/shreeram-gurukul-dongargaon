import { useState, useEffect, useCallback } from 'react';
import { SCHOOL } from '../data/school';

const images = SCHOOL.galleryImages;

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>A glimpse into life at {SCHOOL.shortName}</p>
      </div>

      <section className="slideshow" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <button className="slideshow__arrow slideshow__arrow--left" onClick={prev} aria-label="Previous image">
          &#10094;
        </button>
        <div className="slideshow__viewport">
          <div
            className="slideshow__track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {images.map((img, i) => (
              <div key={i} className="slideshow__slide">
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
        <button className="slideshow__arrow slideshow__arrow--right" onClick={next} aria-label="Next image">
          &#10095;
        </button>
        <div className="slideshow__dots">
          {images.map((_, i) => (
            <button
              key={i}
              className={`slideshow__dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="content-section__inner">
          <h2 className="section-title">All Photos</h2>
          <div className="gallery-grid gallery-grid--page">
            {images.map((img, i) => (
              <div
                key={i}
                className="gallery-grid__item"
                onClick={() => setCurrent(i)}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
