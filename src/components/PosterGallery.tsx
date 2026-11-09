import React, { useState, useMemo } from 'react';
import { POSTER_PROJECTS } from '../data/projects';
import { PosterProject } from '../types';
import { Maximize2, Download, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PosterGalleryProps {
  onSelectProject: (project: PosterProject) => void;
}

export const PosterGallery: React.FC<PosterGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return POSTER_PROJECTS;
    if (activeFilter === 'gaza') return POSTER_PROJECTS.filter((p) => p.region === 'Gaza & Palestine');
    if (activeFilter === 'sudan') return POSTER_PROJECTS.filter((p) => p.region === 'Sudan');
    if (activeFilter === 'journalism') return POSTER_PROJECTS.filter((p) => p.category === 'Visual Journalism');
    if (activeFilter === 'protest') return POSTER_PROJECTS.filter((p) => p.category === 'Protest Typography' || p.category === 'Investigative Broadsheet');
    return POSTER_PROJECTS;
  }, [activeFilter]);

  const handleDownload = (e: React.MouseEvent, project: PosterProject) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = project.imageSrc;
    link.download = `nurarihayon_${project.slug}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="works" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto bg-white">
      {/* Section Header with smooth scroll reveal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-stone-200"
      >
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[#C2410C] font-light mb-2">
            Selected Works · Visual Journalism & Editorial Posters
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight">
            Humanitarian Archive
          </h2>
          <p className="text-sm font-light text-stone-600 max-w-2xl mt-3 leading-relaxed">
            Documentary photojournalism paired with stark typography, data visualisations, and high-contrast advocacy layouts documenting human rights crises across Gaza, Sudan, and beyond.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100/80 border border-stone-200 self-start md:self-end">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider font-light transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Works ({POSTER_PROJECTS.length})
          </button>
          <button
            onClick={() => setActiveFilter('gaza')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider font-light transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'gaza'
                ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Gaza / Palestine
          </button>
          <button
            onClick={() => setActiveFilter('sudan')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider font-light transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'sudan'
                ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Sudan
          </button>
          <button
            onClick={() => setActiveFilter('journalism')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider font-light transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'journalism'
                ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Visual Journalism
          </button>
          <button
            onClick={() => setActiveFilter('protest')}
            className={`px-3 py-1.5 text-xs uppercase tracking-wider font-light transition-all whitespace-nowrap cursor-pointer ${
              activeFilter === 'protest'
                ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Protest & Broadsheet
          </button>
        </div>
      </motion.div>

      {/* Gallery Grid: Museum Gallery Layout with Staggered Scroll-Reveals & Hover Physics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-12">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            onClick={() => onSelectProject(project)}
            className="group relative bg-[#FCFAF8] border border-stone-200/90 hover:border-stone-400 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer shadow-[0_2px_14px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.07)]"
          >
            {/* Visual Frame */}
            <div className="relative w-full aspect-[4/5] bg-[#F2EFE9] overflow-hidden flex items-center justify-center p-4 sm:p-6">
              <img
                src={project.imageSrc}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-700 ease-out drop-shadow-sm"
              />

              {/* Hover overlay affordance */}
              <div className="absolute inset-0 bg-stone-900/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 backdrop-blur-[2px]">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProject(project);
                  }}
                  className="px-4 py-2 bg-stone-900 text-stone-50 text-xs uppercase tracking-wider font-light flex items-center gap-2 hover:bg-stone-800 shadow-md transform hover:scale-105 transition-transform"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Inspect Poster</span>
                </button>
                <button
                  onClick={(e) => handleDownload(e, project)}
                  className="px-4 py-2 bg-white text-stone-900 border border-stone-300 text-xs uppercase tracking-wider font-light flex items-center gap-2 hover:bg-stone-100 shadow-md transform hover:scale-105 transition-transform"
                  title="Direct Download"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>

              {/* Aspect ratio metadata */}
              <div className="absolute top-4 right-4 pointer-events-none text-[11px] font-mono text-stone-600 bg-white/90 backdrop-blur-xs px-2.5 py-0.5 border border-stone-200 shadow-2xs">
                {project.aspectRatioLabel}
              </div>
            </div>

            {/* Content & Metadata Strip (Zero-Pill Discipline) */}
            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4 bg-[#FCFAF8]">
              <div>
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-stone-500 mb-1.5 font-light">
                  <span>{project.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.region}</span>
                  <span aria-hidden="true">·</span>
                  <span className="truncate">Photo: {project.photoCredit}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-light text-stone-900 tracking-tight group-hover:text-stone-700 transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs uppercase tracking-wider text-[#C2410C] font-light mt-1">
                  {project.subtitle}
                </p>

                <p className="text-xs sm:text-sm font-light text-stone-600 line-clamp-2 mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                <span className="font-mono text-[11px] text-stone-500">{project.dimensions}</span>
                <span className="inline-flex items-center gap-1 group-hover:text-stone-900 transition-colors font-light">
                  View Full Anatomy
                  <ArrowUpRight className="w-3.5 h-3.5 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
