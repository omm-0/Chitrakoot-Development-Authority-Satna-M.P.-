import './PageHero.css';

export default function PageHero({
  backgroundImage,
  title,
  subtitle,
  compact = false
}) {
  const style = backgroundImage
    ? { backgroundImage: `url('${backgroundImage}')` }
    : undefined;

  return (
    <section
      className={`page-hero${compact ? ' compact' : ''}`}
      style={style}
    >
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
        {title && <h1 className="page-hero-title">{title}</h1>}
        {subtitle && <div className="page-hero-sub">{subtitle}</div>}
      </div>
    </section>
  );
}
