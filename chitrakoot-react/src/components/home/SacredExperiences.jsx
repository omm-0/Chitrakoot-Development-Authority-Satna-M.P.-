import SectionHeader from '../shared/SectionHeader';
import ExperienceCard from '../shared/ExperienceCard';
import useFadeInUp from '../../hooks/useFadeInUp';
import { experiences } from '../../data/experiencesData';
import './SacredExperiences.css';

export default function SacredExperiences() {
  const ref = useFadeInUp();

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Divine Experiences"
          title="Sacred Pilgrimages & Rituals"
          subtitle="Explore the spiritual treasures of Chitrakoot Dham"
        />
        <div className="card-grid">
          {experiences.map((exp, i) => (
            <ExperienceCard
              key={exp.id}
              image={exp.image}
              title={exp.title}
              tagline={exp.tagline}
              description={exp.description}
              pills={exp.pills}
              link={exp.link}
              delay={`${i * 0.05}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
