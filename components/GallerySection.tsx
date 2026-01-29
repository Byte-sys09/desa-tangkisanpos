import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const gallery = [
    {
      url: 'https://images.unsplash.com/photo-1588423851962-29a61047cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdmlsbGFnZSUyMHJpY2UlMjBmaWVsZHxlbnwxfHx8fDE3Njk1MjYyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sawah Produktif',
    },
    {
      url: 'https://images.unsplash.com/photo-1643216120728-fa08e985b178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBob3VzZXxlbnwxfHx8fDE3Njk1MjYyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Balai Desa',
    },
    {
      url: 'https://images.unsplash.com/photo-1722643882339-7a6c9cb080db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2OTQ5MzM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Kegiatan Masyarakat',
    },
    {
      url: 'https://images.unsplash.com/photo-1588423851962-29a61047cb11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdmlsbGFnZSUyMHJpY2UlMjBmaWVsZHxlbnwxfHx8fDE3Njk1MjYyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Pemandangan Desa',
    },
    {
      url: 'https://images.unsplash.com/photo-1643216120728-fa08e985b178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRvbmVzaWFuJTIwdHJhZGl0aW9uYWwlMjBob3VzZXxlbnwxfHx8fDE3Njk1MjYyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Fasilitas Umum',
    },
    {
      url: 'https://images.unsplash.com/photo-1722643882339-7a6c9cb080db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjBtZWV0aW5nJTIwaW5kb25lc2lhfGVufDF8fHx8MTc2OTQ5MzM0OHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Gotong Royong',
    },
  ];

  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Galeri Foto
          </h2>
          <p className="text-xl text-gray-600">
            Dokumentasi kegiatan dan suasana Desa Tangkisanpos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => setSelectedImage(item.url)}
            >
              <ImageWithFallback
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <p className="text-white p-4">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl max-h-full">
              <ImageWithFallback
                src={selectedImage}
                alt="Preview"
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </section>
  );
}