import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

import AboutCDA from './pages/about/AboutCDA';
import AboutChitrakoot from './pages/about/AboutChitrakoot';
import VisionMission from './pages/about/VisionMission';
import CDAStaff from './pages/about/CDAStaff';
import CDABoard from './pages/about/CDABoard';

import OngoingProjects from './pages/projects/OngoingProjects';
import UpcomingProjects from './pages/projects/UpcomingProjects';
import IUDP from './pages/projects/IUDP';

import TourismPlace from './pages/tourism/TourismPlace';
import TourismIndex from './pages/tourism/TourismIndex';

import TenderNotice from './pages/TenderNotice';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import useScrollToTop from './hooks/useScrollToTop';

export default function App() {
  useScrollToTop();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<Navigate to="/about/cda" replace />} />
        <Route path="/about/cda" element={<AboutCDA />} />
        <Route path="/about/chitrakoot" element={<AboutChitrakoot />} />
        <Route path="/about/vision-mission" element={<VisionMission />} />
        <Route path="/about/staff" element={<CDAStaff />} />
        <Route path="/about/board" element={<CDABoard />} />

        {/* Projects */}
        <Route path="/projects" element={<Navigate to="/projects/ongoing" replace />} />
        <Route path="/projects/ongoing" element={<OngoingProjects />} />
        <Route path="/projects/upcoming" element={<UpcomingProjects />} />
        <Route path="/projects/iudp" element={<IUDP />} />

        {/* Tourism */}
        <Route path="/tourism" element={<TourismIndex />} />
        <Route path="/tourism/kamtanath-kamadgiri" element={<TourismPlace placeId="kamtanath" />} />
        <Route path="/tourism/bharat-ghat" element={<TourismPlace placeId="bharat-ghat" />} />
        <Route path="/tourism/hanuman-dhara" element={<TourismPlace placeId="hanuman-dhara" />} />
        <Route path="/tourism/sati-anusuya" element={<TourismPlace placeId="sati-anusuya" />} />
        <Route path="/tourism/gupt-godavari" element={<TourismPlace placeId="gupt-godavari" />} />
        <Route path="/tourism/spatik-shila" element={<TourismPlace placeId="spatik-shila" />} />
        <Route path="/tourism/arogya-dham" element={<TourismPlace placeId="arogya-dham" />} />
        <Route path="/tourism/pramod-van" element={<TourismPlace placeId="pramod-van" />} />
        <Route path="/tourism/laxman-pahadi" element={<TourismPlace placeId="laxman-pahadi" />} />
        <Route path="/tourism/ram-ghat" element={<TourismPlace placeId="ram-ghat" />} />

        {/* Standalone */}
        <Route path="/tender-notice" element={<TenderNotice />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
}
