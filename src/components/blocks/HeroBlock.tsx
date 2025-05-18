
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';

interface HeroBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const HeroBlock = ({ block, isEditMode = false }: HeroBlockProps) => {
  const { content, background, styles, layout } = block;

  const blockStyles = {
    background:
      background.type === 'gradient'
        ? background.value
        : background.type === 'image'
          ? `url(${background.value}) center/cover no-repeat`
          : background.value,
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
        'relative w-full overflow-hidden',
        isEditMode && 'min-h-[400px]'
      )}
    >
      <div className="container mx-auto">
        <div
          className={cn(
            'flex flex-col md:flex-row items-center py-12',
            layout.alignment === 'center' && 'text-center justify-center',
            layout.alignment === 'right' && 'text-right justify-end'
          )}
        >
          <div className="w-full md:w-1/2 md:pr-8">
            {content.title && (
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                {content.title}
              </h1>
            )}

            {content.subtitle && (
              <p className="text-xl md:text-2xl mb-6 text-muted-foreground">
                {content.subtitle}
              </p>
            )}

            {content.content && <p className="mb-8">{content.content}</p>}

            {content.ctaText && (
              <a
                href={content.ctaLink || '#'}
                className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
              >
                {content.ctaText}
              </a>
            )}
          </div>

          {content.image && (
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <img
                src={content.image}
                alt={content.title || 'Hero'}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroBlock;
