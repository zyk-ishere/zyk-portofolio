import { RevealObserver } from "@/components/reveal-observer";

export default function Home() {
  const projects = [
    { title: "Kostin — Boarding House Management", desc: "Boarding house payment and billing system: room & tenant data, monthly invoices, proof-of-transfer verification. PWA.", tags: ["Next.js", "PWA", "Supabase"], link: "https://www.konstin.my.id/" },
    { title: "Duidi", desc: "Personal finance and financial planning app. Track income/expenses, manage budgets.", tags: ["Next.js", "PWA", "Finance"], link: "https://www.duidi.web.id/" },
    { title: "ZYK — Personal Link Hub", desc: "Personal link-in-bio page with dark glassmorphism. Unifies Instagram, WhatsApp, and Discord in one link, responsive, deployed on Netlify.", tags: ["HTML", "CSS", "Bootstrap"], link: "https://zyks.netlify.app/" },
  ];
  const skills = ["Full Stack Development", "React / Next.js", "Node.js", "TypeScript", "Ethical Hacking", "Web App Security", "Networking", "Linux", "Supabase", "Tailwind CSS"];

  return (
    <main className="min-h-screen">
      <RevealObserver />
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-line bg-background/80 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="mono font-semibold">taufik<span className="text-muted">.</span>zaqi</a>
          <div className="hidden md:flex gap-6 text-sm text-muted">
            {["about","skills","projects","security","certificates","cv","contact"].map(s => (
              <a key={s} href={`#${s}`} className="hover:text-foreground transition capitalize nav-link">{s === "cv" ? "CV" : s}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="section pt-32 reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-4 hero-sub">$ whoami</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight hero-title">
            Taufik Zaqi
          </h1>
          <p className="text-xl md:text-2xl text-muted mt-4 hero-sub">
            Who Am I
          </p>
          <p className="text-lg md:text-xl mt-2 hero-sub">
            Full Stack Web Developer · Ethical Hacker
          </p>
          <p className="mt-6 max-w-2xl text-muted hero-desc">
            Building end-to-end web applications and performing ethical security testing.
            Documenting projects, skills, and the learning journey in IT.
          </p>
          <div className="mt-8 flex gap-3 hero-cta">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-ghost">Contact Me</a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">01 — About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/taufik.png" alt="Photo of Taufik Zaqi" className="w-full h-auto object-contain" />
            </div>
            <div className="space-y-4">
              <p className="text-muted leading-relaxed">
                I am a Full Stack Web Developer and Ethical Hacker. I build web applications
                end-to-end — from frontend to backend — and perform ethical security testing
                to find and fix vulnerabilities.
              </p>
              <div className="card p-6">
                <ul className="space-y-2 text-sm">
                  <li><span className="text-muted">Role:</span> Full Stack Web Developer</li>
                  <li><span className="text-muted">Field:</span> Ethical Hacker / Security</li>
                  <li><span className="text-muted">Location:</span> Payakumbuh, West Sumatra</li>
                  <li><span className="text-muted">Focus:</span> Web Apps, Security, Networking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">02 — Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s, i) => (
              <span key={s} className="mono text-sm px-4 py-2 rounded-lg border border-line bg-card mono-tag reveal" style={{ transitionDelay: `${i * 50}ms` }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">03 — Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <article key={p.title} className="card p-6 flex flex-col reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-muted mt-2 flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map(t => <span key={t} className="mono text-xs px-2 py-1 rounded border border-line">{t}</span>)}
                </div>
                <a href={p.link} target="_blank" rel="noopener" className="mt-4 text-sm hover:underline">Visit →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY RESEARCHER */}
      <section id="security" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">04 — Security Researcher</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Security Research</h2>
          <article className="card p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="mono text-xs px-2 py-1 rounded border border-line">Bug Hunting</span>
              <span className="mono text-xs px-2 py-1 rounded border border-line">Web Security</span>
              <span className="mono text-xs px-2 py-1 rounded border border-line">Authorized</span>
            </div>
            <h3 className="text-xl font-semibold">Kopi Ajoe — Authorized Security Assessment</h3>
            <p className="text-muted mt-2">
              Authorized security testing on the application owner's permission. Found a vulnerability
              that allowed product content replacement; findings were reported and remediated.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <a href="/gallery/kopi-ajoe-1.jpg" target="_blank" rel="noopener" className="card overflow-hidden block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gallery/kopi-ajoe-1.jpg" alt="Kopi Ajoe defacement evidence 1" className="w-full h-40 object-cover" />
              </a>
              <a href="/gallery/kopi-ajoe-2.jpg" target="_blank" rel="noopener" className="card overflow-hidden block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/gallery/kopi-ajoe-2.jpg" alt="Kopi Ajoe defacement evidence 2" className="w-full h-40 object-cover" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">05 — Certificates</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Certificates</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/certificates/sertifikat-cadiak-ctf.pdf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">
              CTF CADIAK 2026 Certificate (PDF)
            </a>
            <a href="/certificates/sertifikat-english-learner-2.pdf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">
              English Learner Certificate (PDF)
            </a>
            <a href="/certificates/sertifikat-network-fundamental.pdf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">
              Network Fundamental Certificate (PDF)
            </a>
            <a href="/certificates/sertifikat-python-fundamental.pdf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition">
              Python Fundamental Certificate (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">06 — Curriculum Vitae</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">CV Taufik Zaqi</h2>
          <p className="text-muted mb-6">CV summary in PDF format. View or download directly.</p>
          <a href="/cv/cv-taufik-zaqi.pdf" target="_blank" rel="noopener" className="btn btn-primary">
            View / Download CV (PDF)
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">07 — Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
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