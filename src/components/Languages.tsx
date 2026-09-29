import React from 'react';
import { Languages as LanguagesIcon, Globe2 } from 'lucide-react';
import { LANGUAGES_DATA } from '../data/portfolioData';

export const Languages: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Communication & Linguistic Range</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F4F1]">
            Languages
          </h2>
        </div>

        {/* 4 Elegant Floating Cards - Strictly without proficiency levels */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {LANGUAGES_DATA.map((lang) => (
            <div
              key={lang.name}
              className="glass-panel p-5 rounded-2xl border border-emerald-500/15 hover:border-emerald-400/40 transition-all duration-300 text-center group hover:-translate-y-1 shadow-lg shadow-black/40"
            >
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Globe2 className="w-5 h-5 text-emerald-300" />
              </div>

              <h3 className="text-base font-bold text-[#F3F4F1] group-hover:text-emerald-300 transition-colors">
                {lang.name}
              </h3>

              <span className="text-xs font-medium text-emerald-400/80 block mt-1">
                {lang.script}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
