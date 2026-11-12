export default function Home() {
  const projects = [
    { title: "ZYK — Personal Link Hub", desc: "Halaman penghubung pribadi bergaya dark glassmorphism. Menyatukan Instagram, WhatsApp, dan Discord dalam satu tautan.", tags: ["HTML", "CSS", "Bootstrap"], link: "https://zyks.netlify.app/" },
    { title: "Kostin — Manajemen Kost", desc: "Sistem pembayaran dan penagihan kost: data kamar, penghuni, tagihan bulanan, verifikasi bukti transfer. PWA.", tags: ["Next.js", "PWA", "Supabase"], link: "https://www.konstin.my.id/" },
    { title: "Duidi", desc: "Aplikasi keuangan pribadi dan perencanaan finansial. Catat pemasukan/pengeluaran, kelola anggaran.", tags: ["Next.js", "PWA", "Finansial"], link: "https://www.duidi.web.id/" },
    { title: "Kopi Ajoe — Security Assessment", desc: "Pengujian keamanan dengan izin pemilik. Temuan dilaporkan dan ditindaklanjuti.", tags: ["Bug Hunting", "Web Security", "Authorized"], link: "#" },
  ];
  const skills = ["Full Stack Development", "React / Next.js", "Node.js", "TypeScript", "Ethical Hacking", "Web App Security", "Networking", "Linux", "Supabase", "Tailwind CSS"];

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-line bg-background/80 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="mono font-semibold">taufik<span className="text-muted">.</span>zaqi</a>
          <div className="hidden md:flex gap-6 text-sm text-muted">
            {["about","skills","projects","certificates","cv","contact"].map(s => (
              <a key={s} href={`#${s}`} className="hover:text-foreground transition">{s}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="section pt-32">
        <div className="container">
          <p className="mono text-sm text-muted mb-4">$ whoami</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Taufik Zaqi
          </h1>
          <p className="text-xl md:text-2xl text-muted mt-4">
            Who Am I
          </p>
          <p className="text-lg md:text-xl mt-2">
            Full Stack Web Developer · Ethical Hacker
          </p>
          <p className="mt-6 max-w-2xl text-muted">
            Membangun aplikasi web end-to-end dan melakukan pengujian keamanan secara etis.
            Mendokumentasikan proyek, keterampilan, dan perjalanan belajar di bidang IT.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="btn btn-primary">Lihat Proyek</a>
            <a href="#contact" className="btn btn-ghost">Hubungi Saya</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section border-t border-line">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">01 — Tentang</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tentang Saya</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/taufik.jpg" alt="Foto Taufik Zaqi" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">
                Saya adalah Full Stack Web Developer dan Ethical Hacker. Membangun aplikasi web
                end-to-end — dari frontend hingga backend — serta melakukan pengujian keamanan
                secara etis untuk menemukan dan memperbaiki celah.
              </p>
              <div className="card p-6">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-muted">Peran:</span> Full Stack Web Developer</li>
                  <li><span className="text-muted">Bidang:</span> Ethical Hacker / Security</li>
                  <li><span className="text-muted">Lokasi:</span> Payakumbuh, Sumatera Barat</li>
                  <li><span className="text-muted">Fokus:</span> Web Apps, Security, Networking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section border-t border-line">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">02 — Keahlian</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map(s => (
              <span key={s} className="mono text-sm px-4 py-2 rounded-lg border border-line bg-card">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section border-t border-line">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">03 — Proyek</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Proyek Unggulan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map(p => (
              <article key={p.title} className="card p-6 flex flex-col">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-muted mt-2 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map(t => <span key={t} className="mono text-xs px-2 py-1 rounded border border-line">{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noopener" className="mt-4 text-sm hover:underline">Kunjungi →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section border-t border-line">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">04 — Sertifikat</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sertifikat</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/certificates/sertifikat-network-fundamental.pdf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">
              Sertifikat Network Fundamental (PDF)
            </a>
            <a href="/certificates/sertifikat-python-fundamental.pdf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">
              Sertifikat Python Fundamental (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="section border-t border-line">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">05 — Curriculum Vitae</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">CV Taufik Zaqi</h2>
          <p className="text-muted mb-6">Ringkasan CV dalam bentuk dokumen PDF. Bisa dilihat atau diunduh langsung.</p>
          <a href="/cv/cv-taufik-zaqi.pdf" target="_blank" rel="noopener" className="btn btn-primary">
            Lihat / Unduh CV (PDF)
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section border-t border-line">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">06 - Kontak</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hubungi Saya</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:qwertyuzyk420@gmail.com" className="card p-6 hover:bg-card/80 transition">Email</a>
            <a href="https://wa.me/6281267284236" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">WhatsApp</a>
            <a href="https://instagram.com/zyk.1sheremf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">Instagram</a>
            <a href="https://github.com/zyk-ishere" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">GitHub</a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8">
        <div className="container text-sm text-muted flex justify-between">
          <span>© 2026 Taufik Zaqi</span>
          <span className="mono">built with next.js</span>
        </div>
      </footer>
    </main>
  );
}