import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import { upcomingProjects } from '../../data/projectsData';
import './UpcomingProjects.css';

export default function UpcomingProjects() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="Upcoming Projects"
        subtitle="The Future of Chitrakoot"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="proj-intro fade-in-up">
            <span className="eyebrow">In the Pipeline</span>
            <h2>Projects Under Planning</h2>
            <p>
              CDA's upcoming projects focus on connectivity, pilgrim comfort and long-term
              riverfront development to make Chitrakoot a world-class spiritual destination.
            </p>
          </div>

          <div className="proj-list">
            {upcomingProjects.map((p, i) => (
              <article key={p.id} className="proj-card fade-in-up">
                <div className="proj-card-head">
                  <span className="proj-num">0{i + 1}</span>
                  <span className="proj-status upcoming">Upcoming</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="proj-meta">
                  <div className="proj-meta-item">
                    <span className="proj-meta-label">Stage</span>
                    <span className="proj-meta-value">{p.expected}</span>
                  </div>
                  <div className="proj-meta-item">
                    <span className="proj-meta-label">Scheme</span>
                    <span className="proj-meta-value">{p.scheme}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
