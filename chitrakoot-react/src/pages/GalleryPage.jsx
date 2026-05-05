import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import Lightbox from '../components/shared/Lightbox';
import { gallery } from '../data/galleryData';
import './GalleryPage.css';

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState({ isOpen: false, image: '' });

  const openLightbox = (src) => setLightbox({ isOpen: true, image: src });
  const closeLightbox = () => setLightbox({ isOpen: false, image: '' });

  return (
    <div>
      <PageHero
        compact
        title="Gallery"
        subtitle="Divine Glimpses of Chitrakoot"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="gallery-grid">
            {gallery.map((src, i) => (
              <div
                className="gallery-item"
                key={i}
                onClick={() => openLightbox(src)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openLightbox(src);
                }}
              >
                <img src={src} alt={`Gallery ${i + 1}`} />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={lightbox.isOpen}
        imageSrc={lightbox.image}
        onClose={closeLightbox}
      />
    </div>
  );
}
