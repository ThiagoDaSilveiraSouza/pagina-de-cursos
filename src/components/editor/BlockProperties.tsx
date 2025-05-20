import React, { useState, useEffect } from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { BlockType, BlockBackground } from '@/types/editor';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ColorPicker } from '@/components/ui/color-picker';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';

const blockTypes: BlockType[] = [
  'hero',
  'benefits',
  'curriculum',
  'testimonials',
  'offer',
  'instructor',
  'faq',
  'cta',
  'footer',
  'products'  // Added products to the array of valid block types
];

const BlockProperties = () => {
  const { 
    selectedBlock, 
    updateBlock,
    removeBlock 
  } = useEditor();
  
  const [paddingTop, setPaddingTop] = useState(0);
  const [paddingBottom, setPaddingBottom] = useState(0);
  const [paddingLeft, setPaddingLeft] = useState(0);
  const [paddingRight, setPaddingRight] = useState(0);
  const [marginTop, setMarginTop] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [borderWidth, setBorderWidth] = useState(0);
  const [borderColor, setBorderColor] = useState('#000000');
  const [borderStyle, setBorderStyle] = useState<'solid' | 'dashed' | 'dotted' | 'none'>('solid');
  const [shadow, setShadow] = useState<'none' | 'sm' | 'md' | 'lg' | 'xl'>('none');
  const [backgroundType, setBackgroundType] = useState<'color' | 'gradient' | 'image'>('color');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [backgroundImage, setBackgroundImage] = useState('');
  const [blockType, setBlockType] = useState<BlockType>('hero');
  const [blockName, setBlockName] = useState('');
  const [blockActive, setBlockActive] = useState(true);

  useEffect(() => {
    if (selectedBlock) {
      setPaddingTop(selectedBlock.styles.padding.top);
      setPaddingBottom(selectedBlock.styles.padding.bottom);
      setPaddingLeft(selectedBlock.styles.padding.left);
      setPaddingRight(selectedBlock.styles.padding.right);
      setMarginTop(selectedBlock.styles.margin.top);
      setMarginBottom(selectedBlock.styles.margin.bottom);
      setBorderRadius(selectedBlock.styles.borderRadius);
      setBorderWidth(selectedBlock.styles.border.width);
      setBorderColor(selectedBlock.styles.border.color);
      setBorderStyle(selectedBlock.styles.border.style);
      setShadow(selectedBlock.styles.shadow);
      setBackgroundType(selectedBlock.background.type);
      setBackgroundColor(selectedBlock.background.value);
      setBackgroundImage(selectedBlock.background.value);
      setBlockType(selectedBlock.type);
      setBlockName(selectedBlock.name);
      setBlockActive(selectedBlock.active);
    }
  }, [selectedBlock]);

  const handleStyleChange = (styleKey: string, value: any) => {
    if (!selectedBlock) return;

    let updatedStyles = { ...selectedBlock.styles };

    switch (styleKey) {
      case 'paddingTop':
        updatedStyles = { ...updatedStyles, padding: { ...updatedStyles.padding, top: value } };
        setPaddingTop(value);
        break;
      case 'paddingBottom':
        updatedStyles = { ...updatedStyles, padding: { ...updatedStyles.padding, bottom: value } };
        setPaddingBottom(value);
        break;
      case 'paddingLeft':
        updatedStyles = { ...updatedStyles, padding: { ...updatedStyles.padding, left: value } };
        setPaddingLeft(value);
        break;
      case 'paddingRight':
        updatedStyles = { ...updatedStyles, padding: { ...updatedStyles.padding, right: value } };
        setPaddingRight(value);
        break;
      case 'marginTop':
        updatedStyles = { ...updatedStyles, margin: { ...updatedStyles.margin, top: value } };
        setMarginTop(value);
        break;
      case 'marginBottom':
        updatedStyles = { ...updatedStyles, margin: { ...updatedStyles.margin, bottom: value } };
        setMarginBottom(value);
        break;
      case 'borderRadius':
        updatedStyles = { ...updatedStyles, borderRadius: value };
        setBorderRadius(value);
        break;
      case 'borderWidth':
        updatedStyles = { ...updatedStyles, border: { ...updatedStyles.border, width: value } };
        setBorderWidth(value);
        break;
      case 'borderColor':
        updatedStyles = { ...updatedStyles, border: { ...updatedStyles.border, color: value } };
        setBorderColor(value);
        break;
      case 'borderStyle':
        updatedStyles = { ...updatedStyles, border: { ...updatedStyles.border, style: value } };
        setBorderStyle(value);
        break;
      case 'shadow':
        updatedStyles = { ...updatedStyles, shadow: value };
        setShadow(value);
        break;
      default:
        break;
    }

    updateBlock({ ...selectedBlock, styles: updatedStyles });
  };

  const handleBackgroundChange = (type: 'color' | 'gradient' | 'image', value: string) => {
    if (!selectedBlock) return;

    const updatedBackground: BlockBackground = {
      type: type,
      value: value,
    };

    updateBlock({ ...selectedBlock, background: updatedBackground });
    setBackgroundType(type);

    if (type === 'color') {
      setBackgroundColor(value);
    } else if (type === 'image') {
      setBackgroundImage(value);
    }
  };
  
  const handleBlockTypeChange = (value: BlockType) => {
    if (!selectedBlock) return;
    updateBlock({ ...selectedBlock, type: value });
    setBlockType(value);
  };
  
  const handleBlockNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedBlock) return;
    const newName = e.target.value;
    updateBlock({ ...selectedBlock, name: newName });
    setBlockName(newName);
  };
  
  const handleBlockActiveChange = (value: boolean) => {
    if (!selectedBlock) return;
    updateBlock({ ...selectedBlock, active: value });
    setBlockActive(value);
  };
  
  const handleDeleteBlock = () => {
    if (selectedBlock) {
      removeBlock(selectedBlock.id);
    }
  };

  if (!selectedBlock) {
    return <div className="p-4">Selecione um bloco para editar suas propriedades.</div>;
  }

  return (
    <div className="p-4 space-y-4">
      <div>
        <Label htmlFor="block-name">Nome do Bloco</Label>
        <Input 
          id="block-name" 
          value={blockName} 
          onChange={handleBlockNameChange} 
          placeholder="Nome do bloco" 
        />
      </div>
      
      <div>
        <Label htmlFor="block-type">Tipo de Bloco</Label>
        <Select value={blockType} onValueChange={handleBlockTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um tipo de bloco" />
          </SelectTrigger>
          <SelectContent>
            {blockTypes.map(type => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="flex items-center justify-between">
        <Label htmlFor="block-active">Ativo</Label>
        <Switch 
          id="block-active" 
          checked={blockActive} 
          onCheckedChange={handleBlockActiveChange} 
        />
      </div>

      <div>
        <h4 className="text-sm font-medium">Estilos</h4>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Padding Top</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[paddingTop]}
              onValueChange={(value) => handleStyleChange('paddingTop', value[0])}
            />
            <Input 
              type="number"
              value={paddingTop}
              onChange={(e) => handleStyleChange('paddingTop', Number(e.target.value))}
            />
          </div>
          
          <div>
            <Label>Padding Bottom</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[paddingBottom]}
              onValueChange={(value) => handleStyleChange('paddingBottom', value[0])}
            />
            <Input 
              type="number"
              value={paddingBottom}
              onChange={(e) => handleStyleChange('paddingBottom', Number(e.target.value))}
            />
          </div>
          
          <div>
            <Label>Padding Left</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[paddingLeft]}
              onValueChange={(value) => handleStyleChange('paddingLeft', value[0])}
            />
            <Input 
              type="number"
              value={paddingLeft}
              onChange={(e) => handleStyleChange('paddingLeft', Number(e.target.value))}
            />
          </div>
          
          <div>
            <Label>Padding Right</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[paddingRight]}
              onValueChange={(value) => handleStyleChange('paddingRight', value[0])}
            />
            <Input 
              type="number"
              value={paddingRight}
              onChange={(e) => handleStyleChange('paddingRight', Number(e.target.value))}
            />
          </div>
          
          <div>
            <Label>Margin Top</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[marginTop]}
              onValueChange={(value) => handleStyleChange('marginTop', value[0])}
            />
            <Input 
              type="number"
              value={marginTop}
              onChange={(e) => handleStyleChange('marginTop', Number(e.target.value))}
            />
          </div>
          
          <div>
            <Label>Margin Bottom</Label>
            <Slider
              min={0}
              max={100}
              step={1}
              value={[marginBottom]}
              onValueChange={(value) => handleStyleChange('marginBottom', value[0])}
            />
            <Input 
              type="number"
              value={marginBottom}
              onChange={(e) => handleStyleChange('marginBottom', Number(e.target.value))}
            />
          </div>
          
          <div>
            <Label>Border Radius</Label>
            <Slider
              min={0}
              max={50}
              step={1}
              value={[borderRadius]}
              onValueChange={(value) => handleStyleChange('borderRadius', value[0])}
            />
            <Input 
              type="number"
              value={borderRadius}
              onChange={(e) => handleStyleChange('borderRadius', Number(e.target.value))}
            />
          </div>
          
          <div>
            <Label>Border Width</Label>
            <Slider
              min={0}
              max={10}
              step={1}
              value={[borderWidth]}
              onValueChange={(value) => handleStyleChange('borderWidth', value[0])}
            />
            <Input 
              type="number"
              value={borderWidth}
              onChange={(e) => handleStyleChange('borderWidth', Number(e.target.value))}
            />
          </div>
        </div>
        
        <div>
          <Label>Border Color</Label>
          <ColorPicker color={borderColor} onColorChange={(color) => handleStyleChange('borderColor', color)} />
        </div>
        
        <div>
          <Label>Border Style</Label>
          <Select value={borderStyle} onValueChange={(value) => handleStyleChange('borderStyle', value as 'solid' | 'dashed' | 'dotted' | 'none')}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um estilo de borda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solid">Solid</SelectItem>
              <SelectItem value="dashed">Dashed</SelectItem>
              <SelectItem value="dotted">Dotted</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label>Shadow</Label>
          <Select value={shadow} onValueChange={(value) => handleStyleChange('shadow', value as 'none' | 'sm' | 'md' | 'lg' | 'xl')}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione uma sombra" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="md">Medium</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
              <SelectItem value="xl">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <h4 className="text-sm font-medium">Background</h4>
        
        <div>
          <Label>Background Type</Label>
          <Select value={backgroundType} onValueChange={(value) => setBackgroundType(value as 'color' | 'gradient' | 'image')}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um tipo de background" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="color">Color</SelectItem>
              {/* <SelectItem value="gradient">Gradient</SelectItem> */}
              <SelectItem value="image">Image</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {backgroundType === 'color' && (
          <div>
            <Label>Background Color</Label>
            <ColorPicker color={backgroundColor} onColorChange={(color) => handleBackgroundChange('color', color)} />
          </div>
        )}

        {backgroundType === 'image' && (
          <div>
            <Label>Background Image URL</Label>
            <Input 
              type="text" 
              placeholder="URL da imagem" 
              value={backgroundImage}
              onChange={(e) => handleBackgroundChange('image', e.target.value)}
            />
          </div>
        )}
      </div>
      
      <Button variant="destructive" onClick={handleDeleteBlock}>
        <Trash2 className="h-4 w-4 mr-2" />
        Excluir Bloco
      </Button>
    </div>
  );
};

export default BlockProperties;
