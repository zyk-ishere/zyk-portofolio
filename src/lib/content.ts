export type Locale = "en" | "id";

export type ContactIcon =
  | "mail"
  | "whatsapp"
  | "instagram"
  | "linkedin"
  | "github"
  | "discord";

type Fact = { label: string; value: string };

type ProjectImage = { src: string; width: number; height: number };

type ProjectItem = {
  title: string;
  desc: string;
  features: string[];
  meta: { role: string; status: string };
  tags: string[];
  link: string;
  image: ProjectImage;
};

type CertItem = {
  label: string;
  issuer: string;
  date: string;
  credential: string;
  href: string;
};

type ContactItem = {
  icon: ContactIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type Content = {
  nav: { id: string; label: string }[];
  navAria: { open: string; close: string };
  hero: {
    whoami: string;
    name: string;
    subtitle: string;
    roles: string[];
    desc: string;
    primaryCta: string;
    secondaryCta: string;
    serviceCta: string;
  };
  marquee: string[];
  about: {
    eyebrow: string;
    title: string;
    body: string;
    photoAlt: string;
    facts: Fact[];
    education: {
      label: string;
      school: string;
      major: string;
      period: string;
    };
  };
  skills: { eyebrow: string; title: string; items: string[] };
  projects: {
    eyebrow: string;
    title: string;
    visit: string;
    items: ProjectItem[];
  };
  security: {
    eyebrow: string;
    title: string;
    badges: string[];
    heading: string;
    intro: string;
    bullets: string[];
    imageAlts: string[];
  };
  certificates: {
    eyebrow: string;
    title: string;
    open: string;
    items: CertItem[];
  };
  cv: { eyebrow: string; title: string; desc: string; cta: string };
  services: {
    eyebrow: string;
    title: string;
    descBefore: string;
    descAfter: string;
    visit: string;
    whatsapp: string;
    whatsappUrl: string;
  };
  contact: { eyebrow: string; title: string; items: ContactItem[] };
  footer: {
    ctaTitle: string;
    ctaDesc: string;
    ctaButton: string;
    copyright: string;
    built: string;
  };
};

const servicesWhatsApp =
  "https://wa.me/6289675101657?text=Halo%20Devzy,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website.";

const en: Content = {
  nav: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "security", label: "Security" },
    { id: "certificates", label: "Certificates" },
    { id: "cv", label: "CV" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ],
  navAria: { open: "Open menu", close: "Close menu" },
  hero: {
    whoami: "$ whoami",
    name: "Taufik Zaqi",
    subtitle: "Who Am I",
    roles: [
      "Full Stack Web Developer",
      "Vibe Coder",
      "Grey Hat",
      "Network Enthusiast",
      "Bug Hunter",
    ],
    desc: "Building end-to-end web applications and performing ethical security testing. Documenting projects, skills, and the learning journey in IT.",
    primaryCta: "View Projects",
    secondaryCta: "Contact Me",
    serviceCta: "Want a website like this?",
  },
  marquee: [
    "Full Stack Development",
    "Vibe Coding",
    "Ethical Hacking",
    "Web App Security",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Supabase",
    "Linux",
    "Networking",
    "Bug Hunting",
    "CTF Player",
  ],
  about: {
    eyebrow: "01 — About",
    title: "About Me",
    body: "I am a Full Stack Web Developer, and I am still a beginner in ethical hacking. I build web applications end-to-end — from frontend to backend — and I am learning security testing to find and fix vulnerabilities. I also work as a vibe coder — turning ideas into working products quickly with AI-assisted workflows.",
    photoAlt: "Photo of Taufik Zaqi",
    facts: [
      { label: "Role", value: "Full Stack Web Developer & Vibe Coder" },
      { label: "Field", value: "Grey Hat" },
      { label: "Location", value: "Payakumbuh, West Sumatra" },
      { label: "Focus", value: "Web Apps, Security, Networking" },
    ],
    education: {
      label: "Education",
      school: "SMK Negeri 4 Payakumbuh — Bluetech IT School",
      major: "Computer & Network Engineering (TKJ)",
      period: "2024 — present · Grade XII",
    },
  },
  skills: {
    eyebrow: "02 — Skills",
    title: "Skills",
    items: [
      "Full Stack Development",
      "React / Next.js",
      "Node.js",
      "TypeScript",
      "Ethical Hacking (beginner)",
      "Web App Security",
      "Networking",
      "Linux (parrot os, debian 12)",
      "Supabase",
      "Tailwind CSS",
    ],
  },
  projects: {
    eyebrow: "03 — Projects",
    title: "Featured Projects",
    visit: "Visit →",
    items: [
      {
        title: "Devzy — Web Development Services",
        desc: "Independent web studio site for Devzy. Sells websites to UMKM and local businesses with transparent one-time pricing — landing pages, company profiles, e-commerce, and custom web apps — plus a portfolio, live demos, blog, and WhatsApp-first consultation.",
        features: [
          "Service pages, pricing table & package comparison",
          "Portfolio with case studies + 10 live demo sites",
          "Blog, FAQ, and WhatsApp consultation flow",
        ],
        meta: { role: "Founder & Developer", status: "Live" },
        tags: ["Next.js", "Tailwind CSS", "Services"],
        link: "https://devzy.site",
        image: { src: "/img/projects/devzy.webp", width: 1200, height: 630 },
      },
      {
        title: "Kostin — Boarding House Management",
        desc: "Boarding-house management PWA. Owners manage rooms, tenants, and monthly invoices in one dashboard, while tenants upload proof of transfer for verification — installable on a phone so it feels like a native app.",
        features: [
          "Room & tenant database",
          "Monthly billing + transfer verification",
          "Installable PWA with offline app shell",
        ],
        meta: { role: "Full Stack Developer", status: "Live" },
        tags: ["Next.js", "PWA", "Supabase"],
        link: "https://www.konstin.my.id/",
        image: { src: "/img/projects/konstin.webp", width: 1280, height: 900 },
      },
      {
        title: "Duidi",
        desc: "Personal finance and planning app. Users record income and expenses, set budgets, and read monthly summaries; new users can try the full app free for 14 days before choosing a plan.",
        features: [
          "Income & expense tracking",
          "Budget planning and monthly insights",
          "14-day free trial with tiered pricing",
        ],
        meta: { role: "Full Stack Developer", status: "Live" },
        tags: ["Next.js", "PWA", "Finance"],
        link: "https://www.duidi.web.id/",
        image: { src: "/img/projects/duidi.webp", width: 1280, height: 900 },
      },
      {
        title: "Zykk Store",
        desc: "Social media booster service (SMM provider). A tiered price list covers Instagram, TikTok, and WhatsApp Channel — followers, likes, and reposts — with orders handled directly through WhatsApp and public transaction testimonials.",
        features: [
          "Instagram, TikTok & WA Channel packages",
          "Tiered pricing per quantity",
          "Public testimonials + WhatsApp ordering",
        ],
        meta: { role: "Frontend Developer", status: "Live" },
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://zykk-store.netlify.app/",
        image: { src: "/img/projects/zykk-store.webp", width: 1280, height: 900 },
      },
      {
        title: "ZYK — Personal Link Hub",
        desc: "Personal link-in-bio hub in a dark glassmorphism style. One short link connects Instagram, WhatsApp, and Discord with a live status line, built as a lightweight mobile-first static page.",
        features: [
          "One link for every social profile",
          "Dark glass UI, mobile-first",
          "Static and fast, deployed on Netlify",
        ],
        meta: { role: "Designer & Developer", status: "Live" },
        tags: ["HTML", "CSS", "Bootstrap"],
        link: "https://zyks.netlify.app/",
        image: { src: "/img/projects/zyks.webp", width: 1600, height: 1000 },
      },
    ],
  },
  security: {
    eyebrow: "04 — Security Researcher",
    title: "Security Research",
    badges: ["Bug Hunting", "Web Security", "Authorized"],
    heading: "Kopi Ajoe — Authorized Security Assessment",
    intro:
      "Authorized security assessment on the Kopi Ajoe application (with owner permission). Findings include:",
    bullets: [
      "Accessed the super admin panel of admin.kopiajoe.com.",
      "Identified a Row Level Security (RLS) misconfiguration allowing unauthorized data access.",
      "Modified the appearance of the Kopi Ajoe app published on the Play Store.",
      "Defaced product photos within the application.",
      "All findings were reported to the Kopi Ajoe cybersecurity team for remediation.",
    ],
    imageAlts: [
      "Kopi Ajoe defacement evidence 1",
      "Kopi Ajoe defacement evidence 2",
    ],
  },
  certificates: {
    eyebrow: "05 — Certificates",
    title: "Certificates",
    open: "Open PDF →",
    items: [
      {
        label: "CTF CADIAK 2026 — Cyber Attack & Defense",
        issuer: "Diskominfotik Sumatera Barat",
        date: "30 September 2026",
        credential: "SS/SERT/009-2026",
        href: "/certificates/sertifikat-cadiak-ctf.pdf",
      },
      {
        label: "Memulai Pemrograman Dengan Java",
        issuer: "Dicoding Indonesia",
        date: "15 November 2026",
        credential: "1RXYDE0J3XVM",
        href: "/certificates/sertifikat-java-dicoding.pdf",
      },
      {
        label: "Linux Fundamental",
        issuer: "Aguna Course",
        date: "15 November 2026",
        credential: "AC-764-02199978-28",
        href: "/certificates/sertifikat-linux-fundamental.pdf",
      },
      {
        label: "Virtual Machine Fundamental",
        issuer: "Aguna Course",
        date: "15 November 2026",
        credential: "AC-088-69854334-51",
        href: "/certificates/sertifikat-virtual-machine.pdf",
      },
      {
        label: "Python Fundamental",
        issuer: "Aguna Course",
        date: "6 October 2026",
        credential: "AC-971-95760181-67",
        href: "/certificates/sertifikat-python-fundamental.pdf",
      },
      {
        label: "Network Fundamental",
        issuer: "Aguna Course",
        date: "27 January 2026",
        credential: "AC-600-77053855-41",
        href: "/certificates/sertifikat-network-fundamental.pdf",
      },
      {
        label: "Certified English Learner",
        issuer: "Karya Inspirasi Indonesia",
        date: "2025",
        credential: "077/SEI/KII/CEL/III/2025",
        href: "/certificates/sertifikat-english-learner-2.pdf",
      },
    ],
  },
  cv: {
    eyebrow: "06 — Curriculum Vitae",
    title: "CV Taufik Zaqi",
    desc: "CV summary in PDF format. View or download directly.",
    cta: "View / Download CV (PDF)",
  },
  services: {
    eyebrow: "07 — Services",
    title: "Web Development Services",
    descBefore:
      "I also offer website development services through Devzy — from landing pages and company profiles to custom web applications. Responsive, fast, and tailored to your needs. See the packages, portfolio, and pricing at ",
    descAfter: ".",
    visit: "Visit devzy.site",
    whatsapp: "Contact via WhatsApp",
    whatsappUrl: servicesWhatsApp,
  },
  contact: {
    eyebrow: "08 — Contact",
    title: "Contact Me",
    items: [
      {
        icon: "mail",
        label: "Email",
        value: "qwertyuzyk420@gmail.com",
        href: "mailto:qwertyuzyk420@gmail.com",
      },
      {
        icon: "whatsapp",
        label: "WhatsApp",
        value: "+62 812-6728-4236",
        href: "https://wa.me/6281267284236",
        external: true,
      },
      {
        icon: "instagram",
        label: "Instagram",
        value: "@zyk.1sheremf",
        href: "https://instagram.com/zyk.1sheremf",
        external: true,
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/taufik-zaqi",
        href: "https://www.linkedin.com/in/taufik-zaqi",
        external: true,
      },
      {
        icon: "github",
        label: "GitHub",
        value: "zyk-ishere",
        href: "https://github.com/zyk-ishere",
        external: true,
      },
      {
        icon: "discord",
        label: "Discord",
        value: "zyk0363",
        href: "https://discord.com",
        external: true,
      },
    ],
  },
  footer: {
    ctaTitle: "Want a website like this?",
    ctaDesc:
      "Website development services by Devzy — landing pages, company profiles, and custom web apps.",
    ctaButton: "Visit devzy.site",
    copyright: "© 2026 Taufik Zaqi",
    built: "built with next.js",
  },
};

const id: Content = {
  nav: [
    { id: "about", label: "Tentang" },
    { id: "skills", label: "Keahlian" },
    { id: "projects", label: "Proyek" },
    { id: "security", label: "Keamanan" },
    { id: "certificates", label: "Sertifikat" },
    { id: "cv", label: "CV" },
    { id: "services", label: "Layanan" },
    { id: "contact", label: "Kontak" },
  ],
  navAria: { open: "Buka menu", close: "Tutup menu" },
  hero: {
    whoami: "$ whoami",
    name: "Taufik Zaqi",
    subtitle: "Siapa Saya",
    roles: [
      "Full Stack Web Developer",
      "Vibe Coder",
      "Grey Hat",
      "Penggiat Jaringan",
      "Pemburu Bug",
    ],
    desc: "Membangun aplikasi web end-to-end sekaligus melakukan pengujian keamanan secara etis. Mendokumentasikan proyek, keahlian, dan perjalanan belajar di dunia IT.",
    primaryCta: "Lihat Proyek",
    secondaryCta: "Hubungi Saya",
    serviceCta: "Mau website seperti ini?",
  },
  marquee: [
    "Full Stack Development",
    "Vibe Coding",
    "Ethical Hacking",
    "Keamanan Web",
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Supabase",
    "Linux",
    "Jaringan",
    "Bug Hunting",
    "Pemain CTF",
  ],
  about: {
    eyebrow: "01 — Tentang",
    title: "Tentang Saya",
    body: "Saya seorang Full Stack Web Developer, dan saya masih pemula di bidang ethical hacking. Saya membangun aplikasi web dari awal sampai akhir — mulai dari frontend hingga backend — serta sedang belajar pengujian keamanan untuk menemukan dan memperbaiki celah keamanan. Saya juga seorang vibe coder — mengubah ide menjadi produk yang jalan dengan cepat lewat alur kerja berbantuan AI.",
    photoAlt: "Foto Taufik Zaqi",
    facts: [
      { label: "Peran", value: "Full Stack Web Developer & Vibe Coder" },
      { label: "Bidang", value: "Grey Hat" },
      { label: "Lokasi", value: "Payakumbuh, Sumatera Barat" },
      { label: "Fokus", value: "Web App, Keamanan, Jaringan" },
    ],
    education: {
      label: "Pendidikan",
      school: "SMK Negeri 4 Payakumbuh — Bluetech IT School",
      major: "Teknik Komputer dan Jaringan (TKJ)",
      period: "2024 — sekarang · Kelas XII",
    },
  },
  skills: {
    eyebrow: "02 — Keahlian",
    title: "Keahlian",
    items: [
      "Full Stack Development",
      "React / Next.js",
      "Node.js",
      "TypeScript",
      "Ethical Hacking (pemula)",
      "Keamanan Web App",
      "Jaringan",
      "Linux (parrot os, debian 12)",
      "Supabase",
      "Tailwind CSS",
    ],
  },
  projects: {
    eyebrow: "03 — Proyek",
    title: "Proyek Unggulan",
    visit: "Kunjungi →",
    items: [
      {
        title: "Devzy — Jasa Pembuatan Website",
        desc: "Situs studio web independen Devzy. Menjual jasa pembuatan website untuk UMKM dan bisnis lokal dengan harga sekali bayar yang transparan — landing page, company profile, e-commerce, hingga web app custom — lengkap dengan portofolio, demo langsung, blog, dan konsultasi via WhatsApp.",
        features: [
          "Halaman layanan, tabel harga & perbandingan paket",
          "Portofolio dengan studi kasus + 10 demo situs",
          "Blog, FAQ, dan alur konsultasi via WhatsApp",
        ],
        meta: { role: "Founder & Developer", status: "Aktif" },
        tags: ["Next.js", "Tailwind CSS", "Layanan"],
        link: "https://devzy.site",
        image: { src: "/img/projects/devzy.webp", width: 1200, height: 630 },
      },
      {
        title: "Kostin — Manajemen Kos",
        desc: "PWA manajemen kos. Pemilik mengelola kamar, penghuni, dan tagihan bulanan dalam satu dashboard, sementara penghuni mengunggah bukti transfer untuk diverifikasi — bisa dipasang di HP sehingga terasa seperti aplikasi native.",
        features: [
          "Database kamar & penghuni",
          "Tagihan bulanan + verifikasi bukti transfer",
          "PWA yang bisa di-install di HP/desktop",
        ],
        meta: { role: "Full Stack Developer", status: "Aktif" },
        tags: ["Next.js", "PWA", "Supabase"],
        link: "https://www.konstin.my.id/",
        image: { src: "/img/projects/konstin.webp", width: 1280, height: 900 },
      },
      {
        title: "Duidi",
        desc: "Aplikasi keuangan dan perencanaan finansial pribadi. Pengguna mencatat pemasukan dan pengeluaran, menyusun anggaran, lalu membaca ringkasan bulanan; pengguna baru bisa mencoba seluruh fitur gratis 14 hari sebelum memilih paket.",
        features: [
          "Pencatatan pemasukan & pengeluaran",
          "Perencanaan anggaran dan ringkasan bulanan",
          "Uji coba gratis 14 hari dengan paket berbayar",
        ],
        meta: { role: "Full Stack Developer", status: "Aktif" },
        tags: ["Next.js", "PWA", "Keuangan"],
        link: "https://www.duidi.web.id/",
        image: { src: "/img/projects/duidi.webp", width: 1280, height: 900 },
      },
      {
        title: "Zykk Store",
        desc: "Layanan penambah engagement media sosial (SMM provider). Price list bertingkat mencakup Instagram, TikTok, dan WhatsApp Channel — followers, likes, dan repost — dengan pemesanan langsung lewat WhatsApp dan testimoni transaksi yang terbuka.",
        features: [
          "Paket Instagram, TikTok & WhatsApp Channel",
          "Harga bertingkat sesuai jumlah",
          "Testimoni publik + order via WhatsApp",
        ],
        meta: { role: "Frontend Developer", status: "Aktif" },
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://zykk-store.netlify.app/",
        image: { src: "/img/projects/zykk-store.webp", width: 1280, height: 900 },
      },
      {
        title: "ZYK — Link Hub Pribadi",
        desc: "Link hub pribadi bergaya dark glassmorphism. Satu tautan pendek menghubungkan Instagram, WhatsApp, dan Discord lengkap dengan status live, dibangun sebagai halaman statis ringan yang mobile-first.",
        features: [
          "Satu tautan untuk semua sosial media",
          "UI dark glass, mobile-first",
          "Statis dan cepat, deploy di Netlify",
        ],
        meta: { role: "Designer & Developer", status: "Aktif" },
        tags: ["HTML", "CSS", "Bootstrap"],
        link: "https://zyks.netlify.app/",
        image: { src: "/img/projects/zyks.webp", width: 1600, height: 1000 },
      },
    ],
  },
  security: {
    eyebrow: "04 — Security Researcher",
    title: "Riset Keamanan",
    badges: ["Bug Hunting", "Keamanan Web", "Terotorisasi"],
    heading: "Kopi Ajoe — Penilaian Keamanan Terotorisasi",
    intro:
      "Penilaian keamanan terotorisasi pada aplikasi Kopi Ajoe (dengan izin pemilik). Temuan meliputi:",
    bullets: [
      "Berhasil mengakses panel super admin admin.kopiajoe.com.",
      "Menemukan kesalahan konfigurasi Row Level Security (RLS) yang memungkinkan akses data tanpa otorisasi.",
      "Mengubah tampilan aplikasi Kopi Ajoe yang terpasang di Play Store.",
      "Melakukan deface pada foto produk di dalam aplikasi.",
      "Seluruh temuan dilaporkan ke tim cybersecurity Kopi Ajoe untuk diperbaiki.",
    ],
    imageAlts: ["Bukti deface Kopi Ajoe 1", "Bukti deface Kopi Ajoe 2"],
  },
  certificates: {
    eyebrow: "05 — Sertifikat",
    title: "Sertifikat",
    open: "Buka PDF →",
    items: [
      {
        label: "CTF CADIAK 2026 — Cyber Attack & Defense",
        issuer: "Diskominfotik Sumatera Barat",
        date: "30 September 2026",
        credential: "SS/SERT/009-2026",
        href: "/certificates/sertifikat-cadiak-ctf.pdf",
      },
      {
        label: "Memulai Pemrograman Dengan Java",
        issuer: "Dicoding Indonesia",
        date: "15 November 2026",
        credential: "1RXYDE0J3XVM",
        href: "/certificates/sertifikat-java-dicoding.pdf",
      },
      {
        label: "Linux Fundamental",
        issuer: "Aguna Course",
        date: "15 November 2026",
        credential: "AC-764-02199978-28",
        href: "/certificates/sertifikat-linux-fundamental.pdf",
      },
      {
        label: "Virtual Machine Fundamental",
        issuer: "Aguna Course",
        date: "15 November 2026",
        credential: "AC-088-69854334-51",
        href: "/certificates/sertifikat-virtual-machine.pdf",
      },
      {
        label: "Python Fundamental",
        issuer: "Aguna Course",
        date: "6 Oktober 2026",
        credential: "AC-971-95760181-67",
        href: "/certificates/sertifikat-python-fundamental.pdf",
      },
      {
        label: "Network Fundamental",
        issuer: "Aguna Course",
        date: "27 Januari 2026",
        credential: "AC-600-77053855-41",
        href: "/certificates/sertifikat-network-fundamental.pdf",
      },
      {
        label: "Certified English Learner",
        issuer: "Karya Inspirasi Indonesia",
        date: "2025",
        credential: "077/SEI/KII/CEL/III/2025",
        href: "/certificates/sertifikat-english-learner-2.pdf",
      },
    ],
  },
  cv: {
    eyebrow: "06 — Curriculum Vitae",
    title: "CV Taufik Zaqi",
    desc: "Ringkasan CV dalam format PDF. Lihat atau unduh langsung.",
    cta: "Lihat / Unduh CV (PDF)",
  },
  services: {
    eyebrow: "07 — Layanan",
    title: "Jasa Pembuatan Website",
    descBefore:
      "Saya juga menerima jasa pembuatan website melalui Devzy — dari landing page dan company profile hingga aplikasi web custom. Responsif, cepat, dan disesuaikan dengan kebutuhan Anda. Lihat paket, portofolio, dan harga di ",
    descAfter: ".",
    visit: "Kunjungi devzy.site",
    whatsapp: "Hubungi via WhatsApp",
    whatsappUrl: servicesWhatsApp,
  },
  contact: {
    eyebrow: "08 — Kontak",
    title: "Hubungi Saya",
    items: [
      {
        icon: "mail",
        label: "Email",
        value: "qwertyuzyk420@gmail.com",
        href: "mailto:qwertyuzyk420@gmail.com",
      },
      {
        icon: "whatsapp",
        label: "WhatsApp",
        value: "+62 812-6728-4236",
        href: "https://wa.me/6281267284236",
        external: true,
      },
      {
        icon: "instagram",
        label: "Instagram",
        value: "@zyk.1sheremf",
        href: "https://instagram.com/zyk.1sheremf",
        external: true,
      },
      {
        icon: "linkedin",
        label: "LinkedIn",
        value: "linkedin.com/in/taufik-zaqi",
        href: "https://www.linkedin.com/in/taufik-zaqi",
        external: true,
      },
      {
        icon: "github",
        label: "GitHub",
        value: "zyk-ishere",
        href: "https://github.com/zyk-ishere",
        external: true,
      },
      {
        icon: "discord",
        label: "Discord",
        value: "zyk0363",
        href: "https://discord.com",
        external: true,
      },
    ],
  },
  footer: {
    ctaTitle: "Mau website seperti ini?",
    ctaDesc:
      "Jasa pembuatan website oleh Devzy — landing page, company profile, dan aplikasi web custom.",
    ctaButton: "Kunjungi devzy.site",
    copyright: "© 2026 Taufik Zaqi",
    built: "dibuat dengan next.js",
  },
};

export const contentByLocale: Record<Locale, Content> = { en, id };
