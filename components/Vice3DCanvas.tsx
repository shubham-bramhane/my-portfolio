'use client';
import { useEffect, useRef } from 'react';

interface Particle3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  alpha: number;
}

const VICE_COLORS = [
  '255, 79, 163',  // Flamingo Pink
  '255, 148, 77',  // Sunset Peach
  '255, 209, 102', // Golden Sun
  '56, 242, 255',  // Biscayne Turquoise
  '56, 189, 248',  // Sky Cyan
];

export default function Vice3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let animId = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let gridOffset = 0;

    const particles: Particle3D[] = [];
    const PARTICLE_COUNT = 58;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.offsetWidth || window.innerWidth;
      height = canvas.offsetHeight || window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seedParticles = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: (Math.random() - 0.5) * 1600,
          y: (Math.random() - 0.5) * 900,
          z: Math.random() * 900 + 120,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.22 - 0.08,
          vz: -(Math.random() * 0.55 + 0.25),
          size: Math.random() * 2.6 + 1.1,
          color: VICE_COLORS[i % VICE_COLORS.length],
          alpha: Math.random() * 0.55 + 0.25,
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    resize();
    seedParticles();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const draw3DGrid = () => {
      const horizonY = height * 0.72 + mouseY * 14;
      const vanishX = width * 0.62 - mouseX * 36;
      const bottomY = height + 20;

      ctx.save();
      // 3D Perspective ocean reflection grid lines
      const numVertical = 18;
      for (let i = -numVertical; i <= numVertical; i++) {
        const spread = i * (width / 10);
        const grad = ctx.createLinearGradient(vanishX, horizonY, vanishX + spread * 2.4, bottomY);
        grad.addColorStop(0, 'rgba(255, 79, 163, 0)');
        grad.addColorStop(0.28, 'rgba(56, 242, 255, 0.14)');
        grad.addColorStop(1, 'rgba(56, 189, 248, 0.03)');
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(vanishX + spread * 0.12, horizonY);
        ctx.lineTo(vanishX + spread * 2.6, bottomY);
        ctx.stroke();
      }

      // 3D receding horizontal ocean scan-depth rows
      const rows = 10;
      for (let r = 0; r < rows; r++) {
        const progress = ((r + gridOffset) % rows) / rows;
        const depthCurve = Math.pow(progress, 2.2);
        const y = horizonY + depthCurve * (bottomY - horizonY);
        const alpha = Math.sin(progress * Math.PI) * 0.2;
        ctx.strokeStyle = r % 2 === 0 ? `rgba(56, 242, 255, ${alpha})` : `rgba(255, 79, 163, ${alpha * 0.75})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      if (!prefersReducedMotion) {
        gridOffset = (gridOffset + 0.012) % 10;
      }

      draw3DGrid();

      // 3D Projected Floating Vice Light Bokeh Particles
      const fov = 560;
      const cx = width * 0.55 - mouseX * 48;
      const cy = height * 0.48 - mouseY * 32;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;
          p.z += p.vz;
          if (p.z < 90) {
            p.z = 980;
            p.x = (Math.random() - 0.5) * 1600;
            p.y = (Math.random() - 0.5) * 900;
          }
        }

        const scale = fov / p.z;
        const sx = cx + p.x * scale;
        const sy = cy + p.y * scale;
        const r = Math.max(0.8, p.size * scale * 1.4);

        if (sx < -40 || sx > width + 40 || sy < -40 || sy > height + 40) continue;

        const depthFade = Math.min(1, Math.max(0.15, 1 - p.z / 1050));
        const finalAlpha = p.alpha * depthFade;

        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, r * 4.2);
        glow.addColorStop(0, `rgba(${p.color}, ${finalAlpha})`);
        glow.addColorStop(0.45, `rgba(${p.color}, ${finalAlpha * 0.35})`);
        glow.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(sx, sy, r * 4.2, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        animId = window.requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      if (animId) window.cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} className="vice-3d-canvas" aria-hidden="true" />;
}
