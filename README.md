# Jasa Mesin Custom — Astro Starter

Website company profile + katalog jasa + portfolio + artikel SEO, siap untuk GitHub Pages.

## 1. Ganti identitas website

Edit `src/data/site.js`.

Ubah nama website, deskripsi, nomor WhatsApp, dan pesan WhatsApp.

## 2. Ganti URL GitHub Pages

Edit `astro.config.mjs`.

Untuk repository `jasa-mesin-custom`:

```js
site: "https://USERNAME.github.io",
base: "/jasa-mesin-custom"
```

Jika memakai custom domain, ubah `site` ke domain Anda dan sesuaikan `base`.

## 3. Jalankan lokal

```bash
npm install
npm run dev
```

## 4. Build

```bash
npm run build
```

Hasil build berada di `dist/`.

## 5. GitHub Pages

Push project ke GitHub pada branch `main`. Workflow `.github/workflows/deploy.yml` akan membangun Astro dan menerbitkan folder `dist` ke GitHub Pages.

Di GitHub, buka **Settings → Pages** dan pilih **GitHub Actions** sebagai source.

## 6. Menambah jasa

Edit `src/data/site.js`, bagian `services`.

Untuk skala besar, tahap berikutnya sebaiknya memindahkan data jasa ke Markdown/content collections.

## 7. Menambah artikel SEO

Versi starter ini menggunakan data artikel di `src/data/site.js` agar sederhana.

Template artikel ada di:

`src/pages/artikel/[slug].astro`

Pada pengembangan berikutnya, saya sarankan setiap artikel dibuat sebagai file `.md` agar penambahan 100–500 artikel jauh lebih mudah.

## SEO teknis yang sudah disiapkan

- title per halaman
- meta description
- canonical URL
- robots meta
- robots.txt
- sitemap.xml melalui `@astrojs/sitemap`
- Open Graph
- Twitter Card
- JSON-LD Organization
- struktur URL kategori/jasa/artikel/proyek
- internal linking dasar
- responsive layout
- static build untuk GitHub Pages

## Struktur URL

- `/`
- `/jasa/`
- `/jasa/[slug]/`
- `/kategori/`
- `/kategori/[slug]/`
- `/artikel/`
- `/artikel/[slug]/`
- `/proyek/`
- `/proyek/[slug]/`
- `/kontak/`
