import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import { staffMembers } from '../../data/staffData';
import './CDAStaff.css';

export default function CDAStaff() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="CDA Staff"
        subtitle="The Team Behind Chitrakoot's Development"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="staff-intro fade-in-up">
            <span className="eyebrow">Office Team</span>
            <h2>Chitrakoot Development Authority Staff</h2>
            <p>
              Our dedicated team works in coordination with the District Administration,
              MPSTDC, and the Ministry of Tourism to deliver Chitrakoot's transformation
              into a world-class spiritual destination.
            </p>
          </div>

          <div className="staff-table-wrap fade-in-up">
            <table className="staff-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                {staffMembers.map(s => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.designation}</td>
                    <td>{s.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="staff-note fade-in-up">
            For official queries, please contact the CDA office at the District Collector
            Office, Satna, Madhya Pradesh.
          </p>
        </div>
      </section>
    </div>
  );
}
