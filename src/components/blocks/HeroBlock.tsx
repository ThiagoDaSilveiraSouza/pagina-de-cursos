
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight } from 'lucide-react';

interface HeroBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const HeroBlock = ({ block, isEditMode = false }: HeroBlockProps) => {
  const { content, background, styles, layout } = block;

  // Dynamic styles based on block properties
  const blockStyles = {
    background: 
      background.type === 'gradient' ? background.value :
      background.type === 'image' ? `url(${background.value}) center/cover no-repeat` :
      background.value,
    paddingTop: `${styles.padding.top}px`,
    paddingBottom: `${styles.padding.bottom}px`,
    paddingLeft: `${styles.padding.left}px`,
    paddingRight: `${styles.padding.right}px`,
    marginTop: `${styles.margin.top}px`,
    marginBottom: `${styles.margin.bottom}px`,
    borderRadius: `${styles.borderRadius}px`,
    boxShadow: styles.shadow === 'none' ? 'none' : `var(--shadow-${styles.shadow})`,
    borderWidth: `${styles.border.width}px`,
    borderStyle: styles.border.style,
    borderColor: styles.border.color,
  };

  const getColumnClass = () => {
    switch(layout.columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 lg:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1';
    }
  };

  return (
    <section 
      style={blockStyles}
      className={cn(
        'relative w-full overflow-hidden',
        isEditMode && 'min-h-[300px]',
        styles.shadow !== 'none' && 'shadow-course'
      )}
    >
      <div className="container mx-auto">
        <div className={cn(
          'grid gap-6 items-center',
          getColumnClass(),
          layout.alignment === 'center' && 'text-center',
          layout.alignment === 'right' && 'text-right',
        )}>
          <div className={cn(
            'flex flex-col gap-4',
            layout.verticalAlignment === 'center' && 'justify-center',
            layout.verticalAlignment === 'bottom' && 'justify-end',
          )}>
            {content.title && (
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                {content.title}
              </h1>
            )}
            
            {content.subtitle && (
              <h2 className="text-xl md:text-2xl font-semibold opacity-90">
                {content.subtitle}
              </h2>
            )}
            
            {content.content && (
              <p className="text-base md:text-lg max-w-prose mx-auto">
                {content.content}
              </p>
            )}
            
            {content.ctaText && (
              <div className="mt-4">
                <Button 
                  size="lg" 
                  className="font-semibold text-base gap-2"
                  asChild
                >
                  <a href={content.ctaLink || '#'}>
                    {content.ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            )}
          </div>
          
          {content.image && layout.columns > 1 && (
            <div className={cn(
              'flex',
              layout.alignment === 'center' && 'justify-center',
              layout.alignment === 'right' && 'justify-end',
              layout.alignment === 'left' && 'justify-start',
            )}>
              <img 
                src={content.image} 
                alt={content.title || 'Hero image'} 
                className="max-w-full h-auto rounded-md shadow-lg object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
