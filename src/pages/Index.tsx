
import React from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';
import HeroBlock from '@/components/blocks/HeroBlock';
import BenefitsBlock from '@/components/blocks/BenefitsBlock';
import { useEditor } from '@/contexts/EditorContext';

// This component handles the actual rendering of the landing page blocks
const LandingPageContent = () => {
  const { landingPage } = useEditor();
  
  const renderBlock = (block: any) => {
    if (!block.active) return null;
    
    switch(block.type) {
      case 'hero':
        return <HeroBlock key={block.id} block={block} />;
      case 'benefits':
        return <BenefitsBlock key={block.id} block={block} />;
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
        <div className="fixed top-4 right-4 z-50">
          <Link to="/admin">
            <Button variant="outline" className="gap-2 bg-white shadow-md">
              <Settings size={18} />
              Editar Página
            </Button>
          </Link>
        </div>
        
        <LandingPageContent />
      </div>
    </EditorProvider>
  );
};

export default Index;
