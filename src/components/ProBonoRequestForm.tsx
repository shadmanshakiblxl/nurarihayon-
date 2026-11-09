import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const ProBonoRequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nameOrOrg: '',
    cause: 'Gaza & Palestine Humanitarian Awareness',
    deliverable: 'Social Media Carousel & Poster (4:5 / 1:1)',
    urgency: 'Emergency (24–48 Hours)',
    headlineOrStats: '',
    sourceCredit: '',
    contactHandle: ''
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sampleGaza = () => {
    setFormData({
      nameOrOrg: 'Student Coalition for Justice in Palestine',
      cause: 'Gaza & Palestine Humanitarian Awareness',
      deliverable: 'Street Protest Placard (A2 / A3 Print)',
      urgency: 'Emergency (24–48 Hours)',
      headlineOrStats: 'End the Blockade · Over 50,000 Children Dead or Maimed · Lift the Siege on Northern Gaza Hospitals',
      sourceCredit: 'Faiz Qreqa / UN OCHA Flash Update #312',
      contactHandle: '@studentcoalition_pal'
    });
  };

  const sampleSudan = () => {
    setFormData({
      nameOrOrg: 'Sudan Emergency Medical Solidarity Fund',
      cause: 'Sudan Famine & Civilian Displacement',
      deliverable: 'Infographic Carousel & Digital Poster',
      urgency: '3–5 Days',
      headlineOrStats: 'This is Sudan: 12.7M Women at risk, famine declared in Zamzam camp, zero international coverage.',
      sourceCredit: 'UNICEF Sudan & Dan Kiton field photographs',
      contactHandle: '@sudanemergency_fund'
    });
  };

  const formattedBrief = `COLLABORATION DESIGN BRIEF FOR NURARIHAYON
--------------------------------------------------
Initiative / Requester: ${formData.nameOrOrg || '[Your Name / Org]'}
Cause & Crisis: ${formData.cause}
Deliverable Format: ${formData.deliverable}
Urgency / Timeline: ${formData.urgency}
Headline / Verified Stats: ${formData.headlineOrStats || '[Specify headline or data to highlight]'}
Photo Source / Verification: ${formData.sourceCredit || '[Provide photographer name or UN report]'}
Contact Handle: ${formData.contactHandle || '[Instagram / Email]'}
--------------------------------------------------
Pledge: Free for human rights advocacy & humanitarian mobilization.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenInstagram = () => {
    navigator.clipboard.writeText(formattedBrief);
    setCopied(true);
    setSubmitted(true);
    window.open('https://www.instagram.com/nurarihayon/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="probono" className="py-24 sm:py-32 px-6 sm:px-8 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Context & Ethos */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="text-xs uppercase tracking-[0.25em] text-[#C2410C] font-light">
            Collaboration & Advocacy Creative Desk
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-stone-900 tracking-tight leading-tight">
            Request for collaboration
          </h2>
          <p className="text-sm sm:text-base font-light text-stone-600 leading-relaxed">
            Need urgent street placards, an emergency awareness carousel, or a broadsheet cover for a protest, relief fund, or grassroots rally? Draft your requirements below and dispatch directly to nurarihayon.
          </p>

          <div className="p-6 bg-[#FAF9F7] border border-stone-200/90 space-y-3 shadow-xs">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-800 font-medium">
              <Sparkles className="w-4 h-4 text-[#C2410C]" />
              <span>What I Design in Collaboration</span>
            </div>
            <ul className="text-xs text-stone-600 space-y-2 font-light">
              <li className="flex items-center gap-2">
                <span className="text-[#C2410C]">·</span>
                Protest Placards & High-Res Street Posters (A3/A2)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C2410C]">·</span>
                Editorial Publication Covers & Investigative Broadsheets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C2410C]">·</span>
                Instagram Infographic Carousels & Data Cards
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C2410C]">·</span>
                Emergency Humanitarian Relief Fund Visual Identities
              </li>
            </ul>
          </div>

          {/* Quick preset templates */}
          <div className="space-y-2 pt-2">
            <div className="text-xs text-stone-500 uppercase tracking-wider font-light">
              Quick Load Sample Brief:
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={sampleGaza}
                className="text-xs px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer transition-colors"
              >
                Gaza Emergency Protest Brief
              </button>
              <button
                type="button"
                onClick={sampleSudan}
                className="text-xs px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 border border-stone-200 cursor-pointer transition-colors"
              >
                Sudan Awareness Brief
              </button>
            </div>
          </div>

          <div className="p-4 bg-stone-50 border border-stone-200 text-xs text-stone-600 flex items-center justify-between">
            <span>Direct Instagram:</span>
            <a
              href="https://www.instagram.com/nurarihayon/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C2410C] hover:text-stone-900 transition-colors flex items-center gap-1 font-mono font-medium"
            >
              @nurarihayon
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive Brief Generator */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 bg-[#FCFAF8] border border-stone-200 p-6 sm:p-8 space-y-6 shadow-[0_2px_16px_rgba(0,0,0,0.02)]"
        >
          <div className="flex items-center justify-between border-b border-stone-200 pb-4">
            <div>
              <h3 className="text-lg font-light text-stone-900 tracking-tight">Campaign Brief Generator</h3>
              <p className="text-xs text-stone-500 font-light">Specify your requirements and dispatch directly to nurarihayon</p>
            </div>
            <span className="text-xs font-mono text-stone-700 bg-stone-100 px-2 py-1 border border-stone-200">
              OPEN SOLIDARITY
            </span>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleOpenInstagram(); }} className="space-y-4 text-xs">
            {/* Field: Name / Organization */}
            <div>
              <label className="block text-stone-700 uppercase tracking-wider mb-1.5 font-light">
                Requester / Organization / Movement
              </label>
              <input
                type="text"
                placeholder="e.g. Palestine Solidarity Encampment, Khartoum Relief Network, or Independent Activist"
                value={formData.nameOrOrg}
                onChange={(e) => setFormData({ ...formData, nameOrOrg: e.target.value })}
                className="w-full bg-white border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                required
              />
            </div>

            {/* Field: Cause & Deliverable Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 uppercase tracking-wider mb-1.5 font-light">
                  Crisis / Human Rights Cause
                </label>
                <select
                  value={formData.cause}
                  onChange={(e) => setFormData({ ...formData, cause: e.target.value })}
                  className="w-full bg-white border border-stone-300 px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                >
                  <option value="Gaza & Palestine Humanitarian Awareness">Gaza & Palestine Humanitarian Awareness</option>
                  <option value="Sudan Famine & Civilian Displacement">Sudan Famine & Civilian Displacement</option>
                  <option value="Democratic Republic of the Congo Conflict Minerals">DR Congo Human Rights & Mining</option>
                  <option value="Anti-War / Anti-Imperialist Student Organizing">Anti-War / Campus Coalition</option>
                  <option value="Police Brutality & Civil Resistance">Civil Liberties & Protest Defense</option>
                  <option value="Other Humanitarian Emergency">Other Humanitarian Emergency</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 uppercase tracking-wider mb-1.5 font-light">
                  Deliverable Format
                </label>
                <select
                  value={formData.deliverable}
                  onChange={(e) => setFormData({ ...formData, deliverable: e.target.value })}
                  className="w-full bg-white border border-stone-300 px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                >
                  <option value="Street Protest Placard (A2 / A3 Print)">Street Protest Placard (A2 / A3 Print)</option>
                  <option value="Social Media Carousel & Poster (4:5 / 1:1)">Social Media Carousel & Poster (4:5 / 1:1)</option>
                  <option value="Editorial Publication Cover & Broadsheet">Editorial Publication Cover & Broadsheet</option>
                  <option value="Digital Banner & Web Identity">Digital Banner & Web Identity</option>
                  <option value="Full Campaign Suite">Full Multi-Format Campaign Suite</option>
                </select>
              </div>
            </div>

            {/* Field: Urgency & Contact Handle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-stone-700 uppercase tracking-wider mb-1.5 font-light">
                  Urgency & Deadline
                </label>
                <select
                  value={formData.urgency}
                  onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                  className="w-full bg-white border border-stone-300 px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                >
                  <option value="Emergency (24–48 Hours)">Emergency (24–48 Hours)</option>
                  <option value="3–5 Days">3–5 Days</option>
                  <option value="1–2 Weeks">1–2 Weeks</option>
                  <option value="Open Timeline">Open Timeline</option>
                </select>
              </div>

              <div>
                <label className="block text-stone-700 uppercase tracking-wider mb-1.5 font-light">
                  Your Instagram Handle / Email
                </label>
                <input
                  type="text"
                  placeholder="@yourhandle or organizer@ngo.org"
                  value={formData.contactHandle}
                  onChange={(e) => setFormData({ ...formData, contactHandle: e.target.value })}
                  className="w-full bg-white border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
                  required
                />
              </div>
            </div>

            {/* Field: Headline / Statistics */}
            <div>
              <label className="block text-stone-700 uppercase tracking-wider mb-1.5 font-light">
                Headline Text, Slogan, or Key Statistics
              </label>
              <textarea
                rows={3}
                placeholder="What words or verified numbers should anchor the design? (e.g. casualty toll, protest slogan, call to action)"
                value={formData.headlineOrStats}
                onChange={(e) => setFormData({ ...formData, headlineOrStats: e.target.value })}
                className="w-full bg-white border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors resize-none"
                required
              />
            </div>

            {/* Field: Photo Credit or Reference */}
            <div>
              <label className="block text-stone-700 uppercase tracking-wider mb-1.5 font-light">
                Photo Source, Link, or Photographer Credit
              </label>
              <input
                type="text"
                placeholder="e.g. Field photo by [Photographer Name], or link to high-res drive, or UN report link"
                value={formData.sourceCredit}
                onChange={(e) => setFormData({ ...formData, sourceCredit: e.target.value })}
                className="w-full bg-white border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-800 transition-colors"
              />
            </div>

            {/* Live Brief Output & Actions */}
            <div className="pt-2">
              <div className="flex items-center justify-between text-[11px] text-stone-500 mb-1.5 font-mono">
                <span>FORMATTED OUTPUT (COPIES AUTOMATICALLY)</span>
                {copied && <span className="text-emerald-700 font-sans font-medium">Copied to Clipboard!</span>}
              </div>
              <pre className="p-3 bg-white border border-stone-200 text-[11px] text-stone-700 font-mono overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-36">
                {formattedBrief}
              </pre>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
              <button
                type="button"
                onClick={handleCopy}
                className="w-full sm:w-auto flex-1 px-4 py-3 bg-stone-100 hover:bg-stone-200 text-stone-800 border border-stone-300 text-xs uppercase tracking-wider font-light flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied Brief' : 'Copy Brief to Clipboard'}</span>
              </button>

              <button
                type="submit"
                className="w-full sm:w-auto flex-1 px-4 py-3 bg-stone-900 text-stone-50 hover:bg-stone-800 text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>Send via Instagram DM</span>
              </button>
            </div>
          </form>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-3"
            >
              <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-medium text-stone-900">Brief copied to clipboard & Instagram opened!</div>
                <div className="text-stone-600 mt-1">
                  Paste the text directly into @nurarihayon's Instagram DMs. We'll respond as soon as humanly possible to confirm specs and begin drafting.
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
