
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Block, BlockStyles } from '@/types/editor';

interface StylesPropertiesProps {
  block: Block;
  handleStyleChange: <K extends keyof BlockStyles>(
    category: K, 
    field: keyof BlockStyles[K] & string, 
    value: any
  ) => void;
  updateBlock: (blockId: string, updates: Partial<Block>) => void;
}

const StylesProperties: React.FC<StylesPropertiesProps> = ({ block, handleStyleChange, updateBlock }) => {
  return (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold">Padding (px)</h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="paddingTop">Superior</Label>
          <div className="flex gap-2 items-center">
            <Slider
              id="paddingTop"
              min={0}
              max={200}
              step={4}
              value={[block.styles.padding.top]}
              onValueChange={([value]) => handleStyleChange('padding', 'top', value)}
              className="flex-1"
            />
            <span className="text-xs w-8 text-right">{block.styles.padding.top}px</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="paddingBottom">Inferior</Label>
          <div className="flex gap-2 items-center">
            <Slider
              id="paddingBottom"
              min={0}
              max={200}
              step={4}
              value={[block.styles.padding.bottom]}
              onValueChange={([value]) => handleStyleChange('padding', 'bottom', value)}
              className="flex-1"
            />
            <span className="text-xs w-8 text-right">{block.styles.padding.bottom}px</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="paddingLeft">Esquerda</Label>
          <div className="flex gap-2 items-center">
            <Slider
              id="paddingLeft"
              min={0}
              max={100}
              step={2}
              value={[block.styles.padding.left]}
              onValueChange={([value]) => handleStyleChange('padding', 'left', value)}
              className="flex-1"
            />
            <span className="text-xs w-8 text-right">{block.styles.padding.left}px</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="paddingRight">Direita</Label>
          <div className="flex gap-2 items-center">
            <Slider
              id="paddingRight"
              min={0}
              max={100}
              step={2}
              value={[block.styles.padding.right]}
              onValueChange={([value]) => handleStyleChange('padding', 'right', value)}
              className="flex-1"
            />
            <span className="text-xs w-8 text-right">{block.styles.padding.right}px</span>
          </div>
        </div>
      </div>
      
      <Separator className="my-3" />
      
      <h4 className="text-sm font-semibold">Margem (px)</h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-1">
          <Label htmlFor="marginTop">Superior</Label>
          <div className="flex gap-2 items-center">
            <Slider
              id="marginTop"
              min={0}
              max={100}
              step={2}
              value={[block.styles.margin.top]}
              onValueChange={([value]) => handleStyleChange('margin', 'top', value)}
              className="flex-1"
            />
            <span className="text-xs w-8 text-right">{block.styles.margin.top}px</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <Label htmlFor="marginBottom">Inferior</Label>
          <div className="flex gap-2 items-center">
            <Slider
              id="marginBottom"
              min={0}
              max={100}
              step={2}
              value={[block.styles.margin.bottom]}
              onValueChange={([value]) => handleStyleChange('margin', 'bottom', value)}
              className="flex-1"
            />
            <span className="text-xs w-8 text-right">{block.styles.margin.bottom}px</span>
          </div>
        </div>
      </div>
      
      <Separator className="my-3" />
      
      <h4 className="text-sm font-semibold">Bordas & Sombras</h4>
      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor="borderRadius">Raio da Borda</Label>
          <div className="flex gap-2 items-center">
            <Slider
              id="borderRadius"
              min={0}
              max={40}
              step={1}
              value={[block.styles.borderRadius]}
              onValueChange={([value]) => updateBlock(block.id, {
                styles: { ...block.styles, borderRadius: value }
              })}
              className="flex-1"
            />
            <span className="text-xs w-8 text-right">{block.styles.borderRadius}px</span>
          </div>
        </div>
        
        <div className="space-y-1">
          <Label>Sombra</Label>
          <Select 
            value={block.styles.shadow} 
            onValueChange={(value: "none" | "sm" | "md" | "lg" | "xl") => updateBlock(block.id, {
              styles: { ...block.styles, shadow: value }
            })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">Sem Sombra</SelectItem>
              <SelectItem value="sm">Pequena</SelectItem>
              <SelectItem value="md">Média</SelectItem>
              <SelectItem value="lg">Grande</SelectItem>
              <SelectItem value="xl">Extra Grande</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid grid-cols-3 gap-2 items-end">
          <div className="space-y-1 col-span-1">
            <Label htmlFor="borderWidth">Largura da Borda</Label>
            <Input
              id="borderWidth"
              type="number"
              min={0}
              max={10}
              value={block.styles.border.width}
              onChange={(e) => handleStyleChange('border', 'width', parseInt(e.target.value) || 0)}
            />
          </div>
          
          <div className="space-y-1 col-span-1">
            <Label>Estilo da Borda</Label>
            <Select 
              value={block.styles.border.style} 
              onValueChange={(value) => handleStyleChange('border', 'style', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Estilo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="solid">Sólida</SelectItem>
                <SelectItem value="dashed">Tracejada</SelectItem>
                <SelectItem value="dotted">Pontilhada</SelectItem>
                <SelectItem value="none">Sem Borda</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-1 col-span-1">
            <Label htmlFor="borderColor">Cor da Borda</Label>
            <Input
              id="borderColor"
              type="color"
              value={block.styles.border.color}
              onChange={(e) => handleStyleChange('border', 'color', e.target.value)}
              className="h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StylesProperties;
