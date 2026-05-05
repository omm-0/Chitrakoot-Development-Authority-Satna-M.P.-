import './SectionHeader.css';

export default function SectionHeader({
  dividerSymbol,
  eyebrow,
  title,
  subtitle,
  showDivider = true
}) {
  return (
    <div className="section-header">
      {showDivider && (
        <div className="section-divider">
          <span>{dividerSymbol || 'ॐ'}</span>
        </div>
      )}
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {title && <h2 className="section-title">{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
