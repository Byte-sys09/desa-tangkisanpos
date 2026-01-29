# Website Resmi Desa Tangkisanpos

Website informasi pemerintahan untuk Desa Tangkisanpos, Kecamatan Jogonalan, Kabupaten Klaten, Jawa Tengah.

## 🚀 Deployment

Website ini siap untuk di-deploy ke Vercel, Netlify, atau platform hosting lainnya.

### Deploy ke Vercel

1. Push repository ini ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Vercel akan otomatis mendeteksi konfigurasi Vite
4. Klik Deploy!

## 💻 Development

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Website akan berjalan di `http://localhost:5173`

### Build for Production

```bash
npm run build
```

File production akan ada di folder `dist/`

### Preview Production Build

```bash
npm run preview
```

## 📁 Struktur Project

```
desa-tangkisanpos/
├── src/
│   └── main.tsx          # Entry point React
├── components/           # Komponen React
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── ProfileSection.tsx
│   ├── VillageStructure.tsx
│   ├── DemographicsSection.tsx
│   ├── NewsSection.tsx
│   ├── GallerySection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── ui/              # UI Components
├── styles/
│   └── globals.css      # Global styles & Tailwind
├── App.tsx              # Main App component
├── index.html           # HTML entry point
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🛠️ Tech Stack

- **React** 18.3 - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** v4 - Styling
- **Lucide React** - Icons
- **Recharts** - Charts & Graphs

## 📝 License

© 2025 Pemerintah Desa Tangkisanpos. All rights reserved.
