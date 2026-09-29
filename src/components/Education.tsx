import React from 'react';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Academic Milestones</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Foundational Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Education
          </h2>
          <p className="text-base text-stone-300 max-w-xl mx-auto">
            Academic pathway in Computer Science and Engineering, pre-university mathematics, and foundational science.
          </p>
        </div>

        {/* 3D Vertical Timeline */}
        <div className="relative">
          {/* Glowing central vertical connecting line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-400 via-teal-500 to-emerald-900 md:-translate-x-1/2 shadow-[0_0_12px_rgba(52,211,153,0.5)]" />

          <div className="space-y-12">
            {EDUCATION_DATA.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={item.degree}
                  className="relative flex flex-col md:flex-row items-start md:items-center gap-6 group"
                >
                  {/* Glowing 3D Node Marker */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl bg-[#092218] border-2 border-emerald-400 flex items-center justify-center z-20 shadow-[0_0_20px_rgba(52,211,153,0.4)] group-hover:scale-110 transition-transform">
                    {index === 0 ? (
                      <GraduationCap className="w-5 h-5 text-emerald-300" />
                    ) : (
                      <BookOpen className="w-4 h-4 text-emerald-300" />
                    )}
                  </div>

                  {/* Left / Right Card Container */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}>
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl hover:border-emerald-400/40 transition-all duration-300 shadow-xl shadow-black/50 group-hover:-translate-y-1">
                      
                      {/* Top Unboxed Meta */}
                      <div className={`flex flex-wrap items-center gap-2 text-xs text-stone-400 mb-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="font-semibold text-emerald-400">{item.period}</span>
                        {item.status && (
                          <>
                            <span className="text-emerald-800" aria-hidden="true">·</span>
                            <span>{item.status}</span>
                          </>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-[#F3F4F1] tracking-tight group-hover:text-emerald-300 transition-colors">
                        {item.degree}
                      </h3>

                      <p className="text-sm font-medium text-emerald-200/80 mt-1">
                        {item.institution}
                      </p>

                      {item.cgpa && (
                        <div className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-950/60 border border-emerald-400/30 text-xs font-mono text-emerald-300 font-semibold ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                          <span>CGPA: {item.cgpa} / 10.0</span>
                        </div>
                      )}

                      <p className="text-xs text-stone-300/90 leading-relaxed mt-3 pt-3 border-t border-emerald-500/10">
                        {item.details}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
