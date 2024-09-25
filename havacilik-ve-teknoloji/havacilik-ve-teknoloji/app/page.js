import HeroSection from '../components/HeroSection';
import Hakkimizda from '../components/Hakkimizda';
import Faaliyet from '../components/Faaliyet';
import Galeri from '../components/Galeri';
import Iletisim from '../components/Iletisim';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-t from-customRed via-customPurple to-customDark">
     <HeroSection />
     <Hakkimizda/>
     <Faaliyet/>
     <Galeri/>
     <Iletisim/>
    </div>
  );
}
