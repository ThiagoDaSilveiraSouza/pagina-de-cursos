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

  const getColumnClass = () => {
    switch (layout.columns) {
      case 1:
        return 'grid-cols-1';
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';
      default:
        return 'grid-cols-1';
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
        {content.title && (
          <h2
            className={cn(
              'text-2xl md:text-3xl font-bold mb-8',
              layout.alignment === 'center' && 'text-center',
              layout.alignment === 'right' && 'text-right'
            )}
          >
            {content.title}
          </h2>
        )}

        <div className={cn('grid gap-6', getColumnClass())}>
          {Array.isArray(content.testimonials) &&
            content.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-4 border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  {testimonial.image && (
                    <img
                      src={testimonial.image}
                      alt={testimonial.title}
                      className="w-14 h-14 rounded-full object-cover border border-gray-200"
                    />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsBlock;
