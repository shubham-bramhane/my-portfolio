'use client';
import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer className="footer" id="footer">
        <div className="container">
          <div className="footer-content">
            <a href="#" className="footer-logo">
              <span className="logo-bracket">&lt;</span>SB<span className="logo-bracket">/&gt;</span>
            </a>
            <p className="footer-text">Designed &amp; built with ❤️ by {profile.name}</p>
            <p className="footer-copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top${showTop ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
