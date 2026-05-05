import HeroSlider from '../components/home/HeroSlider';
import QuoteDivider from '../components/home/QuoteDivider';
import AboutIntro from '../components/home/AboutIntro';
import SacredExperiences from '../components/home/SacredExperiences';
import FacilitiesPreview from '../components/home/FacilitiesPreview';
import NearbyPlaces from '../components/home/NearbyPlaces';
import FestivalsPreview from '../components/home/FestivalsPreview';
import HowToReach from '../components/home/HowToReach';

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <QuoteDivider />
      <AboutIntro />
      <SacredExperiences />
      <FacilitiesPreview />
      <NearbyPlaces />
      <FestivalsPreview />
      <HowToReach />
    </>
  );
}
