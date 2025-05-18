
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { Block, BlockType } from '@/types/editor';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';

interface ContentPropertiesProps {
  block: Block;
  handleContentChange: (field: string, value: string) => void;
}

const ContentProperties: React.FC<ContentPropertiesProps> = ({ block, handleContentChange }) => {
  const addItem = () => {
    const newItem = { title: '', content: '', image: '' };
    const currentItems = block.content.items || [];
    
    handleContentChange('items', JSON.stringify([...currentItems, newItem]));
  };
  
  const updateItem = (index: number, field: string, value: string) => {
    const items = [...(block.content.items || [])];
    items[index] = { ...items[index], [field]: value };
    
    handleContentChange('items', JSON.stringify(items));
  };
  
  const removeItem = (index: number) => {
    const items = [...(block.content.items || [])];
    items.splice(index, 1);
    
    handleContentChange('items', JSON.stringify(items));
  };
  
  // Common fields for most block types
  const renderCommonFields = () => (
    <>
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
    </>
  );
  
  // CTA fields
  const renderCtaFields = () => (
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
  );
  
  // Image field
  const renderImageField = () => (
    <div className="space-y-1">
      <Label htmlFor="image">URL da Imagem</Label>
      <Input
        id="image"
        value={block.content.image || ''}
        onChange={(e) => handleContentChange('image', e.target.value)}
        placeholder="URL da imagem"
      />
    </div>
  );
  
  // Video field for blocks that support it
  const renderVideoField = () => (
    <div className="space-y-1">
      <Label htmlFor="video">URL do Vídeo</Label>
      <Input
        id="video"
        value={block.content.video || ''}
        onChange={(e) => handleContentChange('video', e.target.value)}
        placeholder="URL do vídeo"
      />
    </div>
  );
  
  // Items fields for blocks that have items (benefits, curriculum, testimonials, faq)
  const renderItemsField = () => {
    const items = block.content.items || [];
    let itemLabel = "Item";
    let includeImage = true;
    
    switch (block.type) {
      case 'benefits': itemLabel = "Benefício"; break;
      case 'curriculum': itemLabel = "Módulo"; includeImage = false; break;
      case 'testimonials': itemLabel = "Depoimento"; break;
      case 'faq': itemLabel = "Pergunta"; includeImage = false; break;
      case 'offer': itemLabel = "Oferta"; break;
    }
    
    return (
      <div className="space-y-3 mt-4">
        <div className="flex justify-between items-center">
          <Label>Lista de {itemLabel}s</Label>
          <Button variant="outline" size="sm" onClick={addItem} type="button">
            <Plus className="w-4 h-4 mr-1" /> Adicionar
          </Button>
        </div>
        
        {items.length === 0 && (
          <p className="text-sm text-muted-foreground text-center py-4">
            Nenhum {itemLabel.toLowerCase()} adicionado. Clique no botão acima para adicionar.
          </p>
        )}
        
        {items.map((item, index) => (
          <Card key={index} className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 text-destructive"
              onClick={() => removeItem(index)}
              type="button"
            >
              <Trash2 className="w-4 h-4" />
            </Button>
            <CardContent className="pt-6 pb-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor={`item-${index}-title`}>Título</Label>
                  <Input
                    id={`item-${index}-title`}
                    value={item.title || ''}
                    onChange={(e) => updateItem(index, 'title', e.target.value)}
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor={`item-${index}-content`}>Conteúdo</Label>
                  <Textarea
                    id={`item-${index}-content`}
                    value={item.content || ''}
                    onChange={(e) => updateItem(index, 'content', e.target.value)}
                    rows={2}
                  />
                </div>
                
                {includeImage && (
                  <div className="space-y-1">
                    <Label htmlFor={`item-${index}-image`}>URL da Imagem</Label>
                    <Input
                      id={`item-${index}-image`}
                      value={item.image || ''}
                      onChange={(e) => updateItem(index, 'image', e.target.value)}
                    />
                  </div>
                )}
                
                {block.type === 'benefits' && (
                  <div className="space-y-1">
                    <Label htmlFor={`item-${index}-icon`}>Nome do Ícone</Label>
                    <Input
                      id={`item-${index}-icon`}
                      value={item.icon || ''}
                      onChange={(e) => updateItem(index, 'icon', e.target.value)}
                      placeholder="Ex: CheckCircle, Star, Award"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  };
  
  // Render fields based on block type
  const renderBlockSpecificFields = () => {
    switch (block.type) {
      case 'hero':
        return (
          <>
            {renderCommonFields()}
            {renderCtaFields()}
            {renderImageField()}
          </>
        );
        
      case 'benefits':
        return (
          <>
            {renderCommonFields()}
            {renderItemsField()}
            {renderCtaFields()}
          </>
        );
        
      case 'curriculum':
        return (
          <>
            {renderCommonFields()}
            {renderItemsField()}
            {renderCtaFields()}
          </>
        );
        
      case 'testimonials':
        return (
          <>
            {renderCommonFields()}
            {renderItemsField()}
          </>
        );
        
      case 'offer':
        return (
          <>
            {renderCommonFields()}
            {renderCtaFields()}
            {renderItemsField()}
            {renderImageField()}
          </>
        );
        
      case 'instructor':
        return (
          <>
            {renderCommonFields()}
            {renderImageField()}
            {renderCtaFields()}
          </>
        );
        
      case 'faq':
        return (
          <>
            {renderCommonFields()}
            {renderItemsField()}
            {renderCtaFields()}
          </>
        );
        
      case 'cta':
        return (
          <>
            {renderCommonFields()}
            {renderCtaFields()}
            {renderImageField()}
          </>
        );
        
      case 'footer':
        return (
          <>
            {renderCommonFields()}
            {renderItemsField()}
          </>
        );
        
      default:
        return renderCommonFields();
    }
  };
  
  return (
    <div className="space-y-3">
      {renderBlockSpecificFields()}
    </div>
  );
};

export default ContentProperties;
