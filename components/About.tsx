'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { profile, coreCompetencies } from '@/data/profile';

const quickBadges = [
  { icon: '📍', label: 'Chandrapur, Maharashtra - 442401' },
  { icon: '🎓', label: 'MBA (Finance & IT) & B.E. (CSE)' },
  { icon: '💼', label: '5+ Years in Laravel & Web Architecture' },
  { icon: '🌐', label: 'English, Hindi, Marathi' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal-on-scroll').forEach((r) => observer.observe(r));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-neo about-neo-section">
      <div className="container" ref={ref}>
        {/* Section Header */}
        <div className="section-head-neo reveal-on-scroll">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>Engineer Profile</span>
          </div>
          <h2 className="section-headline">
            About <span className="gradient-shimmer">Me</span>
          </h2>
          <p className="section-subheadline">
            Blending over 5 years of full-stack engineering with strategic IT and finance insights.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="about-bento-grid">
          {/* Card 1: Avatar & Identity Card */}
          <div className="bento-card bento-avatar-card reveal-on-scroll">
            <div className="avatar-frame-wrap">
              <div className="avatar-frame">
                <Image
                  src="/shubham.jpeg"
                  alt="Shubham Bramhane"
                  fill
                  sizes="170px"
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div className="avatar-glow-ring" />
              </div>
              <div className="avatar-floating-tag">
                <span className="beacon-core" />
                <span>5+ Years Active Dev</span>
              </div>
            </div>

            <div className="avatar-info-block">
              <h3 className="avatar-name">{profile.name}</h3>
              <p className="avatar-title">{profile.title}</p>

              <div className="quick-badges-list">
                {quickBadges.map((item) => (
                  <div className="quick-badge-item" key={item.label}>
                    <span className="badge-ico">{item.icon}</span>
                    <span className="badge-txt">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Strategic Vision & Bio */}
          <div className="bento-card bento-bio-card reveal-on-scroll">
            <div className="bio-card-header">
              <span className="card-badge">Engineering Philosophy</span>
              <h3 className="bio-card-title">
                Building scalable architectures that translate complex business needs into resilient software.
              </h3>
            </div>

            <div className="bio-card-paragraphs">
              <p className="bio-p">{profile.bio}</p>
              <p className="bio-p">{profile.bioExtended}</p>
            </div>

            <div className="bio-actions-strip">
              <a
                href={`mailto:${profile.email}`}
                className="btn-neo btn-neo-primary"
              >
                <span>Let&apos;s Connect</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neo btn-neo-resume"
                download="Shubham_Bramhane_Resume.pdf"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Core Competencies Row */}
        <div className="core-competencies-wrap reveal-on-scroll">
          <div className="competencies-headline-bar">
            <div>
              <span className="sub-tag">Core Technical Pillars</span>
              <h3 className="competencies-section-title">
                Areas of <span className="gradient-shimmer">Core Competence</span>
              </h3>
            </div>
            <p className="competencies-intro">
              High-impact engineering capabilities directly validated through enterprise diagnostic platforms &amp; multi-tenant systems.
            </p>
          </div>

          <div className="competencies-neo-grid">
            {coreCompetencies.map((comp) => (
              <div className="competency-bento-card" key={comp.id}>
                <div className="comp-card-top">
                  <div className="comp-icon-box">{comp.icon}</div>
                  <span className="comp-pill-badge">{comp.badge}</span>
                </div>
                <h4 className="comp-title">{comp.title}</h4>
                <p className="comp-desc">{comp.description}</p>
                <div className="comp-glow-line" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
