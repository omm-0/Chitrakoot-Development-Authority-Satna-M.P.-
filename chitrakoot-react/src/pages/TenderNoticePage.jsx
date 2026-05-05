import PageHero from '../components/shared/PageHero';
import useFadeInUp from '../hooks/useFadeInUp';
import { tenderNotices, tenderDisclaimer } from '../data/tenderNoticeData';
import './TenderNoticePage.css';

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

function typeClass(type) {
  return `tender-type type-${type.toLowerCase().replace(/[^a-z]+/g, '-')}`;
}

export default function TenderNoticePage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        compact
        title="Tender & Notice"
        subtitle="Official Notices from the Development Authority"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="tender-disclaimer fade-in-up">
            <strong>Note:</strong> {tenderDisclaimer}
          </div>

          {/* Desktop / tablet table */}
          <div className="tender-table-wrap fade-in-up">
            <table className="tender-table">
              <thead>
                <tr>
                  <th>Notice Title</th>
                  <th>Department</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Type</th>
                  <th className="t-action-col">Action</th>
                </tr>
              </thead>
              <tbody>
                {tenderNotices.map(n => (
                  <tr key={n.id}>
                    <td className="tender-title-cell">{n.title}</td>
                    <td>{n.department}</td>
                    <td>{formatDate(n.startDate)}</td>
                    <td>{formatDate(n.endDate)}</td>
                    <td>
                      <span className={typeClass(n.type)}>{n.type}</span>
                    </td>
                    <td className="t-action-col">
                      <button className="tender-action-btn" type="button">
                        {n.actionLabel}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile card list */}
          <div className="tender-card-list">
            {tenderNotices.map(n => (
              <div className="tender-card fade-in-up" key={`m-${n.id}`}>
                <div className="tender-card-row tender-card-head">
                  <span className="tender-card-title">{n.title}</span>
                  <span className={typeClass(n.type)}>{n.type}</span>
                </div>
                <div className="tender-card-row">
                  <span className="t-label">Department</span>
                  <span>{n.department}</span>
                </div>
                <div className="tender-card-row">
                  <span className="t-label">Start</span>
                  <span>{formatDate(n.startDate)}</span>
                </div>
                <div className="tender-card-row">
                  <span className="t-label">End</span>
                  <span>{formatDate(n.endDate)}</span>
                </div>
                <button className="tender-action-btn full" type="button">
                  {n.actionLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
