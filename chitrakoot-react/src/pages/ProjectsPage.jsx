import PageHero from '../components/shared/PageHero';
import SectionHeader from '../components/shared/SectionHeader';
import useFadeInUp from '../hooks/useFadeInUp';
import { projects } from '../data/projectsData';
import './ProjectsPage.css';

function statusClass(status) {
  return `project-status status-${status.toLowerCase()}`;
}

export default function ProjectsPage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        compact
        title="Projects"
        subtitle="Initiatives by the Chitrakoot Development Authority"
      />

      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            eyebrow="Development Authority"
            title="Ongoing &amp; Upcoming Projects"
            subtitle="A snapshot of tourism, heritage and infrastructure works underway across the Chitrakoot Special Area"
            showDivider={false}
          />

          <div className="projects-grid">
            {projects.map(project => (
              <article className="project-card fade-in-up" key={project.id}>
                <div className="project-card-top">
                  <span className="project-category">{project.category}</span>
                  <span className={statusClass(project.status)}>{project.status}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
