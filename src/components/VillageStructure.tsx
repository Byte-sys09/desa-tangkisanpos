import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { User, Users } from 'lucide-react';

export function VillageStructure() {
  const officials = [
    {
      name: 'Parjono Santoso',
      position: 'Kepala Desa',
      image: 'https://ui-avatars.com/api/?name=Budi+Santoso&background=166534&color=fff&size=200',
    },
    {
      name: 'Ika, S.E',
      position: 'Sekretaris Desa',
      image: 'https://ui-avatars.com/api/?name=Siti+Nurjanah&background=047857&color=fff&size=200',
    },
    {
      name: 'Ahmad Wijaya',
      position: 'Kaur Pemerintahan',
      image: 'https://ui-avatars.com/api/?name=Ahmad+Wijaya&background=059669&color=fff&size=200',
    },
    {
      name: 'Dewi Lestari',
      position: 'Kaur Kesejahteraan',
      image: 'https://ui-avatars.com/api/?name=Dewi+Lestari&background=10b981&color=fff&size=200',
    },
    {
      name: 'Joko Purnomo',
      position: 'Kaur Pembangunan',
      image: 'https://ui-avatars.com/api/?name=Joko+Purnomo&background=34d399&color=fff&size=200',
    },
    {
      name: 'Rina Safitri',
      position: 'Kaur Keuangan',
      image: 'https://ui-avatars.com/api/?name=Rina+Safitri&background=6ee7b7&color=000&size=200',
    },
  ];

  const dusun = [
    { name: 'Dusun Sabrangkali', kepala: 'Margono' },
    { name: 'Dusun Tangkisanpos', kepala: 'Bambang Sutrisno' },
    { name: 'Dusun Gatak', kepala: 'Hadi Prayitno' },
  ];

  return (
    <section id="pemerintahan" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Struktur Pemerintahan Desa
          </h2>
          <p className="text-xl text-gray-600">
            Perangkat Desa Tangkisanpos periode 2023-2029
          </p>
        </div>

        {/* Kepala Desa */}
        <div className="flex justify-center mb-12">
          <Card className="w-80 text-center border-2 border-green-700 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-700">
                <img
                  src={officials[0].image}
                  alt={officials[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl mb-1">{officials[0].name}</h3>
              <div className="inline-block bg-green-700 text-white px-4 py-1 rounded-full text-sm">
                {officials[0].position}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Perangkat Desa */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {officials.slice(1).map((official, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-2 border-green-700">
                  <img
                    src={official.image}
                    alt={official.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="mb-1">{official.name}</h3>
                <div className="text-sm text-gray-600">{official.position}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Kepala Dusun */}
        <div className="bg-green-50 rounded-xl p-8">
          <div className="flex items-center justify-center mb-8">
            <Users className="text-green-700 mr-3" size={32} />
            <h3 className="text-2xl text-center">Kepala Dusun</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {dusun.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-green-100">
                <CardHeader className="pb-3 bg-gradient-to-br from-green-50 to-white">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-green-700 flex items-center justify-center">
                    <User size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-lg text-center text-green-700">{item.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-4">
                  <p className="text-sm text-gray-500 mb-1">Kepala Dusun</p>
                  <p className="font-semibold text-gray-800">{item.kepala}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
