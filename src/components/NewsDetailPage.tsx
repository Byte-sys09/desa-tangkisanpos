import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Calendar, Eye, ArrowLeft, Share2, Facebook, Twitter, MessageCircle } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  views: number;
  content: string;
  author: string;
}

interface NewsDetailPageProps {
  news: NewsItem;
  onBack: () => void;
  relatedNews: NewsItem[];
  onSelectNews: (news: NewsItem) => void;
}

export function NewsDetailPage({ news, onBack, relatedNews, onSelectNews }: NewsDetailPageProps) {
  const categoryColors: { [key: string]: string } = {
    'Pemerintahan': 'bg-blue-600',
    'Kegiatan': 'bg-green-600',
    'Sosial': 'bg-purple-600',
    'Ekonomi': 'bg-yellow-600',
    'Kesehatan': 'bg-red-600',
    'Infrastruktur': 'bg-orange-600',
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button 
          onClick={onBack} 
          variant="outline" 
          className="mb-6 hover:bg-green-50"
        >
          <ArrowLeft size={20} className="mr-2" />
          Kembali ke Daftar Berita
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-96 overflow-hidden">
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-4 left-4 ${categoryColors[news.category] || 'bg-gray-600'} text-white`}>
                  {news.category}
                </Badge>
              </div>

              <CardHeader className="space-y-4">
                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2 text-green-600" />
                    {news.date}
                  </div>
                  <div className="flex items-center">
                    <Eye size={16} className="mr-2 text-green-600" />
                    {news.views} views
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-600 font-medium">Oleh: {news.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl lg:text-4xl text-gray-900">
                  {news.title}
                </h1>

                {/* Share Buttons */}
                <div className="flex items-center gap-2 pt-4 border-t">
                  <span className="text-sm text-gray-600 mr-2">Bagikan:</span>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50">
                    <Facebook size={16} className="mr-1 text-blue-600" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50">
                    <Twitter size={16} className="mr-1 text-sky-500" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="hover:bg-green-50">
                    <MessageCircle size={16} className="mr-1 text-green-600" />
                    WhatsApp
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="prose max-w-none">
                {/* Article Content */}
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {news.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600">Tags:</span>
                    <Badge variant="outline" className="hover:bg-green-50">Desa Tangkisanpos</Badge>
                    <Badge variant="outline" className="hover:bg-green-50">{news.category}</Badge>
                    <Badge variant="outline" className="hover:bg-green-50">Jogonalan</Badge>
                    <Badge variant="outline" className="hover:bg-green-50">Klaten</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Related News */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-xl text-green-700">Berita Terkait</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {relatedNews.map((item, index) => (
                  <div 
                    key={index} 
                    className="group cursor-pointer border-b last:border-b-0 pb-4 last:pb-0"
                    onClick={() => onSelectNews(item)}
                  >
                    <div className="flex gap-3">
                      <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Badge className={`${categoryColors[item.category] || 'bg-gray-600'} text-xs mb-1`}>
                          {item.category}
                        </Badge>
                        <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-green-700 transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar size={12} className="mr-1" />
                          {item.date}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
