import React, { useState } from 'react';
import { Background3D } from './components/Background3D';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { SoftSkills } from './components/SoftSkills';
import { Languages } from './components/Languages';
import { Highlights } from './components/Highlights';
import { CareerFocus } from './components/CareerFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleOpenConnect = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#040907] text-[#F3F4F1] selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* 3D Atmospheric Background Layer with Canvas & Shaded Spheres */}
      <Background3D />

      {/* Floating Transparent Glass Top Navigation */}
      <Navbar onOpenConnectModal={handleOpenConnect} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Full-Screen 3D Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Section with 3D Developer Workspace */}
        <About />

        {/* Education Timeline */}
        <Education />

        {/* Technical Skills with 3D Centerpiece Showcase */}
        <Skills />

        {/* Selected Projects with 3D Dashboards & Modals */}
        <Projects />

        {/* Internship / Industry Experience with Pipeline Flow */}
        <Experience />

        {/* Certifications Gallery */}
        <Certifications />

        {/* Soft Skills ("Beyond Code") with "How I Work" Center Element */}
        <SoftSkills />

        {/* Languages (Telugu, Tamil, English, Kannada) */}
        <Languages />

        {/* Verified Resume Highlights */}
        <Highlights />

        {/* Career Focus ("Currently Building My Future") */}
        <CareerFocus />

        {/* Contact Section with Interactive Form & Direct Affordances */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Complete Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
