'use client';
import { useEffect, useRef } from 'react';
import { skills } from '@/data/profile';
import Tilt3DCard from '@/components/Tilt3DCard';

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
            <span>PLAYER SPECS // VICE LOADOUT VI</span>
          </div>
          <h2 className="section-headline">
            Skills &amp; <span className="gradient-shimmer">Tech Arsenal</span>
          </h2>
          <p className="section-subheadline">
            Battle-tested technologies and AI accelerators powering robust, production-grade applications.
          </p>
        </div>

        <div className="skills-bento-grid" ref={containerRef}>
          {skills.map((category, idx) => {
            const isAi = category.category.toLowerCase().includes('ai');
            return (
              <Tilt3DCard
                key={category.category}
                maxTilt={5}
                glareColor={isAi ? 'rgba(255, 79, 163, 0.24)' : 'rgba(56, 242, 255, 0.2)'}
                className={`skill-bento-card reveal-on-scroll${isAi ? ' card-ai-glow' : ''}`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="skill-card-head">
                  <div className="category-icon-box">{category.icon}</div>
                  <div>
                    <h3 className="category-title-neo">{category.category}</h3>
                    <p className="category-sub">{category.summary}</p>
                  </div>
                  {isAi && <span className="ai-highlight-pill">★ Overdrive VI</span>}
                </div>

                {/* GTA VI 6-Segment Proficiency Bars */}
                <div className="skill-chips-cloud">
                  {category.items.map((skill) => (
                    <div className="skill-chip-item" key={skill.name}>
                      <div className="chip-content">
                        <span className="chip-name">{skill.name}</span>
                        {skill.tag && <span className="chip-tag-pill">{skill.tag}</span>}
                      </div>
                      <div
                        className="chip-level-bar gta-segmented-bar"
                        aria-label={`${skill.name} proficiency ${skill.level}%`}
                      >
                        <div
                          className={`chip-level-fill${isAi ? ' fill-gold' : ''}`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="skill-card-footer">
                  <span className="footer-count">{category.items.length} Equipped Technologies</span>
                  <span className="footer-status-pill">● Production Ready</span>
                </div>
              </Tilt3DCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
