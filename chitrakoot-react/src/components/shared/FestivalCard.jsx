import './FestivalCard.css';

export default function FestivalCard({ image, title, month, description }) {
  return (
    <div className="festival-card fade-in-up">
      <div
        className="festival-card-bg"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="festival-card-overlay" />
      <div className="festival-card-content">
        <div className="festival-month">{month}</div>
        <h3 className="festival-name">{title}</h3>
        <p className="festival-desc">{description}</p>
      </div>
    </div>
  );
}
