'use client';
import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';
import { triggerGtaToast } from '@/components/GtaHud';

const navItems = [
  { label: 'Home', id: 'hero', stars: 1 },
  { label: 'About', id: 'about', stars: 2 },
  { label: 'Skills', id: 'skills', stars: 3 },
  { label: 'Projects', id: 'projects', stars: 4 },
  { label: 'Journey', id: 'experience', stars: 5 },
  { label: 'Contact', id: 'contact', stars: 6 },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 160) {
          current = el.getAttribute('id') || 'hero';
        }
      });
      setActive(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({ top: target.offsetTop - 85, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const wantedStars = navItems.find((item) => item.id === active)?.stars ?? 1;

  const handleResumeClick = () => {
    triggerGtaToast('Resume Acquired', 'GTA VI Dossier • PDF Ready', 'sunset');
  };

  return (
    <header className="navbar-wrapper">
      <nav id="navbar" className={`navbar-dock${scrolled ? ' scrolled' : ''}`}>
        {/* Clean SB VI Brand Badge */}
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('hero');
          }}
        >
          <span className="gta-brand-box">
            <span className="brand-name">SB</span>
            <span className="brand-vi">VI</span>
          </span>
          <span className="brand-subtitle">Vice 3D</span>
        </a>

        {/* Sleek Glass Navigation Links */}
        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <li className="mobile-drawer-header">
            <div className="drawer-header-top">
              <span className="drawer-kicker">LEONIDA 3D // NAVIGATION</span>
              <button
                type="button"
                className="drawer-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>
            <div className="wanted-stars-row" aria-label={`Wanted level ${wantedStars} of 6`}>
              {[1, 2, 3, 4, 5, 6].map((star) => (
                <span key={star} className={`wanted-star${star <= wantedStars ? ' lit' : ''}`}>
                  ★
                </span>
              ))}
            </div>
          </li>

          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-menu-btn${active === item.id ? ' active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                <span className="nav-item-label">{item.label}</span>
                {active === item.id && <span className="active-glow-pill" />}
              </button>
            </li>
          ))}

          <li className="mobile-resume-item">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="dock-resume-btn"
              download="Shubham_Bramhane_Resume.pdf"
              onClick={handleResumeClick}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download Resume</span>
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          {/* GTA VI 6-Star Wanted Meter */}
          <div
            className="wanted-meter desktop-wanted"
            title={`GTA VI Rating: ${wantedStars}/6 Stars`}
            aria-label={`Wanted level ${wantedStars} out of 6`}
          >
            {[1, 2, 3, 4, 5, 6].map((star) => (
              <span key={star} className={`wanted-star${star <= wantedStars ? ' lit' : ''}`}>
                ★
              </span>
            ))}
          </div>

          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dock-resume-btn desktop-only"
            download="Shubham_Bramhane_Resume.pdf"
            onClick={handleResumeClick}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume</span>
          </a>

          <button
            className={`nav-burger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            <span className="burger-line line-1" />
            <span className="burger-line line-2" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
