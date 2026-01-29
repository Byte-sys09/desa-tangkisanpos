import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="https://jogonalan.klaten.go.id/uploads/gallery/image_500x_5f0bfe54cd09e.jpg"
                alt="Logo Desa Tangkisanpos"
                className="w-12 h-12 object-contain bg-green-800 rounded-lg p-2"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">DESA TANGKISANPOS</span>
                <span className="text-xs text-green-200">Kec. Jogonalan, Kab. Klaten</span>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              Website resmi Pemerintah Desa Tangkisanpos, Kecamatan Jogonalan, Kabupaten Klaten, 
              Provinsi Jawa Tengah. Melayani dengan sepenuh hati untuk kemajuan desa.
            </p>
            <div className="space-y-2 text-green-100 text-sm">
              <div className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Jl. Raya Jogonalan KM 3, Tangkisanpos, Klaten 57452</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>(0272) 334455</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span>desa.tangkisanpos@klaten.go.id</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Menu</h3>
            <ul className="space-y-2 text-green-100">
              <li>
                <a href="#beranda" className="hover:text-white transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#profil" className="hover:text-white transition-colors">Profil Desa</a>
              </li>
              <li>
                <a href="#pemerintahan" className="hover:text-white transition-colors">Pemerintahan</a>
              </li>
              <li>
                <a href="#demografi" className="hover:text-white transition-colors">Demografi</a>
              </li>
              <li>
                <a href="#berita" className="hover:text-white transition-colors">Berita</a>
              </li>
              <li>
                <a href="#galeri" className="hover:text-white transition-colors">Galeri</a>
              </li>
              <li>
                <a href="#kontak" className="hover:text-white transition-colors">Kontak</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4">Media Sosial</h3>
            <p className="text-green-100 text-sm mb-4">
              Ikuti kami di media sosial untuk mendapatkan informasi terbaru
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
            <div className="mt-6">
              <h4 className="text-sm mb-2">Link Terkait</h4>
              <ul className="space-y-1 text-green-100 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">Kab. Klaten</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Kec. Jogonalan</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">Prov. Jawa Tengah</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-100">
          <p>&copy; 2026 Desa Tangkisanpos. Semua hak dilindungi.</p>
          <p className="mt-2 text-sm">
            Website Resmi Pemerintah Desa Tangkisanpos - Kecamatan Jogonalan, Kabupaten Klaten
          </p>
        </div>
      </div>
    </footer>
  );
}
