'use client';
import { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/data/profile';

const filterList = [
  { id: 'all', label: 'All Projects' },
  { id: 'healthcare', label: 'Healthcare Systems' },
  { id: 'enterprise', label: 'Enterprise & CRM' },
  { id: 'fullstack', label: 'Full-Stack Apps' },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filtered, setFiltered] = useState(projects);

  const handleFilter = (filterId: string) => {
    if (filterId === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filterId);
      setFiltered(filterId === 'all' ? projects : projects.filter((p) => p.category === filterId));
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section id="projects" className="section-neo projects-neo-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-neo">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="section-headline">
            Featured <span className="gradient-shimmer">Projects</span>
          </h2>
          <p className="section-subheadline">
            Selected enterprise applications, healthcare systems, and high-concurrency portals delivered with Laravel &amp; React.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="neo-filter-bar">
          <div className="filter-pills-wrap">
            {filterList.map((f) => (
              <button
                key={f.id}
                className={`neo-filter-btn${activeFilter === f.id ? ' active' : ''}`}
                onClick={() => handleFilter(f.id)}
              >
                {f.label}
                {activeFilter === f.id && <span className="active-pill-dot" />}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          className="projects-neo-grid"
          style={{
            opacity: isTransitioning ? 0 : 1,
            transform: isTransitioning ? 'translateY(16px)' : 'translateY(0)',
          }}
        >
          {filtered.map((project) => (
            <div className="project-neo-card" key={project.id}>
              {/* Card Media Preview */}
              <div className="project-media-wrap">
                {project.image ? (
                  <div className="project-img-box" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : (
                  <div className="project-canvas-fallback" style={{ background: `linear-gradient(135deg, ${project.color}15, rgba(10, 11, 20, 0.95))` }}>
                    <div className="fallback-inner">
                      <span className="fallback-ico">💻</span>
                      <span className="fallback-code-tag">{project.tags[0]}</span>
                    </div>
                  </div>
                )}

                {/* Floating Metric Badge */}
                {project.impact && (
                  <div className="project-floating-badge">
                    <span className="badge-spark">✦</span>
                    <span>{project.impact}</span>
                  </div>
                )}

                <div className="project-period-tag">{project.period}</div>
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="card-top-meta">
                  <span className="project-category-pill">{project.category}</span>
                  {project.subtitle && <span className="project-subtitle-text">{project.subtitle}</span>}
                </div>

                <h3 className="project-neo-title">{project.title}</h3>
                <p className="project-neo-desc">{project.description}</p>

                {/* Tags */}
                <div className="project-tags-cloud">
                  {project.tags.map((tag) => (
                    <span className="neo-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="project-actions-row">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link github-action"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>

                  {project.live && project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link live-action"
                      aria-label={`Visit live demo for ${project.title}`}
                    >
                      <span>Live Site</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
