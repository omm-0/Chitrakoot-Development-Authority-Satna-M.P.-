import useScrollPosition from '../../hooks/useScrollPosition';
import './BackToTop.css';

export default function BackToTop() {
  const scrollY = useScrollPosition();
  const visible = scrollY > 500;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`back-to-top${visible ? ' visible' : ''}`}
      aria-label="Back to top"
      onClick={handleClick}
    >
      ↑
    </button>
  );
}
