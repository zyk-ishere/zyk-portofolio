import { RevealObserver } from "@/components/reveal-observer";
import { TypingText } from "@/components/typing-text";

export default function Home() {
  const projects = [
    { title: "Devzy — Web Development Services", desc: "Website service site for Devzy: landing pages, company profiles, e-commerce, and custom web apps. Includes packages, pricing, portfolio, blog, and WhatsApp consultation.", tags: ["Next.js", "Tailwind CSS", "Services"], link: "https://devzy.site" },
    { title: "Kostin — Boarding House Management", desc: "Boarding house payment and billing system: room & tenant data, monthly invoices, proof-of-transfer verification. PWA.", tags: ["Next.js", "PWA", "Supabase"], link: "https://www.konstin.my.id/" },
    { title: "Duidi", desc: "Personal finance and financial planning app. Track income/expenses, manage budgets.", tags: ["Next.js", "PWA", "Finance"], link: "https://www.duidi.web.id/" },
    { title: "Zykk Store", desc: "Social media booster service (SMM provider): increase followers, likes, and reposts instantly. Fast, safe, competitive pricing.", tags: ["HTML", "CSS", "JavaScript"], link: "https://zykk-store.netlify.app/" },
    { title: "ZYK — Personal Link Hub", desc: "Personal link-in-bio page with dark glassmorphism. Unifies Instagram, WhatsApp, and Discord in one link, responsive, deployed on Netlify.", tags: ["HTML", "CSS", "Bootstrap"], link: "https://zyks.netlify.app/" },
  ];
  const skills = ["Full Stack Development", "React / Next.js", "Node.js", "TypeScript", "Ethical Hacking", "Web App Security", "Networking", "Linux (parrot os, debian 12)", "Supabase", "Tailwind CSS"];

  return (
    <main className="min-h-screen">
      <RevealObserver />

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-line bg-background/80 backdrop-blur">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="mono font-semibold">taufik<span className="text-muted">.</span>zaqi</a>
          <div className="hidden md:flex gap-6 text-sm text-muted">
            {["about","skills","projects","security","certificates","cv","services","contact"].map(s => (
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
          <p className="text-lg md:text-xl mt-2 hero-sub mono">
            <TypingText texts={["Full Stack Web Developer", "Grey Hat", "Network Enthusiast", "Bug Hunter"]} />
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

      {/* MARQUEE */}
      <div className="border-y border-line py-4 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track text-sm mono text-muted">
            {["Full Stack Development","Ethical Hacking","Web App Security","Next.js","React","Node.js","TypeScript","Supabase","Linux","Networking","Bug Hunting","CTF Player"].concat(["Full Stack Development","Ethical Hacking","Web App Security","Next.js","React","Node.js","TypeScript","Supabase","Linux","Networking","Bug Hunting","CTF Player"]).map((t, i) => (
              <span key={i}>{t} ✦</span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">01 — About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/img/taufik.png" alt="Photo of Taufik Zaqi" className="w-full h-auto object-contain float" />
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
                  <li><span className="text-muted">Field:</span> Grey Hat</li>
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
              Authorized security assessment on the Kopi Ajoe application (with owner permission).
              Findings include:
            </p>
            <ul className="text-muted mt-2 space-y-1 list-disc list-inside text-sm">
              <li>Accessed the super admin panel of <span className="mono">admin.kopiajoe.com</span>.</li>
              <li>Identified a Row Level Security (RLS) misconfiguration allowing unauthorized data access.</li>
              <li>Modified the appearance of the Kopi Ajoe app published on the Play Store.</li>
              <li>Defaced product photos within the application.</li>
              <li>All findings were reported to the Kopi Ajoe cybersecurity team for remediation.</li>
            </ul>
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

      {/* SERVICES */}
      <section id="services" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">07 — Services</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Web Development Services</h2>
          <p className="text-muted mb-6 max-w-2xl">
            I also offer website development services through{" "}
            <span className="text-foreground font-medium">Devzy</span> — from landing pages and
            company profiles to custom web applications. Responsive, fast, and tailored to your
            needs. See the packages, portfolio, and pricing at{" "}
            <a
              href="https://devzy.site"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4 hover:text-foreground transition"
            >
              devzy.site
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://devzy.site" target="_blank" rel="noopener" className="btn btn-primary">
              Visit devzy.site
            </a>
            <a href="https://wa.me/6289675101657?text=Halo%20Devzy,%20saya%20tertarik%20dengan%20jasa%20pembuatan%20website." target="_blank" rel="noopener" className="btn btn-ghost">
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">08 — Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:qwertyuzyk420@gmail.com" className="card p-6 hover:bg-card/80 transition flex items-center gap-4">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
              <div>
                <div className="font-semibold">Email</div>
                <div className="mono text-sm text-muted mt-1">qwertyuzyk420@gmail.com</div>
              </div>
            </a>
            <a href="https://wa.me/6281267284236" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition flex items-center gap-4">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.54 1.34 5.02L2 22l5.15-1.34A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"/></svg>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="mono text-sm text-muted mt-1">+62 812-6728-4236</div>
              </div>
            </a>
            <a href="https://instagram.com/zyk.1sheremf" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition flex items-center gap-4">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              <div>
                <div className="font-semibold">Instagram</div>
                <div className="mono text-sm text-muted mt-1">@zyk.1sheremf</div>
              </div>
            </a>
            <a href="https://github.com/zyk-ishere" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition flex items-center gap-4">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.221-.253-4.559-1.11-4.559-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.34 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              <div>
                <div className="font-semibold">GitHub</div>
                <div className="mono text-sm text-muted mt-1">zyk-ishere</div>
              </div>
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener" className="card p-6 hover:bg-card/80 transition flex items-center gap-4">
              <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03z"/></svg>
              <div>
                <div className="font-semibold">Discord</div>
                <div className="mono text-sm text-muted mt-1">zyk0363</div>
              </div>
            </a>
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