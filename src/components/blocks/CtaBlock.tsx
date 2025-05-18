
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';

interface CtaBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const CtaBlock = ({ block, isEditMode = false }: CtaBlockProps) => {
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
        <div className="max-w-4xl mx-auto py-10 px-6 rounded-lg shadow-lg bg-card">
          <div className={cn(
            'flex flex-col',
            layout.alignment === 'center' && 'items-center text-center',
            layout.alignment === 'right' && 'items-end text-right',
          )}>
            {content.title && (
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {content.title}
              </h2>
            )}

            {content.subtitle && (
              <p className="text-lg md:text-xl mb-6 max-w-2xl text-muted-foreground">
                {content.subtitle}
              </p>
            )}

            {content.content && (
              <p className="mb-8 max-w-xl">
                {content.content}
              </p>
            )}

            {content.ctaText && (
              <a 
                href={content.ctaLink || '#'}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-4 px-8 rounded-md text-lg shadow-lg transition-colors"
              >
                {content.ctaText}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBlock;
