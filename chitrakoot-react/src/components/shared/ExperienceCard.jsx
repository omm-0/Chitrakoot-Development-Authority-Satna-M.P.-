import { Link } from 'react-router-dom';
import './ExperienceCard.css';

export default function ExperienceCard({
  image,
  title,
  tagline,
  description,
  pills = [],
  link,
  delay
}) {
  const style = delay ? { transitionDelay: delay } : undefined;

  return (
    <div className="exp-card fade-in-up" style={style}>
      <div className="exp-card-img">
        <img src={image} alt={title} />
      </div>
      <div className="exp-card-body">
        <h3 className="exp-card-title">{title}</h3>
        <div className="exp-card-tagline">{tagline}</div>
        <p className="exp-card-desc">{description}</p>
        <div className="pills">
          {pills.map((pill, i) => (
            <span className="pill" key={i}>{pill}</span>
          ))}
        </div>
        <Link to={link} className="exp-card-link">Explore →</Link>
      </div>
    </div>
  );
}
