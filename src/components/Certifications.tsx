import React, { useState } from 'react';
import { Award, Calendar, CheckCircle2, ShieldCheck, Sparkles, Smartphone, Code2, Database } from 'lucide-react';
import { CERTIFICATIONS_DATA, CertificationItem } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const getCertIcon = (id: string) => {
    switch (id) {
      case 'cert-1':
        return <Code2 className="w-5 h-5 text-emerald-300" />;
      case 'cert-2':
        return <Database className="w-5 h-5 text-teal-300" />;
      default:
        return <Smartphone className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[400px] bg-emerald-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Specialized Learning</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Accredited Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Certifications
          </h2>
          <p className="text-base text-stone-300 max-w-xl mx-auto">
            Industry specializations across enterprise Full-Stack Java, Python AI / Data Science, and native iOS development.
          </p>
        </div>

        {/* Certificate Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="glass-panel p-6 sm:p-7 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 shadow-xl shadow-black/50 group flex flex-col justify-between hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* Header Bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-400/25 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCertIcon(cert.id)}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400/90 tracking-wide uppercase px-2.5 py-1 rounded-lg bg-[#071d13] border border-emerald-500/15">
                    {cert.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#F3F4F1] group-hover:text-emerald-300 transition-colors leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* Issuer & Date Metadata Footer */}
              <div className="mt-6 pt-4 border-t border-emerald-500/15 space-y-1.5 text-xs text-stone-400">
                {cert.issuer && (
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Issuing Entity:</span>
                    <span className="font-semibold text-emerald-200">{cert.issuer}</span>
                  </div>
                )}
                {cert.date && (
                  <div className="flex items-center justify-between">
                    <span className="text-stone-500">Conferred Date:</span>
                    <span className="font-mono text-stone-300">{cert.date}</span>
                  </div>
                )}
                {!cert.issuer && !cert.date && (
                  <div className="flex items-center gap-1.5 text-stone-400 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Specialization Credential</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Quick Preview Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="glass-panel-elevated p-8 rounded-3xl max-w-lg w-full border border-emerald-500/30 text-left relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30">
                <Award className="w-6 h-6 text-emerald-300" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Certificate Overview</span>
                <h4 className="text-xl font-bold text-[#F3F4F1]">{selectedCert.title}</h4>
              </div>
            </div>

            <div className="space-y-3 py-4 border-y border-emerald-500/15 text-sm">
              <div className="flex justify-between">
                <span className="text-stone-400">Specialization:</span>
                <span className="text-stone-200 font-medium">{selectedCert.category}</span>
              </div>
              {selectedCert.issuer && (
                <div className="flex justify-between">
                  <span className="text-stone-400">Issuing Body:</span>
                  <span className="text-emerald-300 font-medium">{selectedCert.issuer}</span>
                </div>
              )}
              {selectedCert.date && (
                <div className="flex justify-between">
                  <span className="text-stone-400">Completion Date:</span>
                  <span className="text-stone-200 font-mono">{selectedCert.date}</span>
                </div>
              )}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2 rounded-xl text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
