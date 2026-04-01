'use client';
import { useEffect, useRef } from 'react';
import { experience } from '@/data/profile';

export default function Experience() {
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
      el.querySelectorAll('.timeline-item').forEach((item) => {
        item.classList.add('reveal');
        observer.observe(item);
      });
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">My journey</span>
          <h2 className="section-title">
            Experience &amp; <span className="gradient-text">Education</span>
          </h2>
        </div>

        <div className="timeline" ref={ref}>
          {experience.map((item) => (
            <div className="timeline-item" key={item.id}>
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className={`timeline-type ${item.type}`}>{item.type}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <span className="timeline-org">{item.organization}</span>
                <span className="timeline-period">{item.period}</span>
                <p className="timeline-description">{item.description}</p>
                <div className="timeline-highlights">
                  {item.highlights.map((h) => (
                    <span className="timeline-highlight" key={h}>{h}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
