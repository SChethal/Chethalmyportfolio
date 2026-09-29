import React from 'react';
import { CheckCircle2, Star } from 'lucide-react';
import { HIGHLIGHTS_DATA } from '../data/portfolioData';

export const Highlights: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Verified Summary</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Resume Backed Facts</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F4F1]">
            Highlights
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto">
            Consolidated factual summary of academic performance, engineering projects, and specializations.
          </p>
        </div>

        {/* Factual Highlights List */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/20 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HIGHLIGHTS_DATA.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#06180f]/70 border border-emerald-500/10 hover:border-emerald-400/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-400/20">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                </div>
                <span className="text-sm font-medium text-stone-200 leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
