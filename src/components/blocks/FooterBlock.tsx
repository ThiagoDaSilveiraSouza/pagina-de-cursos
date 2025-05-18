
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';

interface FooterBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const FooterBlock = ({ block, isEditMode = false }: FooterBlockProps) => {
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
      case 2: return 'grid-cols-2';
      case 3: return 'grid-cols-3';
      case 4: return 'grid-cols-4';
      default: return 'grid-cols-1';
    }
  };

  return (
    <footer
      style={blockStyles}
      className={cn(
        'relative w-full',
        isEditMode && 'min-h-[200px]'
      )}
    >
      <div className="container mx-auto">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            {content.title && (
              <h2 className="text-2xl font-semibold mb-2">
                {content.title}
              </h2>
            )}
            
            {content.content && (
              <p className="text-sm opacity-75 max-w-xs">
                {content.content}
              </p>
            )}
          </div>
          
          <div className={cn(
            'grid gap-8 sm:gap-12 mt-8 md:mt-0',
            getColumnClass()
          )}>
            {content.items?.map((item, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold mb-2 uppercase">{item.title}</h3>
                <ul className="space-y-2">
                  {item.content?.split('\n').map((link, i) => {
                    const [text, url] = link.split('|');
                    return (
                      <li key={i}>
                        <a href={url || '#'} className="text-sm hover:underline">
                          {text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <hr className="my-6 border-muted sm:mx-auto" />
        
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm opacity-75">© {new Date().getFullYear()} Todos os direitos reservados.</span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {/* Social media icons could be added here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBlock;
