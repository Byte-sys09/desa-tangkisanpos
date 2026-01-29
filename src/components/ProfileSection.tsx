import { MapPin, Mountain, Wheat, Factory } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ProfileSection() {
  const profileData = [
    {
      icon: MapPin,
      title: 'Luas Wilayah',
      value: '3.45 km²',
      color: 'bg-blue-500',
    },
    {
      icon: Mountain,
      title: 'Ketinggian',
      value: '145 mdpl',
      color: 'bg-green-500',
    },
    {
      icon: Wheat,
      title: 'Lahan Pertanian',
      value: '185 Ha',
      color: 'bg-yellow-600',
    },
    {
      icon: Factory,
      title: 'UMKM',
      value: '87 Unit',
      color: 'bg-purple-500',
    },
  ];

  return (
    <section id="profil" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {profileData.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <div className="text-2xl mb-1">{item.value}</div>
                  <div className="text-gray-600 text-sm">{item.title}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Profile Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl mb-6">
              Profil Desa Tangkisanpos
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Desa Tangkisanpos merupakan salah satu desa di Kecamatan Jogonalan, Kabupaten Klaten, 
                Provinsi Jawa Tengah. Desa ini memiliki potensi besar di bidang pertanian dan 
                pengembangan UMKM.
              </p>
              <p>
                Dengan jumlah penduduk sekitar 5.234 jiwa yang tersebar di beberapa dusun, 
                Desa Tangkisanpos terus berkembang menuju desa mandiri dan sejahtera melalui 
                berbagai program pemberdayaan masyarakat.
              </p>
              <p>
                Letak geografis yang strategis dan didukung oleh sumber daya alam yang memadai 
                menjadikan Desa Tangkisanpos sebagai salah satu desa dengan pertumbuhan ekonomi 
                yang baik di Kecamatan Jogonalan.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border-l-4 border-green-700 pl-4">
                <div className="text-2xl text-green-700 mb-1">Visi</div>
                <p className="text-sm text-gray-600">
                  Terwujudnya Desa Tangkisanpos yang maju, mandiri, dan sejahtera
                </p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4">
                <div className="text-2xl text-yellow-600 mb-1">Misi</div>
                <p className="text-sm text-gray-600">
                  Meningkatkan kesejahteraan masyarakat melalui pembangunan berkelanjutan
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <Card className="bg-green-700 text-white">
              <CardContent className="pt-6">
                <h3 className="text-xl mb-4">Batas Wilayah</h3>
                <div className="space-y-2 text-green-50">
                  <div className="flex justify-between">
                    <span>Utara:</span>
                    <span>Desa Jatipuro</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Selatan:</span>
                    <span>Desa Prawatan</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Timur:</span>
                    <span>Desa Jogonalan</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Barat:</span>
                    <span>Desa Banaran</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl mb-4">Potensi Desa</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    <span>Pertanian padi dan palawija yang produktif</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    <span>UMKM kerajinan dan makanan tradisional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    <span>Budaya gotong royong yang kuat</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-700 mr-2">✓</span>
                    <span>Lokasi strategis dekat pusat kota</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
