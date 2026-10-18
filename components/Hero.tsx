'use client';
import { useState } from 'react';
import Image from 'next/image';
import { profile, terminalTabs } from '@/data/profile';

const techBadges = [
  'PHP / Laravel 11',
  'Redis (+30% Velocity)',
  'React.js & Next.js',
  'PostgreSQL / MySQL',
  'Google Antigravity & Copilot',
  'MBA in Finance & IT',
];

export default function Hero() {
  const [activeTabId, setActiveTabId] = useState('architecture');
  const [copied, setCopied] = useState(false);

  const activeTab = terminalTabs.find((t) => t.id === activeTabId) || terminalTabs[0];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(activeTab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-neo-section">
      {/* Background ambient lighting */}
      <div className="ambient-mesh">
        <div className="mesh-glow glow-amber" />
        <div className="mesh-glow glow-indigo" />
        <div className="mesh-glow glow-violet" />
        <div className="cyber-grid" />
      </div>

      <div className="container hero-container">
        <div className="hero-split-grid">
          {/* Left Column: Headline & Value Prop */}
          <div className="hero-left">
            <div className="hero-badges-row">
              <div className="status-beacon-badge">
                <span className="beacon-ping" />
                <span className="beacon-core" />
                <span className="beacon-text">{profile.status}</span>
              </div>

              <div className="ai-velocity-beacon">
                <span className="ai-beacon-spark">⚡</span>
                <span>3.5x AI Velocity</span>
              </div>

              <div className="hero-avatar-pill-mobile">
                <div className="mini-avatar-wrap">
                  <Image src="/shubham.jpeg" alt="Shubham" width={26} height={26} style={{ borderRadius: '50%', objectFit: 'cover' }} priority />
                </div>
                <span>Shubham B.</span>
              </div>
            </div>

            <h1 className="hero-main-title">
              Architecting <span className="gradient-shimmer">High-Throughput</span> Systems with AI-Augmented Velocity.
            </h1>

            <p className="hero-role-callout">
              <span className="role-highlight">{profile.title}</span>
              <span className="role-sep">•</span>
              <span>5+ Years Experience</span>
              <span className="role-sep">•</span>
              <span>MBA in Finance &amp; IT</span>
            </p>

            <p className="hero-subtext">
              {profile.bio}
            </p>

            {/* Quick Tech Highlights */}
            <div className="hero-stack-chips">
              {techBadges.map((badge) => (
                <span className="stack-chip" key={badge}>
                  <span className="chip-spark">✦</span> {badge}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions-group">
              <a
                href="#projects"
                className="btn-neo btn-neo-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Explore Architectural Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neo btn-neo-resume"
                download="Shubham_Bramhane_Resume.pdf"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="btn-neo btn-neo-ghost"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Initiate Contact</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer & AI Terminal */}
          <div className="hero-right">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>

                <div className="terminal-tabs-selector">
                  {terminalTabs.map((tab) => (
                    <button
                      key={tab.id}
                      className={`terminal-tab-btn${activeTabId === tab.id ? ' active' : ''}`}
                      onClick={() => setActiveTabId(tab.id)}
                    >
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                <button
                  className="terminal-copy-btn"
                  onClick={handleCopyCode}
                  aria-label="Copy terminal snippet"
                  title="Copy code"
                >
                  {copied ? (
                    <span className="copy-copied">✓ Copied</span>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="terminal-body">
                <pre className="terminal-code">
                  <code>{activeTab.code}</code>
                </pre>
              </div>

              <div className="terminal-footer">
                <div className="footer-status">
                  <span className="status-live-dot" />
                  <span>Production Ready • AI-Assisted Architecture</span>
                </div>
                <div className="footer-metric">
                  <span className="metric-pill">+30% Query Throughput</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Ribbon */}
        <div className="hero-metrics-ribbon">
          {profile.metrics.map((metric) => (
            <div className="metric-glass-card" key={metric.label}>
              <div className="metric-top">
                <span className="metric-val">{metric.value}</span>
                <span className="metric-glow" />
              </div>
              <span className="metric-lbl">{metric.label}</span>
              <span className="metric-sub">{metric.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
