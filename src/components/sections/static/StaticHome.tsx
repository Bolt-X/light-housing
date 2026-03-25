import React from 'react';
import { HeroBannerSection } from './HeroBannerSection';
import { IntroductionSection } from './IntroductionSection';
import { FeaturedPropertiesSection } from './FeaturedPropertiesSection';
import { DevelopmentMarks } from './DevelopmentMarks';
import { NewsSection } from './NewsSection';
import { PartnerSection } from './PartnerSection';
import { ProjectsSection } from './ProjectsSection';
import HomePurchaseNotebook from './HomePurchaseNotebook';
import GreenFreqSection from './GreenFreqSection';

const StaticHome = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <HeroBannerSection />
      <IntroductionSection />
      <FeaturedPropertiesSection />
      <GreenFreqSection />
      <ProjectsSection />
      <HomePurchaseNotebook />
      {/* <DevelopmentMarks /> */}
      <NewsSection />
      <PartnerSection />
    </div>
  );
};

export default StaticHome;
