import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Database, Shield, Server, FileText } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel-elevated rounded-3xl p-6 sm:p-8 md:p-10 border border-emerald-500/30 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-full bg-stone-900/80 hover:bg-emerald-950 text-stone-400 hover:text-white border border-emerald-500/20 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Badge */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>{project.category}</span>
        </div>

        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3F4F1] tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-emerald-200/80 font-medium mt-1">
          {project.subtitle}
        </p>

        {/* Image Preview / Visual Mockup */}
        <div className="relative mt-6 rounded-2xl overflow-hidden border border-emerald-500/20 aspect-video bg-[#071911]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06170f] via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Technologies Used */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400 mb-2.5">
            Technologies & Frameworks
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-xl bg-emerald-950/70 border border-emerald-400/30 text-xs font-semibold text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Full Description */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400">
            System Architecture & Overview
          </h4>
          <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features Breakdown */}
        <div className="mt-6 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-stone-400">
            Key Functionality Breakdown
          </h4>
          <ul className="space-y-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions & Links */}
        <div className="mt-8 pt-6 border-t border-emerald-500/15 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href="#github-placeholder"
              onClick={(e) => {
                e.preventDefault();
                alert("GitHub project repository link placeholder. Replace with your actual project link.");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-stone-200 bg-[#0d281a] hover:bg-[#143d28] border border-emerald-500/25 transition-colors"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>GitHub Repository</span>
            </a>
            <a
              href="#demo-placeholder"
              onClick={(e) => {
                e.preventDefault();
                alert("Live project demo link placeholder. Replace with your actual deployment link.");
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-emerald-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-colors shadow-lg shadow-emerald-950/40"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Project</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl text-xs font-medium text-stone-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
};
