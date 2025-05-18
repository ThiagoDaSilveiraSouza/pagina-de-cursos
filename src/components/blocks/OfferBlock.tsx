
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface OfferBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const OfferBlock = ({ block, isEditMode = false }: OfferBlockProps) => {
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

          <div className="bg-white rounded-xl shadow-lg border border-muted p-8 w-full max-w-xl">
            <div className="flex flex-col gap-6">
              <div>
                <span className="text-sm font-medium text-muted-foreground">Oferta por tempo limitado</span>
                <h3 className="text-3xl font-bold mt-1">R$ 497,00</h3>
                <div className="flex items-center mt-2">
                  <span className="text-muted-foreground line-through mr-2">R$ 997,00</span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">-50% OFF</span>
                </div>
              </div>

              <div className="space-y-3">
                {content.items?.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-2 mt-0.5 text-green-600">
                      <Check size={16} />
                    </div>
                    <div>
                      <p className="text-sm">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              {content.ctaText && (
                <a 
                  href={content.ctaLink || '#'}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 w-full py-3 text-center rounded-md font-medium text-lg shadow-sm"
                >
                  {content.ctaText}
                </a>
              )}

              {content.content && (
                <p className="text-xs text-center text-muted-foreground">{content.content}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBlock;
