import AnnouncementBar from './AnnouncementBar';
import Header from './Header';
import Footer from './Footer';
import BackToTop from './BackToTop';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
      <BackToTop />
    </>
  );
}
