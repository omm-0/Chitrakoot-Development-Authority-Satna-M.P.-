import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import { boardMembers } from '../../data/boardData';
import './CDABoard.css';

export default function CDABoard() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="CDA Board"
        subtitle="Governing Council of the Chitrakoot Development Authority"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="board-intro fade-in-up">
            <span className="eyebrow">Governance</span>
            <h2>CDA Board Members</h2>
            <p>
              The Board provides strategic guidance for the comprehensive development of
              Chitrakoot, ensuring alignment with the Government of Madhya Pradesh's vision
              for spiritual tourism and heritage conservation.
            </p>
          </div>

          <div className="board-table-wrap fade-in-up">
            <table className="board-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {boardMembers.map(b => (
                  <tr key={b.id}>
                    <td>{b.id}</td>
                    <td>{b.name}</td>
                    <td>{b.designation}</td>
                    <td>{b.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="board-note fade-in-up">
            CDA Board member details will be updated soon. For governance queries, please
            contact the District Collector Office, Satna.
          </p>
        </div>
      </section>
    </div>
  );
}
