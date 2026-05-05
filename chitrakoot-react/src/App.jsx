import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import TourismPage from './pages/TourismPage';
import TenderNoticePage from './pages/TenderNoticePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import useScrollToTop from './hooks/useScrollToTop';

export default function App() {
  useScrollToTop();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/tourism" element={<TourismPage />} />
        <Route path="/tender-notice" element={<TenderNoticePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
