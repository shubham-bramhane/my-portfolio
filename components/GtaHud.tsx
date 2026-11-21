'use client';
import { useEffect, useState, useCallback } from 'react';

export interface GtaToastPayload {
  title: string;
  subtitle?: string;
  variant?: 'sunset' | 'pink' | 'aqua';
}

export function triggerGtaToast(
  title: string,
  subtitle = 'VICE REP + // LEONIDA NETWORK',
  variant: 'sunset' | 'pink' | 'aqua' = 'sunset'
) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<GtaToastPayload>('gta-toast', {
      detail: { title, subtitle, variant },
    })
  );
}

const sectorMap: Record<string, { zone: string; code: string; x: number; y: number }> = {
  hero: { zone: 'VICE BEACH // HUB', code: 'VI-01', x: 24, y: 26 },
  about: { zone: 'CHARACTER // BIO', code: 'VI-02', x: 52, y: 34 },
  skills: { zone: 'LOADOUT // SPECS', code: 'VI-03', x: 78, y: 44 },
  projects: { zone: 'LEONIDA MISSIONS', code: 'VI-04', x: 46, y: 64 },
  experience: { zone: 'STORY // CHAPTERS', code: 'VI-05', x: 74, y: 74 },
  contact: { zone: 'VICE COMMS // VI', code: 'VI-06', x: 28, y: 80 },
};

const sectorOrder = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function GtaHud() {
  const [activeSector, setActiveSector] = useState('hero');
  const [hudMinimized, setHudMinimized] = useState(true);
  const [toast, setToast] = useState<(GtaToastPayload & { id: number }) | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';
      sections.forEach((section) => {
        const el = section as HTMLElement;
        if (window.scrollY >= el.offsetTop - 220) {
          current = el.getAttribute('id') || 'hero';
        }
      });
      setActiveSector(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    const onToast = (e: Event) => {
      const customEvent = e as CustomEvent<GtaToastPayload>;
      if (!customEvent.detail) return;
      setToast({ ...customEvent.detail, id: Date.now() });
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => setToast(null), 2800);
    };

    window.addEventListener('gta-toast', onToast);
    return () => {
      window.removeEventListener('gta-toast', onToast);
      if (timer) clearTimeout(timer);
    };
  }, []);

  const jumpToSector = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 85, behavior: 'smooth' });
    }
  }, []);

  const currentInfo = sectorMap[activeSector] || sectorMap.hero;

  return (
    <>
      {/* GTA VI Mission Passed / Leonida Notification Toast */}
      {toast && (
        <div
          key={toast.id}
          className={`gta-toast-banner variant-${toast.variant || 'sunset'}`}
          role="status"
          aria-live="polite"
        >
          <div className="gta-toast-stripe" />
          <div className="gta-toast-inner">
            <span className="gta-toast-title">{toast.title}</span>
            {toast.subtitle && <span className="gta-toast-sub">{toast.subtitle}</span>}
          </div>
          <div className="gta-toast-stripe" />
        </div>
      )}

      {/* GTA VI Leonida Bay Mini-Map Radar HUD (Desktop Only) */}
      <aside
        className={`gta-minimap-hud${hudMinimized ? ' minimized' : ''}`}
        aria-label="GTA VI Leonida Navigation Radar"
      >
        <div className="minimap-header-bar">
          <span className="minimap-zone-code">
            <span className="minimap-live-dot" />
            {currentInfo.code}
          </span>
          <span className="minimap-zone-name">{currentInfo.zone}</span>
          <button
            type="button"
            className="minimap-toggle-btn"
            onClick={() => setHudMinimized(!hudMinimized)}
            title={hudMinimized ? 'Expand Leonida Radar' : 'Minimize Leonida Radar'}
            aria-label={hudMinimized ? 'Expand Leonida Radar' : 'Minimize Leonida Radar'}
          >
            {hudMinimized ? '+' : '−'}
          </button>
        </div>

        {!hudMinimized && (
          <>
            <div className="minimap-radar-canvas">
              {/* Leonida Coastline, Biscayne Bay Water & Causeway GPS */}
              <svg
                className="minimap-svg"
                viewBox="0 0 180 104"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Biscayne Bay Turquoise Water */}
                <path d="M128 0 L180 0 L180 104 L112 104 C124 72 132 40 128 0 Z" fill="rgba(46, 230, 214, 0.14)" />
                {/* Vice Island */}
                <rect x="144" y="16" width="26" height="68" rx="6" fill="rgba(255, 93, 177, 0.12)" stroke="rgba(255, 148, 77, 0.25)" strokeWidth="1" />

                {/* Leonida City Blocks */}
                <rect x="8" y="8" width="36" height="24" rx="3" fill="rgba(255,255,255,0.05)" />
                <rect x="52" y="8" width="54" height="24" rx="3" fill="rgba(255,255,255,0.06)" />
                <rect x="8" y="40" width="46" height="26" rx="3" fill="rgba(255,255,255,0.05)" />
                <rect x="62" y="40" width="52" height="26" rx="3" fill="rgba(255,255,255,0.06)" />
                <rect x="8" y="74" width="58" height="22" rx="3" fill="rgba(255,255,255,0.045)" />
                <rect x="74" y="74" width="36" height="22" rx="3" fill="rgba(255,255,255,0.055)" />

                {/* Causeways & Highways */}
                <path d="M0 36 H180 M0 70 H180 M48 0 V104 M114 0 V104" stroke="rgba(255, 209, 102, 0.18)" strokeWidth="2.2" />

                {/* GTA VI Neon Flamingo-Sunset GPS Waypoint Path */}
                <path
                  d="M44 26 L94 34 L140 44 L82 64 L132 74 L50 80"
                  stroke="url(#gpsVi)"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="4 3"
                />
                <defs>
                  <linearGradient id="gpsVi" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff5db1" />
                    <stop offset="50%" stopColor="#ff944d" />
                    <stop offset="100%" stopColor="#2ee6d6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Clickable Leonida Sector Blips */}
              {sectorOrder.map((id, idx) => {
                const s = sectorMap[id];
                const isActive = activeSector === id;
                return (
                  <button
                    key={id}
                    type="button"
                    className={`radar-blip${isActive ? ' active' : ''}`}
                    style={{ left: `${s.x}%`, top: `${s.y}%` }}
                    onClick={() => jumpToSector(id)}
                    title={`Fast Travel to ${s.zone}`}
                    aria-label={`Fast Travel to ${s.zone}`}
                  >
                    <span className="blip-dot">{isActive ? '▲' : idx + 1}</span>
                  </button>
                );
              })}

              <div className="minimap-north-tag">VI • N</div>
            </div>

            {/* GTA VI Modern Health / Armor / Special Overdrive Bars */}
            <div className="minimap-vital-bars" title="Health: Code Quality • Armor: Security • Special: AI 3.5x Velocity">
              <div className="vital-bar vital-health">
                <div className="vital-fill" style={{ width: '100%' }} />
              </div>
              <div className="vital-bar vital-armor">
                <div className="vital-fill" style={{ width: '96%' }} />
              </div>
              <div className="vital-bar vital-special">
                <div className="vital-fill" style={{ width: '98%' }} />
              </div>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
