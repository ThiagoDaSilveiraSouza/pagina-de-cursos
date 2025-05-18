
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Block } from '@/types/editor';

interface ContentPropertiesProps {
  block: Block;
  handleContentChange: (field: string, value: string) => void;
}

const ContentProperties: React.FC<ContentPropertiesProps> = ({ block, handleContentChange }) => {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={block.content.title || ''}
          onChange={(e) => handleContentChange('title', e.target.value)}
        />
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="subtitle">Subtítulo</Label>
        <Input
          id="subtitle"
          value={block.content.subtitle || ''}
          onChange={(e) => handleContentChange('subtitle', e.target.value)}
        />
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="content">Conteúdo</Label>
        <Textarea
          id="content"
          value={block.content.content || ''}
          onChange={(e) => handleContentChange('content', e.target.value)}
          rows={3}
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="ctaText">Texto do CTA</Label>
          <Input
            id="ctaText"
            value={block.content.ctaText || ''}
            onChange={(e) => handleContentChange('ctaText', e.target.value)}
          />
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="ctaLink">Link do CTA</Label>
          <Input
            id="ctaLink"
            value={block.content.ctaLink || ''}
            onChange={(e) => handleContentChange('ctaLink', e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-1">
        <Label htmlFor="image">URL da Imagem</Label>
        <Input
          id="image"
          value={block.content.image || ''}
          onChange={(e) => handleContentChange('image', e.target.value)}
          placeholder="URL da imagem"
        />
      </div>
    </div>
  );
};

export default ContentProperties;
