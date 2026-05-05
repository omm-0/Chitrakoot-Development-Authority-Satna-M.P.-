import './PlaceCard.css';

export default function PlaceCard({ image, title, description }) {
  return (
    <div className="place-card">
      <div
        className="place-card-bg"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="place-card-overlay" />
      <div className="place-card-content">
        <h3 className="place-card-title">{title}</h3>
        <p className="place-card-desc">{description}</p>
      </div>
    </div>
  );
}
