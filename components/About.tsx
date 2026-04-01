'use client';
import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';

const details = [
  { icon: '📍', label: 'Location', value: profile.location },
  { icon: '🎓', label: 'Education', value: profile.education },
  { icon: '💼', label: 'Experience', value: `${profile.yearsOfExperience}+ Years` },
  { icon: '🌐', label: 'Languages', value: profile.languages },
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      el.querySelectorAll('.reveal').forEach((r) => observer.observe(r));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container" ref={ref}>
        <div className="section-header reveal">
          <span className="section-tag">Get to know me</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper reveal">
            <div className="about-image-container" id="about-image">
              <div className="about-avatar">SB</div>
              <div className="image-decoration dec-1" />
              <div className="image-decoration dec-2" />
            </div>
          </div>

          <div className="about-content reveal">
            <p className="about-text">{profile.bio}</p>
            <p className="about-text">{profile.bioExtended}</p>

            <div className="about-details">
              {details.map((d) => (
                <div className="detail-item" key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <span className="detail-label">{d.label}</span>
                    <span className="detail-value">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary"
            >
              <span>Let&apos;s Connect</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
