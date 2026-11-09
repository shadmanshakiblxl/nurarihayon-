import React from 'react';
import { POSTER_PROJECTS } from '../data/projects';
import { PosterProject } from '../types';
import { Download, Printer, ShieldCheck, FileCheck, Layers } from 'lucide-react';
import { motion } from 'motion/react';

interface PrintKitProps {
  onSelectProject: (project: PosterProject) => void;
}

export const PrintKitSection: React.FC<PrintKitProps> = ({ onSelectProject }) => {
  const triggerDownload = (project: PosterProject) => {
    const link = document.createElement('a');
    link.href = project.imageSrc;
    link.download = `nurarihayon_${project.slug}_print_master.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="printkit" className="py-24 sm:py-32 bg-[#FAF9F6] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200"
        >
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C2410C] font-light mb-2">
              Free Open-Access Assets · Direct Community Action
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
              Protest & Street Print Kit
            </h2>
            <p className="text-sm font-light text-stone-600 max-w-2xl mt-3 leading-relaxed">
              Every design is master-rendered at 300 DPI print quality. Free for download, community reproduction, and peaceful demonstration worldwide.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-stone-600 self-start md:self-end">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Creative Commons CC-BY-NC 4.0</span>
          </div>
        </motion.div>

        {/* 4 Poster Download Cards with hover elevation and staggered scroll reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {POSTER_PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white border border-stone-200 p-5 flex flex-col justify-between space-y-4 hover:border-stone-400 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)]"
            >
              {/* Thumbnail */}
              <div
                onClick={() => onSelectProject(project)}
                className="w-full aspect-[3/4] bg-[#F2EFE9] overflow-hidden cursor-pointer relative group flex items-center justify-center"
              >
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-xs"
                />
                <div className="absolute inset-0 bg-stone-900/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-xs uppercase tracking-wider text-white backdrop-blur-[1px]">
                  Inspect
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-[#C2410C] block">{project.region}</span>
                <h4 className="text-base font-light text-stone-900 tracking-tight leading-snug">
                  {project.title}
                </h4>
                <div className="text-[11px] text-stone-500 font-mono pt-1">
                  {project.dimensions} · 300 DPI
                </div>
              </div>

              {/* Download Action */}
              <button
                onClick={() => triggerDownload(project)}
                className="w-full py-2.5 px-3 bg-stone-100 hover:bg-stone-900 hover:text-stone-50 text-stone-800 border border-stone-200 text-xs uppercase tracking-wider font-light flex items-center justify-center gap-2 transition-all cursor-pointer transform hover:scale-[1.02]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Print File</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Technical Print Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-white border border-stone-200/90 space-y-3 shadow-xs hover:border-stone-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-stone-900 font-medium text-xs uppercase tracking-wider">
              <Printer className="w-4 h-4 text-[#C2410C]" />
              <span>Recommended Paper Stock</span>
            </div>
            <p className="text-xs font-light text-stone-600 leading-relaxed">
              For handheld placards, print on 200–250gsm heavyweight uncoated cardstock or mount on cardboard. For wheat-pasting or postering walls, lightweight 90–120gsm bond paper accepts paste cleanly without peeling.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white border border-stone-200/90 space-y-3 shadow-xs hover:border-stone-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-stone-900 font-medium text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4 text-stone-700" />
              <span>Scale & Dimensions</span>
            </div>
            <p className="text-xs font-light text-stone-600 leading-relaxed">
              Files are rendered in vector-grade sharpness. They scale seamlessly to ISO A3 (297×420mm), A2 (420×594mm), and North American 18×24 in standard frames without pixelation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-6 bg-white border border-stone-200/90 space-y-3 shadow-xs hover:border-stone-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-stone-900 font-medium text-xs uppercase tracking-wider">
              <FileCheck className="w-4 h-4 text-[#C2410C]" />
              <span>Non-Commercial Usage</span>
            </div>
            <p className="text-xs font-light text-stone-600 leading-relaxed">
              All materials are published under Creative Commons Non-Commercial (CC BY-NC 4.0). You are free to print, distribute, and display anywhere in support of human dignity and peace.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
