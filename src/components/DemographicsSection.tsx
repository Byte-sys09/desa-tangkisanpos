import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, User, GraduationCap, Briefcase, Home } from 'lucide-react';

export function DemographicsSection() {
  const demographics = {
    population: [
      { label: 'Laki-laki', value: '2.687', percentage: 51.3, color: 'bg-blue-500' },
      { label: 'Perempuan', value: '2.547', percentage: 48.7, color: 'bg-pink-500' },
    ],
    age: [
      { label: '0-17 tahun', value: '1.234', percentage: 23.6 },
      { label: '18-35 tahun', value: '1.678', percentage: 32.1 },
      { label: '36-55 tahun', value: '1.543', percentage: 29.5 },
      { label: '56+ tahun', value: '779', percentage: 14.8 },
    ],
    education: [
      { label: 'Tidak/Belum Sekolah', value: '423' },
      { label: 'SD/Sederajat', value: '1.234' },
      { label: 'SMP/Sederajat', value: '1.456' },
      { label: 'SMA/Sederajat', value: '1.678' },
      { label: 'Diploma/Sarjana', value: '443' },
    ],
    occupation: [
      { label: 'Petani', value: '1.234' },
      { label: 'Buruh', value: '876' },
      { label: 'Pedagang', value: '543' },
      { label: 'PNS/TNI/Polri', value: '234' },
      { label: 'Swasta', value: '987' },
      { label: 'Lainnya', value: '456' },
    ],
  };

  return (
    <section id="demografi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Data Demografi
          </h2>
          <p className="text-xl text-gray-600">
            Informasi kependudukan Desa Tangkisanpos
          </p>
        </div>

        {/* Total Population */}
        <div className="bg-gradient-to-r from-green-700 to-green-900 text-white rounded-xl p-8 mb-12 text-center">
          <Users size={48} className="mx-auto mb-4" />
          <div className="text-5xl mb-2">5.234</div>
          <div className="text-xl">Total Penduduk</div>
          <div className="text-green-200 mt-2">1.456 Kepala Keluarga</div>
        </div>

        {/* Gender Distribution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="mr-2" />
                Berdasarkan Jenis Kelamin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demographics.population.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{item.label}</span>
                      <span className="font-semibold">{item.value} jiwa ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`${item.color} h-3 rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2" />
                Berdasarkan Kelompok Usia
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {demographics.age.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{item.label}</span>
                      <span className="font-semibold">{item.value} jiwa ({item.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-green-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education and Occupation */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="mr-2" />
                Berdasarkan Pendidikan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {demographics.education.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-semibold text-green-700">{item.value} jiwa</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="mr-2" />
                Berdasarkan Mata Pencaharian
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {demographics.occupation.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-700">{item.label}</span>
                    <span className="font-semibold text-green-700">{item.value} jiwa</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
