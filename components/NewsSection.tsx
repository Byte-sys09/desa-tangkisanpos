import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Calendar, Eye, Search, Filter } from "lucide-react";
import { NewsDetailPage } from "./NewsDetailPage";

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

export function NewsSection() {
  const [selectedNews, setSelectedNews] =
    useState<NewsItem | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Semua");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allNews: NewsItem[] = [];

  const categories = [
    "Semua",
    "Pemerintahan",
    "Kegiatan",
    "Sosial",
    "Ekonomi",
    "Kesehatan",
    "Infrastruktur",
  ];

  const categoryColors: { [key: string]: string } = {
    Pemerintahan: "bg-blue-600",
    Kegiatan: "bg-green-600",
    Sosial: "bg-purple-600",
    Ekonomi: "bg-yellow-600",
    Kesehatan: "bg-red-600",
    Infrastruktur: "bg-orange-600",
  };

  // Filter news based on category and search query
  const filteredNews = allNews.filter((item) => {
    const matchCategory =
      selectedCategory === "Semua" ||
      item.category === selectedCategory;
    const matchSearch =
      item.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      item.excerpt
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Get related news (same category, different article)
  const getRelatedNews = (currentNews: NewsItem) => {
    return allNews
      .filter(
        (item) =>
          item.id !== currentNews.id &&
          item.category === currentNews.category,
      )
      .slice(0, 4);
  };

  if (selectedNews) {
    return (
      <NewsDetailPage
        news={selectedNews}
        onBack={() => setSelectedNews(null)}
        relatedNews={getRelatedNews(selectedNews)}
        onSelectNews={(news) => {
          setSelectedNews(news);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      />
    );
  }

  return (
    <section
      id="berita"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Berita & Kegiatan Desa
          </h2>
          <p className="text-xl text-gray-600">
            Informasi terkini dari Desa Tangkisanpos
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={
                  selectedCategory === category
                    ? "default"
                    : "outline"
                }
                onClick={() => setSelectedCategory(category)}
                className={
                  selectedCategory === category
                    ? "bg-green-700 hover:bg-green-800"
                    : "hover:bg-green-50"
                }
              >
                <Filter size={16} className="mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              type="text"
              placeholder="Cari berita atau kegiatan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-green-500 focus:ring-green-500"
            />
          </div>
        </div>

        {/* News Count */}
        <div className="mb-6 text-center text-gray-600">
          Menampilkan {filteredNews.length} berita
        </div>

        {/* News Grid */}
        {filteredNews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <Card
                key={item.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-1"
                onClick={() => {
                  setSelectedNews(item);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${categoryColors[item.category] || "bg-gray-600"}`}
                  >
                    {item.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Eye size={14} className="mr-1" />
                      {item.views}
                    </div>
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-green-700 transition-colors">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {item.excerpt}
                  </CardDescription>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-green-700 hover:text-green-800"
                  >
                    Baca Selengkapnya →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Tidak ada berita yang sesuai dengan pencarian
              Anda.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}