import { Link } from 'react-router-dom';
import './FacilityCard.css';

export default function FacilityCard({
  image,
  title,
  description,
  link = '/facilities'
}) {
  return (
    <div className="facility-card fade-in-up">
      <div className="facility-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="facility-card-body">
        <h3 className="facility-card-title">{title}</h3>
        <p className="facility-card-desc">{description}</p>
        <Link to={link} className="facility-card-link">Know More →</Link>
      </div>
    </div>
  );
}
