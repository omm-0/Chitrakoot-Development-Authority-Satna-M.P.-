import './AnnouncementBar.css';

const MESSAGE = 'Chitrakoot Development Authority | Satna, Madhya Pradesh | Mandakini Aarti Daily at 6:00 PM | Kamadgiri Parikrama Open For Devotees | Sacred Tourism, Projects, Facilities, and Contact Services';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="announcement-track">
        <span>{MESSAGE}</span>
        <span>{MESSAGE}</span>
      </div>
    </div>
  );
}
