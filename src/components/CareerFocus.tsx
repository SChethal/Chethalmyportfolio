import React from 'react';
import { Code, Database, Server, LineChart, Smartphone, ArrowRight } from 'lucide-react';
import { CAREER_FOCUS_AREAS, PERSONAL_INFO } from '../data/portfolioData';

export const CareerFocus: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6 text-emerald-300" />;
      case 'Server':
        return <Server className="w-6 h-6 text-teal-300" />;
      case 'Database':
        return <Database className="w-6 h-6 text-emerald-400" />;
      case 'LineChart':
        return <LineChart className="w-6 h-6 text-green-300" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-300" />;
      default:
        return <Code className="w-6 h-6 text-emerald-300" />;
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Career Direction & Vision</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Continuous Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Currently Building My Future
          </h2>
          <p className="text-base sm:text-lg text-emerald-100/90 font-medium leading-relaxed text-balance">
            "{PERSONAL_INFO.careerFocusStatement}"
          </p>
        </div>

        {/* 5 Distinct 3D Technology Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {CAREER_FOCUS_AREAS.map((area, idx) => (
            <div
              key={area.title}
              className="glass-panel p-6 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 shadow-xl shadow-black/50 group flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-950/40">
                  {getIcon(area.icon)}
                </div>
                
                <h3 className="text-base font-bold text-[#F3F4F1] group-hover:text-emerald-300 transition-colors leading-snug">
                  {area.title}
                </h3>

                <p className="text-xs text-stone-300/90 leading-relaxed mt-2.5">
                  {area.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-emerald-500/10 flex items-center justify-between text-[11px] font-mono text-emerald-400/80">
                <span>PILLAR 0{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
