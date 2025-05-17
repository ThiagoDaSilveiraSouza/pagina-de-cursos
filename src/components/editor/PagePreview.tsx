
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import HeroBlock from '../blocks/HeroBlock';
import BenefitsBlock from '../blocks/BenefitsBlock';
import CurriculumBlock from '../blocks/CurriculumBlock';
import TestimonialsBlock from '../blocks/TestimonialsBlock';

const PagePreview = () => {
  const { landingPage, devicePreview } = useEditor();

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
      default:
        return (
          <div key={block.id} className="p-6 border-2 border-dashed border-gray-300 bg-gray-50 rounded-md text-center">
            <h3 className="text-lg font-medium text-gray-500">Bloco {block.name}</h3>
            <p className="text-sm text-gray-400">Tipo: {block.type}</p>
          </div>
        );
    }
  };

  const sortedBlocks = [...landingPage.blocks].sort((a, b) => a.order - b.order);

  return (
    <div className={`w-full bg-gray-50 overflow-y-auto ${devicePreview === 'mobile' ? 'max-w-sm mx-auto border-x border-gray-300 h-[calc(100vh-10rem)]' : 'h-[calc(100vh-6rem)]'}`}>
      {sortedBlocks.map(renderBlock)}
    </div>
  );
};

export default PagePreview;
