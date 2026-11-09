import React, { useState, useEffect } from 'react';
import { PosterProject } from '../types';
import { X, Download, Share2, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Check, Eye, FileText, Info } from 'lucide-react';

interface PosterModalProps {
  project: PosterProject;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  allProjects: PosterProject[];
}

export const PosterModal: React.FC<PosterModalProps> = ({
  project,
  onClose,
  onNext,
  onPrev,
}) => {
  const [activeTab, setActiveTab] = useState<'visual' | 'anatomy' | 'specs'>('visual');
  const [zoomed, setZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  // Reset zoom on project change
  useEffect(() => {
    setZoomed(false);
    setActiveTab('visual');
  }, [project.id]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = project.imageSrc;
    link.download = `nurarihayon_${project.slug}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${project.title} — nurarihayon`,
        text: project.headlineQuote,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/60 backdrop-blur-md p-3 sm:p-6 md:p-8 overflow-y-auto"
    >
      {/* Background backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl max-h-[94vh] flex flex-col bg-white border border-stone-200 shadow-2xl overflow-hidden my-auto">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-stone-200 bg-[#FAF9F7]">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-stone-500 font-light">Poster Archive</span>
            <span className="text-stone-300" aria-hidden="true">/</span>
            <span className="text-xs text-stone-900 font-light truncate max-w-[200px] sm:max-w-md">
              {project.title}
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs uppercase tracking-wider font-light text-stone-900 bg-stone-100 hover:bg-stone-900 hover:text-stone-50 border border-stone-300 transition-all cursor-pointer"
              title="Download high-resolution poster"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download Poster</span>
            </button>

            <button
              onClick={handleShare}
              className="p-1.5 text-stone-600 hover:text-stone-900 border border-stone-300 hover:border-stone-500 transition-colors cursor-pointer"
              title="Share or copy link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-200 border border-stone-300 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body: Split Media Viewer & Metadata Drawer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 min-h-0 overflow-y-auto lg:overflow-hidden">
          {/* Left Column: Visual Artwork Stage */}
          <div className="lg:col-span-7 xl:col-span-8 bg-[#F4F2EE] flex flex-col items-center justify-center p-4 sm:p-8 relative min-h-[420px] lg:min-h-[620px] select-none border-b lg:border-b-0 lg:border-r border-stone-200">
            {/* Poster Image with Zoom support */}
            <div
              className={`relative transition-all duration-300 max-h-full flex items-center justify-center ${
                zoomed ? 'cursor-zoom-out scale-125 z-20' : 'cursor-zoom-in'
              }`}
              onClick={() => setZoomed(!zoomed)}
            >
              <img
                src={project.imageSrc}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto object-contain shadow-xl border border-stone-300/60 transition-transform duration-300"
              />
            </div>

            {/* Stage bottom floating bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-stone-600 pointer-events-none">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1 border border-stone-200 pointer-events-auto shadow-xs">
                <button
                  onClick={() => setZoomed(!zoomed)}
                  className="hover:text-stone-900 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {zoomed ? <ZoomOut className="w-3.5 h-3.5" /> : <ZoomIn className="w-3.5 h-3.5" />}
                  <span>{zoomed ? 'Reset Zoom' : 'Click to Inspect'}</span>
                </button>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md px-2 py-1 border border-stone-200 pointer-events-auto shadow-xs">
                <button
                  onClick={onPrev}
                  className="p-1 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Previous artwork"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] px-1 font-mono text-stone-500">NAVIGATE</span>
                <button
                  onClick={onNext}
                  className="p-1 hover:text-stone-900 transition-colors cursor-pointer"
                  aria-label="Next artwork"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial & Forensic Context Drawer */}
          <div className="lg:col-span-5 xl:col-span-4 bg-white flex flex-col justify-between overflow-y-auto p-6 sm:p-7 space-y-6">
            <div>
              {/* Tab Selector */}
              <div className="flex items-center gap-1 p-1 bg-stone-100 border border-stone-200 mb-6">
                <button
                  onClick={() => setActiveTab('visual')}
                  className={`flex-1 py-1.5 text-xs uppercase tracking-wider font-light transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'visual'
                      ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Overview</span>
                </button>
                <button
                  onClick={() => setActiveTab('anatomy')}
                  className={`flex-1 py-1.5 text-xs uppercase tracking-wider font-light transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'anatomy'
                      ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Anatomy</span>
                </button>
                <button
                  onClick={() => setActiveTab('specs')}
                  className={`flex-1 py-1.5 text-xs uppercase tracking-wider font-light transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    activeTab === 'specs'
                      ? 'bg-stone-900 text-stone-50 font-normal shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Print Spec</span>
                </button>
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === 'visual' && (
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-1 font-light">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.region}</span>
                    </div>
                    <h2 className="text-2xl font-light text-stone-900 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-xs uppercase tracking-wider text-[#C2410C] mt-1 font-light">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Headline Callout */}
                  <div className="p-3.5 bg-[#FAF9F7] border border-stone-200">
                    <p className="text-xs text-stone-800 font-mono leading-relaxed">
                      "{project.headlineQuote}"
                    </p>
                  </div>

                  {/* Curatorial Narrative */}
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-medium">Editorial Context</h3>
                    <p className="text-sm font-light text-stone-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Verified Metadata List */}
                  <div className="pt-2 border-t border-stone-200 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Photojournalism By</span>
                      <span className="text-stone-900 font-medium">{project.photoCredit}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Field Location</span>
                      <span className="text-stone-900">{project.location}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Documentation Date</span>
                      <span className="text-stone-900">{project.photoDate}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-stone-100">
                      <span className="text-stone-500">Format & Ratio</span>
                      <span className="text-stone-900">{project.aspectRatioLabel}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: EDITORIAL & TYPOGRAPHIC ANATOMY */}
              {activeTab === 'anatomy' && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-3 font-medium">Forensic Data & Verified Figures</h3>
                    <div className="space-y-3">
                      {project.verifiedData.map((data, i) => (
                        <div key={i} className="p-3 bg-[#FAF9F7] border border-stone-200">
                          <div className="text-[11px] uppercase tracking-wider text-stone-500">{data.label}</div>
                          <div className="text-sm font-medium text-stone-900 mt-0.5">{data.value}</div>
                          <div className="text-[11px] text-[#C2410C] mt-1 font-mono">Source: {data.source}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-stone-200">
                    <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-3 font-medium">Typographic Grid & Layout Decisions</h3>
                    <div className="space-y-3">
                      {project.typographicBreakdown.map((type, i) => (
                        <div key={i} className="text-xs space-y-1">
                          <span className="text-stone-900 font-medium block">{type.primaryFont}</span>
                          <p className="text-stone-500 font-light">{type.style}</p>
                          <p className="text-stone-700 leading-relaxed">{type.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PRINT SPECS & ADVOCACY USAGE */}
              {activeTab === 'specs' && (
                <div className="space-y-5">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-medium">Print Master Specifications</h3>
                    <div className="p-3.5 bg-[#FAF9F7] border border-stone-200 space-y-2 text-xs">
                      <div className="flex justify-between py-1 border-b border-stone-100">
                        <span className="text-stone-500">Print Output:</span>
                        <span className="text-stone-900 font-mono">{project.printSpec}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-stone-100">
                        <span className="text-stone-500">Master Resolution:</span>
                        <span className="text-stone-900 font-mono">{project.dimensions}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-stone-100">
                        <span className="text-stone-500">Color Space:</span>
                        <span className="text-stone-900 font-mono">RGB (Universal) / CMYK Ready</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs uppercase tracking-wider text-stone-500 mb-2 font-medium">Advocacy Use Permission</h3>
                    <p className="text-xs text-stone-600 font-light leading-relaxed">
                      This design is provided for educational campaigns, peaceful street demonstrations, community teach-ins, and human rights advocacy. No commercial reproduction or monetization allowed without explicit consent.
                    </p>
                  </div>

                  <div className="p-3 bg-[#FAF9F7] border border-stone-200 text-xs text-stone-600">
                    <span className="font-medium text-stone-900 block mb-1">Recommended Paper Stock:</span>
                    Heavyweight 200gsm uncoated archival stock for indoor galleries; laminated or vinyl for street rally placard mountings.
                  </div>
                </div>
              )}
            </div>

            {/* Bottom pro-bono action reminder */}
            <div className="pt-4 border-t border-stone-200 text-xs text-stone-500 flex items-center justify-between">
              <span>nurarihayon advocacy studio</span>
              <span className="text-stone-700 font-light">Free for community causes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
