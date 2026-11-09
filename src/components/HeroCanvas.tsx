import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SLIDE_CONFIGS } from '../data/projects';
import { motion, AnimatePresence } from 'motion/react';

interface HeroCanvasProps {
  onExploreClick: () => void;
  onRequestClick: () => void;
}

export const HeroCanvas: React.FC<HeroCanvasProps> = ({ onExploreClick, onRequestClick }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textKey, setTextKey] = useState(0);

  const currentConfig = SLIDE_CONFIGS[currentIndex];

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setTextKey((prev) => prev + 1);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDE_CONFIGS.length);
    setTextKey((prev) => prev + 1);
  }, []);

  // Timer for smooth cycling through artistic themes
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Canvas drawing & animation loop: Smooth, artistry, minimal light visuals
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    interface ArtParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }

    let particles: ArtParticle[] = [];

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.min(35, Math.floor(window.innerWidth / 35));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.28,
          size: Math.random() * 2 + 0.8,
          opacity: Math.random() * 0.2 + 0.08
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    const render = () => {
      time += 0.007;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cfg = SLIDE_CONFIGS[currentIndex];

      // Smooth soft background
      ctx.fillStyle = cfg.bgColor;
      ctx.fillRect(0, 0, width, height);

      // Delicate pigment dust particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(38, 38, 38, ${p.opacity * 0.35})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.save();

      // 1. ARCHIVAL EDITORIAL GRID (Subtle fine-art publication folio lines)
      if (cfg.graphicType === 'archivalGrid') {
        ctx.strokeStyle = "rgba(28, 25, 23, 0.06)";
        ctx.lineWidth = 1;
        const marginX = Math.max(36, width * 0.06);
        const marginY = Math.max(36, height * 0.08);

        ctx.strokeRect(marginX, marginY, width - marginX * 2, height - marginY * 2);

        ctx.beginPath();
        ctx.moveTo(width * 0.25, marginY);
        ctx.lineTo(width * 0.25, height - marginY);
        ctx.moveTo(width * 0.5, marginY);
        ctx.lineTo(width * 0.5, height - marginY);
        ctx.moveTo(width * 0.75, marginY);
        ctx.lineTo(width * 0.75, height - marginY);
        ctx.stroke();

        const cross = 8;
        const points = [
          [marginX, marginY],
          [width - marginX, marginY],
          [marginX, height - marginY],
          [width - marginX, height - marginY],
        ];
        ctx.strokeStyle = "rgba(194, 65, 12, 0.16)";
        for (const [cx, cy] of points) {
          ctx.beginPath();
          ctx.moveTo(cx - cross, cy);
          ctx.lineTo(cx + cross, cy);
          ctx.moveTo(cx, cy - cross);
          ctx.lineTo(cx, cy + cross);
          ctx.stroke();
        }
      }
      // 2. ORGANIC WATERCOLOR WASH (Gentle expanding pigment rings)
      else if (cfg.graphicType === 'organicWash') {
        const cx = width * 0.5;
        const cy = height * 0.5;

        for (let i = 1; i <= 3; i++) {
          const r = (160 * i) + Math.sin(time * 0.7 + i) * 18;
          const gradient = ctx.createRadialGradient(cx, cy, r * 0.7, cx, cy, r);
          gradient.addColorStop(0, "rgba(46, 94, 78, 0.02)");
          gradient.addColorStop(0.8, "rgba(46, 94, 78, 0.05)");
          gradient.addColorStop(1, "rgba(46, 94, 78, 0)");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = "rgba(46, 94, 78, 0.07)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
      // 3. HARMONIC WAVE (Flowing minimalist silk curves)
      else if (cfg.graphicType === 'harmonicWave') {
        ctx.strokeStyle = "rgba(154, 52, 18, 0.07)";
        ctx.lineWidth = 1.2;

        const waveCount = 5;
        for (let w = 0; w < waveCount; w++) {
          ctx.beginPath();
          const baseOffset = height * 0.45 + (w * 35);
          for (let x = 0; x <= width; x += 15) {
            const y = baseOffset + Math.sin(x * 0.003 + time + w * 0.4) * 40 + Math.cos(x * 0.0015 - time * 0.5) * 20;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }
      // 4. EDITORIAL PROPORTION (Monograph golden proportions & light geometry)
      else if (cfg.graphicType === 'editorialProportion') {
        ctx.strokeStyle = "rgba(133, 77, 14, 0.07)";
        ctx.lineWidth = 1;

        const step = Math.max(50, height * 0.09);
        for (let y = step; y < height; y += step) {
          ctx.beginPath();
          ctx.moveTo(width * 0.1, y);
          ctx.lineTo(width * 0.9, y);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(width * 0.8, height * 0.35, 180 + Math.cos(time) * 15, 0, Math.PI * 2);
        ctx.stroke();
      }
      // 5. PIGMENT FLOW (Soft floating organic watercolor washes)
      else if (cfg.graphicType === 'pigmentFlow') {
        const cx1 = width * 0.35 + Math.sin(time * 0.6) * 50;
        const cy1 = height * 0.45 + Math.cos(time * 0.5) * 35;
        const cx2 = width * 0.68 + Math.cos(time * 0.7) * 45;
        const cy2 = height * 0.55 + Math.sin(time * 0.6) * 35;

        const grad1 = ctx.createRadialGradient(cx1, cy1, 40, cx1, cy1, 300);
        grad1.addColorStop(0, "rgba(51, 65, 85, 0.06)");
        grad1.addColorStop(1, "rgba(51, 65, 85, 0)");
        ctx.fillStyle = grad1;
        ctx.beginPath();
        ctx.arc(cx1, cy1, 300, 0, Math.PI * 2);
        ctx.fill();

        const grad2 = ctx.createRadialGradient(cx2, cy2, 30, cx2, cy2, 260);
        grad2.addColorStop(0, "rgba(71, 85, 105, 0.05)");
        grad2.addColorStop(1, "rgba(71, 85, 105, 0)");
        ctx.fillStyle = grad2;
        ctx.beginPath();
        ctx.arc(cx2, cy2, 260, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentIndex]);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col justify-between selection:bg-[#F5D0B5] selection:text-stone-900">
      {/* Background Canvas: Smooth light tone canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block z-0 transition-all duration-1000"
      />

      {/* Gentle vignette / paper edge softness */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-white/75 pointer-events-none z-10" />

      {/* Top spacing placeholder for fixed header */}
      <div className="h-28 pointer-events-none" />

      {/* Center Main Stage */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center my-auto pointer-events-auto">
        {/* Signature Lowercase Ultra-Thin Main Title with subtle spring reveal */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-thin tracking-tighter lowercase select-none leading-none transition-colors duration-700"
          style={{ color: currentConfig.textColor }}
        >
          nurarihayon
        </motion.h1>

        {/* Dynamic Subtitle with smooth transition */}
        <div className="h-8 flex items-center justify-center mt-3 mb-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${textKey}`}
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm lg:text-base font-extralight tracking-[0.22em] max-w-3xl leading-relaxed lowercase text-stone-800"
              style={{ color: currentConfig.textColor }}
            >
              {currentConfig.subtitle}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Action button row with elegant hover transitions */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onExploreClick}
            className="px-6 py-2.5 text-xs font-light uppercase tracking-widest text-stone-900 bg-white/80 hover:bg-stone-900 hover:text-stone-50 border border-stone-300 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
          >
            Explore Posters & Works
          </button>
          <button
            onClick={onRequestClick}
            className="px-6 py-2.5 text-xs font-light uppercase tracking-widest text-stone-50 bg-stone-900 hover:bg-stone-800 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Request for collaboration
          </button>
        </motion.div>

        {/* DESCRIPTION PUT DIRECTLY IN THE MIDDLE UNDER BUTTONS */}
        <div className="min-h-[72px] sm:min-h-[60px] flex items-center justify-center mt-6 max-w-2xl px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${textKey}`}
              initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-sm font-light text-stone-600 leading-relaxed text-center lowercase"
            >
              {currentConfig.desc}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Information & Minimal Indicator Dots (No pause or arrow buttons) */}
      <div className="relative z-20 max-w-7xl w-full mx-auto px-6 sm:px-8 pb-8 pt-4 flex items-center justify-between pointer-events-auto">
        {/* Bottom Left: Clean studio status */}
        <div className="flex items-center gap-2 text-[11px] text-stone-500 font-light tracking-wider">
          <span>independent advocacy creative studio</span>
          <span aria-hidden="true" className="text-stone-300">·</span>
          <span>editorial & visual journalism</span>
        </div>

        {/* Bottom Right: ONLY Minimal Indicator Bars (Pause & Arrow buttons removed) */}
        <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-md px-3 py-2 border border-stone-200/80 shadow-xs">
          {SLIDE_CONFIGS.map((cfg, idx) => (
            <button
              key={idx}
              aria-label={`Jump to theme ${idx + 1}`}
              onClick={() => goToSlide(idx)}
              className={`h-1.5 transition-all duration-300 rounded-xs cursor-pointer ${
                idx === currentIndex
                  ? 'w-7 bg-stone-900'
                  : 'w-2 bg-stone-300 hover:bg-stone-500'
              }`}
              style={{
                backgroundColor: idx === currentIndex ? currentConfig.accentColor : undefined
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
