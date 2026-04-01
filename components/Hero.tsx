'use client';
import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';

export default function Hero() {
  const countRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const stats = [
    { count: profile.yearsOfExperience, label: 'Years Exp.' },
    { count: profile.projectsCompleted, label: 'Projects' },
    { count: profile.happyClients, label: 'Happy Clients' },
  ];

  useEffect(() => {
    const animateCount = (el: HTMLSpanElement, target: number) => {
      const duration = 2000;
      const start = performance.now();
      const update = (currentTime: number) => {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(eased * target).toString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toString();
      };
      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countRefs.current.forEach((el, i) => {
              if (el) animateCount(el, stats[i].count);
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsEl = document.getElementById('hero-stats');
    if (statsEl) observer.observe(statsEl);

    // Cursor glow
    const glow = document.getElementById('cursor-glow');
    if (glow && window.matchMedia('(pointer: fine)').matches) {
      const move = (e: MouseEvent) => {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
        glow.classList.add('active');
      };
      const leave = () => glow.classList.remove('active');
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseleave', leave);
      return () => {
        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseleave', leave);
        observer.disconnect();
      };
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-effects">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
        <div className="grid-overlay" />
      </div>

      <div className="hero-content">
        {profile.available && (
          <div className="hero-badge" id="hero-badge">
            <span className="badge-dot" />
            <span>Available for work</span>
          </div>
        )}

        <h1 className="hero-title" id="hero-title">
          <span className="hero-greeting">Hello, I&apos;m</span>
          <span className="hero-name">{profile.name}</span>
          <span className="hero-tagline">{profile.title}</span>
        </h1>

        <p className="hero-description">
          {profile.bio.substring(0, 160)}...
        </p>

        <div className="hero-cta">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span>View My Work</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#contact"
            className="btn btn-secondary"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <span>Get In Touch</span>
          </a>
        </div>

        <div className="hero-stats" id="hero-stats">
          {stats.map((stat, i) => (
            <div className="stat-item" key={stat.label}>
              <span
                className="stat-number"
                ref={(el) => { countRefs.current[i] = el; }}
              >
                0
              </span>
              <span className="stat-suffix">+</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-indicator" id="scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow" />
      </div>

      <div className="cursor-glow" id="cursor-glow" />
    </section>
  );
}
