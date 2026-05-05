import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Lightbox.css';

export default function Lightbox({ isOpen, imageSrc, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.classList.add('no-scroll');

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    return () => {
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return createPortal(
    <div className="lightbox open" onClick={handleBackdropClick}>
      <span
        className="lightbox-close"
        onClick={onClose}
        role="button"
        aria-label="Close"
      >
        ×
      </span>
      <img src={imageSrc} alt="Gallery preview" />
    </div>,
    document.body
  );
}
