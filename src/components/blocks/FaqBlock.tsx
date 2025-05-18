
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

interface FaqBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const FaqBlock = ({ block, isEditMode = false }: FaqBlockProps) => {
  const { content, background, styles, layout } = block;

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

  return (
    <section
      style={blockStyles}
      className={cn(
        'relative w-full',
        isEditMode && 'min-h-[200px]'
      )}
    >
      <div className="container mx-auto">
        <div className={cn(
          'flex flex-col',
          layout.alignment === 'center' && 'items-center text-center',
          layout.alignment === 'right' && 'items-end text-right',
        )}>
          {content.title && (
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {content.title}
            </h2>
          )}

          {content.subtitle && (
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              {content.subtitle}
            </p>
          )}

          <div className="w-full max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full">
              {content.items?.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {content.ctaText && (
            <div className="mt-12">
              <a 
                href={content.ctaLink || '#'}
                className="bg-primary text-primary-foreground py-3 px-6 rounded-md font-medium shadow hover:bg-primary/90 transition-colors"
              >
                {content.ctaText}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FaqBlock;
