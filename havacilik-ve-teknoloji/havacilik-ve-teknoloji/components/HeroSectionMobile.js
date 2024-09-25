"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSectionMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Mobil durumu kontrol et

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize); // Pencere boyutu değiştiğinde kontrol et
    handleResize(); // İlk render'da da kontrol et
    return () => {
      window.removeEventListener('resize', handleResize); // Event listener'ı temizle
    };
  }, []);

  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen text-white px-4 lg:px-8 gap-8">
      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 lg:hidden z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-lg z-40 transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 lg:bg-transparent lg:flex-row lg:space-y-0 lg:space-x-4 lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:mt-2 lg:py-2 lg:px-4 lg:h-auto lg:justify-center`}>
        <a href="#" className="hover:underline text-white" onClick={() => setIsMenuOpen(false)}>Anasayfa</a>
        <a href="#" className="hover:underline text-white" onClick={() => setIsMenuOpen(false)}>Hakkımızda</a>
        <a href="#" className="hover:underline text-white" onClick={() => setIsMenuOpen(false)}>Faaliyetlerimiz</a>
        <a href="#" className="hover:underline text-white" onClick={() => setIsMenuOpen(false)}>Ekibimiz</a>
        <a href="#" className="hover:underline text-white" onClick={() => setIsMenuOpen(false)}>Galeri</a>
        <a href="#" className="hover:underline text-white" onClick={() => setIsMenuOpen(false)}>İletişim</a>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-start max-w-full lg:max-w-lg mt-24 lg:mt-12 text-center lg:text-left">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          TEKNOLOJİ VE HAVACILIK TOPLULUĞU
        </h1>
        <p className="text-base lg:text-lg mb-8">
          Konya Teknik Üniversitesi bünyesinde faaliyet gösteren Teknoloji ve Havacılık Topluluğu, teknoloji ve havacılığa ilgi duyan öğrencilere yönelik dinamik bir topluluktur.
        </p>
      </div>
      <div className="relative w-60 h-60 lg:w-80 lg:h-80 mt-12 lg:mt-0">
        <Image
          src="/logo.png"
          alt="Teknoloji ve Havacılık Topluluğu Logosu"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}