import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Hubungi Kami
          </h2>
          <p className="text-xl text-gray-600">
            Informasi kontak Pemerintah Desa Tangkisanpos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <MapPin className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Alamat Kantor</h3>
                    <p className="text-gray-600">
                      Jl. Raya Jogonalan KM 3, Tangkisanpos<br />
                      Kecamatan Jogonalan<br />
                      Kabupaten Klaten, Jawa Tengah 57452
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Telepon</h3>
                    <p className="text-gray-600">
                      (0272) 123456<br />
                      HP: 0812-3456-7890
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      desatangkisanpos@klaten.go.id<br />
                      info.tangkisanpos@gmail.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Clock className="text-green-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Jam Pelayanan</h3>
                    <p className="text-gray-600">
                      Senin - Kamis: 08.00 - 15.00 WIB<br />
                      Jumat: 08.00 - 11.30 WIB<br />
                      Sabtu - Minggu: Libur
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Google Maps */}
          <div>
            <Card className="border-green-200 overflow-hidden h-full">
              <CardContent className="p-0 h-full min-h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31627.365438935743!2d110.5317862!3d-7.7389086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a44dc52307961%3A0xa4abc9c7850a3379!2sTangkisan%20Pos%2C%20Kec.%20Jogonalan%2C%20Kabupaten%20Klaten%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1738187000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Peta Lokasi Desa Tangkisanpos"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}