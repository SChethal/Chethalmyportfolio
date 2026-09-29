import React, { useEffect } from 'react';
import { X, Download, Printer, Mail, MapPin, Phone, GraduationCap, Briefcase, Award, Code2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS_DATA, EXPERIENCE_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel-elevated rounded-3xl p-6 sm:p-10 border border-emerald-500/30 shadow-2xl text-left bg-[#071710]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-emerald-500/20">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">Curriculum Vitae</span>
            <h2 className="text-xl sm:text-2xl font-bold text-[#F3F4F1]">Official Resume View</h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-md"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume modal"
              className="p-2 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div id="printable-resume" className="space-y-8 bg-[#040f0a] p-6 sm:p-8 rounded-2xl border border-emerald-500/20 text-stone-200">
          
          {/* Header Section */}
          <div className="border-b border-emerald-500/20 pb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base font-semibold text-emerald-400 mt-1">
              {PERSONAL_INFO.role} | Computer Science Engineering Undergraduate
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-stone-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-300">{PERSONAL_INFO.email}</a>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </span>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-2">
              Career Objective
            </h3>
            <p className="text-sm text-stone-300 leading-relaxed italic border-l-2 border-emerald-400/60 pl-3">
              "{PERSONAL_INFO.objective}"
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Education
            </h3>
            <div className="space-y-4">
              {EDUCATION_DATA.map((edu) => (
                <div key={edu.degree} className="text-sm">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <span className="font-bold text-white">{edu.degree}</span>
                    <span className="text-xs font-mono text-emerald-300">{edu.period}</span>
                  </div>
                  <div className="text-stone-300 text-xs mt-0.5">{edu.institution}</div>
                  {edu.cgpa && (
                    <div className="text-xs text-emerald-400 font-semibold mt-1">
                      CGPA: {edu.cgpa} / 10.0 {edu.status && `· ${edu.status}`}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="p-3 rounded-xl bg-[#092218]/60 border border-emerald-500/15">
                  <span className="font-semibold text-emerald-300 block mb-1">{cat.title}:</span>
                  <span className="text-stone-300">{cat.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Key Projects
            </h3>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="p-4 rounded-xl bg-[#092218]/40 border border-emerald-500/15 text-xs space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white text-sm">{proj.title}</span>
                    <span className="font-mono text-emerald-400">{proj.technologies.join(' · ')}</span>
                  </div>
                  <p className="text-stone-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Internship Experience
            </h3>
            <div className="p-4 rounded-xl bg-[#092218]/40 border border-emerald-500/15 text-xs space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="font-bold text-white text-sm">{EXPERIENCE_DATA.role}</span>
                <span className="font-mono text-emerald-300">{EXPERIENCE_DATA.period}</span>
              </div>
              <div className="text-emerald-400 font-semibold">{EXPERIENCE_DATA.company}</div>
              <p className="text-stone-300 pt-1">"{EXPERIENCE_DATA.responsibilities}"</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
              Certifications
            </h3>
            <ul className="space-y-2 text-xs text-stone-300">
              {CERTIFICATIONS_DATA.map((cert) => (
                <li key={cert.id} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">{cert.title}</strong>
                    {cert.issuer && ` — ${cert.issuer}`}
                    {cert.date && ` — ${cert.date}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Close CTA */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-xs font-semibold text-stone-300 hover:text-white bg-stone-900 border border-stone-700/60 transition-colors"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};
