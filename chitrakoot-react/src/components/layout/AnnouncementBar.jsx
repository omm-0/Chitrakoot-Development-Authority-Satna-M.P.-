import './AnnouncementBar.css';

const MESSAGE = '🙏 जय श्री राम | Welcome to Chitrakoot Development Authority — The Hill of Many Wonders | Satna, Madhya Pradesh | Mandakini Aarti Daily at 6:00 PM | Kamadgiri Parikrama — Open for all devotees 🙏';

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
