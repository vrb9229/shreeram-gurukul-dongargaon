import { useState } from 'react';

const images = [
  { src: '/gallery/1.jpeg', alt: 'Gallery image 1' },
  { src: '/gallery/2.jpeg', alt: 'Gallery image 2' },
  { src: '/gallery/3.jpeg', alt: 'Gallery image 3' },
  { src: '/gallery/4.jpeg', alt: 'Gallery image 4' },
  { src: '/gallery/5.jpeg', alt: 'Gallery image 5' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="gallery-page">
      <div className="page-header">
        <h1>Gallery</h1>
        <p>A glimpse into life at Shreeram Gurukul Dongargaon</p>
      </div>
      <div className="gallery-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="gallery-grid__item"
            onClick={() => setLightbox(img.src)}
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Enlarged view" />
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
