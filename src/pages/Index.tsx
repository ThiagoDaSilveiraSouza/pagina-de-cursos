
import React from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import HeroBlock from '@/components/blocks/HeroBlock';
import BenefitsBlock from '@/components/blocks/BenefitsBlock';
import { useEditor } from '@/contexts/EditorContext';
import CurriculumBlock from '@/components/blocks/CurriculumBlock';
import TestimonialsBlock from '@/components/blocks/TestimonialsBlock';
import OfferBlock from '@/components/blocks/OfferBlock';
import InstructorBlock from '@/components/blocks/InstructorBlock';
import FaqBlock from '@/components/blocks/FaqBlock';
import CtaBlock from '@/components/blocks/CtaBlock';
import FooterBlock from '@/components/blocks/FooterBlock';

// This component handles the actual rendering of the landing page blocks
const LandingPageContent = () => {
  const { landingPage } = useEditor();

  const renderBlock = (block: any) => {
    if (!block.active) return null;

    switch (block.type) {
      case 'hero':
        return <HeroBlock key={block.id} block={block} />;
      case 'benefits':
        return <BenefitsBlock key={block.id} block={block} />;
      case 'curriculum':
        return <CurriculumBlock key={block.id} block={block} />;
      case 'testimonials':
        return <TestimonialsBlock key={block.id} block={block} />;
      case 'offer':
        return <OfferBlock key={block.id} block={block} />;
      case 'instructor':
        return <InstructorBlock key={block.id} block={block} />;
      case 'faq':
        return <FaqBlock key={block.id} block={block} />;
      case 'cta':
        return <CtaBlock key={block.id} block={block} />;
      case 'footer':
        return <FooterBlock key={block.id} block={block} />;
      default:
        return null;
    }
  };

  const sortedBlocks = [...landingPage.blocks].sort((a, b) => a.order - b.order);

  return (
    <div className="w-full bg-white">
      {sortedBlocks.map(renderBlock)}
    </div>
  );
};

const Index = () => {
  return (
    <EditorProvider>
      <div className="min-h-screen bg-background">
        <LandingPageContent />
      </div>
    </EditorProvider>
  );
};

export default Index;
