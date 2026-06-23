import './HomeHighlights.css';

const HIGHLIGHTS = [
  { value: '1.5L+', label: 'Annual Pilgrim Footfall' },
  { value: '10+', label: 'Sacred Destinations' },
  { value: '6:00 PM', label: 'Mandakini Aarti' },
  { value: '78 KM', label: 'From Satna City' }
];

export default function HomeHighlights() {
  return (
    <section className="home-highlights">
      <div className="container">
        <div className="highlights-grid">
          {HIGHLIGHTS.map((item) => (
            <article key={item.label} className="highlight-card">
              <h2>{item.value}</h2>
              <p>{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
