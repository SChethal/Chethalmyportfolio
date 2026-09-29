import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { PROJECTS_DATA, Project } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-14 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Portfolio Highlights</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Selected Projects
          </h2>
          <p className="text-base sm:text-lg text-emerald-200/80 font-medium max-w-xl mx-auto">
            Building practical solutions with software and databases.
          </p>
        </div>

        {/* 2 Major Projects Grid with 3D Interaction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenModal={(proj) => setSelectedProject(proj)}
            />
          ))}
        </div>

      </div>

      {/* Expanded Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
