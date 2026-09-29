import React, { useState, useRef } from 'react';
import { ExternalLink, Github, ArrowUpRight, Database, Users, Building, ShieldCheck, Search, FileText } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenModal }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const isHostel = project.id === 'hostel-management';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="perspective-1200 cursor-pointer group"
      onClick={() => onOpenModal(project)}
    >
      <div
        className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 shadow-2xl shadow-black/60 relative overflow-hidden flex flex-col justify-between h-full preserve-3d"
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) translateY(${isHovered ? '-6px' : '0px'})`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
        }}
      >
        {/* Subtle Ambient Radial Highlight */}
        <div 
          className="absolute -top-24 -right-24 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" 
        />

        <div>
          {/* Unboxed Metadata Header */}
          <div className="flex items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
              <span>{project.category}</span>
            </div>
            <span className="text-xs font-mono text-stone-400">
              Core Java & MySQL
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-2xl font-bold text-[#F3F4F1] tracking-tight group-hover:text-emerald-300 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-emerald-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="text-sm text-emerald-100/70 font-medium mt-1">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mt-4">
            {project.description}
          </p>

          {/* Floating 3D Simulated Interactive Dashboard Graphic */}
          <div className="mt-6 rounded-2xl bg-[#030d08] border border-emerald-500/20 p-4 relative overflow-hidden shadow-inner group-hover:border-emerald-400/35 transition-colors">
            {/* Real Project Visual or Custom Styled Dashboard */}
            {isHostel ? (
              // Hostel Management System 3D Dashboard Preview
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 border-b border-emerald-950 pb-2">
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <Building className="w-3.5 h-3.5" />
                    <span>HOSTEL_MGMT_PANEL</span>
                  </span>
                  <span>SYSTEM_STABLE</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <Users className="w-3 h-3 text-emerald-400" />
                      <span>Student Records</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Active Registrations</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <Building className="w-3 h-3 text-teal-400" />
                      <span>Room Allocations</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Automated Blocks</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <Database className="w-3 h-3 text-emerald-400" />
                      <span>Fee Tracking</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Ledger & Receipts</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <FileText className="w-3 h-3 text-teal-400" />
                      <span>Admin Reports</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Summary Generator</span>
                  </div>
                </div>
              </div>
            ) : (
              // Crime Database Management System 3D Dashboard Preview
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 border-b border-emerald-950 pb-2">
                  <span className="flex items-center gap-1.5 text-emerald-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>CRIME_DB_INTERFACE</span>
                  </span>
                  <span>ENCRYPTED_QUERY</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <Database className="w-3 h-3 text-emerald-400" />
                      <span>Database Tables</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Normalized Schema</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <Search className="w-3 h-3 text-teal-400" />
                      <span>Search Interface</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Fast SQL Retrieval</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <FileText className="w-3 h-3 text-emerald-400" />
                      <span>Case Records</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Dossier Tracking</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#071d13] border border-emerald-500/15">
                    <div className="flex items-center gap-1.5 text-[10px] text-stone-400">
                      <ShieldCheck className="w-3 h-3 text-teal-400" />
                      <span>Suspect Profiles</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-200 mt-0.5 block">Secure Storage</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer Area: Technologies & Direct Action Links */}
        <div className="mt-6 pt-5 border-t border-emerald-500/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-[#071d13] border border-emerald-500/15 text-[11px] font-medium text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => onOpenModal(project)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-xs font-semibold text-emerald-300 transition-colors border border-emerald-400/30"
            >
              <span>View Details</span>
              <ExternalLink className="w-3 h-3" />
            </button>
            <a
              href="#github-placeholder"
              onClick={(e) => {
                e.preventDefault();
                alert("GitHub project repository link placeholder. Replace with your actual project link.");
              }}
              className="p-1.5 rounded-lg bg-stone-900/60 hover:bg-stone-800 text-stone-400 hover:text-white border border-stone-700/50 transition-colors"
              title="GitHub repository"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
