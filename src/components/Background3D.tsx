import React, { useEffect, useRef } from 'react';

interface Sphere {
  x: number;
  y: number;
  z: number; // depth: 0.3 to 1.8
  radius: number;
  baseRadius: number;
  colorType: 'forest' | 'emerald' | 'sage' | 'cream';
  vx: number;
  vy: number;
  pulsePhase: number;
}

interface Particle {
  x: number;
  y: number;
  z: number;
  size: number;
  alpha: number;
  baseAlpha: number;
  speed: number;
}

export const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with easing
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Initialize decorative 3D spheres
    const spheres: Sphere[] = [
      {
        x: width * 0.12,
        y: height * 0.25,
        z: 1.1,
        radius: 65,
        baseRadius: 65,
        colorType: 'emerald',
        vx: 0.15,
        vy: -0.12,
        pulsePhase: 0
      },
      {
        x: width * 0.88,
        y: height * 0.22,
        z: 1.4,
        radius: 90,
        baseRadius: 90,
        colorType: 'forest',
        vx: -0.1,
        vy: 0.14,
        pulsePhase: 1.5
      },
      {
        x: width * 0.82,
        y: height * 0.75,
        z: 0.9,
        radius: 50,
        baseRadius: 50,
        colorType: 'sage',
        vx: 0.18,
        vy: 0.08,
        pulsePhase: 3.0
      },
      {
        x: width * 0.15,
        y: height * 0.8,
        z: 0.7,
        radius: 40,
        baseRadius: 40,
        colorType: 'cream',
        vx: -0.12,
        vy: -0.15,
        pulsePhase: 4.2
      },
      {
        x: width * 0.5,
        y: height * 0.08,
        z: 0.5,
        radius: 30,
        baseRadius: 30,
        colorType: 'emerald',
        vx: 0.08,
        vy: 0.05,
        pulsePhase: 2.1
      }
    ];

    // Initialize subtle ambient floating particles
    const particleCount = prefersReducedMotion ? 25 : 60;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1.5 + 0.3,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.4 + 0.1,
      baseAlpha: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.3 + 0.1
    }));

    let time = 0;

    const render = () => {
      time += 0.01;
      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      const normX = (mouseX / width - 0.5) * 2; // -1 to 1
      const normY = (mouseY / height - 0.5) * 2;

      ctx.clearRect(0, 0, width, height);

      // Deep dark forest green background base
      const bgGrad = ctx.createRadialGradient(
        width * 0.5 + normX * 40,
        height * 0.4 + normY * 30,
        100,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      bgGrad.addColorStop(0, '#0c261a');
      bgGrad.addColorStop(0.45, '#07160f');
      bgGrad.addColorStop(0.8, '#040d09');
      bgGrad.addColorStop(1, '#020604');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw faint architectural ambient grid
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      const offsetX = (normX * 15) % gridSize;
      const offsetY = (normY * 15) % gridSize;

      ctx.beginPath();
      for (let x = offsetX; x < width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = offsetY; y < height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Draw subtle particles with depth
      particles.forEach((p) => {
        if (!prefersReducedMotion) {
          p.y -= p.speed * p.z;
          if (p.y < -10) {
            p.y = height + 10;
            p.x = Math.random() * width;
          }
        }

        const px = p.x - normX * 25 * p.z;
        const py = p.y - normY * 25 * p.z;

        ctx.fillStyle = `rgba(167, 243, 208, ${p.alpha * (0.8 + 0.2 * Math.sin(time + p.x))})`;
        ctx.beginPath();
        ctx.arc(px, py, p.size * p.z, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render 3D shaded spheres
      spheres.forEach((sphere) => {
        if (!prefersReducedMotion) {
          sphere.x += sphere.vx;
          sphere.y += sphere.vy;

          if (sphere.x - sphere.radius < -50 || sphere.x + sphere.radius > width + 50) sphere.vx *= -1;
          if (sphere.y - sphere.radius < -50 || sphere.y + sphere.radius > height + 50) sphere.vy *= -1;

          sphere.pulsePhase += 0.02;
          sphere.radius = sphere.baseRadius + Math.sin(sphere.pulsePhase) * 3;
        }

        // Apply 3D parallax offset based on sphere depth (z)
        const renderX = sphere.x - normX * 45 * sphere.z;
        const renderY = sphere.y - normY * 40 * sphere.z;
        const currentR = sphere.radius * sphere.z;

        // Draw soft ambient outer glow
        const glowGrad = ctx.createRadialGradient(
          renderX,
          renderY,
          currentR * 0.8,
          renderX,
          renderY,
          currentR * 2.2
        );
        glowGrad.addColorStop(0, 'rgba(34, 197, 94, 0.18)');
        glowGrad.addColorStop(0.5, 'rgba(21, 128, 61, 0.06)');
        glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glowGrad;
        ctx.beginPath();
        ctx.arc(renderX, renderY, currentR * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // 3D volumetric sphere gradient
        // Light source comes from top-left with cursor reactivity
        const lightOffsetX = -currentR * 0.35 + normX * 8;
        const lightOffsetY = -currentR * 0.35 + normY * 8;

        const sphereGrad = ctx.createRadialGradient(
          renderX + lightOffsetX,
          renderY + lightOffsetY,
          currentR * 0.05,
          renderX,
          renderY,
          currentR
        );

        if (sphere.colorType === 'emerald') {
          sphereGrad.addColorStop(0, '#bbf7d0');
          sphereGrad.addColorStop(0.2, '#4ade80');
          sphereGrad.addColorStop(0.5, '#15803d');
          sphereGrad.addColorStop(0.8, '#06351d');
          sphereGrad.addColorStop(1, '#02130a');
        } else if (sphere.colorType === 'sage') {
          sphereGrad.addColorStop(0, '#dcfce7');
          sphereGrad.addColorStop(0.25, '#86efac');
          sphereGrad.addColorStop(0.6, '#22543d');
          sphereGrad.addColorStop(0.85, '#0d281a');
          sphereGrad.addColorStop(1, '#030d08');
        } else if (sphere.colorType === 'cream') {
          sphereGrad.addColorStop(0, '#fef9c3');
          sphereGrad.addColorStop(0.25, '#fde047');
          sphereGrad.addColorStop(0.6, '#854d0e');
          sphereGrad.addColorStop(0.85, '#3c1d05');
          sphereGrad.addColorStop(1, '#110801');
        } else {
          // forest
          sphereGrad.addColorStop(0, '#86efac');
          sphereGrad.addColorStop(0.18, '#22c55e');
          sphereGrad.addColorStop(0.52, '#14532d');
          sphereGrad.addColorStop(0.82, '#052313');
          sphereGrad.addColorStop(1, '#010905');
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(renderX, renderY, currentR, 0, Math.PI * 2);
        ctx.fillStyle = sphereGrad;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
        ctx.shadowBlur = 30;
        ctx.shadowOffsetX = 8;
        ctx.shadowOffsetY = 15;
        ctx.fill();

        // High-end glass rim highlight
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Specular highlight spot
        const specGrad = ctx.createRadialGradient(
          renderX + lightOffsetX,
          renderY + lightOffsetY,
          0,
          renderX + lightOffsetX,
          renderY + lightOffsetY,
          currentR * 0.25
        );
        specGrad.addColorStop(0, 'rgba(255, 255, 255, 0.65)');
        specGrad.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)');
        specGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        ctx.fillStyle = specGrad;
        ctx.beginPath();
        ctx.arc(renderX + lightOffsetX, renderY + lightOffsetY, currentR * 0.25, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full block opacity-90" />
      {/* Subtle organic gradient vignette overlay */}
      <div 
        className="absolute inset-0 bg-radial from-transparent via-[#040907]/40 to-[#040907]/80 pointer-events-none" 
      />
    </div>
  );
};
