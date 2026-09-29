import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  Building2, 
  Workflow, 
  Database, 
  Binary, 
  Sparkles, 
  BarChart3, 
  ArrowRight,
  Cpu
} from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Professional Experience</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Industry Internship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Experience
          </h2>
          <p className="text-base text-stone-300 max-w-xl mx-auto">
            Practical industry exposure in data analytics pipelines, dataset operations, and applied machine learning.
          </p>
        </div>

        {/* 3D Company Experience Card */}
        <div className="glass-panel-elevated p-8 sm:p-10 rounded-3xl border border-emerald-500/25 shadow-2xl relative overflow-hidden group">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-emerald-500/15">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-teal-800/40 border border-emerald-400/30 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-950/60">
                <Briefcase className="w-7 h-7 text-emerald-300" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 block">
                  Industry Internship
                </span>
                <h3 className="text-2xl font-extrabold text-[#F3F4F1] tracking-tight">
                  {EXPERIENCE_DATA.role}
                </h3>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-200/90 mt-0.5">
                  <Building2 className="w-4 h-4 text-emerald-400" />
                  <span>{EXPERIENCE_DATA.company}</span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#071d13] border border-emerald-500/20 text-xs font-mono text-emerald-300 self-start sm:self-auto">
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>{EXPERIENCE_DATA.period}</span>
            </div>
          </div>

          {/* Stated Responsibilities from Resume */}
          <div className="mt-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2">
              Primary Responsibilities
            </h4>
            <blockquote className="text-base text-stone-200 leading-relaxed border-l-2 border-emerald-400 pl-4 py-1 italic">
              "{EXPERIENCE_DATA.responsibilities}"
            </blockquote>
          </div>

          {/* Interactive Data Pipeline Visualization */}
          <div className="mt-8 pt-6 border-t border-emerald-500/15">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300">
                <Workflow className="w-4 h-4 text-emerald-400" />
                <span>Data Analysis Pipeline & Methodology Flow</span>
              </div>
              <span className="text-[11px] text-stone-400">4 Core Stages</span>
            </div>

            {/* Pipeline Stage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {EXPERIENCE_DATA.pipelineStages.map((stage, idx) => (
                <div
                  key={stage.label}
                  className="p-4 rounded-2xl bg-[#05160e]/80 border border-emerald-500/15 hover:border-emerald-400/40 transition-all group/stage"
                >
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2">
                    <span className="font-mono text-emerald-400 font-bold">0{idx + 1}</span>
                    {idx === 0 && <Database className="w-3.5 h-3.5 text-emerald-400" />}
                    {idx === 1 && <Binary className="w-3.5 h-3.5 text-teal-400" />}
                    {idx === 2 && <Cpu className="w-3.5 h-3.5 text-emerald-300" />}
                    {idx === 3 && <BarChart3 className="w-3.5 h-3.5 text-teal-300" />}
                  </div>
                  <h5 className="text-sm font-semibold text-[#F3F4F1] group-hover/stage:text-emerald-300 transition-colors">
                    {stage.label}
                  </h5>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
