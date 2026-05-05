import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlacesPage from './pages/PlacesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import FestivalsPage from './pages/FestivalsPage';
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
        <Route path="/places" element={<PlacesPage />} />
        <Route path="/facilities" element={<FacilitiesPage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
