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
            // Animate skill bars
            const bars = entry.target.querySelectorAll<HTMLElement>('.skill-bar-fill');
            bars.forEach((bar) => {
              const width = bar.getAttribute('data-width');
              setTimeout(() => {
                bar.style.width = `${width}%`;
              }, 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = containerRef.current;
    if (el) {
      el.querySelectorAll('.skill-category').forEach((cat) => {
        cat.classList.add('reveal');
        observer.observe(cat);
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">What I do</span>
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="skills-categories reveal-stagger" ref={containerRef}>
          {skills.map((category) => (
            <div className="skill-category" key={category.category}>
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.category}</h3>
              </div>
              {category.items.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill"
                      data-width={skill.level}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
