/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroCanvas } from './components/HeroCanvas';
import { PosterGallery } from './components/PosterGallery';
import { AdvocacyManifesto } from './components/AdvocacyManifesto';
import { ProBonoRequestForm } from './components/ProBonoRequestForm';
import { PrintKitSection } from './components/PrintKitSection';
import { Footer } from './components/Footer';
import { PosterModal } from './components/PosterModal';
import { POSTER_PROJECTS } from './data/projects';
import { PosterProject } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<PosterProject | null>(null);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = POSTER_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % POSTER_PROJECTS.length;
    setSelectedProject(POSTER_PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = POSTER_PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + POSTER_PROJECTS.length) % POSTER_PROJECTS.length;
    setSelectedProject(POSTER_PROJECTS[prevIndex]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 selection:bg-[#F5D0B5] selection:text-stone-900 flex flex-col font-sans">
      {/* Fixed Top Bar Navigation */}
      <Header
        onRequestCollaboration={() => scrollToSection('probono')}
      />

      {/* Main Interactive Stage with Canvas Slideshow */}
      <main className="flex-1">
        <HeroCanvas
          onExploreClick={() => scrollToSection('works')}
          onRequestClick={() => scrollToSection('probono')}
        />

        {/* Selected Posters Gallery */}
        <PosterGallery
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Humanitarian Manifesto & Core Ethos */}
        <AdvocacyManifesto />

        {/* Pro-Bono Campaign Design Commission Form */}
        <ProBonoRequestForm />

        {/* 300 DPI Street & Protest Print Kit */}
        <PrintKitSection
          onSelectProject={(project) => setSelectedProject(project)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen High-Resolution Lightbox & Anatomy Modal */}
      {selectedProject && (
        <PosterModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
          allProjects={POSTER_PROJECTS}
        />
      )}
    </div>
  );
}
