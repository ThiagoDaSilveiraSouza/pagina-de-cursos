
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';

interface TestimonialsBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const TestimonialsBlock = ({ block, isEditMode = false }: TestimonialsBlockProps) => {
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

  const getColumnClass = () => {
    switch (layout.columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1';
    }
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
          'flex flex-col mb-8',
          layout.alignment === 'center' && 'items-center text-center',
          layout.alignment === 'right' && 'items-end text-right',
        )}>
          {content.title && (
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              {content.title}
            </h2>
          )}

          {content.subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground">
              {content.subtitle}
            </p>
          )}
        </div>

        <div className={cn(
          'grid gap-6',
          getColumnClass()
        )}>
          {content.items?.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              style={{
                borderWidth: `${block.styles.border.width}px`,
                borderStyle: block.styles.border.style,
                borderColor: block.styles.border.color,
                borderRadius: `${block.styles.borderRadius}px`
              }}
            >
              <div className="flex flex-col items-center text-center">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title || 'Testimonial'}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                )}
                
                <blockquote className="text-gray-700 italic mb-4">"{item.content}"</blockquote>
                
                {item.title && (
                  <cite className="not-italic font-medium text-lg">{item.title}</cite>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBlock;
