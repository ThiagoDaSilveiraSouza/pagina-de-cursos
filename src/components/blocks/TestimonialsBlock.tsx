import { Block } from '@/types/editor';
import React from 'react';

interface TestimonialsBlockProps {
  block: Block;
}

const TestimonialsBlock: React.FC<TestimonialsBlockProps> = ({ block }) => {
  const { content, layout } = block;
  const columns = layout.columns;

  return (
    <section
      style={{
        paddingTop: block.styles.padding.top,
        paddingBottom: block.styles.padding.bottom,
        textAlign: layout.alignment,
      }}
    >
      {content.title && <h2>{content.title}</h2>}
      {content.content && <p>{content.content}</p>}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: '1rem',
        }}
      >
        {content.items?.map((item, index) => (
          <div
            key={index}
            style={{
              border: `${block.styles.border.width}px ${block.styles.border.style} ${block.styles.border.color}`,
              borderRadius: block.styles.borderRadius,
              boxShadow:
                block.styles.shadow !== 'none'
                  ? `${block.styles.shadow} 0px 4px 6px`
                  : 'none',
              padding: '1rem',
            }}
          >
            {item.image && (
              <img
                src={item.image}
                alt={item.title || 'Testimonial'}
                style={{ width: '100%', borderRadius: '50%' }}
              />
            )}
            {item.icon && <span>{item.icon}</span>}
            {item.title && <h3>{item.title}</h3>}
            {item.content && <p>{item.content}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsBlock;
