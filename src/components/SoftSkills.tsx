import React, { useState } from 'react';
import { Sparkles, Users, MessageSquare, Compass, Clock, Zap, Target } from 'lucide-react';
import { SOFT_SKILLS } from '../data/portfolioData';

export const SoftSkills: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Communication':
        return <MessageSquare className="w-5 h-5 text-emerald-300" />;
      case 'Leadership':
        return <Compass className="w-5 h-5 text-teal-300" />;
      case 'Teamwork':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'Problem Solving':
        return <Target className="w-5 h-5 text-green-300" />;
      case 'Time Management':
        return <Clock className="w-5 h-5 text-emerald-300" />;
      case 'Quick Learner':
        return <Zap className="w-5 h-5 text-teal-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-300" />;
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Interpersonal Dynamics</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Collaborative Traits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Beyond Code
          </h2>
          <p className="text-base text-stone-300 max-w-xl mx-auto">
            Disciplined working methodologies, cross-functional synergy, and algorithmic problem-solving.
          </p>
        </div>

        {/* 3D Arrangement with "How I Work" Center Element */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Anchor Node */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-panel-elevated border border-emerald-400/30 shadow-[0_0_30px_rgba(52,211,153,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-sm font-bold tracking-wider uppercase text-emerald-200">
                How I Work
              </span>
            </div>
          </div>

          {/* Floating Glass Cards Grid - Without any ratings or percentages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOFT_SKILLS.map((skill) => (
              <div
                key={skill.name}
                onMouseEnter={() => setActiveSkill(skill.name)}
                onMouseLeave={() => setActiveSkill(null)}
                className={`glass-panel p-6 rounded-3xl border transition-all duration-300 shadow-xl group hover:-translate-y-1 cursor-default ${
                  activeSkill === skill.name
                    ? 'border-emerald-400/60 bg-[#0e2c1e]/90 shadow-[0_0_25px_rgba(52,211,153,0.2)]'
                    : 'border-emerald-500/15'
                }`}
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-400/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.name)}
                  </div>
                  <h3 className="text-base font-bold text-[#F3F4F1] group-hover:text-emerald-300 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
