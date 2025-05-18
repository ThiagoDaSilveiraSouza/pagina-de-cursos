
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Block } from '@/types/editor';

interface BackgroundPropertiesProps {
  block: Block;
  handleBackgroundChange: (field: 'type' | 'value', value: string) => void;
}

const BackgroundProperties: React.FC<BackgroundPropertiesProps> = ({ block, handleBackgroundChange }) => {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <Label>Tipo de Background</Label>
        <Select 
          value={block.background.type} 
          onValueChange={(value) => handleBackgroundChange('type', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="color">Cor Sólida</SelectItem>
            <SelectItem value="gradient">Gradiente</SelectItem>
            <SelectItem value="image">Imagem</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {block.background.type === 'color' && (
        <div className="space-y-1">
          <Label htmlFor="bgColor">Cor de Fundo</Label>
          <div className="flex gap-2">
            <Input
              id="bgColor"
              type="color"
              value={block.background.value}
              onChange={(e) => handleBackgroundChange('value', e.target.value)}
              className="w-12 h-9 p-1"
            />
            <Input
              value={block.background.value}
              onChange={(e) => handleBackgroundChange('value', e.target.value)}
              className="flex-1"
            />
          </div>
        </div>
      )}
      
      {block.background.type === 'gradient' && (
        <div className="space-y-1">
          <Label htmlFor="bgGradient">Gradiente</Label>
          <Textarea
            id="bgGradient"
            value={block.background.value}
            onChange={(e) => handleBackgroundChange('value', e.target.value)}
            placeholder="linear-gradient(to right, #000, #fff)"
            className="font-mono text-sm"
          />
          <div className="mt-2 h-12 rounded-md" style={{ background: block.background.value }}></div>
        </div>
      )}
      
      {block.background.type === 'image' && (
        <div className="space-y-1">
          <Label htmlFor="bgImage">URL da Imagem</Label>
          <Input
            id="bgImage"
            value={block.background.value}
            onChange={(e) => handleBackgroundChange('value', e.target.value)}
            placeholder="https://exemplo.com/imagem.jpg"
          />
          {block.background.value && (
            <div className="mt-2 h-24 rounded-md bg-cover bg-center" style={{ backgroundImage: `url(${block.background.value})` }}></div>
          )}
        </div>
      )}
    </div>
  );
};

export default BackgroundProperties;
