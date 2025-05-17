
import React from 'react';
import { Block } from '@/types/editor';
import { cn } from '@/lib/utils';
import { FileText, CircleCheck, Book, Image, MessageSquare, Video, ArrowRight, BookOpen, CheckCircle, CircleMinus, CirclePlus, Link, Play, Quote, ChevronUp, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface BenefitsBlockProps {
  block: Block;
  isEditMode?: boolean;
}

const BenefitsBlock = ({ block, isEditMode = false }: BenefitsBlockProps) => {
  const { content, background, styles, layout } = block;

  const getIcon = (iconName?: string) => {
    if (!iconName) return <CircleCheck className="h-8 w-8 text-course-600" />;
    
    switch(iconName) {
      case 'file-text': return <FileText className="h-8 w-8 text-course-600" />;
      case 'circle-check': return <CircleCheck className="h-8 w-8 text-course-600" />;
      case 'book': return <Book className="h-8 w-8 text-course-600" />;
      case 'image': return <Image className="h-8 w-8 text-course-600" />;
      case 'message-square': return <MessageSquare className="h-8 w-8 text-course-600" />;
      case 'video': return <Video className="h-8 w-8 text-course-600" />;
      case 'arrow-right': return <ArrowRight className="h-8 w-8 text-course-600" />;
      case 'book-open': return <BookOpen className="h-8 w-8 text-course-600" />;
      case 'circle-minus': return <CircleMinus className="h-8 w-8 text-course-600" />;
      case 'circle-plus': return <CirclePlus className="h-8 w-8 text-course-600" />;
      case 'link': return <Link className="h-8 w-8 text-course-600" />;
      case 'play': return <Play className="h-8 w-8 text-course-600" />;
      case 'quote': return <Quote className="h-8 w-8 text-course-600" />;
      default: return <CircleCheck className="h-8 w-8 text-course-600" />;
    }
  };

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
              'grid gap-6 w-full mt-8',
              getColumnClass()
            )}>
              {content.items.map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <div className="mb-4">
                    {getIcon(item.icon)}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BenefitsBlock;
