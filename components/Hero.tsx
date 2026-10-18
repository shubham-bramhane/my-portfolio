'use client';
import { useState } from 'react';
import { profile, terminalSnippet } from '@/data/profile';

const techBadges = [
  'PHP / Laravel 11',
  'React.js & Vue.js',
  'Redis (+30% Speed)',
  'MySQL / PostgreSQL',
  'AI Copilot & Antigravity',
];

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(terminalSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="hero-neo-section">
      {/* Background ambient lighting */}
      <div className="ambient-mesh">
        <div className="mesh-glow glow-emerald" />
        <div className="mesh-glow glow-cyan" />
        <div className="mesh-glow glow-violet" />
        <div className="cyber-grid" />
      </div>

      <div className="container hero-container">
        <div className="hero-split-grid">
          {/* Left Column: Headline & Value Prop */}
          <div className="hero-left">
            <div className="status-beacon-badge">
              <span className="beacon-ping" />
              <span className="beacon-core" />
              <span className="beacon-text">{profile.status}</span>
            </div>

            <h1 className="hero-main-title">
              Crafting <span className="gradient-shimmer">High-Throughput</span> Web Architectures &amp; Enterprise Systems.
            </h1>

            <p className="hero-role-callout">
              <span className="role-highlight">{profile.title}</span>
              <span className="role-sep">•</span>
              <span>5+ Years Experience</span>
              <span className="role-sep">•</span>
              <span>Healthcare &amp; CRM Specialist</span>
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
                <span>Explore Featured Work</span>
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
                <span>Get In Touch</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Terminal */}
          <div className="hero-right">
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="terminal-tab">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span>shubham-bramhane.ts</span>
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
                  <code>
                    <span className="c-comment">// shubham-bramhane.ts</span>{'\n'}
                    <span className="c-keyword">import</span> {'{'} <span className="c-type">FullStackEngineer</span> {'}'} <span className="c-keyword">from</span> <span className="c-string">&apos;@enterprise/core&apos;</span>;{'\n\n'}
                    <span className="c-keyword">export const</span> <span className="c-var">engineer</span> = {'{'}{'\n'}
                    {'  '}name: <span className="c-string">&apos;Shubham Bramhane&apos;</span>,{'\n'}
                    {'  '}role: <span className="c-string">&apos;Laravel Developer &amp; Full-Stack Engineer&apos;</span>,{'\n'}
                    {'  '}experience: <span className="c-number">&apos;5+ Years&apos;</span>,{'\n'}
                    {'  '}location: <span className="c-string">&apos;Chandrapur, Maharashtra - 442401&apos;</span>,{'\n'}
                    {'  '}stack: [{'\n'}
                    {'    '}<span className="c-string">&apos;PHP / Laravel 11&apos;</span>, <span className="c-string">&apos;React.js&apos;</span>, <span className="c-string">&apos;Vue.js&apos;</span>,{'\n'}
                    {'    '}<span className="c-string">&apos;Redis Caching&apos;</span>, <span className="c-string">&apos;MySQL&apos;</span>, <span className="c-string">&apos;PostgreSQL&apos;</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}provenImpact: {'{'}{'\n'}
                    {'    '}queryOptimization: <span className="c-string">&apos;+30% Speed Boost with Redis&apos;</span>,{'\n'}
                    {'    '}healthcareSystems: <span className="c-string">&apos;Oncquest &amp; Lal Path Labs&apos;</span>,{'\n'}
                    {'    '}aiAccelerators: <span className="c-string">&apos;Copilot, Antigravity, GPT-4&apos;</span>{'\n'}
                    {'  '}{'}'},{'\n'}
                    {'  '}education: <span className="c-string">&apos;MBA (Finance &amp; IT) &amp; B.E. (CSE)&apos;</span>,{'\n'}
                    {'  '}status: <span className="c-accent">&apos;Ready for High-Impact Challenges&apos;</span>{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>

              <div className="terminal-footer">
                <div className="footer-status">
                  <span className="status-live-dot" />
                  <span>Production Ready • TypeScript 5.0</span>
                </div>
                <div className="footer-metric">
                  <span className="metric-pill">+30% Query Velocity</span>
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
