import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  FileText, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onOpenResume: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please specify the subject or role.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message or inquiry details.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real local feedback processing
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Get in Touch</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Placement & Internships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            Let's Build Something
          </h2>
          <p className="text-base sm:text-lg text-emerald-200/80 font-medium max-w-xl mx-auto">
            Open to software engineering internships, placement opportunities, and meaningful development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-panel p-8 rounded-3xl border border-emerald-500/20 shadow-2xl space-y-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">Candidate Profile</span>
                <h3 className="text-2xl font-bold text-[#F3F4F1] mt-1">{PERSONAL_INFO.name}</h3>
                <p className="text-xs font-semibold text-emerald-300 mt-0.5">{PERSONAL_INFO.role}</p>
              </div>

              {/* Verified Information Details */}
              <div className="space-y-4 pt-2">
                
                {/* Email with copy affordance */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#06190f]/70 border border-emerald-500/15">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-stone-400 block font-medium uppercase tracking-wider">Email Address</span>
                      <a 
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-semibold text-stone-200 hover:text-emerald-300 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-stone-300 hover:text-white border border-emerald-500/20 transition-colors"
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#06190f]/70 border border-emerald-500/15">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block font-medium uppercase tracking-wider">Current Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-stone-200">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#06190f]/70 border border-emerald-500/15">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-300">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 block font-medium uppercase tracking-wider">Phone</span>
                    <span className="text-xs sm:text-sm font-mono text-stone-200">
                      {PERSONAL_INFO.phone}
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Buttons: Email Me, LinkedIn, GitHub, Download Resume */}
              <div className="pt-4 border-t border-emerald-500/15 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-stone-400 block">
                  Quick Links & Resume
                </span>

                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-950 bg-gradient-to-r from-emerald-400 to-teal-300 hover:from-emerald-300 hover:to-teal-200 transition-colors shadow-md shadow-emerald-950/40"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email Me</span>
                  </a>

                  <button
                    onClick={onOpenResume}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-200 bg-[#0c2a1c] hover:bg-[#133e29] border border-emerald-500/25 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Download Resume</span>
                  </button>

                  <a
                    href="#linkedin-placeholder"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("LinkedIn profile placeholder. Replace with your actual profile link.");
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-300 bg-stone-900/60 hover:bg-stone-800 border border-stone-700/50 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="#github-placeholder"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("GitHub profile placeholder. Replace with your actual profile link.");
                    }}
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-stone-300 bg-stone-900/60 hover:bg-stone-800 border border-stone-700/50 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5 text-emerald-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Modern Glassmorphism Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-elevated p-8 sm:p-10 rounded-3xl border border-emerald-500/25 shadow-2xl relative">
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[#F3F4F1] tracking-tight">
                  Direct Inquiries & Messaging
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-1">
                  Submit a message directly. All fields are client-validated with immediate feedback.
                </p>
              </div>

              {submitSuccess ? (
                <div className="p-8 rounded-2xl bg-[#092b1b]/80 border border-emerald-400/40 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Thank You for Connecting!</h4>
                  <p className="text-xs sm:text-sm text-emerald-200/90 max-w-md mx-auto leading-relaxed">
                    Your inquiry has been captured in this live demonstration environment. You can also write directly to <strong className="text-white">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl text-xs font-semibold text-emerald-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-stone-300 mb-1.5">
                        Your Full Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-xl bg-[#040e09] border text-sm text-stone-200 placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500 focus:border-red-400' : 'border-emerald-500/25 focus:border-emerald-400'
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-stone-300 mb-1.5">
                        Your Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. recruiter@company.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#040e09] border text-sm text-stone-200 placeholder-stone-600 focus:outline-none transition-colors ${
                          errors.email ? 'border-red-500 focus:border-red-400' : 'border-emerald-500/25 focus:border-emerald-400'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-stone-300 mb-1.5">
                      Subject / Role Title <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineering Internship Opportunity"
                      className={`w-full px-4 py-3 rounded-xl bg-[#040e09] border text-sm text-stone-200 placeholder-stone-600 focus:outline-none transition-colors ${
                        errors.subject ? 'border-red-500 focus:border-red-400' : 'border-emerald-500/25 focus:border-emerald-400'
                      }`}
                    />
                    {errors.subject && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-stone-300 mb-1.5">
                      Message <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello Chethal, we reviewed your projects and would love to schedule an interview..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#040e09] border text-sm text-stone-200 placeholder-stone-600 focus:outline-none transition-colors resize-none ${
                        errors.message ? 'border-red-500 focus:border-red-400' : 'border-emerald-500/25 focus:border-emerald-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-emerald-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 hover:from-emerald-300 hover:to-teal-200 transition-all duration-200 shadow-[0_0_25px_rgba(52,211,153,0.35)] disabled:opacity-50 active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-emerald-950 border-t-transparent rounded-full animate-spin" />
                          <span>Validating & Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-stone-500 text-center mt-2.5">
                      Demonstration contact form with instant validation. For official correspondence, feel free to email directly.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
