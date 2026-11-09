import React from 'react';
import { ArrowUp, ArrowUpRight, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090a0c] text-white/70 border-t border-white/10 text-xs py-16 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top Footer Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 space-y-3">
            <span className="text-2xl font-thin tracking-tighter text-white lowercase block">
              nurarihayon
            </span>
            <p className="font-light text-white/60 max-w-sm leading-relaxed">
              An independent humanitarian & advocacy creative design practice. Visual journalism, editorial typography, and protest media produced in solidarity with human rights causes.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-white/40 uppercase tracking-widest text-[11px] block mb-2 font-mono">
              In Solidarity & Photojournalism Honors
            </span>
            <p className="font-light text-white/50 leading-relaxed">
              Deepest gratitude to field photojournalists Faiz Qreqa, Dan Kiton, Ahmed Jihad Ibrahim Al-arini, and media workers documenting history under direct fire.
            </p>
          </div>

          <div className="md:col-span-3 space-y-3 md:text-right">
            <span className="text-white/40 uppercase tracking-widest text-[11px] block mb-2 font-mono">
              Connect & Request
            </span>
            <a
              href="https://www.instagram.com/nurarihayon/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white hover:text-[#EA580C] transition-colors py-1 group"
            >
              <Instagram className="w-3.5 h-3.5 text-white/70 group-hover:text-[#EA580C] transition-colors" />
              <span>@nurarihayon</span>
              <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-[#EA580C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
            <div className="text-[11px] text-white/40 pt-1">
              DM for collaboration & campaign commissions
            </div>
          </div>
        </div>

        {/* Bottom Rule & Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-light">
          <div className="flex items-center gap-2 text-white/40">
            <span>© {new Date().getFullYear()} nurarihayon</span>
            <span aria-hidden="true">·</span>
            <span>Humanitarian & Advocacy Creative Studio</span>
            <span aria-hidden="true">·</span>
            <span>Artistry & Solidarity</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer py-1 group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-white/40 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};
