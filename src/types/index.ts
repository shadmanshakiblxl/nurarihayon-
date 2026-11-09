export interface PosterProject {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  kicker: string;
  imageSrc: string;
  aspectRatio: 'landscape' | 'portrait';
  aspectRatioLabel: string;
  photoCredit: string;
  photoDate: string;
  location: string;
  category: 'Visual Journalism' | 'Humanitarian Crisis' | 'Investigative Broadsheet' | 'Protest Typography';
  region: 'Gaza & Palestine' | 'Sudan' | 'Global Human Rights';
  headlineQuote: string;
  description: string;
  verifiedData: {
    label: string;
    value: string;
    source: string;
  }[];
  typographicBreakdown: {
    primaryFont: string;
    style: string;
    role: string;
  }[];
  advocacyContext: string;
  printSpec: string;
  dimensions: string;
}

export interface SlideConfig {
  subtitle: string;
  desc: string;
  bgColor: string;
  textColor: string;
  accentColor: string;
  graphicType: 'organicWash' | 'archivalGrid' | 'harmonicWave' | 'editorialProportion' | 'pigmentFlow';
}

export interface CampaignBrief {
  organizationName: string;
  causeOrCrisis: string;
  deliverableType: string;
  urgency: string;
  narrativeOrStats: string;
  visualPreferences: string;
  instagramOrEmail: string;
}
