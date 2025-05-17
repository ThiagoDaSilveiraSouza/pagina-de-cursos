import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';
import { BookOpen, Play, FileText, CheckCircle } from 'lucide-react';

interface CurriculumBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const CurriculumBlock = ({ block, isEditMode = false }: CurriculumBlockProps) => {
  const { content, background, styles, layout } = block;

  const getIcon = (iconName?: string) => {
    if (!iconName) return <BookOpen className="h-6 w-6 text-course-600" />;

    switch (iconName) {
      case 'book-open': return <BookOpen className="h-6 w-6 text-course-600" />;
      case 'play': return <Play className="h-6 w-6 text-course-600" />;
      case 'file-text': return <FileText className="h-6 w-6 text-course-600" />;
      case 'check-circle': return <CheckCircle className="h-6 w-6 text-course-600" />;
      default: return <BookOpen className="h-6 w-6 text-course-600" />;
    }
  };

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

          {content.items && content.items.length > 0 && (
            <div className={cn(
              'grid gap-6 w-full mt-6',
              getColumnClass()
            )}>
              {content.items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-2 mb-2 text-course-600">
                    {getIcon(item.icon)}
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CurriculumBlock;
