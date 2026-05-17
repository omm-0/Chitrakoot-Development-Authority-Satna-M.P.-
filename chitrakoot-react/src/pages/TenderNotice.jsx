import { useState, useMemo } from 'react';
import PageHero from '../components/shared/PageHero';
import useFadeInUp from '../hooks/useFadeInUp';
import { tenderNotices, tenderDisclaimer } from '../data/tenderNoticeData';
import './TenderNotice.css';

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

export default function TenderNotice() {
  const ref = useFadeInUp();
  const [filter, setFilter] = useState('all');
  const [query, setQuery] = useState('');

  const items = useMemo(() => {
    return tenderNotices.filter(n => {
      const matchesFilter =
        filter === 'all'
          ? true
          : filter === 'tender'
          ? n.type.toLowerCase().includes('tender') || n.type.toLowerCase().includes('quotation')
          : n.type.toLowerCase().includes('notice');
      const matchesQuery =
        query.trim() === '' ||
        n.title.toLowerCase().includes(query.toLowerCase()) ||
        n.department.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <div ref={ref}>
      <PageHero
        compact
        title="Tender & Notice"
        subtitle="Official Notices from the Chitrakoot Development Authority"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="tender-disclaimer fade-in-up">
            <strong>Note:</strong> {tenderDisclaimer}
          </div>

          <div className="tender-controls fade-in-up">
            <div className="tender-filter">
              <label htmlFor="tn-filter">Filter</label>
              <select
                id="tn-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="tender">Tenders</option>
                <option value="notice">Notices</option>
              </select>
            </div>
            <div className="tender-search">
              <input
                type="text"
                placeholder="Search by title or department…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="tender-table-wrap fade-in-up">
            <table className="tender-table">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Title</th>
                  <th>Department</th>
                  <th>Published</th>
                  <th>Last Date</th>
                  <th>Type</th>
                  <th className="t-action-col">Action</th>
                </tr>
              </thead>
              <tbody>
                {items.length === 0 && (
                  <tr>
                    <td colSpan="7" className="tender-empty">No matching tenders or notices.</td>
                  </tr>
                )}
                {items.map((n, idx) => (
                  <tr key={n.id}>
                    <td>{idx + 1}</td>
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

          <div className="tender-card-list">
            {items.map(n => (
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
                  <span className="t-label">Published</span>
                  <span>{formatDate(n.startDate)}</span>
                </div>
                <div className="tender-card-row">
                  <span className="t-label">Last Date</span>
                  <span>{formatDate(n.endDate)}</span>
                </div>
                <button className="tender-action-btn full" type="button">
                  {n.actionLabel}
                </button>
              </div>
            ))}
          </div>

          <p className="tender-footer-note fade-in-up">
            For official tender documents, please visit the District Collector Office, Satna
            or contact the Chitrakoot Development Authority directly.
          </p>
        </div>
      </section>
    </div>
  );
}
