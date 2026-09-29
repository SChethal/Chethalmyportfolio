import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Database, 
  Terminal, 
  Layers, 
  Cpu, 
  Compass, 
  Code2, 
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, HERO_FLOATING_TECHS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2; // -1 to 1
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center overflow-hidden"
    >
      {/* 3D Atmosphere Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"
        style={{
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), ${mousePos.y * 20}px)`
        }}
      />
      <div 
        className="absolute top-1/3 -right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Small Label with Unboxed Metadata */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>{PERSONAL_INFO.statusBadge}</span>
              <span className="text-emerald-700" aria-hidden="true">·</span>
              <span className="text-stone-400 font-normal capitalize">Class of {PERSONAL_INFO.expectedGraduation}</span>
            </div>

            {/* Main Headline with Optical Compensation */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#F3F4F1] leading-[1.08] text-balance">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-emerald-400 bg-clip-text text-transparent">
                  S Chethal.
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-emerald-100/90 leading-relaxed text-balance">
                {PERSONAL_INFO.supportingHeadline}
              </p>
            </div>

            {/* Objective Description */}
            <p className="text-base text-stone-300 max-w-xl leading-relaxed">
              {PERSONAL_INFO.objective}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Primary button: View My Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 shadow-[0_0_30px_rgba(52,211,153,0.35)] hover:shadow-[0_0_40px_rgba(52,211,153,0.5)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary button: Download Resume */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-stone-200 bg-[#0e271c]/70 hover:bg-[#153a2a] border border-emerald-500/25 hover:border-emerald-400/50 shadow-lg shadow-black/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Download Resume</span>
              </button>

              {/* Additional button: Let's Connect */}
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium text-stone-300 hover:text-white hover:bg-emerald-950/40 transition-colors"
              >
                <span>Let's Connect</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </button>
            </div>

            {/* Quick Micro-Proof Line */}
            <div className="flex items-center gap-5 pt-3 text-xs text-stone-400 border-t border-emerald-900/40">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>CGPA 7.6 · Alva's AIET</span>
              </div>
              <span className="text-emerald-900" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Java & Python Systems</span>
              </div>
              <span className="text-emerald-900" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Bangalore, K.G.F</span>
              </div>
            </div>
          </div>

          {/* Right Column: Central 3D Glass Panel & Orbiting Tech Ecosystem */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* 3D Perspective Container */}
            <div 
              className="relative w-full max-w-lg aspect-square flex items-center justify-center perspective-1200"
              style={{
                perspective: '1200px'
              }}
            >
              {/* Central 3D Glass Hero Panel */}
              <div
                className="relative z-20 w-80 sm:w-96 p-7 sm:p-8 rounded-3xl glass-panel-elevated preserve-3d transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg) translateZ(30px)`,
                }}
              >
                {/* Subtle top indicator bar */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-emerald-500/15">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_#10b981]" />
                    <span className="w-3 h-3 rounded-full bg-teal-500/50" />
                    <span className="w-3 h-3 rounded-full bg-stone-700/60" />
                  </div>
                  <div className="text-[11px] font-mono tracking-wider text-emerald-300/80 flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5" />
                    <span>FULL STACK CORE</span>
                  </div>
                </div>

                {/* Identity Lockup */}
                <div className="space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-800/40 border border-emerald-400/30 flex items-center justify-center shadow-lg shadow-emerald-950/60">
                    <Cpu className="w-7 h-7 text-emerald-300" />
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-[#F3F4F1] tracking-tight">
                      {PERSONAL_INFO.name}
                    </h2>
                    <p className="text-xs font-semibold text-emerald-400 tracking-wide">
                      {PERSONAL_INFO.role}
                    </p>
                  </div>

                  <p className="text-sm text-stone-300/95 italic pt-1 border-t border-emerald-500/10">
                    "{PERSONAL_INFO.tagline}"
                  </p>
                </div>

                {/* Integrated mini architectural stat indicators */}
                <div className="grid grid-cols-3 gap-2 mt-6 pt-5 border-t border-emerald-500/15 text-center">
                  <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/10">
                    <span className="block text-xs font-mono text-emerald-300 font-bold">B.E.</span>
                    <span className="text-[10px] text-stone-400">CSE 2028</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/10">
                    <span className="block text-xs font-mono text-emerald-300 font-bold">7.6</span>
                    <span className="text-[10px] text-stone-400">CGPA</span>
                  </div>
                  <div className="p-2 rounded-xl bg-emerald-950/40 border border-emerald-500/10">
                    <span className="block text-xs font-mono text-emerald-300 font-bold">2+</span>
                    <span className="text-[10px] text-stone-400">Major Proj</span>
                  </div>
                </div>

                {/* Ambient glow edge */}
                <div className="absolute -inset-px rounded-3xl border border-emerald-400/20 pointer-events-none" />
              </div>

              {/* Floating Orbiting Tech Cards */}
              {HERO_FLOATING_TECHS.map((tech, index) => {
                // Pre-calculated orbital layout coordinates around central card
                const angles = [0, 52, 105, 155, 205, 260, 315];
                const angle = (angles[index] * Math.PI) / 180;
                const distance = 160; // radius px
                const baseX = Math.cos(angle) * distance;
                const baseY = Math.sin(angle) * distance;

                // Parallax depth multiplier
                const depthFactor = (index % 2 === 0 ? 1.4 : 0.8);
                const floatX = baseX + mousePos.x * 20 * depthFactor;
                const floatY = baseY + mousePos.y * 20 * depthFactor;

                return (
                  <div
                    key={tech.name}
                    className="absolute z-30 transition-transform duration-300 ease-out group cursor-default"
                    style={{
                      transform: `translate3d(${floatX}px, ${floatY}px, ${20 * depthFactor}px)`,
                    }}
                  >
                    <div className="px-3.5 py-2 rounded-xl glass-panel hover:border-emerald-400/50 hover:bg-[#123625]/90 transition-all duration-200 shadow-xl shadow-black/60 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" />
                        <span className="text-xs font-semibold text-[#F3F4F1] whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Decorative 3D Spheres with Custom Volumetric CSS */}
              <div 
                className="absolute -top-6 -right-6 w-20 h-20 sphere-3d pointer-events-none transition-transform duration-300"
                style={{
                  transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 30}px, 60px)`,
                }}
              />
              <div 
                className="absolute -bottom-8 -left-8 w-24 h-24 sphere-3d-sage pointer-events-none transition-transform duration-300"
                style={{
                  transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -20}px, 40px)`,
                }}
              />
              <div 
                className="absolute top-1/2 -left-12 w-12 h-12 sphere-3d-cream pointer-events-none transition-transform duration-300"
                style={{
                  transform: `translate3d(${mousePos.x * -40}px, ${mousePos.y * 35}px, 80px)`,
                }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
