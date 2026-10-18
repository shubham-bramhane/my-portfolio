'use client';
import { useState } from 'react';
import { experience } from '@/data/profile';

const trackTabs = [
  { id: 'all', label: 'All Journey' },
  { id: 'work', label: 'Work Experience (5+ Yrs)' },
  { id: 'education', label: 'Academic Qualifications' },
];

export default function Experience() {
  const [activeTrack, setActiveTrack] = useState('all');

  const filteredItems = activeTrack === 'all'
    ? experience
    : experience.filter((item) => item.type === activeTrack);

  return (
    <section id="experience" className="section-neo experience-neo-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-neo">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>Career &amp; Credentials</span>
          </div>
          <h2 className="section-headline">
            Experience &amp; <span className="gradient-shimmer">Qualifications</span>
          </h2>
          <p className="section-subheadline">
            Over 5 years of full-stack engineering milestones and academic excellence in IT &amp; Finance.
          </p>
        </div>

        {/* Track Switcher */}
        <div className="neo-filter-bar">
          <div className="filter-pills-wrap">
            {trackTabs.map((tab) => (
              <button
                key={tab.id}
                className={`neo-filter-btn${activeTrack === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTrack(tab.id)}
              >
                {tab.label}
                {activeTrack === tab.id && <span className="active-pill-dot" />}
              </button>
            ))}
          </div>
        </div>

        {/* Neo Timeline Container */}
        <div className="neo-timeline-stream">
          {filteredItems.map((item, index) => {
            const isWork = item.type === 'work';
            return (
              <div className="timeline-neo-row" key={item.id}>
                {/* Node marker */}
                <div className="timeline-node-column">
                  <div className={`timeline-node-pin ${isWork ? 'pin-work' : 'pin-edu'}`}>
                    <span className="pin-icon">{isWork ? '💼' : '🎓'}</span>
                  </div>
                  {index < filteredItems.length - 1 && <div className="timeline-connector-line" />}
                </div>

                {/* Content Card */}
                <div className="timeline-card-wrap">
                  <div className={`timeline-neo-card ${isWork ? 'card-border-work' : 'card-border-edu'}`}>
                    <div className="timeline-card-header">
                      <div className="timeline-heading-left">
                        <div className="type-badge-row">
                          <span className={`timeline-type-pill ${isWork ? 'pill-work' : 'pill-edu'}`}>
                            {isWork ? 'Professional Experience' : 'Academic Qualification'}
                          </span>
                          {item.badge && <span className="timeline-status-pill">{item.badge}</span>}
                        </div>
                        <h3 className="timeline-role-title">{item.title}</h3>
                        <p className="timeline-org-name">{item.organization}</p>
                      </div>

                      <div className="timeline-period-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p className="timeline-desc-text">{item.description}</p>

                    <div className="timeline-highlights-grid">
                      {item.highlights.map((h) => (
                        <div className="highlight-neo-pill" key={h}>
                          <span className="pill-check">{isWork ? '⚡' : '✓'}</span>
                          <span className="pill-text">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
