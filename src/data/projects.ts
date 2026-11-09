import { PosterProject, SlideConfig } from '../types';

export const SLIDE_CONFIGS: SlideConfig[] = [
  {
    subtitle: "visual journalism & photojournalism poster design",
    desc: "documentary photography blended with magazine-style editorial typography, headline callouts, and body narratives to inform and document real-world conflict.",
    bgColor: "#FBF8F3",
    textColor: "#1C1917",
    accentColor: "#C2410C",
    graphicType: "archivalGrid"
  },
  {
    subtitle: "activist art & protest typography",
    desc: "high-contrast political posters and social-issue design constructed to provoke urgency, solidarity, and moral response for human rights awareness.",
    bgColor: "#F4F7F5",
    textColor: "#141D18",
    accentColor: "#2E5E4E",
    graphicType: "organicWash"
  },
  {
    subtitle: "humanitarian crisis campaign graphics",
    desc: "specialized advocacy campaign posters highlighting the human impact of war and famine on civilians through statistics and solidarity slogans.",
    bgColor: "#FAF4F0",
    textColor: "#261915",
    accentColor: "#9A3412",
    graphicType: "harmonicWave"
  },
  {
    subtitle: "infographic social media design",
    desc: "carousel and poster layouts for digital platforms engineered with key metrics, body text captions, and evidence-backed statistics.",
    bgColor: "#F6F5F0",
    textColor: "#20201D",
    accentColor: "#854D0E",
    graphicType: "editorialProportion"
  },
  {
    subtitle: "publication & cover layouts",
    desc: "structural typographic grids, headline hierarchies, and magazine cover aesthetics engineered for editorial clarity and emotional weight.",
    bgColor: "#F2F4F7",
    textColor: "#171F29",
    accentColor: "#334155",
    graphicType: "pigmentFlow"
  }
];

export const POSTER_PROJECTS: PosterProject[] = [
  {
    id: "ala-abed",
    slug: "ala-abed-palestinian-girl",
    title: "Ala Abed — 16 Years Old",
    subtitle: "Lost Her Right Eye After An Airstrike Near Her Home",
    kicker: "Western Gaza City, Gaza Strip · October 24, 2026",
    imageSrc: "/assets/aistudio/ala_f0078a1d.png",
    aspectRatio: "landscape",
    aspectRatioLabel: "3:2 Horizontal Editorial Broadside",
    photoCredit: "Faiz Qreqa",
    photoDate: "October 24, 2026",
    location: "Western Gaza City, Gaza Strip, Palestine",
    category: "Visual Journalism",
    region: "Gaza & Palestine",
    headlineQuote: "PALESTINIAN GIRL 16 YEARS OLD · ALA ABED LOST HER RIGHT EYE AFTER AN ISRAEL'S STRIKE NEAR HER HOME",
    description: "Sixteen-year-old Ala Abed holds her prosthetic eye in front of her facial injury after surviving an airstrike that destroyed civilian homes in Western Gaza City. This layout contrasts raw documentary photojournalism with restrained sans-serif editorial typography to honor the subject's humanity and preserve irrefutable historical evidence of wartime trauma inflicted on youth.",
    verifiedData: [
      {
        label: "Documented Casualty",
        value: "Ala Abed, 16 yrs",
        source: "Field Report / Faiz Qreqa"
      },
      {
        label: "Injury",
        value: "Permanent loss of right eye & facial trauma",
        source: "Western Gaza Medical Records"
      },
      {
        label: "Context",
        value: "Residential airstrike near family home",
        source: "Independent Photojournalism"
      }
    ],
    typographicBreakdown: [
      {
        primaryFont: "Editorial Neo-Grotesque Sans",
        style: "Ultra-Light tracking-widest kicker paired with Heavy Bold Header",
        role: "Maintains somber journalistic restraint while asserting the victim's name in indelible weight."
      },
      {
        primaryFont: "Condensed Monoline",
        style: "Subdued right-column alignment",
        role: "Avoids obscuring the emotional focus of the subject's hand and prosthetic eye."
      }
    ],
    advocacyContext: "Designed to counteract algorithmic censorship and statistical desensitization by bringing the undeniable physical reality of civilian trauma into public exhibition spaces and print broadsheets.",
    printSpec: "Recommended print size: A2 / A1 (300 DPI, Coated Matte Paper)",
    dimensions: "3840 × 2560 px (High-Res)"
  },
  {
    id: "this-is-sudan",
    slug: "this-is-sudan-humanitarian-crisis",
    title: "This Is Sudan",
    subtitle: "Children Under Fire & 12.7M Women At Risk",
    kicker: "Darfur / Eastern Chad Border Displacement Camps",
    imageSrc: "/assets/aistudio/New_Project_sudan_6a4412f3.png",
    aspectRatio: "portrait",
    aspectRatioLabel: "2:3 Vertical Placard",
    photoCredit: "Dan Kiton",
    photoDate: "2024–2026",
    location: "Darfur / Border Displacement Zones, Sudan",
    category: "Humanitarian Crisis",
    region: "Sudan",
    headlineQuote: "more than 4,300 children have been killed or maimed · approximately 12.7 million women and girls are vulnerable to violence · THIS IS SUDAN",
    description: "A displaced Sudanese mother in a traditional patterned blue thob holds her infant swaddled against dust and extreme desert heat. The poster confronts international media neglect of the war in Sudan, embedding verified statistics on child casualties and sexual violence directly across the lower third in stark high-contrast typography.",
    verifiedData: [
      {
        label: "Children Affected",
        value: "4,300+ killed or maimed",
        source: "UNICEF / UN OCHA Sudan Monitoring"
      },
      {
        label: "Vulnerable Populations",
        value: "12.7 Million women and girls",
        source: "UNFPA Humanitarian Flash Report"
      },
      {
        label: "Displacement Scale",
        value: "World's largest internal displacement crisis",
        source: "IOM DTM Tracking"
      }
    ],
    typographicBreakdown: [
      {
        primaryFont: "Architectural Heavy Sans",
        style: "All-Caps 'THIS IS SUDAN' in solid white block",
        role: "Grounds the composition with an unapologetic territorial declaration demanding global recognition."
      },
      {
        primaryFont: "Lower-case High-Legibility Sans",
        style: "Selective bolding on 'killed' and 'violence'",
        role: "Rapid optical scanning for digital carousel and street poster visibility."
      }
    ],
    advocacyContext: "Created for international Sudan emergency solidarity campaigns, student teach-ins, and humanitarian donation drives.",
    printSpec: "Recommended print size: A3 / A2 (300 DPI, Heavyweight Uncoated Stock)",
    dimensions: "2400 × 3600 px (High-Res)"
  },
  {
    id: "gazas-children",
    slug: "gazas-children-investigative-cover",
    title: "Gaza's Children",
    subtitle: "50,000+ Killed or Injured · Famine, Malnutrition & US Arms Pipeline",
    kicker: "Northern Gaza Strip Medical Enclaves",
    imageSrc: "/assets/aistudio/806520659_2976735499163465_3000962152866828389_n_c1eb063a.jpg",
    aspectRatio: "portrait",
    aspectRatioLabel: "3:4 Magazine & Broadsheet Cover",
    photoCredit: "Ahmed Jihad Ibrahim Al-arini",
    photoDate: "2024–2026",
    location: "Gaza Strip, Palestine",
    category: "Investigative Broadsheet",
    region: "Gaza & Palestine",
    headlineQuote: "$21.7B U.S. AID TO ISRAEL, 2023–2025 · 50,000+ CHILDREN KILLED OR INJURED · GAZA'S CHILDREN",
    description: "An emaciated infant cradled by their distraught mother during the manufactured starvation campaign in Gaza. Styled with the formal gravity of a historic investigative journal, the layout incorporates an authoritative red outer framing border, classical high-contrast serif typography, and verifiable forensic data on international military financing and UN-verified child death proportions.",
    verifiedData: [
      {
        label: "Child Casualties",
        value: "50,000+ killed or severely injured",
        source: "Gaza Ministry of Health / UN OHCHR"
      },
      {
        label: "Verified Proportion",
        value: "44% of verified fatalities are children",
        source: "UN Human Rights Office Six-Month Analysis"
      },
      {
        label: "Foreign Military Aid",
        value: "$21.7 Billion approved 2023–2025",
        source: "Congressional Research Service / Brown Costs of War"
      }
    ],
    typographicBreakdown: [
      {
        primaryFont: "Classical High-Contrast Display Serif",
        style: "High-contrast strokes, tight tracking ('GAZA'S CHILDREN')",
        role: "Evokes the timeless solemnity of historic museum monographs and legal indictments."
      },
      {
        primaryFont: "Forensic Red Border & Columnar Body",
        style: "Outer red hairline margin with justified body text",
        role: "Signals emergency urgency and structural complicity."
      }
    ],
    advocacyContext: "Utilized by human rights advocates and legal monitors submitting evidence to global forums, as well as educational campus displays.",
    printSpec: "Recommended print size: A2 / 18×24 in (300 DPI, Archival Satin Finish)",
    dimensions: "2480 × 3508 px (High-Res)"
  },
  {
    id: "you-can-see-nothing",
    slug: "you-can-see-nothing-anti-war-typography",
    title: "You Can See Nothing",
    subtitle: "The Architecture of Complicity & Erasure",
    kicker: "Civilian Destruction Under Rubble, Gaza Strip",
    imageSrc: "/assets/aistudio/858547748_3021393858030962_260807845469921867_n_4dd9354b.jpg",
    aspectRatio: "portrait",
    aspectRatioLabel: "3:4 Protest Placard & Street Broadside",
    photoCredit: "Documentary Field Photojournalism Archives",
    photoDate: "2024–2026",
    location: "Gaza Strip, Palestine",
    category: "Protest Typography",
    region: "Global Human Rights",
    headlineQuote: "A Genocide by Israel and USA Backed Government · YOU CAN SEE NOTHING",
    description: "The lifeless lower half of a victim buried beneath massive concrete rubble slabs, shrouded in coarse fabric with a dust-caked, blood-streaked foot exposed. The typography delivers a searing moral indictment against international media apathy, political denialism, and institutional complicity.",
    verifiedData: [
      {
        label: "Core Theme",
        value: "State denialism & media blindness",
        source: "Humanitarian Advocacy Monograph"
      },
      {
        label: "Debris & Unrecovered",
        value: "10,000+ souls estimated missing under rubble",
        source: "Palestinian Civil Defense Records"
      },
      {
        label: "Direct Complicity",
        value: "Joint military & diplomatic shielding",
        source: "International Court of Justice Dossiers"
      }
    ],
    typographicBreakdown: [
      {
        primaryFont: "Stark Modernist Grotesque",
        style: "Massive uppercase typography directly anchored over shattered concrete",
        role: "Forces the viewer to confront the word 'NOTHING' against the devastating presence of human remains."
      },
      {
        primaryFont: "Compact Upper Kicker",
        style: "Tracked monoline headline 'A Genocide by Israel and USA Backed Government'",
        role: "Names the responsible state actors without euphemism or hedge."
      }
    ],
    advocacyContext: "Printed extensively for street rallies, cultural boycotts, and direct-action visual installations outside diplomatic embassies.",
    printSpec: "Recommended print size: A2 / A1 (300 DPI, Heavy Cardstock for Street Display)",
    dimensions: "2480 × 3508 px (High-Res)"
  }
];

export const ADVOCACY_STATISTICS = [
  {
    metric: "100%",
    label: "Pro-Bono Pledge",
    detail: "Every design for verified humanitarian, activist, and grassroots causes is executed free of charge."
  },
  {
    metric: "50,000+",
    label: "Children Documented",
    detail: "Statistical accuracy vetted against UN OCHA, UNICEF, WHO, and field medical registries."
  },
  {
    metric: "0$",
    label: "Commercial Fee",
    detail: "No paywalls, no monetization. Open-access visual journalism for public advocacy and justice."
  },
  {
    metric: "300 DPI",
    label: "Print-Ready Master Assets",
    detail: "High-resolution broadsheets and street placards ready for community and campus reproduction."
  }
];
