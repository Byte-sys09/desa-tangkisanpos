import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk mendapatkan tanggal dalam Bahasa Indonesia
  const getCurrentDate = () => {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = [
      'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
      'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
    ];
    
    const now = new Date();
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const monthName = months[now.getMonth()];
    const year = now.getFullYear();
    
    return `${dayName}, ${date} ${monthName} ${year}`;
  };

  const menuItems = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil Desa', href: '#profil' },
    { label: 'Pemerintahan', href: '#pemerintahan' },
    { label: 'Demografi', href: '#demografi' },
    { label: 'Berita', href: '#berita' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-800 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span>Selamat Datang di Website Resmi Desa Tangkisanpos</span>
          <span className="hidden sm:block">{getCurrentDate()}</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <img 
                src="https://jogonalan.klaten.go.id/uploads/gallery/image_500x_5f0bfe54cd09e.jpg"
                alt="Logo Desa Tangkisanpos"
                className="w-14 h-14 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-green-800">DESA TANGKISANPOS</span>
                <span className="text-sm text-gray-600">Kec. Jogonalan, Kab. Klaten</span>
                <span className="text-xs text-gray-500">Provinsi Jawa Tengah</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 rounded-md text-gray-700 hover:bg-green-700 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden pb-4 space-y-1">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-2 rounded-md text-gray-700 hover:bg-green-700 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </>
  );
}