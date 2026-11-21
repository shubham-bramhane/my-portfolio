'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { profile } from '@/data/profile';
import { triggerGtaToast } from '@/components/GtaHud';
import Tilt3DCard from '@/components/Tilt3DCard';
import Vice3DCanvas from '@/components/Vice3DCanvas';

export default function Hero() {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const handleMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section id="hero" className="hero-neo-section">
      {/* Multi-Plane 3D GTA VI Vice City Sunset & Ocean Backdrop */}
      <div className="hero-3d-backdrop" aria-hidden="true">
        <div
          className="hero-vice-art-layer"
          style={{
            transform: `translate3d(${(-parallax.x * 18).toFixed(1)}px, ${(-parallax.y * 12).toFixed(1)}px, 0) scale(1.06)`,
          }}
        >
          <Image
            src="/gta6-vice-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-vice-bg-img"
          />
        </div>

        {/* Seamless Midnight-Navy Left Fade -> Crystal-Clear Vice City Sunset Skyline on Right */}
        <div className="hero-scrim-overlay" />

        {/* Live 60fps 3D Perspective Grid & Floating Sunset Bokeh Canvas */}
        <Vice3DCanvas />
      </div>

      <div className="container hero-container">
        <div className="hero-banner-stage">
          {/* Sleek GitHub-Banner Style Typography + 4 Neon 3D Action Cards */}
          <div
            className="hero-left"
            style={{
              transform: `translate3d(${(parallax.x * 6).toFixed(1)}px, ${(parallax.y * 4).toFixed(1)}px, 0)`,
            }}
          >
            <div className="hero-badges-row">
              <div className="status-beacon-badge">
                <span className="beacon-ping" />
                <span className="beacon-core" />
                <span className="beacon-text">{profile.status}</span>
              </div>

              <div className="ai-velocity-beacon">
                <span className="ai-beacon-spark">✦</span>
                <span>GTA VI • 3D Vice Edition</span>
              </div>

              <div className="hero-avatar-pill-mobile">
                <div className="mini-avatar-wrap">
                  <Image
                    src="/shubham.jpeg"
                    alt="Shubham"
                    width={24}
                    height={24}
                    style={{ borderRadius: '50%', objectFit: 'cover' }}
                    priority
                  />
                </div>
                <span>Shubham B.</span>
              </div>
            </div>

            {/* Mobile-only Framed Widescreen GTA VI Vice City Sunset Banner Preview (Exact GitHub Banner Feel!) */}
            <div className="mobile-vice-banner-card">
              <div className="mobile-vice-banner-art">
                <Image
                  src="/gta6-vice-hero.jpg"
                  alt="GTA VI Vice City Sunset Skyline"
                  fill
                  sizes="(max-width: 768px) 94vw, 1px"
                  style={{ objectFit: 'cover', objectPosition: 'center right' }}
                />
                <div className="mobile-vice-banner-scrim" />
              </div>
              <div className="mobile-vice-banner-content">
                <div className="hero-kicker-cyan">
                  <span>SENIOR FULL-STACK ARCHITECT</span>
                  <span className="hero-kicker-script">Leonida</span>
                </div>
                <h2 className="mobile-banner-name">
                  Shubham <span className="gradient-shimmer">Bramhane</span>
                </h2>
                <p className="mobile-banner-stack">
                  <span className="nowrap-token">Laravel</span>
                  <span className="dot-sep">·</span>
                  <span className="nowrap-token">React &amp; Next.js</span>
                  <span className="dot-sep">·</span>
                  <span className="nowrap-token">Python</span>
                  <span className="dot-sep">·</span>
                  <span className="nowrap-token">Redis &amp; AWS</span>
                  <span className="dot-sep">·</span>
                  <span className="nowrap-token">AI Systems</span>
                </p>
                <div className="mobile-banner-proof">
                  <span className="m-proof-chip">5+ Yrs Exp</span>
                  <span className="m-proof-chip cyan">+30% Velocity</span>
                  <span className="m-proof-chip gold">3.5x AI Boost</span>
                </div>
              </div>
            </div>

            {/* Desktop Wide-Tracked Cyan Role Eyebrow */}
            <div className="hero-kicker-cyan desktop-hero-identity">
              <span>SENIOR FULL-STACK ARCHITECT</span>
              <span className="hero-kicker-script">Leonida</span>
            </div>

            {/* Desktop Crisp Modern Geometric Name */}
            <h1 className="hero-main-title desktop-hero-identity">
              Shubham <span className="gradient-shimmer">Bramhane</span>
            </h1>

            <p className="hero-stack-line desktop-hero-identity">
              <span className="nowrap-token">Laravel</span>
              <span className="dot-sep">·</span>
              <span className="nowrap-token">React &amp; Next.js</span>
              <span className="dot-sep">·</span>
              <span className="nowrap-token">Python</span>
              <span className="dot-sep">·</span>
              <span className="nowrap-token">Redis &amp; AWS</span>
              <span className="dot-sep">·</span>
              <span className="nowrap-token">AI Systems</span>
            </p>

            {/* Desktop Clean Pipe-Separated Proof Bar */}
            <div className="hero-proof-bar desktop-hero-identity">
              <span className="proof-chip-item">5+ Years Experience</span>
              <span className="proof-pipe">|</span>
              <span className="proof-chip-item proof-cyan">+30% Query Velocity</span>
              <span className="proof-pipe">|</span>
              <span className="proof-chip-item proof-gold">3.5x AI Velocity</span>
            </div>

            <p className="hero-subtext">{profile.bio}</p>

            {/* 4 Signature GitHub-Style Glowing 3D Action Pill Cards */}
            <div className="hero-action-cards-row">
              <a
                href="#projects"
                className="vice-cta-card cta-pink"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="cta-icon-bubble">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </span>
                <span className="cta-label">Explore Projects</span>
                <span className="cta-arrow">↗</span>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="vice-cta-card cta-amber"
                download="Shubham_Bramhane_Resume.pdf"
                onClick={() =>
                  triggerGtaToast('Resume Acquired', 'GTA VI Dossier • PDF Downloaded', 'sunset')
                }
              >
                <span className="cta-icon-bubble">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                <span className="cta-label">Download Resume</span>
                <span className="cta-arrow">↓</span>
              </a>

              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="vice-cta-card cta-cyan"
              >
                <span className="cta-icon-bubble">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span className="cta-label">LinkedIn Profile</span>
                <span className="cta-arrow">↗</span>
              </a>

              <a
                href="#contact"
                className="vice-cta-card cta-emerald"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="cta-icon-bubble">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </span>
                <span className="cta-label">Initiate Contact</span>
                <span className="cta-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* 3D Tilt GTA VI HUD Metrics Ribbon */}
        <div className="hero-metrics-ribbon">
          {profile.metrics.map((metric) => (
            <Tilt3DCard
              key={metric.label}
              maxTilt={8}
              glareColor="rgba(255, 148, 77, 0.24)"
              className={`metric-glass-card accent-${metric.accent}`}
            >
              <div className="card-3d-inner">
                <div className="metric-top">
                  <span className="metric-val">{metric.value}</span>
                  <span className="metric-stars">★★★★★★</span>
                </div>
                <span className="metric-lbl">{metric.label}</span>
                <span className="metric-sub">{metric.sub}</span>
                <div className="gta-stat-bar-track" aria-hidden="true">
                  <div
                    className="gta-stat-bar-fill"
                    style={{ width: `${metric.statPct}%` }}
                  />
                </div>
              </div>
            </Tilt3DCard>
          ))}
        </div>
      </div>
    </section>
  );
}
