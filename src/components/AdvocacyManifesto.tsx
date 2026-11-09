import React from 'react';
import { ADVOCACY_STATISTICS } from '../data/projects';
import { HeartHandshake, Eye, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export const AdvocacyManifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-[#0c0e11] text-white border-y border-white/10 relative overflow-hidden">
      {/* Subtle organic light wash in background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#EA580C]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header with smooth reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[#EA580C] font-light mb-3">
            The Ethos · Independent Humanitarian Design
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight">
            "whatever you need, just knock me, I'll do it for free."
          </h2>
          <p className="text-base sm:text-lg font-light text-white/70 mt-6 leading-relaxed">
            nurarihayon is an independent visual journalism and advocacy design practice committed to documenting wartime displacement, censorship, and human rights crises without commercial or financial barriers.
          </p>
        </motion.div>

        {/* 3 Pillars Grid with Staggered Scroll-Reveal and Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="p-8 bg-[#13161B] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xs bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EA580C]/40 transition-colors">
                <HeartHandshake className="w-5 h-5 text-[#EA580C]" />
              </div>
              <h3 className="text-xl font-light text-white tracking-tight">
                Solidarity Over Capital
              </h3>
              <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed">
                Design is not neutral; silence during atrocities is complicity. Grassroots organizers, Palestinian youth coalitions, Sudan relief groups, and student activists are never charged a penny. Every campaign asset is produced in full solidarity.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
              PILLAR 01 · SOLIDARITY
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="p-8 bg-[#13161B] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xs bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
                <Eye className="w-5 h-5 text-white/90" />
              </div>
              <h3 className="text-xl font-light text-white tracking-tight">
                Forensic & Journalistic Truth
              </h3>
              <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed">
                Every casualty statistic and aid figure is vetted against UN OCHA, UNICEF, WHO, and field monitors. Photojournalists risking their lives on the ground are prominently credited and honored in every layout.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
              PILLAR 02 · VERIFIED CITATIONS
            </div>
          </motion.div>

          {/* Pillar 3 */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="p-8 bg-[#13161B] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between space-y-6 shadow-lg group"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xs bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#EA580C]/40 transition-colors">
                <ShieldAlert className="w-5 h-5 text-[#EA580C]" />
              </div>
              <h3 className="text-xl font-light text-white tracking-tight">
                Visual Dignity & Permanence
              </h3>
              <p className="text-xs sm:text-sm font-light text-white/70 leading-relaxed">
                Countering compassion fatigue through razor-sharp typography, classical editorial grids, and poignant framing that honors human dignity and withstands the scrutiny of history.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 text-[11px] font-mono text-white/40">
              PILLAR 03 · PERMANENT RECORD
            </div>
          </motion.div>
        </div>

        {/* Subsidiary Dark Quantified Adjacency Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-[#13161B] border border-white/10"
        >
          {ADVOCACY_STATISTICS.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extralight text-white font-mono tracking-tight">
                {item.metric}
              </div>
              <div className="text-xs uppercase tracking-wider text-white/85 font-medium pt-1">
                {item.label}
              </div>
              <p className="text-xs font-light text-white/55 leading-relaxed pt-1">
                {item.detail}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
