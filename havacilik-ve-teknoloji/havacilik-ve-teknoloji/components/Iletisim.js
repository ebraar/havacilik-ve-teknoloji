// Iletisim.js
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Iletisim() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[60vh] text-white py-6 mt-0"> {/* mt-0 ekledik */}
      <h1 className="text-4xl font-bold mb-8">İLETİŞİM</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-3/4 mb-6">
        <div className="mb-4 md:mb-0">
          <p className="text-lg font-semibold">ADRES:</p>
          <p>Ardıçlı Mah. Rauf Orbay Cad. 42250, Selçuklu/KONYA</p>
        </div>
        <div className="flex flex-col items-start">
          <a href="https://linkedin.com" className="flex items-center space-x-2 mb-4">
            <FaLinkedin className="h-6 w-6" />
            <p>Teknoloji ve Havacılık Topluluğu</p>
          </a>
          <a href="https://instagram.com" className="flex items-center space-x-2">
            <FaInstagram className="h-6 w-6" />
            <p>ktun_teknolojivehavacilik</p>
          </a>
        </div>
      </div>
      <p className="absolute bottom-0 left-0 ml-4 mb-4 text-sm">
        Made with love by Ebrar Betül Akgül
      </p>
    </div>
  );
}