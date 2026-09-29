import React, { useState } from 'react';
import { 
  MapPin, 
  GraduationCap, 
  Calendar, 
  Award, 
  Terminal, 
  Database, 
  Server, 
  Code2, 
  Layers, 
  Sparkles,
  CheckCircle2,
  Copy,
  Check
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<'java' | 'python' | 'sql'>('java');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    java: `// Full Stack Backend Controller
@RestController
@RequestMapping("/api/v1/management")
public class SystemController {
  @Autowired
  private RecordService recordService;

  @PostMapping("/allocate")
  public ResponseEntity<AllocationResponse> allocateResource(
      @Valid @RequestBody AllocationRequest req) {
    return ResponseEntity.ok(recordService.process(req));
  }
}`,
    python: `# Data Pipeline & ML Ingestion
import pandas as pd
from sklearn.preprocessing import StandardScaler

def process_dataset(filepath: str):
    df = pd.read_csv(filepath)
    scaler = StandardScaler()
    cleaned_features = df.dropna().copy()
    normalized = scaler.fit_transform(cleaned_features)
    return normalized, df.shape`,
    sql: `-- Fast Query Case Retrieval
SELECT 
  c.case_id, c.case_title, c.incident_date,
  s.suspect_name, s.status
FROM crime_records c
INNER JOIN suspect_profiles s ON c.case_id = s.case_id
WHERE c.status = 'PENDING'
ORDER BY c.incident_date DESC;`
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeCodeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-700/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
            <span>Core Profile</span>
            <span className="text-emerald-700" aria-hidden="true">·</span>
            <span className="text-stone-400 font-normal">Background & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F3F4F1]">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-emerald-300/80 font-medium">
            Developer • Student • Problem Solver
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Objective & Info Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Objective Card in Glassmorphism */}
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#F3F4F1]">Engineering Objective</h3>
                  <p className="text-xs text-stone-400">Full Stack Focus & Academic Rigor</p>
                </div>
              </div>

              <blockquote className="text-stone-200 text-base leading-relaxed border-l-2 border-emerald-400 pl-4 italic">
                "{PERSONAL_INFO.objective}"
              </blockquote>

              <div className="mt-6 pt-5 border-t border-emerald-500/15 flex flex-wrap gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Enterprise Java & Python</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400" />
                  <span>Relational Database Design</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300" />
                  <span>Modern Responsive Web</span>
                </div>
              </div>
            </div>

            {/* Structured Information Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              
              <div className="glass-panel p-4 rounded-2xl border border-emerald-500/15 hover:border-emerald-400/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center mb-3">
                  <MapPin className="w-4 h-4 text-emerald-300" />
                </div>
                <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider block">Location</span>
                <span className="text-sm font-semibold text-[#F3F4F1] mt-0.5 block leading-tight">{PERSONAL_INFO.locationShort}</span>
                <span className="text-[10px] text-stone-500 block">Karnataka, India</span>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-emerald-500/15 hover:border-emerald-400/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center mb-3">
                  <GraduationCap className="w-4 h-4 text-emerald-300" />
                </div>
                <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider block">Degree</span>
                <span className="text-sm font-semibold text-[#F3F4F1] mt-0.5 block leading-tight">B.E. CSE</span>
                <span className="text-[10px] text-stone-500 block">AIET Institution</span>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-emerald-500/15 hover:border-emerald-400/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center mb-3">
                  <Calendar className="w-4 h-4 text-emerald-300" />
                </div>
                <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider block">Graduation</span>
                <span className="text-sm font-semibold text-[#F3F4F1] mt-0.5 block leading-tight">Class of {PERSONAL_INFO.expectedGraduation}</span>
                <span className="text-[10px] text-stone-500 block">Aug 2024 – Present</span>
              </div>

              <div className="glass-panel p-4 rounded-2xl border border-emerald-500/15 hover:border-emerald-400/30 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4 text-emerald-300" />
                </div>
                <span className="text-[11px] font-medium text-stone-400 uppercase tracking-wider block">CGPA</span>
                <span className="text-sm font-semibold text-emerald-300 mt-0.5 block leading-tight">{PERSONAL_INFO.cgpa} / 10</span>
                <span className="text-[10px] text-stone-500 block">Verified Academic</span>
              </div>

            </div>

          </div>

          {/* Right Column: Visual 3D Developer Workspace */}
          <div className="lg:col-span-6 relative">
            <div className="glass-panel-elevated rounded-3xl p-6 sm:p-7 relative overflow-hidden border border-emerald-500/25 shadow-2xl">
              
              {/* Workspace Header & Interactive Code Tabs */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-4 border-b border-emerald-500/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_#34d399]" />
                  <span className="text-xs font-mono text-stone-400 ml-2">workspace/chethal-core</span>
                </div>

                <div className="flex items-center gap-1.5 p-1 bg-black/40 rounded-xl border border-emerald-500/15">
                  <button
                    onClick={() => setActiveCodeTab('java')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeCodeTab === 'java'
                        ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/30'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    Java
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('python')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeCodeTab === 'python'
                        ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/30'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    Python
                  </button>
                  <button
                    onClick={() => setActiveCodeTab('sql')}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-colors ${
                      activeCodeTab === 'sql'
                        ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/30'
                        : 'text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    MySQL
                  </button>
                </div>
              </div>

              {/* Code Editor Window */}
              <div className="relative rounded-2xl bg-[#030a07] p-4 font-mono text-xs text-stone-300 overflow-x-auto border border-emerald-900/60 shadow-inner">
                <button
                  onClick={copyCode}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 text-stone-400 hover:text-emerald-300 border border-emerald-500/20 transition-colors"
                  title="Copy code snippet"
                  aria-label="Copy code snippet"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <pre className="text-emerald-100/90 leading-relaxed">
                  <code>{codeSnippets[activeCodeTab]}</code>
                </pre>
              </div>

              {/* 3D Architecture Component Cards (Database Cylinder, API Node, Storage) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mt-5">
                
                {/* 3D Database Cylinder Model */}
                <div className="p-3.5 rounded-2xl bg-[#092218]/60 border border-emerald-500/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/20">
                    <Database className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#F3F4F1] block">MySQL Engine</span>
                    <span className="text-[10px] text-stone-400 block">Relational & Indices</span>
                  </div>
                </div>

                {/* API / Network Node */}
                <div className="p-3.5 rounded-2xl bg-[#092218]/60 border border-emerald-500/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center shrink-0 border border-teal-400/20">
                    <Server className="w-5 h-5 text-teal-300" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#F3F4F1] block">RESTful APIs</span>
                    <span className="text-[10px] text-stone-400 block">Spring Boot & Flask</span>
                  </div>
                </div>

                {/* Terminal / System Card */}
                <div className="p-3.5 rounded-2xl bg-[#092218]/60 border border-emerald-500/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/20">
                    <Terminal className="w-5 h-5 text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#F3F4F1] block">Dev Tooling</span>
                    <span className="text-[10px] text-stone-400 block">Git, Postman, IDEs</span>
                  </div>
                </div>

              </div>

              {/* Decorative mini 3D sphere accent */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 sphere-3d pointer-events-none opacity-80" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
