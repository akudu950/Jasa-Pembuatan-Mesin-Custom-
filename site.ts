export interface Category {
  slug: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  services: string[];
  features: string[];
  targetIndustry: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Service {
  slug: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  specs: { label: string; value: string }[];
  applications: string[];
  benefits: string[];
  processSteps: string[];
  relatedProjectSlug?: string;
  relatedArticleSlug?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Article {
  slug: string;
  title: string;
  publishDate: string;
  readTime: string;
  category: string;
  author: string;
  excerpt: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      subheading?: string;
      body: string[];
      bullets?: string[];
    }[];
    faqs: { question: string; answer: string }[];
  };
  relatedServices: string[];
  relatedCategory: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Project {
  slug: string;
  title: string;
  industry: string;
  categorySlug: string;
  clientType: string;
  completionYear: string;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  specifications: { label: string; value: string }[];
  results: string[];
  relatedServiceSlug: string;
  seoTitle: string;
  seoDescription: string;
}

export const SITE_CONFIG = {
  name: "Jasa Pembuatan Mesin Custom",
  companyName: "PT Rekayasa Mesin Industri Indonesia",
  phone: "6281234567890",
  formattedPhone: "+62 812-3456-7890",
  email: "info@jasamesincustom.co.id",
  address: "Kawasan Industri Jababeka Phase II, Blok C-14, Cikarang, Bekasi, Jawa Barat 17530",
  operatingHours: "Senin - Sabtu: 08.00 - 17.00 WIB",
  siteUrl: "https://akudu950.github.io",
  basePath: "/Jasa-Pembuatan-Mesin-Custom-",
  defaultOgImage: "/og-image.svg",
  stats: [
    { value: "12+ Tahun", label: "Pengalaman Fabrikasi & Rancang Mesin" },
    { value: "350+ Unit", label: "Mesin Berhasil Diinstalasi & Beroperasi" },
    { value: "99.2%", label: "Tingkat Kepuasan & Commissioning Akurat" },
    { value: "1 Tahun", label: "Garansi Mesin & Support Suku Cadang" },
  ],
};

export const CATEGORIES: Category[] = [
  {
    slug: "mesin-makanan-minuman",
    title: "Mesin Makanan & Minuman",
    shortDesc: "Rancang bangun mesin pemrosesan dan pengemasan food-grade SUS 304/316 sesuai standar higienitas BPOM & GMP.",
    description: "Kami memproduksi mesin custom untuk industri makanan dan minuman (F&B) dengan standar higienis tinggi, material food-grade stainless steel (SUS 304 / SUS 316L), sanitasi mudah, dan kontrol otomatis berbasis PLC touchscreen.",
    icon: "Utensils",
    services: ["mesin-filling-custom", "mesin-pengemas-custom", "mesin-mixer-custom"],
    features: ["Food Grade Stainless Steel 304/316L", "CIP (Clean-in-Place) Ready", "Sertifikasi Komponen Listrik IP65/IP67", "Sistem No-Bottle No-Fill"],
    targetIndustry: "Pabrik Saus, Kecap, Minuman Kemasan, Roti, Minyak Goreng, Susu & Produk Olahan.",
    seoTitle: "Jasa Pembuatan Mesin Makanan & Minuman Custom Food Grade",
    seoDescription: "Fabrikasi mesin custom industri makanan dan minuman food-grade SUS 304/316. Otomatisasi proses higienis, hemat energi, dan presisi tinggi.",
  },
  {
    slug: "manufaktur-logam",
    title: "Manufaktur & Logam",
    shortDesc: "Mesin press hidrolik, punching, shearing, bending, dan jig fixture presisi untuk lini produksi komponen logam.",
    description: "Solusi permesinan industri logam yang menuntut kekuatan struktur tinggi, ketahanan fatigue cycle, dan presisi toleransi sub-milimeter. Dilengkapi sistem hidrolik bertekanan tinggi dengan valve servo proporsional.",
    icon: "Hammer",
    services: ["mesin-press-custom", "mesin-conveyor-custom"],
    features: ["Struktur Rangka Baja Stress-Relieved", "Kontrol Tekanan Digital Proporsional", "Sensor Keselamatan Light Curtain", "Otomatisasi Cycle Time Tinggi"],
    targetIndustry: "Otomotif tier 1 & 2, Fabrikasi Stamping, Pembuatan Panel Box, Perbengkelan Presisi.",
    seoTitle: "Jasa Pembuatan Mesin Manufaktur & Logam Custom Industri",
    seoDescription: "Rancang bangun mesin press hidrolik, bending, dan mesin fabrikasi logam custom dengan toleransi presisi dan kapasitas beban berat.",
  },
  {
    slug: "pertanian-agro",
    title: "Pertanian & Agro",
    shortDesc: "Mesin pasca panen, pengering biji-bijian, pemilah sortasi otomatis, dan perajang komoditas pertanian berdaya tahan tinggi.",
    description: "Meningkatkan nilai tambah hasil panen komoditas perkebunan dan pertanian dengan mesin pengolahan efisien, hemat bahan bakar, dan dirancang khusus tahan terhadap debu maupun kelembapan tinggi di area perkebunan.",
    icon: "Sprout",
    services: ["mesin-pencacah-custom", "mesin-mixer-custom"],
    features: ["Baja Tahan Aus Hardox/Cast Alloy", "Sistem Pengering Kontrol Suhu Presisi", "Perawatan Mudah di Lokasi Kebun", "Kapasitas 500 kg/jam hingga 5 Ton/jam"],
    targetIndustry: "Pengolahan Kelapa Sawit, Kopi, Kakao, Padi, Jagung, dan Tapioka.",
    seoTitle: "Jasa Pembuatan Mesin Pertanian & Agroindustri Custom",
    seoDescription: "Fabrikasi mesin pengolahan hasil tani, pencacah pakan, mesin sortasi biji kopi, dan pengering hasil panen kapasitas industri.",
  },
  {
    slug: "pengolahan-limbah",
    title: "Pengolahan Limbah",
    shortDesc: "Mesin pencacah shredder heavy duty, filter press dewatering, dan compacting press untuk limbah padat dan cair.",
    description: "Mendukung regulasi lingkungan dan program daur ulang circular economy industri melalui mesin peremuk limbah padat, pemisah lumpur industri (sludge dewatering), dan pengurang volume limbah sebelum disposal.",
    icon: "Recycle",
    services: ["mesin-pencacah-custom", "mesin-press-custom"],
    features: ["Pisau Dual-Shaft Cr-Mo Hardened", "Sistem Proteksi Overload Auto-Reverse", "Efisiensi Reduksi Volume hingga 85%", "Heavy Duty Reducer Gearbox"],
    targetIndustry: "Recycling Plastik, Limbah Medis B3, Pengolahan Lumpur IPAL, Pengolahan Kardus & Logam Bekas.",
    seoTitle: "Jasa Pembuatan Mesin Pengolahan Limbah & Shredder Custom",
    seoDescription: "Pembuatan mesin shredder limbah plastik/logam, mesin dewatering filter press, dan mesin kompaksi limbah industri bergaransi resmi.",
  },
  {
    slug: "packaging-filling",
    title: "Packaging & Filling",
    shortDesc: "Sistem pengisian cairan/pasta presisi tinggi dan mesin sealing/kartoning otomatis untuk efisiensi kemasan massal.",
    description: "Meningkatkan output pengemasan botol, pouch, jerigen, dan sachet dengan akurasi pengisian $\\pm 0.5\\%$, sistem anti-drip, dan integrasi conveyor berkecepatan tinggi yang meminimalkan produk terbuang.",
    icon: "Package",
    services: ["mesin-filling-custom", "mesin-pengemas-custom"],
    features: ["Servo Piston / Flowmeter Dispensing", "Akurasi Pengisian $\\pm 0.5\\%$", "Touchscreen HMI Parameter Recipe Memory", "Anti-Foaming Diving Nozzle System"],
    targetIndustry: "Kosmetik, Farmasi, Kimia Rumah Tangga, Pelumas/Oli Mesin, Minuman Kemasan.",
    seoTitle: "Jasa Pembuatan Mesin Packaging & Filling Custom Otomatis",
    seoDescription: "Spesialis rekayasa mesin liquid filling otomatis, capping machine, labeling, dan cartooning sealer custom untuk efisiensi produksi.",
  },
  {
    slug: "conveyor-material-handling",
    title: "Conveyor & Material Handling",
    shortDesc: "Sistem konveyor modular, roller conveyor bermotor, overhead conveyor, dan automated transfer line pabrik.",
    description: "Mengoptimalkan aliran material dalam fasilitas produksi Anda tanpa bottleneck. Dirancang sesuai layout ruangan pabrik, beban kerja spesifik, dan kecepatan transfer yang sinkron dengan mesin proses.",
    icon: "Workflow",
    services: ["mesin-conveyor-custom"],
    features: ["Belt Modular PVC/PU/Slat Chain/Roller", "Variable Frequency Drive (VFD) Speed Control", "Struktur Stainless Steel / Powder Coated Steel", "Sensor Integrasi Line Automation"],
    targetIndustry: "Pusat Distribusi Logistik, Gudang E-commerce, Perakitan Elektronik, Pabrik Otomotif.",
    seoTitle: "Jasa Pembuatan Sistem Conveyor & Material Handling Custom",
    seoDescription: "Fabrikasi conveyor belt, roller conveyor, gravity conveyor, dan transfer table custom sesuai layout workshop dan kapasitas beban Anda.",
  },
  {
    slug: "mesin-custom-industri",
    title: "Mesin Custom Industri Lainnya",
    shortDesc: "Rekayasa mesin spesial (special purpose machine) untuk proses non-standar yang tidak dijual di pasaran umum.",
    description: "Apabila lini produksi Anda membutuhkan mesin dengan tahapan proses yang unik, mekanisme rahasia, atau gabungan multi-fungsi yang tidak ada di katalog mesin standar, tim rekayasa mekanikal kami siap mewujudkannya.",
    icon: "Cpu",
    services: ["mesin-filling-custom", "mesin-mixer-custom", "mesin-press-custom"],
    features: ["R&D Prototyping & Simulasi CAD 3D", "Integrasi Sensor IoT & PLC Automation", "Desain Ergonomis & Safety Standard CE", "Dokumentasi Lengkap (Manual & Wiring Schematics)"],
    targetIndustry: "R&D Institusi, Industri Kimia Khusus, Manufaktur Tekstil, Pembangkit Listrik Mini.",
    seoTitle: "Jasa Rancang Bangun Mesin Custom Industri Khusus (SPM)",
    seoDescription: "Solusi special purpose machine (SPM) untuk proses manufaktur unik yang membutuhkan rekayasa teknik khusus dari nol.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "mesin-filling-custom",
    title: "Mesin Filling Custom",
    categorySlug: "packaging-filling",
    categoryTitle: "Packaging & Filling",
    shortDesc: "Mesin pengisian cairan, pasta, atau gel dengan mekanisme servo piston dan sistem nozzle anti-bocor berakurasi tinggi.",
    fullDesc: "Mesin Filling Custom kami dirancang spesifik mengikuti viskositas produk Anda, mulai dari cairan encer seperti air mineral dan parfum, hingga cairan kental seperti madu, saus sambal, sampo, dan pelumas oli. Menggunakan penggerak servo motor berpresisi tinggi dengan nozzle diving pneumatic yang menjamin pengisian tanpa buih (anti-foaming) dan tanpa tetesan ceceran pada mulut kemasan.",
    image: "/images/machine_filling_packaging.jpg",
    specs: [
      { label: "Kapasitas Output", value: "1.200 - 3.600 botol/jam (dapat disesuaikan)" },
      { label: "Jumlah Nozzle", value: "2, 4, 6, 8, hingga 12 Head Nozzle" },
      { label: "Tingkat Akurasi", value: "± 0.5% dari volume target" },
      { label: "Material Kontak", value: "Food-grade SUS 304 atau SUS 316L" },
      { label: "Sistem Kontrol", value: "PLC Schneider/Mitsubishi + Touchscreen HMI 7 Inch" },
      { label: "Daya Listrik", value: "1.5 kW - 3.5 kW, 220V/380V 50Hz" },
    ],
    applications: [
      "Pengisian botol saus & kecap skala industri",
      "Filling sirup, madu, dan minyak goreng higienis",
      "Pengisian oli motor dan cairan kimia pembersih lantai",
      "Filling lotion dan kosmetik ke jar/botol kosmetik",
    ],
    benefits: [
      "Mengurangi lost product akibat tetesan dan overflow kemasan",
      "Pengaturan volume via digital touchscreen tanpa perlu mengganti piston manual",
      "Pembersihan cepat dengan koneksi pipa tri-clamp sanitary CIP",
      "Bisa diintegrasikan langsung dengan Capping Machine dan Labeling otomatis",
    ],
    processSteps: [
      "Konsultasi sampel cairan & botol",
      "Perhitungan viskositas & desain nozzle",
      "Fabrikasi rangka dan machining piston",
      "Pemrograman logika PLC dan proteksi sensor",
      "Uji coba running basah (wet testing)",
      "Pengiriman & training operator pabrik",
    ],
    relatedProjectSlug: "mesin-filling-industri",
    relatedArticleSlug: "cara-memilih-mesin-custom",
    seoTitle: "Jasa Pembuatan Mesin Filling Custom Otomatis & Presisi",
    seoDescription: "Fabrikasi mesin filling custom untuk cairan encer hingga pasta kental. Food-grade SUS 316L, akurasi ±0.5%, garansi 1 tahun dan layanan aftersales.",
  },
  {
    slug: "mesin-pengemas-custom",
    title: "Mesin Pengemas Custom",
    categorySlug: "packaging-filling",
    categoryTitle: "Packaging & Filling",
    shortDesc: "Solusi otomatisasi packaging sachet, pouch, wrapping, dan kartoning sesuai bentuk dan dimensi unik produk Anda.",
    fullDesc: "Mesin Pengemas Custom memberikan jawaban bagi produsen yang memiliki format kemasan non-standar atau membutuhkan efisiensi kecepatan tinggi. Dilengkapi dengan kontrol suhu digital PID ganda untuk memastikan daya rekat sealing kemasan kedap udara sempurna (hermetic seal), menghindari produk basi atau bocor saat didistribusikan ke jaringan retail.",
    image: "/images/machine_filling_packaging.jpg",
    specs: [
      { label: "Tipe Kemasan", value: "Center Seal, 3-Side Seal, 4-Side Seal, Standing Pouch" },
      { label: "Kecepatan Kemas", value: "30 - 80 bungkus/menit (tergantung produk)" },
      { label: "Sistem Sealing", value: "Continuous Heat Sealing dengan PID temperature" },
      { label: "Fitur Tambahan", value: "Gas Flushing (Nitrogen), Date Coding, Eye-mark Sensor" },
      { label: "Material Rangka", value: "Stainless Steel 304 / Carbon Steel Coating" },
    ],
    applications: [
      "Pengemasan keripik dan snack renyah dengan nitrogen flush",
      "Kemas sachet bumbu bubuk dan kopi instan",
      "Mesin shrink wrapping produk karton multipack",
      "Otomatisasi pengemasan onderdil dan sparepart kecil",
    ],
    benefits: [
      "Tampilan segel kemasan rapi, profesional, dan berdaya jual tinggi",
      "Sensor fotolistrik menjamin posisi cetak logo pada plastik selalu presisi di tengah",
      "Tingkat reject kemasan rendah (< 0.2%)",
      "Dapat dihubungkan dengan mesin timbang otomatis (multihead weigher)",
    ],
    processSteps: [
      "Uji sampel bahan plastik rol kemasan",
      "Pembuatan forming collar custom",
      "Assembly mekanis penarik film dan pemotong jaw",
      "Kalibrasi sensor eye-mark dan pemanas",
      "Uji running 8 jam nonstop di workshop",
      "Instalasi dan pendampingan di pabrik klien",
    ],
    relatedProjectSlug: "mesin-filling-industri",
    relatedArticleSlug: "faktor-harga-mesin-custom",
    seoTitle: "Jasa Pembuatan Mesin Pengemas Custom (Packaging Machine)",
    seoDescription: "Pabrikasi mesin pengemas sachet, standing pouch, dan wrapping custom. Meningkatkan kapasitas kemas hingga 80 pack/menit berstandar industri.",
  },
  {
    slug: "mesin-conveyor-custom",
    title: "Mesin Conveyor Custom",
    categorySlug: "conveyor-material-handling",
    categoryTitle: "Conveyor & Material Handling",
    shortDesc: "Sistem transfer material modular berupa belt, roller, slat chain, dan incline conveyor yang disesuaikan dengan tata letak pabrik.",
    fullDesc: "Mesin Conveyor Custom kami dirancang untuk memecahkan hambatan logistik internal dan mobilitas barang di lini produksi. Baik untuk memindahkan boks karton berat, botol minuman berkecepatan tinggi, maupun material panas hasil cetakan, kami menyesuaikan jenis sabuk, sudut kemiringan, motor geared, dan sensor penghenti otomatis sesuai kebutuhan layout ruangan.",
    image: "/images/machine_conveyor_handling.jpg",
    specs: [
      { label: "Tipe Conveyor", value: "Belt (PVC/PU), Modular Plastic, Roller Bermotor, Slat Chain" },
      { label: "Panjang & Lebar", value: "Custom 1 meter - 100+ meter, lebar 100mm - 2000mm" },
      { label: "Kapasitas Beban", value: "10 kg/m hingga 500 kg/m" },
      { label: "Penggerak", value: "Motor Geared SEW / Sumitomo / Motovario + VFD Inverter" },
      { label: "Kecepatan Line", value: "Adjustable 2 - 35 meter/menit" },
    ],
    applications: [
      "Jalur transfer botol dari filling ke mesin labeling",
      "Conveyor sortir gudang logistik dan packaging boks",
      "Incline cleated conveyor untuk mengangkut biji-bijian ke hopper",
      "Assembly line perakitan barang elektronik dan otomotif",
    ],
    benefits: [
      "Menghilangkan kelelahan operator angkat beban manual",
      "Menghemat ruang pabrik dengan jalur elevated atau curve 90°/180°",
      "Sistem modular yang mudah diperpanjang atau diubah di masa depan",
      "Komponen bearing dan roller berkualitas dengan masa pakai tinggi",
    ],
    processSteps: [
      "Survei lokasi pabrik dan pengukuran layout jalur",
      "Simulasi 3D routing dan kalkulasi daya motor penggerak",
      "Fabrikasi rangka baja/aluminium profil dan roller",
      "Pemasangan belt, motor, serta wiring inverter panel",
      "Uji tes beban dinamis dan alignment kelurusan belt",
      "Pemasangan di lokasi pabrik klien",
    ],
    relatedProjectSlug: "mesin-conveyor-industri",
    relatedArticleSlug: "proses-pembuatan-mesin-custom",
    seoTitle: "Jasa Pembuatan Mesin Conveyor Custom Industri & Gudang",
    seoDescription: "Fabrikasi sistem conveyor custom (belt, roller, modular, slat chain) untuk efisiensi jalur transportasi barang di pabrik. Hubungi engineer kami.",
  },
  {
    slug: "mesin-pencacah-custom",
    title: "Mesin Pencacah Custom",
    categorySlug: "pengolahan-limbah",
    categoryTitle: "Pengolahan Limbah",
    shortDesc: "Mesin shredder, crusher, dan granulator berdaya torsi tinggi untuk pencacahan sampah plastik, kayu, karet, dan limbah industri.",
    fullDesc: "Mesin Pencacah Custom (Industrial Shredder) kami menggunakan teknologi dual-shaft atau single-shaft rotor dengan pisau paduan baja perkakas keras (SKD-11 / Hardox) yang ditreatment khusus. Mampu menghancurkan material padat yang sulit dicacah dengan torsi masif putaran rendah, menghasilkan ukuran cacahan seragam dengan tingkat kebisingan rendah.",
    image: "/images/machine_shredder_processing.jpg",
    specs: [
      { label: "Tipe Pemotong", value: "Dual Shaft Low-Speed High-Torque / Single Shaft with Screen" },
      { label: "Material Pisau", value: "Special Tool Steel Cr-Mo (Hardened 58-62 HRC)" },
      { label: "Kapasitas Cacah", value: "200 kg/jam hingga 3.000 kg/jam" },
      { label: "Tenaga Motor", value: "7.5 kW - 45 kW (Dual Motor System opsional)" },
      { label: "Sistem Keamanan", value: "Auto-Reverse saat overload material keras & Emergency Stop" },
    ],
    applications: [
      "Pencacahan limbah botol plastik galon, drum HDPE, dan jerigen",
      "Penghancuran dokumen rahasia, kardus tebal, dan kertas limbah",
      "Pencacahan limbah kayu palet, ranting, dan biomassa perkebunan",
      "Reduksi volume limbah medis padat dan limbah pabrik elektronik",
    ],
    benefits: [
      "Mengurangi volume tumpukan limbah hingga 70-85% untuk efisiensi armada kirim",
      "Pisau dapat dibongkar pasang dan diasah ulang berulang kali",
      "Sistem transmisi gearbox planetary tangguh tahan benturan beban kejut",
      "Sensor arus otomatis mencegah motor terbakar bila ada material macet",
    ],
    processSteps: [
      "Uji sampel bahan yang hendak dicacah di workshop",
      "Penentuan konfigurasi ketebalan gigi pisau shredder",
      "Proses milling & wire-cut pisau berbahan baja perkakas khusus",
      "Assembly chamber pencacah dan transmisi shaft heksagonal",
      "Testing cacah ekstrem dengan beban maksimal",
      "Commissioning dan serah terima unit di pabrik",
    ],
    relatedProjectSlug: "mesin-produksi-custom",
    relatedArticleSlug: "apa-itu-mesin-custom",
    seoTitle: "Jasa Pembuatan Mesin Pencacah (Shredder) Custom Industri",
    seoDescription: "Fabrikasi mesin pencacah shredder & crusher custom heavy duty untuk limbah plastik, kayu, dan industri. Pisau baja SKD-11 tahan aus.",
  },
  {
    slug: "mesin-mixer-custom",
    title: "Mesin Mixer Custom",
    categorySlug: "mesin-makanan-minuman",
    categoryTitle: "Mesin Makanan & Minuman",
    shortDesc: "Mesin pencampur bubuk (ribbon blender), cairan (homogenizer), dan pasta berkapasitas besar dengan homogenitas sempurna.",
    fullDesc: "Mesin Mixer Custom kami dirancang sesuai karakteristik viskositas dan kepadatan material Anda. Tersedia tipe Ribbon Blender untuk serbuk kimia dan makanan, Double Cone untuk serbuk sensitif, planetary mixer untuk adonan liat, serta high-shear mixer untuk emulsi cair tanpa gumpalan. Dilengkapi jaket pemanas/pendingin elektrik atau steam opsional.",
    image: "/images/hero_industrial_machine.jpg",
    specs: [
      { label: "Kapasitas Tabung", value: "100 Liter hingga 3.000 Liter (Custom)" },
      { label: "Tipe Pengaduk", value: "Ribbon Blade, Paddle, High Shear Homogenizer, Anchor Agitator" },
      { label: "Opsi Suhu", value: "Double Jacket Water/Oil Heating atau Cooling System" },
      { label: "Material Kontak", value: "SUS 304 / SUS 316 Food & Pharma Grade Mirror Polished" },
      { label: "Kecepatan Putar", value: "Inverter Speed Control 15 - 3000 RPM (tergantung tipe)" },
    ],
    applications: [
      "Pencampuran serbuk kopi 3-in-1, susu bubuk, dan bumbu tabur",
      "Homogenisasi sabun cair, sampo, dan deterjen",
      "Mixing adonan lem, cat, dan pelapis kimia industri",
      "Pencampuran pakan ternak konsentrat dan pupuk organik",
    ],
    benefits: [
      "Waktu pencampuran jauh lebih singkat dengan tingkat homogenitas > 99%",
      "Desain tabung higienis tanpa dead-spot, mudah dibersihkan",
      "Pilihan sealing mekanis khusus mencegah debu atau cairan merembes ke bearing",
      "Dilengkapi penutup safety switch yang mematikan motor saat tutup terbuka",
    ],
    processSteps: [
      "Analisis densitas bulk serbuk atau viskositas cairan",
      "Kalkulasi daya motor dan perancangan bilah pengaduk",
      "Pengelasan TIG argon tabung stainless dan finishing mirror",
      "Dynamic balancing shaft mixer untuk rotasi halus tanpa vibrasi",
      "Uji coba homogenitas sampel adukan",
      "Instalasi dan pelatihan SOP operasional pembersihan",
    ],
    relatedProjectSlug: "mesin-filling-industri",
    relatedArticleSlug: "cara-memilih-mesin-custom",
    seoTitle: "Jasa Pembuatan Mesin Mixer Custom Industri (Ribbon & Liquid)",
    seoDescription: "Fabrikasi mesin mixer custom stainless steel: ribbon blender, homogenizer, dan liquid agitator tank food & chemical grade bergaransi.",
  },
  {
    slug: "mesin-press-custom",
    title: "Mesin Press Custom",
    categorySlug: "manufaktur-logam",
    categoryTitle: "Manufaktur & Logam",
    shortDesc: "Mesin hydraulic press dan pneumatic press dengan tonase 10 ton hingga 500 ton untuk forming, stamping, dan baling.",
    fullDesc: "Mesin Press Custom dirancang khusus untuk menghasilkan gaya tekan masif dengan stabilitas geometris tinggi. Struktur frame H-frame atau 4-column diperkuat melalui kalkulasi elemen hingga (FEA) agar lendutan (deflection) rangka berada di bawah toleransi minimal. Dilengkapi manifold hidrolik terintegrasi, proporsional valve, serta sensor keselamatan optik.",
    image: "/images/hero_industrial_machine.jpg",
    specs: [
      { label: "Kapasitas Gaya Tekan", value: "10 Ton, 30 Ton, 50 Ton, 100 Ton, hingga 500 Ton" },
      { label: "Tipe Konstruksi", value: "H-Frame Heavy Welded Plate atau 4-Post Column" },
      { label: "Langkah Silinder (Stroke)", value: "200 mm - 1.200 mm (disesuaikan molding)" },
      { label: "Tekanan Hidrolik", value: "140 Bar - 315 Bar dengan pompa piston/vane" },
      { label: "Sistem Keamanan", value: "Dual Push Button Anti-Tie Down + Safety Light Curtain" },
    ],
    applications: [
      "Stamping & deep drawing komponen bodi logam",
      "Pengepresan baling kardus, kaleng, dan limbah plastik volume besar",
      "Pemasangan bushing dan bearing press-fit otomotif",
      "Molding komposit, karet sintetis, dan rem kampas",
    ],
    benefits: [
      "Tingkat presisi ketegaklurusan pelat penekan tinggi tanpa risiko mold miring",
      "Kecepatan langkah (fast approach, pressing, slow return) dapat diatur secara digital",
      "Sistem pendingin oli hidrolik terintegrasi mencegah panas berlebih",
      "Konstruksi baja berkekuatan tinggi dengan jaminan daya tahan operasional belasan tahun",
    ],
    processSteps: [
      "Kalkulasi tonase teoritis berdasarkan luas penampang dan tebal plat",
      "Simulasi FEA kekuatan struktur rangka di software CAD",
      "Pemesinan plat meja kerja dengan mesin CNC milling gantry",
      "Assembly power pack hidrolik, valve block, dan silinder",
      "Uji ketahanan tekanan maksimal (pressure hold testing)",
      "Commissioning di workshop klien dengan mold sesungguhnya",
    ],
    relatedProjectSlug: "mesin-produksi-custom",
    relatedArticleSlug: "proses-pembuatan-mesin-custom",
    seoTitle: "Jasa Pembuatan Mesin Hydraulic Press Custom Tonase Besar",
    seoDescription: "Rancang bangun mesin hydraulic press custom 10 hingga 500 ton untuk industri stamping logam, forming, dan baler daur ulang limbah.",
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "cara-memilih-mesin-custom",
    title: "Cara Memilih Jasa Pembuatan Mesin Custom yang Tepat untuk Industri Anda",
    publishDate: "2026-03-15",
    readTime: "6 menit baca",
    category: "Panduan Pengadaan",
    author: "Ir. Hendra Kusuma (Head of Engineering)",
    excerpt: "Panduan komprehensif langkah demi langkah dalam mengevaluasi workshop rekayasa mesin, memeriksa portfolio, serta memastikan garansi aftersales tidak fiktif.",
    content: {
      intro: "Memutuskan untuk berinvestasi pada mesin custom merupakan langkah strategis besar bagi perusahaan manufaktur. Mesin yang tepat mampu melipatgandakan kapasitas produksi sekaligus menekan biaya tenaga kerja secara signifikan. Namun, memilih vendor fabrikasi yang salah dapat berakibat fatal: anggaran membengkak, jadwal peluncuran produk molor, hingga mesin yang kerap macet di lantai pabrik. Berikut adalah panduan praktis untuk memilih mitra fabrikasi mesin industri terpercaya.",
      sections: [
        {
          heading: "1. Pastikan Vendor Memiliki Keahlian Engineering, Bukan Sekadar Bengkel Las Biasa",
          body: [
            "Banyak pihak menawarkan jasa pembuatan mesin, namun hanya segelintir yang memiliki tim engineering formal berlatar belakang teknik mesin dan mekatronika. Pembuatan mesin industri menuntut pemahaman mendalam tentang kalkulasi beban mekanikal, pemilihan rasio gigi transmisi, toleransi suaian bantalan, serta dinamika getaran.",
            "Mintalah vendor untuk memperlihatkan desain 3D CAD dan simulasi Finite Element Analysis (FEA) sebelum fabrikasi dimulai. Workshop profesional selalu mengawali pengerjaan dengan rancangan terukur, bukan trial-and-error di lantai kerja.",
          ],
        },
        {
          heading: "2. Verifikasi Komponen Komersial Standar yang Digunakan",
          body: [
            "Mesin custom yang baik dibangun menggunakan komponen standar industri yang mudah ditemukan di pasaran lokal saat membutuhkan penggantian sparepart di masa mendatang.",
            "Tanyakan merek motor listrik, gearbox reducer, bearing, solenoid valve pneumatik, dan PLC controller yang mereka gunakan. Pastikan menggunakan merek bereputasi global seperti Schneider, Mitsubishi, Omron, Festo, SMC, SKF, atau SEW Eurodrive.",
          ],
          bullets: [
            "Hindari komponen tanpa merk atau refurbish tanpa jaminan mutu.",
            "Pastikan vendor memberikan dokumen manual operasional dan part list lengkap.",
            "Cek ketersediaan suku cadang consumable di pasar domestik.",
          ],
        },
        {
          heading: "3. Tinjau Portofolio Proyek dan Rekam Jejak Lapangan",
          body: [
            "Mintalah vendor memperlihatkan video dokumentasi mesin yang pernah mereka buat sedang bekerja dengan beban produksi aktual. Kunjungi workshop mereka secara langsung untuk melihat standar pengerjaan, peralatan permesinan yang dimiliki (seperti mesin bubut, milling, CNC, dan fasilitas pengelasan TIG/MIG).",
            "Vendor yang transparan tidak akan ragu mengajak Anda melihat langsung proses perakitan yang sedang berjalan di bengkel mereka.",
          ],
        },
        {
          heading: "4. Kejelasan Perjanjian Garansi dan Layanan Commissioning",
          body: [
            "Garansi mesin tidak hanya mencakup perbaikan ketika ada kerusakan mekanikal, namun juga mencakup pendampingan uji coba (commissioning) hingga target output tercapai dan training operator pabrik Anda.",
            "Pastikan klausul kontrak memuat Service Level Agreement (SLA) waktu respons tim teknisi bila terjadi downtime darurat pada mesin.",
          ],
        },
      ],
      faqs: [
        {
          question: "Berapa lama rata-rata waktu pembuatan sebuah mesin custom industri?",
          answer: "Waktu fabrikasi bervariasi antara 4 hingga 12 minggu kerja tergantung pada tingkat kerumitan mekanisme, tonase struktur, dan waktu pengiriman komponen impor seperti PLC atau servo khusus.",
        },
        {
          question: "Apakah bisa membuat mesin yang diintegrasikan dengan mesin lini lama yang sudah ada di pabrik?",
          answer: "Bisa. Tim rekayasa kami akan melakukan pengukuran dimensi serta pembacaan sinyal I/O mesin lama Anda untuk merancang sistem antarmuka conveyor atau transfer otomatis yang sinkron.",
        },
      ],
    },
    relatedServices: ["mesin-filling-custom", "mesin-pengemas-custom"],
    relatedCategory: "mesin-makanan-minuman",
    seoTitle: "Cara Memilih Jasa Pembuatan Mesin Custom Industri yang Tepat",
    seoDescription: "Simak tips memilih vendor fabrikasi mesin custom terpercaya: verifikasi tim engineering, kualitas sparepart PLC, garansi resmi, dan rekam jejak nyata.",
  },
  {
    slug: "apa-itu-mesin-custom",
    title: "Apa Itu Mesin Custom? Pengertian, Kelebihan, dan Penerapannya di Dunia Industri",
    publishDate: "2026-03-01",
    readTime: "5 menit baca",
    category: "Wawasan Industri",
    author: "Bambang Sudiro, S.T. (Senior Automation Specialist)",
    excerpt: "Memahami esensi mesin khusus (special purpose machine), perbedaan mendasar dibanding mesin pabrikan massal, dan kapan bisnis Anda wajib beralih.",
    content: {
      intro: "Di era otomasi modern, efisiensi waktu siklus (cycle time) dan keunikan kemasan produk seringkali menjadi pembeda antara bisnis yang memimpin pasar atau yang tertinggal. Banyak pengusaha memaksakan membeli mesin impor standar buatan pabrikan massal, namun mendapati bahwa mesin tersebut tidak pas dengan ruang pabrik, sulit dioperasikan oleh pekerja lokal, atau gagal menangani karakteristik bahan baku nusantara. Di sinilah 'Mesin Custom' menjadi solusi pamungkas.",
      sections: [
        {
          heading: "Pengertian Mesin Custom (Special Purpose Machine)",
          body: [
            "Mesin custom adalah perangkat mekanikal dan mekatronika yang dirancang, direkayasa, dan difabrikasi khusus dari awal (from scratch) untuk menyelesaikan satu atau serangkaian fungsi spesifik yang unik bagi suatu lini produksi.",
            "Berbeda dengan mesin komersial katalog yang dibuat secara massal dengan spesifikasi kaku seragam, mesin custom dirancang menyesuaikan batasan fisik pabrik, target kapasitas per jam, sifat fisik bahan olahan, dan tingkat keahlian operator.",
          ],
        },
        {
          heading: "Kelebihan Utama Menggunakan Mesin Custom",
          body: [
            "Investasi pada mesin custom memberikan fleksibilitas operasional yang tidak mungkin didapatkan dari mesin generik:",
          ],
          bullets: [
            "Optimalisasi Ruang: Mesin dirancang mengikuti denah lantai workshop Anda (sudut L, lorong sempit, atau plafon rendah).",
            "Efisiensi Maksimal: Tidak ada fitur mubazir yang tidak terpakai, seluruh komponen difokuskan pada kecepatan output.",
            "Kesesuaian Material Lokal: Mesin disesuaikan dengan viskositas saus lokal, elastisitas plastik daur ulang, atau kelembapan biji tropis.",
            "Dukungan Teknis Cepat: Tidak perlu menunggu teknisi dari luar negeri karena rancangan dan program logic dibuat oleh anak bangsa.",
          ],
        },
        {
          heading: "Kapan Perusahaan Anda Perlu Berinvestasi pada Mesin Custom?",
          body: [
            "Tanda-tanda lini produksi Anda memerlukan mesin custom antara lain:",
            "1. Terdapat proses manual berulang yang sering mengalami human-error atau bottleneck kecepatan.",
            "2. Produk memiliki bentuk fisik atau kemasan unik yang tidak diakomodasi oleh mesin standar di pasaran.",
            "3. Biaya mesin impor terlalu mahal dengan biaya suku cadang serta waktu tunggu impor yang merugikan operasional.",
          ],
        },
      ],
      faqs: [
        {
          question: "Apakah biaya mesin custom selalu lebih mahal dibanding mesin standar?",
          answer: "Tidak selalu. Mesin standar impor seringkali menyertakan biaya brand global, margin distributor, dan fitur berlebih yang tidak Anda butuhkan. Mesin custom fokus hanya pada kebutuhan esensial sehingga rasio ROI jauh lebih cepat tercapai.",
        },
      ],
    },
    relatedServices: ["mesin-pencacah-custom", "mesin-mixer-custom"],
    relatedCategory: "mesin-custom-industri",
    seoTitle: "Apa Itu Mesin Custom? Pengertian & Kelebihan untuk Industri",
    seoDescription: "Pelajari definisi mesin custom (Special Purpose Machine), perbedaannya dengan mesin standar, dan bagaimana mesin custom meningkatkan ROI pabrik Anda.",
  },
  {
    slug: "proses-pembuatan-mesin-custom",
    title: "Proses Pembuatan Mesin Custom dari Konsep Desain hingga Commissioning",
    publishDate: "2026-02-18",
    readTime: "7 menit baca",
    category: "Teknik & Manufaktur",
    author: "Tim Litbang Rekayasa Mesin Industri",
    excerpt: "Telusuri 8 tahapan terstruktur perancangan mesin custom: analisis kebutuhan, desain CAD 3D, pengadaan komponen, fabrikasi, uji fungsi, hingga serah terima.",
    content: {
      intro: "Membangun mesin industri dari selembar sketsa konsep hingga menjadi instalasi mekanis kokoh berkecepatan tinggi membutuhkan metodologi rekayasa yang disiplin. Setiap tahap memiliki tolok ukur pengujian (quality gates) ketat agar mesin bekerja presisi dan aman bagi para operator. Berikut adalah alur pengerjaan standar proyek mesin custom di workshop kami.",
      sections: [
        {
          heading: "Tahap 1: Konsultasi & Penggalian Spesifikasi Teknis",
          body: [
            "Proses dimulai dari diskusi mendalam mengenai tujuan produksi klien: jenis produk yang diproses, kecepatan target per menit, dimensi ruangan, ketersediaan daya listrik, dan sistem pengoperasian yang diinginkan. Sampel produk atau kemasan diuji di laboratorium mekanik kami.",
          ],
        },
        {
          heading: "Tahap 2: Konseptualisasi & Desain CAD 3D Detail",
          body: [
            "Tim drafter dan mechanical engineer memodelkan setiap baut, rangka, aktuator, dan jalur kabel dalam software CAD 3D modern. Simulasi gerak (kinematic simulation) dilakukan untuk memastikan tidak ada tumbukan antar part bergerak sebelum material baja dipotong.",
          ],
        },
        {
          heading: "Tahap 3: Pemilihan Material & Pengadaan Komponen Presisi",
          body: [
            "Kami memilih spesifikasi material terbaik: pelat stainless steel food-grade SUS 304/316 untuk makanan, baja struktural SS400 untuk rangka press, atau baja paduan tahan gesek Hardox untuk mesin pencacah. Komponen pneumatik dan elektrik dipesan langsung dari distributor resmi.",
          ],
        },
        {
          heading: "Tahap 4: Machining, Fabrikasi & Pengelasan Bersertifikasi",
          body: [
            "Pengerjaan part presisi dilakukan menggunakan mesin CNC bubut, frais, dan wire-cut dengan toleransi mikro. Pengelasan rangka dilakukan oleh welder bersertifikasi menggunakan gas shielding argon (TIG) dan MIG untuk sambungan kokoh tanpa retak rambut.",
          ],
        },
        {
          heading: "Tahap 5: Assembly & Wiring Otomasi Elektrikal",
          body: [
            "Seluruh subsistem mekanis dirakit bersama motor penggerak, silinder, dan sensor. Tim otomasi menyusun kabel di dalam panel berstandar IP55 dengan labelling rapi sesuai gambar skematik elektrik, lalu mengunggah logika program PLC dan antarmuka HMI.",
          ],
        },
        {
          heading: "Tahap 6: Factory Acceptance Test (FAT) & Commissioning di Lokasi",
          body: [
            "Sebelum dikirim, mesin diuji coba bekerja (running test) di workshop kami selama 8-24 jam nonstop dengan material simulasi. Setelah lulus uji FAT bersama klien, mesin dipacking aman dan dikirim ke lokasi pabrik untuk dipasang, diintegrasikan, dan diuji Site Acceptance Test (SAT).",
          ],
        },
      ],
      faqs: [
        {
          question: "Apakah klien boleh memantau progres pengerjaan di bengkel fabrikasi?",
          answer: "Tentu saja. Kami memberikan laporan mingguan berkala berupa foto dan video, serta menyambut kunjungan langsung klien untuk mengecek milestone pengerjaan.",
        },
      ],
    },
    relatedServices: ["mesin-conveyor-custom", "mesin-press-custom"],
    relatedCategory: "manufaktur-logam",
    seoTitle: "Proses Pembuatan Mesin Custom dari Desain hingga Commissioning",
    seoDescription: "Pelajari 8 tahapan standar rekayasa mesin custom: studi kelayakan, desain CAD 3D, machining CNC, perakitan elektrikal, hingga uji FAT pabrik.",
  },
  {
    slug: "faktor-harga-mesin-custom",
    title: "Faktor yang Mempengaruhi Harga Pembuatan Mesin Custom Industri",
    publishDate: "2026-02-05",
    readTime: "6 menit baca",
    category: "Investasi & Biaya",
    author: "Drs. Wahyu Hidayat (Cost Estimator)",
    excerpt: "Transparansi perhitungan estimasi biaya pembuatan mesin: komponen mekanikal, tingkat otomatisasi PLC, material logam, kapasitas kapasitas tonase, dan layanan aftersales.",
    content: {
      intro: "Pertanyaan yang paling sering diajukan oleh pemilik pabrik adalah: 'Berapa biaya pembuatan mesin custom?' Jawabannya selalu bergantung pada ruang lingkup spesifikasi teknis. Memahami elemen-elemen penentu harga akan membantu Anda mengalokasikan anggaran secara rasional dan menghindari godaan penawaran murah yang berisiko menghasilkan mesin cepat rusak.",
      sections: [
        {
          heading: "1. Tingkat Otomatisasi (Manual vs Semi-Otomatis vs Full Auto)",
          body: [
            "Mesin manual dengan tuas mekanis tentu memiliki komponen elektrikal yang minimal. Sebaliknya, mesin full-otomatis membutuhkan sensor optik/kapasitif, servo motor berpresisi mikron, PLC performa tinggi, inverter motor, safety interlock, dan layar sentuh HMI.",
            "Investasi otomatisasi memang lebih tinggi di awal, namun memangkas biaya operasional gaji operator dan meniadakan produk cacat dalam jangka panjang.",
          ],
        },
        {
          heading: "2. Pilihan Jenis Material Logam Konstruksi",
          body: [
            "Material konstruksi menyumbang porsi besar dari biaya total mesin:",
          ],
          bullets: [
            "Carbon Steel SS400: Ekonomis, ideal untuk rangka struktur dan mesin press non-makanan.",
            "Stainless Steel SUS 304: Tahan karat, wajib untuk industri kemasan makanan dan minuman higienis.",
            "Stainless Steel SUS 316L: Ketahanan kimia tinggi terhadap asam/garam, wajib untuk farmasi dan cairan korosif.",
            "Hardox / SKD-11 Tool Steel: Baja khusus tahan abrasi tinggi untuk pisau crusher dan shredder.",
          ],
        },
        {
          heading: "3. Kapasitas Output Produksi (Speed & Tonase)",
          body: [
            "Mesin filling dengan kapasitas 10 botol per menit tentu membutuhkan motor dan struktur yang lebih kecil dibandingkan mesin high-speed 80 botol per menit. Semakin tinggi kecepatan, semakin kaku rangka yang dibutuhkan untuk meredam getaran.",
          ],
        },
        {
          heading: "4. Kelengkapan Dokumentasi & Garansi Resmi",
          body: [
            "Vendor terpercaya menyertakan biaya engineering time untuk perancangan CAD, penyusunan buku petunjuk operasional (manual book), wiring diagram elektrikal yang memudahkan teknisi internal Anda, serta garansi suku cadang 1 tahun penuh.",
          ],
        },
      ],
      faqs: [
        {
          question: "Bagaimana cara mendapatkan estimasi penawaran harga cepat?",
          answer: "Cukup sampaikan jenis produk, target kapasitas per jam, ukuran wadah/material, dan video proses produksi manual saat ini ke tim konsultan kami melalui WhatsApp.",
        },
      ],
    },
    relatedServices: ["mesin-filling-custom", "mesin-pengemas-custom"],
    relatedCategory: "packaging-filling",
    seoTitle: "Faktor yang Mempengaruhi Harga Pembuatan Mesin Custom",
    seoDescription: "Pahami faktor penentu estimasi biaya mesin custom: tingkat otomatisasi PLC, pemilihan material SUS 304/316, kapasitas output, dan garansi.",
  },
];

export const PROJECTS: Project[] = [
  {
    slug: "mesin-filling-industri",
    title: "Mesin Rotary Liquid Filling Otomatis 12 Nozzle SUS 316L",
    industry: "Industri Makanan & Minuman (F&B)",
    categorySlug: "packaging-filling",
    clientType: "Produsen Saus Sambal & Bumbu Kemasan Nasional",
    completionYear: "2025",
    image: "/images/machine_filling_packaging.jpg",
    summary: "Rancang bangun lini pengisian saus botol otomatis berkecepatan 3.000 botol/jam dengan tingkat akurasi tinggi dan sistem pembersihan otomatis CIP.",
    challenge: "Klien sebelumnya menggunakan pengisian semi-otomatis yang menyebabkan leher botol sering kotor terkena saus kental, menghasilkan lost product hingga 4.2% dan mempekerjakan 8 operator pengisian manual.",
    solution: "Kami mendesain mesin rotary continuous filling 12 nozzle dengan piston servo pneumatik, dilengkapi nozzle diving yang turun ke dasar botol saat pengisian untuk mencegah cipratan gelembung, serta sistem sensor no-bottle no-fill.",
    specifications: [
      { label: "Kapasitas Output", value: "3.000 botol/jam (kemasan 250ml - 500ml)" },
      { label: "Akurasi Pengisian", value: "± 0.3%" },
      { label: "Material Utama", value: "Full Stainless Steel SUS 316L (Food Grade)" },
      { label: "Kontrol", value: "PLC Mitsubishi FX5U + GOT2000 HMI" },
      { label: "Dimensi Mesin", value: "2.800 mm x 1.600 mm x 2.200 mm" },
    ],
    results: [
      "Mengurangi lost product akibat tetesan dari 4.2% menjadi di bawah 0.1%",
      "Meningkatkan output harian sebesar 280% dalam jam kerja yang sama",
      "Mengurangi kebutuhan tenaga operator dari 8 orang menjadi 1 supervisor pemantau",
    ],
    relatedServiceSlug: "mesin-filling-custom",
    seoTitle: "Proyek Mesin Rotary Liquid Filling 12 Nozzle Otomatis",
    seoDescription: "Studi kasus rekayasa mesin liquid filling rotary 12 nozzle untuk saus kemasan. Peningkatan output 280% dan akurasi pengisian SUS 316L.",
  },
  {
    slug: "mesin-conveyor-industri",
    title: "Sistem Modular Slat Chain Conveyor & Transfer Table Otomotif",
    industry: "Manufaktur Komponen Otomotif",
    categorySlug: "conveyor-material-handling",
    clientType: "Tier 1 Supplier Komponen Transmisi Kendaraan",
    completionYear: "2025",
    image: "/images/machine_conveyor_handling.jpg",
    summary: "Integrasi jalur conveyor transfer part sepanjang 42 meter dengan sensor pelacak posisi dan stasiun buffer perakitan otomatis.",
    challenge: "Lantai produksi mengalami penumpukan barang setengah jadi (WIP) antar stasiun kerja permesinan CNC, mengakibatkan risiko benturan antar benda kerja presisi tinggi.",
    solution: "Pemasangan sistem conveyor bertingkat dengan slat chain baja tahan aus, dilengkapi pneumatic diverter gate, sensor photoelectric Omron, dan variable speed inverter yang disinkronkan ke siklus robot perakit.",
    specifications: [
      { label: "Total Panjang Jalur", value: "42 Meter (Termasuk 2 belokan 90°)" },
      { label: "Kapasitas Muat", value: "80 kg per meter lari" },
      { label: "Tipe Rantai", value: "Heavy Duty Stainless Steel Slat Chain" },
      { label: "Kecepatan Transfer", value: "Sinkronisasi otomatis 5 - 20 m/menit" },
      { label: "Sistem Keamanan", value: "Safety Pull Cord Switch sepanjang lintasan" },
    ],
    results: [
      "Menghilangkan risiko cacat goresan pada benda kerja hingga 100%",
      "Menjamin kelancaran ritme kerja Just-in-Time antar stasiun machining",
      "Menghemat 35% luas lantai kerja yang sebelumnya dipenuhi palet boks",
    ],
    relatedServiceSlug: "mesin-conveyor-custom",
    seoTitle: "Proyek Sistem Conveyor Slat Chain Industri Manufaktur",
    seoDescription: "Implementasi conveyor modular slat chain sepanjang 42 meter di pabrik suku cadang otomotif. Aliran kerja lancar tanpa bottleneck.",
  },
  {
    slug: "mesin-produksi-custom",
    title: "Heavy Duty Dual-Shaft Shredder & Hydraulic Baler 50 Ton",
    industry: "Pengolahan Limbah & Recycling Material",
    categorySlug: "pengolahan-limbah",
    clientType: "Perusahaan Pengolahan Sampah Industri B3 & Non-B3",
    completionYear: "2024",
    image: "/images/machine_shredder_processing.jpg",
    summary: "Kombinasi mesin pencacah shredder torsi masif dan mesin press baling hidrolik untuk reduksi volume sampah drum dan plastik industri.",
    challenge: "Biaya armada truk pengangkutan limbah menuju landfill membengkak karena limbah berupa jerigen dan drum bekas bervolume besar namun bermassa jenis rendah.",
    solution: "Rancang bangun satu paket mesin: shredder berkekuatan motor ganda 30 kW untuk menghancurkan drum HDPE tebal, dilanjutkan conveyor feeder ke mesin press hidrolik 50 ton untuk membundel cacahan menjadi briket padat.",
    specifications: [
      { label: "Kapasitas Pencacahan", value: "1.500 kg/jam (Drum & Bodi Plastik Tebal)" },
      { label: "Gaya Tekan Baler", value: "50 Ton Hidrolik Tekanan 210 Bar" },
      { label: "Bahan Pisau", value: "Baja Paduan Cr-Mo Tahan Aus (Hardness 60 HRC)" },
      { label: "Ukuran Bal Hasil", value: "1.100 mm x 800 mm x 1.000 mm (Bale weight ~350 kg)" },
      { label: "Fitur Proteksi", value: "Auto-reverse saat mendeteksi logam keras tak sengaja masuk" },
    ],
    results: [
      "Mereduksi volume limbah hingga 82%, memangkas kebutuhan truk kirim dari 6 rit menjadi 1 rit",
      "Menghemat biaya logistik pengelolaan limbah sebesar Rp 75 juta/bulan",
      "Meningkatkan nilai jual material cacahan bersih ke pabrik daur ulang",
    ],
    relatedServiceSlug: "mesin-pencacah-custom",
    seoTitle: "Proyek Mesin Shredder & Hydraulic Baling Press 50 Ton",
    seoDescription: "Fabrikasi mesin shredder dual-shaft torsi tinggi dan hydraulic baler 50 ton untuk efisiensi pengelolaan sampah industri & circular economy.",
  },
];

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText = "Halo, saya ingin konsultasi mengenai jasa pembuatan mesin custom.";
  const message = encodeURIComponent(customMessage || defaultText);
  return `https://wa.me/${SITE_CONFIG.phone}?text=${message}`;
}
