# Jasa Pembuatan Mesin Custom ⚙️

> Website profil perusahaan & lead generation profesional spesialis fabrikasi, rancang bangun, dan otomatisasi mesin custom industri di Indonesia.

Dibangun dengan **Astro**, **TypeScript**, **Tailwind CSS**, serta siap di-deploy secara otomatis ke **GitHub Pages** menggunakan **GitHub Actions**.

---

## 🌟 Fitur Utama Website

1. **Company Profile & Portofolio B2B**: Memperkenalkan kapabilitas permesinan presisi, tim engineering mekanikal & mekatronika, serta dokumentasi studi kasus nyata.
2. **Katalog Jasa & Kategori Lengkap**:
   - 7 Sektor Industri (Makanan/Minuman, Manufaktur Logam, Pertanian, Pengolahan Limbah, Packaging & Filling, Conveyor, Mesin Khusus SPM).
   - 6 Layanan Spesifik (Mesin Filling, Mesin Pengemas, Conveyor Modular, Mesin Pencacah Shredder, Mixer Industri, Press Hidrolik).
3. **Lead Generation & WhatsApp Otomatis**:
   - Floating WhatsApp button di seluruh halaman.
   - Pesan WhatsApp dinamis yang otomatis menyebutkan jenis mesin yang dikonsultasikan.
   - Formulir spesifikasi mesin interaktif di halaman Kontak.
4. **Modern Semantic SEO**:
   - Meta title & description unik untuk setiap halaman.
   - Structured Data (Schema.org JSON-LD): `Organization`, `WebSite`, `Service`, `Article`, `BreadcrumbList`, `FAQPage`.
   - `robots.txt` & automatic `sitemap-index.xml`.
   - OpenGraph & Twitter Cards untuk preview media sosial.
5. **Zero-Pill Industrial Aesthetics**: Desain clean, profesional, font hierarchy terstruktur, tanpa badge berlebih, kontras WCAG AA, dan mobile-first responsive.

---

## 📁 Struktur Folder Project

```text
Jasa-Pembuatan-Mesin-Custom/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Otomasi build & deploy ke GitHub Pages
├── public/
│   ├── favicon.svg             # Favicon industrial icon
│   ├── og-image.svg            # Share image preview 1200x630
│   └── robots.txt              # Directives crawler search engine
├── src/
│   ├── components/             # Komponen modular Astro
│   │   ├── Header.astro        # Sticky top bar dengan contract 3-zone
│   │   ├── Footer.astro        # Quiet footer navigasi & legalitas
│   │   ├── WhatsAppButton.astro# Floating WhatsApp button
│   │   ├── Hero.astro          # Hero section + visual industrial
│   │   ├── ServiceCard.astro   # Card layanan mesin + spesifikasi
│   │   ├── CategoryCard.astro  # Card kategori industri
│   │   ├── ArticleCard.astro   # Card artikel dengan metadata unboxed
│   │   ├── ProjectCard.astro   # Card studi kasus proyek mesin
│   │   └── CTA.astro           # Call to Action lead generator
│   ├── data/
│   │   └── site.ts             # Sumber data terpusat (kategori, jasa, artikel, proyek)
│   ├── layouts/
│   │   └── Layout.astro        # Master SEO layout + Schema.org JSON-LD
│   ├── pages/
│   │   ├── index.astro         # Homepage 10 sections
│   │   ├── kontak.astro        # Halaman kontak & form WhatsApp generator
│   │   ├── kategori/
│   │   │   ├── index.astro     # Index katalog kategori industri
│   │   │   └── [slug].astro    # Detail 7 kategori industri
│   │   ├── jasa/
│   │   │   ├── index.astro     # Index katalog layanan mesin
│   │   │   └── [slug].astro    # Detail 6 jenis mesin custom
│   │   ├── artikel/
│   │   │   ├── index.astro     # Portal artikel SEO
│   │   │   └── [slug].astro    # Detail artikel edukasi & FAQ
│   │   └── proyek/
│   │       ├── index.astro     # Galeri portofolio proyek
│   │       └── [slug].astro    # Studi kasus proyek & problem-solution
│   └── styles/
│       └── global.css          # Tailwind CSS layer & base style
├── astro.config.mjs            # Konfigurasi Astro (site, base, sitemap)
├── package.json                # Dependencies & script pengerjaan
├── tsconfig.json               # Konfigurasi TypeScript
└── README.md
```

---

## 🚀 Panduan Menjalankan Secara Lokal

### 1. Prasyarat
- Node.js versi 18 atau 20 (Direkomendasikan Node.js 20 LTS)
- npm / yarn / pnpm

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```
Buka peramban di `http://localhost:3000` (atau port yang ditampilkan terminal).

### 4. Build Static Site
```bash
npm run build
```
File static production akan dihasilkan di dalam direktori `dist/`.

---

## 🌐 Panduan Deployment ke GitHub Pages

Repository tujuan: `akudu950/Jasa-Pembuatan-Mesin-Custom-`
Branch: `main`

File `astro.config.mjs` telah dikonfigurasi dengan:
```javascript
site: 'https://akudu950.github.io',
base: '/Jasa-Pembuatan-Mesin-Custom-',
trailingSlash: 'always',
```

### Langkah Setup di GitHub:
1. Push seluruh file project ini ke repository GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: complete website jasa pembuatan mesin custom"
   git branch -M main
   git remote add origin https://github.com/akudu950/Jasa-Pembuatan-Mesin-Custom-.git
   git push -u origin main
   ```
2. Buka repository di GitHub: **Settings** > **Pages**.
3. Pada bagian **Build and deployment** > **Source**, pilih **GitHub Actions**.
4. Workflow `.github/workflows/deploy.yml` akan otomatis terpicu setiap kali Anda melakukan push ke branch `main`.
5. Website Anda akan live di:
   `https://akudu950.github.io/Jasa-Pembuatan-Mesin-Custom-/`

---

## 📞 Informasi Kontak Bisnis
- **WhatsApp**: +62 812-3456-7890
- **Email**: info@jasamesincustom.co.id
- **Alamat**: Kawasan Industri Jababeka Phase II, Blok C-14, Cikarang, Bekasi, Jawa Barat
