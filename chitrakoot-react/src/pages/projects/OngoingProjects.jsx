import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import { ongoingProjects } from '../../data/projectsData';
import './OngoingProjects.css';

export default function OngoingProjects() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="Ongoing Projects"
        subtitle="Active Development Works in Chitrakoot"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="proj-intro fade-in-up">
            <span className="eyebrow">Current Works</span>
            <h2>Projects Under Execution</h2>
            <p>
              The Chitrakoot Development Authority is actively executing multiple projects in
              collaboration with the Ministry of Tourism and the Government of Madhya Pradesh.
            </p>
          </div>

          <div className="proj-list">
            {ongoingProjects.map((p, i) => (
              <article key={p.id} className="proj-card fade-in-up">
                <div className="proj-card-head">
                  <span className="proj-num">0{i + 1}</span>
                  <span className="proj-status ongoing">{p.status}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="proj-meta">
                  <div className="proj-meta-item">
                    <span className="proj-meta-label">Budget</span>
                    <span className="proj-meta-value">{p.budget}</span>
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
