'use client';
import React, { useRef, useState, useCallback } from 'react';

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareColor?: string;
  style?: React.CSSProperties;
}

export default function Tilt3DCard({
  children,
  className = '',
  maxTilt = 8,
  glareColor = 'rgba(255, 110, 175, 0.22)',
  style,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    'perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
  );
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      const rotateY = (px - 0.5) * (maxTilt * 2);
      const rotateX = (0.5 - py) * (maxTilt * 2);

      setTransform(
        `perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.018, 1.018, 1.018)`
      );
      setGlare({ x: px * 100, y: py * 100, opacity: 1 });
    },
    [maxTilt]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform('perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      className={`tilt-3d-shell${isHovered ? ' is-tilted' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform,
      }}
    >
      <div
        className="tilt-3d-glare"
        aria-hidden="true"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 340px at ${glare.x}% ${glare.y}%, ${glareColor}, rgba(56, 189, 248, 0.1) 45%, transparent 72%)`,
        }}
      />
      {children}
    </div>
  );
}
