import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { RevealObserver } from "@/components/reveal-observer";
import { TypingText } from "@/components/typing-text";
import type { ContactIcon, Content, Locale } from "@/lib/content";

const contactIcons: Record<ContactIcon, ReactNode> = {
  mail: (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </svg>
  ),
  whatsapp: (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35zM12 2C6.48 2 2 6.48 2 12c0 1.83.49 3.54 1.34 5.02L2 22l5.15-1.34A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
  ),
  instagram: (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  linkedin: (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.852 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.221-.253-4.559-1.11-4.559-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.58 9.58 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.34 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.481C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  ),
  discord: (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.009c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.06.06 0 0 0-.031-.03z" />
    </svg>
  ),
};

const languageLinks: { locale: Locale; href: string; label: string }[] = [
  { locale: "en", href: "/", label: "EN" },
  { locale: "id", href: "/id", label: "ID" },
];

export function PortfolioPage({
  locale,
  content,
}: {
  locale: Locale;
  content: Content;
}) {
  const marqueeItems = [...content.marquee, ...content.marquee];

  return (
    <main lang={locale} className="min-h-screen">
      <RevealObserver />

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 nav-glass">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="mono font-semibold ml-8 md:ml-0">
            taufik<span className="text-muted">.</span>zaqi
          </a>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden md:flex gap-6 text-sm text-muted">
              {content.nav.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="hover:text-foreground transition nav-link"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <MobileNav items={content.nav} labels={content.navAria} />

            <div className="flex items-center overflow-hidden rounded-lg border border-line text-xs mono">
              {languageLinks.map((lang) => (
                <Link
                  key={lang.locale}
                  href={lang.href}
                  aria-current={locale === lang.locale ? "page" : undefined}
                  className={`px-2.5 py-1.5 transition ${
                    locale === lang.locale
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {lang.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="section pt-32 reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-4 hero-sub">
            {content.hero.whoami}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight hero-title">
            {content.hero.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted mt-4 hero-sub">
            {content.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl mt-2 hero-sub mono">
            <TypingText texts={content.hero.roles} />
          </p>
          <p className="mt-6 max-w-2xl text-muted hero-desc">
            {content.hero.desc}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 hero-cta">
            <a href="#projects" className="btn btn-primary">
              {content.hero.primaryCta}
            </a>
            <a href="#contact" className="btn btn-ghost">
              {content.hero.secondaryCta}
            </a>
            <a
              href="https://devzy.site"
              target="_blank"
              rel="noopener"
              className="btn btn-devzy"
            >
              {content.hero.serviceCta}
            </a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-line py-4 overflow-hidden">
        <div className="marquee">
          <div className="marquee-track text-sm mono text-muted">
            {marqueeItems.map((item, i) => (
              <span key={`${item}-${i}`}>{item} ✦</span>
            ))}
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">{content.about.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="card overflow-hidden">
              <Image
                src="/img/taufik.webp"
                alt={content.about.photoAlt}
                width={1024}
                height={1536}
                sizes="(min-width: 768px) 520px, 100vw"
                className="w-full h-auto object-contain float"
              />
            </div>
            <div className="space-y-4">
              <div className="space-y-4">
                {content.about.body.split(/\n\s*\n/).map((paragraph, i) => (
                  <p key={i} className="text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="card p-6">
                <ul className="space-y-2 text-sm">
                  {content.about.facts.map((fact) => (
                    <li key={fact.label}>
                      <span className="text-muted">{fact.label}:</span>{" "}
                      {fact.value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-6">
                <p className="mono text-xs text-muted mb-3 uppercase tracking-wider">
                  {content.about.education.label}
                </p>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 shrink-0 text-muted"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 9.5 12 4l9 5.5" />
                    <path d="M5 10v9h14v-9" />
                    <path d="M9 19v-5h6v5" />
                  </svg>
                  <div>
                    <div className="font-semibold">
                      {content.about.education.school}
                    </div>
                    <div className="text-sm text-muted">
                      {content.about.education.major}
                    </div>
                    <div className="mono text-xs text-muted mt-1">
                      {content.about.education.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">
            {content.skills.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.skills.title}
          </h2>
          <div className="flex flex-wrap gap-3">
            {content.skills.items.map((skill, i) => (
              <span
                key={skill}
                className="mono text-sm px-4 py-2 rounded-lg chip mono-tag reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">
            {content.projects.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.projects.items.map((project, i) => (
              <article
                key={project.title}
                className="card p-6 flex flex-col reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="-mx-6 -mt-6 mb-5 block overflow-hidden rounded-t-2xl border-b border-white/10"
                >
                  <Image
                    src={project.image.src}
                    alt={project.title}
                    width={project.image.width}
                    height={project.image.height}
                    sizes="(min-width: 768px) 550px, 100vw"
                    className="h-44 w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  />
                </a>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mono text-xs text-muted mt-1 mb-3">
                  {project.meta.role} · {project.meta.status}
                </p>
                <p className="text-muted">{project.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span aria-hidden="true" className="text-white/35">
                        ›
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-auto pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono text-xs px-2 py-1 rounded chip"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 text-sm hover:underline"
                >
                  {content.projects.visit}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECURITY RESEARCHER */}
      <section id="security" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">
            {content.security.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.security.title}
          </h2>
          <article className="card p-6">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              {content.security.badges.map((badge) => (
                <span
                  key={badge}
                  className="mono text-xs px-2 py-1 rounded chip"
                >
                  {badge}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold">{content.security.heading}</h3>
            {content.security.intro && (
              <p className="text-muted mt-2">{content.security.intro}</p>
            )}
            <ul className="text-muted mt-2 space-y-1 list-disc list-inside text-sm">
              {content.security.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {content.security.imageAlts.map((alt, i) => (
                <a
                  key={alt}
                  href={`/gallery/kopi-ajoe-${i + 1}.webp`}
                  target="_blank"
                  rel="noopener"
                  className="card overflow-hidden block"
                >
                  <Image
                    src={`/gallery/kopi-ajoe-${i + 1}.webp`}
                    alt={alt}
                    width={720}
                    height={1400}
                    sizes="(min-width: 768px) 480px, 45vw"
                    className="w-full h-40 object-cover"
                  />
                </a>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-line">
              <p className="mono text-xs text-muted mb-2 uppercase tracking-wider">
                {content.security.outcomeTitle}
              </p>
              <p className="text-muted leading-relaxed text-sm">
                {content.security.outcome}
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">
            {content.certificates.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.certificates.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {content.certificates.items.map((cert) => (
              <a
                key={cert.href}
                href={cert.href}
                target="_blank"
                rel="noopener"
                className="card p-6 flex flex-col"
              >
                <span className="font-semibold leading-snug">{cert.label}</span>
                <span className="mono text-xs text-muted mt-1">
                  {cert.issuer} · {cert.date}
                </span>
                <span className="mono text-[11px] text-white/35 mt-1">
                  ID: {cert.credential}
                </span>
                <span className="mt-auto pt-4 text-sm text-muted">
                  {content.certificates.open}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">{content.cv.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.cv.title}
          </h2>
          <p className="text-muted mb-6">{content.cv.desc}</p>
          <a
            href="/cv/cv-taufik-zaqi.pdf"
            target="_blank"
            rel="noopener"
            className="btn btn-primary"
          >
            {content.cv.cta}
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">
            {content.services.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.services.title}
          </h2>
          <p className="text-muted mb-6 max-w-2xl">
            {content.services.descBefore}
            <a
              href="https://devzy.site"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-4 hover:text-foreground transition"
            >
              devzy.site
            </a>
            {content.services.descAfter}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://devzy.site"
              target="_blank"
              rel="noopener"
              className="btn btn-primary"
            >
              {content.services.visit}
            </a>
            <a
              href={content.services.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost"
            >
              {content.services.whatsapp}
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section border-t border-line reveal">
        <div className="container">
          <p className="mono text-sm text-muted mb-2">
            {content.contact.eyebrow}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {content.contact.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {content.contact.items.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noopener" }
                  : {})}
                className="card p-6 flex items-center gap-4"
              >
                {contactIcons[item.icon]}
                <div>
                  <div className="font-semibold">{item.label}</div>
                  <div className="mono text-sm text-muted mt-1">{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-line py-8 px-6">
        <div className="container">
          <div className="flex flex-col items-start justify-between gap-4 pb-8 mb-8 border-b border-line sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold">{content.footer.ctaTitle}</p>
              <p className="text-sm text-muted mt-1">
                {content.footer.ctaDesc}
              </p>
            </div>
            <a
              href="https://devzy.site"
              target="_blank"
              rel="noopener"
              className="btn btn-devzy shrink-0"
            >
              {content.footer.ctaButton}
            </a>
          </div>
          <div className="text-sm text-muted flex justify-between">
            <span>{content.footer.copyright}</span>
            <span className="mono">{content.footer.built}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
