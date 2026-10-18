'use client';
import { useEffect, useRef } from 'react';
import { skills } from '@/data/profile';

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const el = containerRef.current;
    if (el) {
      el.querySelectorAll('.skill-bento-card').forEach((card) => {
        observer.observe(card);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section-neo skills-neo-section">
      <div className="container">
        <div className="section-head-neo">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-headline">
            Skills &amp; <span className="gradient-shimmer">Tech Stack</span>
          </h2>
          <p className="section-subheadline">
            Battle-tested technologies and AI accelerators powering robust, production-grade applications.
          </p>
        </div>

        <div className="skills-bento-grid" ref={containerRef}>
          {skills.map((category, idx) => {
            const isAi = category.category.toLowerCase().includes('ai');
            return (
              <div
                className={`skill-bento-card reveal-on-scroll${isAi ? ' card-ai-glow' : ''}`}
                key={category.category}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="skill-card-head">
                  <div className="category-icon-box">{category.icon}</div>
                  <div>
                    <h3 className="category-title-neo">{category.category}</h3>
                    <p className="category-sub">{category.summary}</p>
                  </div>
                  {isAi && <span className="ai-highlight-pill">⚡ Supercharged</span>}
                </div>

                <div className="skill-chips-cloud">
                  {category.items.map((skill) => (
                    <div className="skill-chip-item" key={skill.name}>
                      <div className="chip-content">
                        <span className="chip-name">{skill.name}</span>
                        {skill.tag && <span className="chip-tag-pill">{skill.tag}</span>}
                      </div>
                      <div className="chip-level-bar">
                        <div
                          className="chip-level-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="skill-card-footer">
                  <span className="footer-count">{category.items.length} Technologies</span>
                  <span className="footer-status-pill">Production Ready</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
