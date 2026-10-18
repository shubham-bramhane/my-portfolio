'use client';
import { useState, useEffect } from 'react';
import { profile } from '@/data/profile';

const navItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'experience' },
  { label: 'Contact', id: 'contact' },
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
        if (window.scrollY >= el.offsetTop - 150) {
          current = el.getAttribute('id') || 'hero';
        }
      });
      setActive(current);
    };

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

  return (
    <header className="navbar-wrapper">
      <nav id="navbar" className={`navbar-dock${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-brand" onClick={(e) => { e.preventDefault(); scrollTo('hero'); }}>
          <span className="brand-symbol">&lt;</span>
          <span className="brand-name">SB</span>
          <span className="brand-symbol">/&gt;</span>
          <span className="brand-dot" />
        </a>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-menu-btn${active === item.id ? ' active' : ''}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
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
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download CV</span>
            </a>
          </li>
        </ul>

        <div className="nav-actions">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="dock-resume-btn desktop-only"
            download="Shubham_Bramhane_Resume.pdf"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
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
