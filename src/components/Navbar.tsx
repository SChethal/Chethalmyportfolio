import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenConnectModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnectModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy calculation
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnectClick = () => {
    setMobileMenuOpen(false);
    if (onOpenConnectModal) {
      onOpenConnectModal();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#05110c]/85 backdrop-blur-md border-b border-emerald-500/15 shadow-2xl shadow-black/50'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg font-bold tracking-tight text-[#F3F4F1] hover:text-emerald-400 transition-colors flex items-center gap-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
            <span className="font-semibold">{PERSONAL_INFO.name}</span>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-emerald-300 font-semibold'
                      : 'text-stone-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-300 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleConnectClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide text-emerald-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-all duration-200 shadow-[0_0_20px_rgba(52,211,153,0.3)] hover:shadow-[0_0_25px_rgba(52,211,153,0.5)] active:scale-95"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-stone-300 hover:text-white hover:bg-emerald-950/50 border border-emerald-500/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#071710]/95 backdrop-blur-xl border-b border-emerald-500/20 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-medium py-1.5 transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-emerald-300 font-semibold'
                    : 'text-stone-300 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-emerald-900/50">
            <button
              onClick={handleConnectClick}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-emerald-950 bg-gradient-to-r from-emerald-400 to-emerald-300 hover:from-emerald-300 hover:to-emerald-200 transition-colors"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
