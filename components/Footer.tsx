'use client';
import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="footer-neo" id="footer">
        <div className="container">
          <div className="footer-neo-inner">
            <div className="footer-brand-side">
              <a href="#hero" className="footer-neo-logo">
                <span className="brand-symbol">&lt;</span>
                <span className="brand-name">SB</span>
                <span className="brand-symbol">/&gt;</span>
                <span className="brand-dot" />
              </a>
              <p className="footer-tagline">
                Laravel Developer &amp; Full-Stack Engineer • Over 5 years architecting enterprise healthcare &amp; CRM applications.
              </p>
            </div>

            <div className="footer-status-side">
              <div className="system-status-indicator">
                <span className="beacon-core" />
                <span>Open for High-Impact Roles</span>
              </div>
              <p className="footer-location-txt">Chandrapur, Maharashtra - 442401</p>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom-row">
            <p className="footer-copyright-txt">
              &copy; {new Date().getFullYear()} {profile.name}. Designed &amp; engineered for maximum performance.
            </p>
            <div className="footer-links-quick">
              <a href={profile.resumeUrl} download="Shubham_Bramhane_Resume.pdf" className="footer-quick-link">
                Resume PDF ↗
              </a>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="footer-quick-link">
                GitHub ↗
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-quick-link">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`neo-back-to-top${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
