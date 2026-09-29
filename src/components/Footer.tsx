import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-emerald-500/15 bg-[#030906] py-14 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center justify-between pb-10 border-b border-emerald-500/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
              <span className="text-xl font-bold tracking-tight text-[#F3F4F1]">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-semibold text-emerald-400">
              {PERSONAL_INFO.role}
            </p>
            <p className="text-xs text-stone-400 max-w-sm italic">
              "Building software, learning continuously."
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-5">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-stone-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="md:col-span-2 flex items-center md:justify-end gap-2.5">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-[#071d13] text-stone-300 hover:text-emerald-300 hover:border-emerald-400/40 border border-emerald-500/20 transition-colors"
              title="Send email"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#linkedin-placeholder"
              onClick={(e) => {
                e.preventDefault();
                alert("LinkedIn profile link placeholder.");
              }}
              className="p-2.5 rounded-xl bg-[#071d13] text-stone-300 hover:text-emerald-300 hover:border-emerald-400/40 border border-emerald-500/20 transition-colors"
              title="LinkedIn profile"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#github-placeholder"
              onClick={(e) => {
                e.preventDefault();
                alert("GitHub profile link placeholder.");
              }}
              className="p-2.5 rounded-xl bg-[#071d13] text-stone-300 hover:text-emerald-300 hover:border-emerald-400/40 border border-emerald-500/20 transition-colors"
              title="GitHub profile"
              aria-label="GitHub profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 hover:text-emerald-200 border border-emerald-400/30 transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 S CHETHAL. All rights reserved.</p>
          <p className="flex items-center gap-1 text-[11px]">
            <span>Designed for software engineering placement & internship excellence</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
