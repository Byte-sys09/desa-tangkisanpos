import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Users, Home } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="beranda" className="relative">
      {/* Hero Image */}
      <div className="relative h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1588423851962-29a61047cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdmlsbGFnZSUyMHJpY2UlMjBmaWVsZHxlbnwxfHx8fDE3Njk1MjYyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Desa Tangkisanpos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl lg:text-6xl mb-4">
                Selamat Datang di<br />
                <span className="text-yellow-400 text-[36px] text-left font-normal font-bold">Desa Tangkisanpos</span>
              </h1>
              <p className="text-xl mb-2">Kecamatan Jogonalan, Kabupaten Klaten</p>
              <p className="text-lg text-gray-200 mb-8">
               
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="text-yellow-400" size={24} />
                  <span className="font-bold">Klaten, Jawa Tengah</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-yellow-400" size={24} />
                  <span className="font-bold">5.234 Jiwa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="text-yellow-400" size={24} />
                  <span className="font-bold">1.456 KK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}