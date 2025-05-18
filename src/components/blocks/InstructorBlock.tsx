
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';

interface InstructorBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const InstructorBlock = ({ block, isEditMode = false }: InstructorBlockProps) => {
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
            <p className="text-lg md:text-xl mb-8 opacity-80">
              {content.subtitle}
            </p>
          )}

          <div className="flex flex-col md:flex-row items-center gap-8 mt-4">
            {content.image && (
              <div className="w-full md:w-1/3">
                <img 
                  src={content.image} 
                  alt={content.title || "Instrutor"} 
                  className="rounded-lg w-full max-w-sm shadow-md"
                />
              </div>
            )}

            <div className="w-full md:w-2/3">
              <div className="prose max-w-none">
                {content.content && (
                  <div dangerouslySetInnerHTML={{ __html: content.content }} />
                )}

                {content.items && content.items.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
                    <div className="flex flex-wrap gap-2">
                      {content.items.map((item, index) => (
                        <span 
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                        >
                          {item.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorBlock;
