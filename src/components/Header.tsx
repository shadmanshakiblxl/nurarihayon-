import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onRequestCollaboration: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onRequestCollaboration }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-stone-200/70 shadow-[0_1px_12px_rgba(0,0,0,0.03)] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-2xl sm:text-3xl font-thin tracking-tighter text-stone-900 lowercase whitespace-nowrap shrink-0 hover:opacity-75 transition-opacity"
        >
          nurarihayon
        </a>

        {/* Zone 2: 4-5 Clean Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-light text-stone-600">
          <a
            href="#works"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Works
          </a>
          <a
            href="#manifesto"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Manifesto
          </a>
          <a
            href="#archive"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Advocacy Archive
          </a>
          <a
            href="#printkit"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Protest Kit
          </a>
          <a
            href="https://www.instagram.com/nurarihayon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-stone-900 transition-colors whitespace-nowrap shrink-0 py-1 inline-flex items-center gap-1 text-stone-500 hover:text-stone-900"
          >
            Instagram
            <ArrowUpRight className="w-3 h-3 text-stone-400" />
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <button
            onClick={onRequestCollaboration}
            className="px-4 py-2 text-xs uppercase tracking-wider font-light text-stone-900 bg-stone-100/90 hover:bg-stone-900 hover:text-stone-50 border border-stone-300/80 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request for collaboration
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F7] border-b border-stone-200 px-6 py-6 space-y-4">
          <a
            href="#works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest text-stone-700 hover:text-stone-900"
          >
            Works
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest text-stone-700 hover:text-stone-900"
          >
            Manifesto
          </a>
          <a
            href="#archive"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest text-stone-700 hover:text-stone-900"
          >
            Advocacy Archive
          </a>
          <a
            href="#printkit"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest text-stone-700 hover:text-stone-900"
          >
            Protest Kit
          </a>
          <a
            href="https://www.instagram.com/nurarihayon/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm uppercase tracking-widest text-stone-700 hover:text-stone-900 flex items-center justify-between"
          >
            <span>Instagram</span>
            <ArrowUpRight className="w-4 h-4 text-stone-400" />
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onRequestCollaboration();
            }}
            className="w-full mt-2 py-3 text-xs uppercase tracking-wider font-light text-stone-50 bg-stone-900 hover:bg-stone-800 transition-colors text-center"
          >
            Request for collaboration
          </button>
        </div>
      )}
    </header>
  );
};
