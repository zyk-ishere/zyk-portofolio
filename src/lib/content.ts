export type Locale = "en" | "id";

export type ContactIcon =
  | "mail"
  | "whatsapp"
  | "instagram"
  | "linkedin"
  | "github"
  | "discord";

type Fact = { label: string; value: string };
type NoteItem = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  body: string[];
};

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
    outcomeTitle: string;
    outcome: string;
    disclaimer: string;
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
  notes: {
    eyebrow: string;
    title: string;
    readMore: string;
    items: NoteItem[];
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
    { id: "notes", label: "Notes" },
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
    body: "I am a Full Stack Web Developer focused on building web applications from frontend to backend. I am also deepening my knowledge in Cybersecurity and Ethical Hacking, especially web application security testing to identify and fix potential vulnerabilities.\n\nAs a Vibe Coder, I leverage AI technology to speed up development — turning ideas into functional, ready-to-use digital products.",
    photoAlt: "Photo of Taufik Zaqi",
    facts: [
      { label: "Role", value: "Full Stack Web Developer & Vibe Coder" },
      { label: "Field", value: "Web Development & Cybersecurity" },
      { label: "Location", value: "Payakumbuh, West Sumatra" },
      { label: "Focus", value: "Web Application, Application Security & Networking" },
      { label: "Availability", value: "Open to internship (PKL), freelance, and remote collaboration" },
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
        title: "Konstin — Boarding House Management",
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
        title: "Barbook — Barbershop Booking",
        desc: "Online barbershop booking PWA built by Devzy (devzy.site). Customers can book haircuts without login, while owners manage operations in one system — installable on devices and supporting multiple barbershops.",
        features: [
          "Customer booking: no login, pick service, barber & time (24h) with availability and Google Maps",
          "Owner dashboard: profile, schedule, services, barbers, bookings & income tracking",
          "Installable PWA, shareable booking links, dashboard themes & multi-barbershop support",
        ],
        meta: { role: "Full Stack Developer", status: "Live" },
        tags: ["Next.js", "PWA", "Supabase"],
        link: "https://barbook.web.id",
        image: { src: "/img/projects/barbook.webp", width: 1266, height: 863 },
      },
      {
        title: "Zykk Store",
        desc: "Social media booster service (SMM provider) catalog site. It listed tiered packages for Instagram, TikTok, and WhatsApp Channel — followers, likes, and reposts — with WhatsApp ordering and public testimonials. The site is still live but no longer selling.",
        features: [
          "Instagram, TikTok & WA Channel packages",
          "Tiered pricing per quantity",
          "Public testimonials + WhatsApp ordering",
        ],
        meta: { role: "Frontend Developer", status: "No longer selling" },
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
    intro: "",
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
      "Kopi Ajoe authorized chat evidence 1",
      "Kopi Ajoe authorized chat evidence 2",
    ],
    outcomeTitle: "Outcome & Follow-up",
    disclaimer:
      "All testing was performed with authorization on systems I was permitted to assess. Findings were reported responsibly for remediation.",
    outcome:
      "After the assessment, I was invited to meet the Kopi Ajoe cybersecurity team. They could not issue a certificate as appreciation, but instead offered me a position on their cybersecurity team. Due to school commitments and an upcoming internship (PKL), I could not accept at the time; the team agreed to welcome me as a member once I graduate. As a substitute for the certificate, they promised a cash appreciation — which, to date, has not yet been transferred.",
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
        label: "Memulai Pemrograman Dengan C",
        issuer: "Dicoding Indonesia",
        date: "15 November 2026",
        credential: "RVZKMWLJNXD5",
        href: "/certificates/sertifikat-c-dicoding.pdf",
      },
      {
        label: "Memulai Pemrograman dengan Haskell",
        issuer: "Dicoding Indonesia",
        date: "15 November 2026",
        credential: "OLZOJRQ8QX65",
        href: "/certificates/sertifikat-haskell-dicoding.pdf",
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
  notes: {
    eyebrow: "09 - Notes",
    title: "Notes",
    readMore: "Read more",
    items: [
      {
        slug: "supabase-rls-misconfiguration",
        title: "Supabase RLS: the misconfiguration I found (and how to avoid it)",
        date: "2026",
        tags: ["Supabase", "Security", "RLS"],
        summary:
          "A short write-up about a Row Level Security misconfiguration, what it exposed, and the checks I now run before shipping.",
        body: [
          "Row Level Security is one of Supabase's best features, but it is also easy to get wrong. In a recent authorized assessment, I found that a policy was effectively bypassed because the table had RLS enabled while a broad policy still allowed reads that should have been restricted.",
          "The issue was not a missing policy, but an overly permissive one combined with a client query that selected more columns than intended. The result was unauthorized data exposure through a normal API request.",
          "My takeaway: enable RLS on every table, write policies per role, and test them with the anon key, not only as an admin. I also now review generated SQL policies line by line before deploying.",
        ],
      },
      {
        slug: "multi-tenant-barbershop-pwa",
        title: "Designing a multi-tenant booking PWA for barbershops",
        date: "2026",
        tags: ["Next.js", "PWA", "Supabase", "Architecture"],
        summary:
          "Notes on building Barbook: tenant isolation, booking rules, and keeping the owner dashboard simple.",
        body: [
          "Barbook supports multiple barbershops, each with its own services, barbers, bookings, and income. The main design rule was simple: every query must be scoped by shop_id, and no owner can ever see another shop's data.",
          "Booking rules were trickier than expected. Bookings follow shop hours, and if a customer tries to book after closing time, the request is scheduled for the next operating day instead of being rejected.",
          "For the PWA side, I kept the app shell small and made the booking flow work without login. That single decision removed most of the friction for customers and improved conversion.",
        ],
      },
      {
        slug: "small-business-web-security-checklist",
        title: "A practical security checklist for small business websites",
        date: "2026",
        tags: ["Web Security", "Checklist", "UMKM"],
        summary:
          "A short checklist I use when reviewing small business sites: auth, data exposure, uploads, and headers.",
        body: [
          "Most small business sites do not need enterprise security, but they do need the basics. I start with authentication: are admin routes protected, are passwords hashed, and is there any way to bypass login?",
          "Next I check data exposure: API responses, Supabase tables, and public storage buckets. Many leaks happen because a table or bucket was left public by default.",
          "Finally I check headers, file uploads, and dependency versions. These are small steps, but they catch the majority of issues I see in the wild.",
        ],
      },
      {
        slug: "vibe-coding-with-ai",
        title: "Vibe coding with AI: speed, quality, and the missing context",
        date: "2026",
        tags: ["AI", "Workflow", "Productivity"],
        summary:
          "How I use AI to ship faster without losing ownership of the codebase.",
        body: [
          "I use AI as an accelerator, not as an autopilot. It is great for scaffolding, refactoring, and exploring unfamiliar APIs, but it does not know the constraints of my project unless I explain them.",
          "The biggest risk is accepting code that works but does not fit the architecture. I mitigate this by reviewing every change, running builds, and keeping commits small.",
          "AI is most useful when I already understand the problem. When I do not, I read and debug manually first, then ask AI to help with the repetitive parts.",
        ],
      },
    ],
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
    { id: "notes", label: "Catatan" },
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
    body: "Saya adalah Full Stack Web Developer yang berfokus pada pengembangan aplikasi web dari frontend hingga backend. Saya juga sedang mendalami bidang Cybersecurity dan Ethical Hacking, khususnya pengujian keamanan aplikasi web untuk mengidentifikasi serta memperbaiki potensi kerentanan.\n\nSebagai seorang Vibe Coder, saya memanfaatkan teknologi AI untuk mempercepat proses pengembangan, mengubah ide menjadi produk digital yang fungsional dan siap digunakan.",
    photoAlt: "Foto Taufik Zaqi",
    facts: [
      { label: "Peran", value: "Full Stack Web Developer & Vibe Coder" },
      { label: "Bidang", value: "Web Development & Cybersecurity" },
      { label: "Lokasi", value: "Payakumbuh, Sumatera Barat" },
      { label: "Fokus", value: "Web Application, Application Security & Networking" },
      { label: "Ketersediaan", value: "Terbuka untuk PKL/magang, freelance, dan kolaborasi remote" },
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
        title: "Konstin — Manajemen Kos",
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
        title: "Barbook — Booking Barbershop",
        desc: "PWA booking barbershop online buatan Devzy (devzy.site). Pelanggan bisa memesan jadwal cukur tanpa login, sementara pemilik mengelola operasional dalam satu sistem — bisa di-install dan mendukung banyak barbershop.",
        features: [
          "Booking pelanggan: tanpa login, pilih layanan, kapster & jam (24 jam), cek ketersediaan dan Google Maps",
          "Dashboard pemilik: profil, jadwal, layanan, kapster, booking & pantau pemasukan",
          "PWA bisa di-install, link booking (termasuk per kapster), tema dashboard & dukungan multi-barbershop",
        ],
        meta: { role: "Full Stack Developer", status: "Aktif" },
        tags: ["Next.js", "PWA", "Supabase"],
        link: "https://barbook.web.id",
        image: { src: "/img/projects/barbook.webp", width: 1266, height: 863 },
      },
      {
        title: "Zykk Store",
        desc: "Situs katalog layanan penambah engagement media sosial (SMM provider). Menampilkan paket bertingkat untuk Instagram, TikTok, dan WhatsApp Channel — followers, likes, dan repost — dengan pemesanan via WhatsApp dan testimoni transaksi publik. Situs masih aktif, namun sudah tidak berjualan.",
        features: [
          "Paket Instagram, TikTok & WhatsApp Channel",
          "Harga bertingkat sesuai jumlah",
          "Testimoni publik + order via WhatsApp",
        ],
        meta: { role: "Frontend Developer", status: "Tidak lagi berjualan" },
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
    intro: "",
    bullets: [
      "Berhasil mengakses panel super admin admin.kopiajoe.com.",
      "Menemukan kesalahan konfigurasi Row Level Security (RLS) yang memungkinkan akses data tanpa otorisasi.",
      "Mengubah tampilan aplikasi Kopi Ajoe yang terpasang di Play Store.",
      "Melakukan deface pada foto produk di dalam aplikasi.",
      "Seluruh temuan dilaporkan ke tim cybersecurity Kopi Ajoe untuk diperbaiki.",
    ],
    imageAlts: [
      "Bukti deface Kopi Ajoe 1",
      "Bukti deface Kopi Ajoe 2",
      "Bukti chat dengan tim Kopi Ajoe 1",
      "Bukti chat dengan tim Kopi Ajoe 2",
    ],
    outcomeTitle: "Hasil & Tindak Lanjut",
    disclaimer:
      "Semua pengujian dilakukan dengan izin pada sistem yang berwenang. Temuan dilaporkan secara bertanggung jawab untuk perbaikan.",
    outcome:
      "Setelah penilaian, saya diundang untuk bertemu dengan tim cybersecurity Kopi Ajoe. Mereka tidak bisa memberikan apresiasi berupa sertifikat, tetapi menawarkan posisi di tim cybersecurity mereka. Karena masih sekolah dan akan melaksanakan PKL, saya belum bisa menerima saat itu; tim Kopi Ajoe bersedia menerima saya sebagai anggota setelah tamat. Sebagai pengganti sertifikat, mereka menjanjikan apresiasi berupa uang tunai — yang hingga saat ini belum ditransfer.",
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
        label: "Memulai Pemrograman Dengan C",
        issuer: "Dicoding Indonesia",
        date: "15 November 2026",
        credential: "RVZKMWLJNXD5",
        href: "/certificates/sertifikat-c-dicoding.pdf",
      },
      {
        label: "Memulai Pemrograman dengan Haskell",
        issuer: "Dicoding Indonesia",
        date: "15 November 2026",
        credential: "OLZOJRQ8QX65",
        href: "/certificates/sertifikat-haskell-dicoding.pdf",
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
  notes: {
    eyebrow: "09 - Catatan",
    title: "Catatan",
    readMore: "Baca selengkapnya",
    items: [
      {
        slug: "supabase-rls-misconfiguration",
        title: "RLS Supabase: kesalahan konfigurasi yang saya temukan (dan cara menghindarinya)",
        date: "2026",
        tags: ["Supabase", "Keamanan", "RLS"],
        summary:
          "Catatan singkat tentang kesalahan konfigurasi Row Level Security, apa yang terekspos, dan pemeriksaan yang saya jalankan sebelum rilis.",
        body: [
          "Row Level Security adalah salah satu fitur terbaik Supabase, tetapi juga mudah salah konfigurasi. Dalam penilaian terotorisasi baru-baru ini, saya menemukan bahwa sebuah policy secara efektif terlewati karena tabel sudah mengaktifkan RLS, tetapi policy yang terlalu longgar masih mengizinkan pembacaan data yang seharusnya dibatasi.",
          "Masalahnya bukan policy yang hilang, melainkan policy yang terlalu permisif ditambah query klien yang memilih lebih banyak kolom dari yang seharusnya. Hasilnya, data terekspos melalui request API normal.",
          "Pelajaran saya: aktifkan RLS di setiap tabel, tulis policy per peran, dan uji dengan anon key, bukan hanya sebagai admin. Saya juga meninjau policy SQL yang dihasilkan baris per baris sebelum deploy.",
        ],
      },
      {
        slug: "multi-tenant-barbershop-pwa",
        title: "Merancang PWA booking multi-tenant untuk barbershop",
        date: "2026",
        tags: ["Next.js", "PWA", "Supabase", "Arsitektur"],
        summary:
          "Catatan membangun Barbook: isolasi tenant, aturan booking, dan menjaga dashboard pemilik tetap sederhana.",
        body: [
          "Barbook mendukung banyak barbershop, masing-masing dengan layanan, kapster, booking, dan pemasukan sendiri. Aturan desain utamanya sederhana: setiap query harus dibatasi oleh shop_id, dan tidak ada pemilik yang bisa melihat data toko lain.",
          "Aturan booking ternyata lebih rumit dari perkiraan. Booking mengikuti jam operasional, dan jika pelanggan mencoba memesan setelah jam tutup, permintaan dijadwalkan ke hari operasional berikutnya alih-alih ditolak.",
          "Untuk sisi PWA, saya menjaga app shell tetap kecil dan membuat alur booking tanpa login. Keputusan tunggal itu menghilangkan sebagian besar hambatan bagi pelanggan dan meningkatkan konversi.",
        ],
      },
      {
        slug: "small-business-web-security-checklist",
        title: "Checklist keamanan praktis untuk website UMKM",
        date: "2026",
        tags: ["Keamanan Web", "Checklist", "UMKM"],
        summary:
          "Checklist yang saya gunakan saat meninjau website UMKM: autentikasi, eksposur data, unggahan, dan header.",
        body: [
          "Sebagian besar website UMKM tidak membutuhkan keamanan tingkat enterprise, tetapi tetap membutuhkan dasar-dasarnya. Saya mulai dari autentikasi: apakah route admin terlindungi, apakah password di-hash, dan apakah ada cara melewati login?",
          "Berikutnya saya periksa eksposur data: respons API, tabel Supabase, dan bucket penyimpanan publik. Banyak kebocoran terjadi karena tabel atau bucket dibiarkan publik secara default.",
          "Terakhir saya periksa header, unggahan file, dan versi dependensi. Langkah-langkah kecil ini, tetapi menangkap sebagian besar masalah yang saya temui di lapangan.",
        ],
      },
      {
        slug: "vibe-coding-with-ai",
        title: "Vibe coding dengan AI: kecepatan, kualitas, dan konteks yang hilang",
        date: "2026",
        tags: ["AI", "Workflow", "Produktivitas"],
        summary:
          "Bagaimana saya menggunakan AI untuk merilis lebih cepat tanpa kehilangan kepemilikan atas codebase.",
        body: [
          "Saya menggunakan AI sebagai akselerator, bukan autopilot. AI sangat baik untuk scaffolding, refactoring, dan menjelajahi API yang belum familiar, tetapi tidak tahu batasan proyek saya kecuali saya menjelaskannya.",
          "Risiko terbesar adalah menerima kode yang berfungsi tetapi tidak sesuai arsitektur. Saya menguranginya dengan meninjau setiap perubahan, menjalankan build, dan menjaga commit tetap kecil.",
          "AI paling berguna ketika saya sudah memahami masalahnya. Ketika belum, saya membaca dan melakukan debugging secara manual dulu, lalu meminta AI membantu bagian-bagian repetitif.",
        ],
      },
    ],
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
