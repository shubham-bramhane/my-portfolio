'use client';
import { useState, FormEvent } from 'react';
import { profile } from '@/data/profile';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-neo contact-neo-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head-neo">
          <div className="section-eyebrow">
            <span className="eyebrow-dot" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className="section-headline">
            Get In <span className="gradient-shimmer">Touch</span>
          </h2>
          <p className="section-subheadline">
            Available for full-time engineering roles, freelance consulting, or technical advisory.
          </p>
        </div>

        {/* Split Grid */}
        <div className="contact-neo-grid">
          {/* Left Column: Direct Connect Hub */}
          <div className="contact-hub-card">
            <div className="hub-top-info">
              <span className="hub-pill">Quick Channels</span>
              <h3 className="hub-headline">Let&apos;s build something impactful together.</h3>
              <p className="hub-text">
                Whether you have an upcoming project in healthcare, CRM portals, or need high-performance Laravel engineering, my inbox is always open.
              </p>
            </div>

            <div className="contact-action-cards">
              {/* Email with 1-click copy */}
              <div className="connect-card email-connect">
                <div className="connect-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="connect-content">
                  <span className="connect-label">Primary Email</span>
                  <a href={`mailto:${profile.email}`} className="connect-val">{profile.email}</a>
                </div>
                <button
                  type="button"
                  className="copy-chip-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? '✓ Copied' : 'Copy'}
                </button>
              </div>

              {/* Phone */}
              <div className="connect-card">
                <div className="connect-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="connect-content">
                  <span className="connect-label">Direct Phone</span>
                  <a href={`tel:${profile.phone}`} className="connect-val">{profile.phone}</a>
                </div>
              </div>

              {/* Location */}
              <div className="connect-card">
                <div className="connect-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="connect-content">
                  <span className="connect-label">Based in</span>
                  <span className="connect-val">{profile.location}</span>
                </div>
              </div>

              {/* Download Resume Card */}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="connect-card resume-action-card"
                download="Shubham_Bramhane_Resume.pdf"
              >
                <div className="connect-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                  </svg>
                </div>
                <div className="connect-content">
                  <span className="connect-label">Curriculum Vitae</span>
                  <span className="connect-val highlight-resume">Download Latest Resume (PDF) ↗</span>
                </div>
              </a>
            </div>

            {/* Social Links */}
            <div className="hub-socials-row">
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="social-neo-chip" aria-label="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-neo-chip" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href={profile.website} target="_blank" rel="noopener noreferrer" className="social-neo-chip" aria-label="Website">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                <span>Website</span>
              </a>
            </div>
          </div>

          {/* Right Column: Glass Contact Form */}
          <div className="contact-form-glass-card">
            {submitted ? (
              <div className="form-success-state">
                <div className="success-icon-ring">✓</div>
                <h3 className="success-title">Message Received!</h3>
                <p className="success-desc">
                  Thank you for reaching out. I will review your inquiry and get back to you promptly.
                </p>
                <button
                  type="button"
                  className="btn-neo btn-neo-primary"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form className="neo-form" onSubmit={handleSubmit}>
                <div className="form-head">
                  <h3 className="form-title">Send a Direct Message</h3>
                  <p className="form-sub">Typically responds within 24 hours.</p>
                </div>

                {error && <div className="form-error-banner">{error}</div>}

                <div className="form-fields-grid">
                  <div className="input-field-wrap">
                    <label htmlFor="form-name" className="field-lbl">Full Name</label>
                    <input
                      type="text"
                      id="form-name"
                      className="neo-input"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>

                  <div className="input-field-wrap">
                    <label htmlFor="form-email" className="field-lbl">Email Address</label>
                    <input
                      type="email"
                      id="form-email"
                      className="neo-input"
                      placeholder="e.g. rahul@company.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-field-wrap">
                  <label htmlFor="form-subject" className="field-lbl">Subject / Topic</label>
                  <input
                    type="text"
                    id="form-subject"
                    className="neo-input"
                    placeholder="e.g. Project Inquiry / Full-Time Role"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>

                <div className="input-field-wrap">
                  <label htmlFor="form-message" className="field-lbl">Message Details</label>
                  <textarea
                    id="form-message"
                    className="neo-input neo-textarea"
                    rows={5}
                    placeholder="Describe your requirements, project scope, or opportunity..."
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-neo btn-neo-primary btn-submit-full"
                  disabled={sending}
                >
                  {sending ? (
                    <span>Sending Transmission...</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
