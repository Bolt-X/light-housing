import React from 'react';
import { HeroBannerSection } from './HeroBannerSection';
import { IntroductionSection } from './IntroductionSection';
import { FeaturedPropertiesSection } from './FeaturedPropertiesSection';
import { RealEstateNewsSection } from './RealEstateNewsSection';
import { DevelopmentMarks } from './DevelopmentMarks';
import { PropertyHighlightsSection } from './PropertyHighlightsSection';
import { PartnerSection } from './PartnerSection';

const StaticHome = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <HeroBannerSection />
      <IntroductionSection />
      <FeaturedPropertiesSection />
      <RealEstateNewsSection />
      <DevelopmentMarks />
      <PropertyHighlightsSection />
      <PartnerSection />
    </div>
  );
};

export default StaticHome;
