import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative flex items-center justify-between min-h-screen text-white px-8 gap-8">
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-2 flex space-x-4 pt-4 bg-opacity-75 py-2 px-4 rounded-lg">
        <a href="#" className="hover:underline">Anasayfa</a>
        <a href="#" className="hover:underline">Hakkımızda</a>
        <a href="#" className="hover:underline">Faaliyetlerimiz</a>
        <a href="#" className="hover:underline">Ekibimiz</a>
        <a href="#" className="hover:underline">Galeri</a>
        <a href="#" className="hover:underline">İletişim</a>
      </nav>
      <div className="flex flex-col items-start max-w-lg mt-12">
        <h1 className="text-4xl font-bold mb-4 whitespace-nowrap">
          TEKNOLOJİ VE HAVACILIK TOPLULUĞU
        </h1>
        <p className="text-lg mb-8">
          Konya Teknik Üniversitesi bünyesinde faaliyet gösteren Teknoloji ve Havacılık Topluluğu, teknoloji ve havacılığa ilgi duyan öğrencilere yönelik dinamik bir topluluktur.
        </p>
      </div>
      <div className="relative w-80 h-80 mt-12 right-4 items-center">
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