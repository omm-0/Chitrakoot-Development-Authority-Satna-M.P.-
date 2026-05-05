import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function useFadeInUp() {
  const containerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const targets = root.querySelectorAll('.fade-in-up');
    targets.forEach(el => el.classList.remove('visible'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return containerRef;
}
