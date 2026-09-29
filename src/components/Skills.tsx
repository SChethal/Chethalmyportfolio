import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'languages':
        return <Code2 className="w-5 h-5 text-emerald-300" />;
      case 'frontend':
        return <Layout className="w-5 h-5 text-teal-300" />;
      case 'backend':
        return <Server className="w-5 h-5 text-emerald-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-green-300" />;
      case 'tools':
        return <Wrench className="w-5 h-5 text-emerald-300" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-300" />;
    }
  };

  const filteredCategories = activeCategory === 'all' 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[400px] bg-emerald-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Core Competencies</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Technical Skills
          </h2>
          <p className="text-base text-stone-300 max-w-xl mx-auto">
            Practical full-stack development technologies, enterprise backend frameworks, and relational databases.
          </p>
        </div>

        {/* 3D Centerpiece Showcase: "TECH STACK" Orbit */}
        <div className="mb-16 relative flex items-center justify-center">
          <div className="relative w-full max-w-2xl py-12 px-6 rounded-3xl glass-panel-elevated border border-emerald-500/25 flex flex-col items-center text-center overflow-hidden shadow-2xl">
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-radial from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Center Core Badge */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/20 via-[#0a2318] to-[#04110b] border-2 border-emerald-400/40 flex flex-col items-center justify-center shadow-[0_0_35px_rgba(52,211,153,0.3)] mb-4 group cursor-default">
              <Cpu className="w-8 h-8 text-emerald-300 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-200 mt-1">STACK</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F1] tracking-tight">
              TECH STACK
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-md mt-1">
              Engineered with clean separation of concerns: modular frontends, robust REST APIs, and transactional databases.
            </p>

            {/* Orbiting Highlight Tech Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 mt-6 max-w-lg">
              {['Java', 'Python', 'Spring Boot', 'Flask', 'MySQL', 'JavaScript (ES6)', 'Tailwind CSS', 'Git'].map((tech) => (
                <div
                  key={tech}
                  className="px-3.5 py-1.5 rounded-xl glass-panel hover:border-emerald-400/50 hover:bg-emerald-900/40 transition-all duration-200 text-xs font-semibold text-emerald-100 flex items-center gap-1.5 cursor-default hover:scale-105 shadow-md"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
              activeCategory === 'all'
                ? 'bg-emerald-400 text-emerald-950 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                : 'text-stone-300 bg-[#081b13]/60 hover:bg-[#0e2c1e] border border-emerald-500/15'
            }`}
          >
            All Categories
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-400 text-emerald-950 shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                  : 'text-stone-300 bg-[#081b13]/60 hover:bg-[#0e2c1e] border border-emerald-500/15'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 5 Distinct Floating Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel p-6 sm:p-7 rounded-3xl hover:border-emerald-400/40 transition-all duration-300 shadow-xl shadow-black/50 group flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Card Header with Icon */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#F3F4F1] group-hover:text-emerald-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Animated Skill Chips - Strictly without fake percentages */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition-all duration-200 cursor-default flex items-center gap-1.5 ${
                        hoveredSkill === skill
                          ? 'bg-emerald-400 text-emerald-950 border-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.4)] scale-105'
                          : 'bg-[#081e14]/70 border-emerald-500/20 text-stone-200 hover:border-emerald-400/40'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${hoveredSkill === skill ? 'bg-emerald-950' : 'bg-emerald-400'}`} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Subtext */}
              <div className="mt-6 pt-4 border-t border-emerald-500/10 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                <span>{category.skills.length} TECHNOLOGIES</span>
                <span className="text-emerald-400 font-sans font-medium">Verified in Coursework & Projects</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
