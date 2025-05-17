
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';

const BlockProperties = () => {
  const { landingPage, selectedBlockId, updateBlock } = useEditor();
  
  if (!selectedBlockId) {
    return (
      <Card className="w-full">
        <CardContent className="p-6 text-center">
          <p className="text-muted-foreground">Selecione um bloco para editar suas propriedades</p>
        </CardContent>
      </Card>
    );
  }
  
  const block = landingPage.blocks.find(block => block.id === selectedBlockId);
  if (!block) return null;
  
  const handleContentChange = (field: string, value: string) => {
    updateBlock(selectedBlockId, {
      content: {
        ...block.content,
        [field]: value
      }
    });
  };
  
  const handleLayoutChange = (field: string, value: any) => {
    updateBlock(selectedBlockId, {
      layout: {
        ...block.layout,
        [field]: value
      }
    });
  };
  
  const handleBackgroundChange = (field: 'type' | 'value', value: string) => {
    updateBlock(selectedBlockId, {
      background: {
        ...block.background,
        [field]: value
      }
    });
  };
  
  const handleStyleChange = (category: string, field: string, value: any) => {
    updateBlock(selectedBlockId, {
      styles: {
        ...block.styles,
        [category]: {
          ...block.styles[category as keyof typeof block.styles],
          [field]: value
        }
      }
    });
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="mb-4">
          <Label htmlFor="blockName">Nome do Bloco</Label>
          <Input 
            id="blockName" 
            value={block.name} 
            onChange={(e) => updateBlock(selectedBlockId, { name: e.target.value })} 
            className="mt-1"
          />
        </div>
        
        <Tabs defaultValue="content">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="content">Conteúdo</TabsTrigger>
            <TabsTrigger value="layout">Layout</TabsTrigger>
            <TabsTrigger value="background">Background</TabsTrigger>
            <TabsTrigger value="styles">Estilos</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content" className="mt-4 space-y-4">
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
          </TabsContent>
          
          <TabsContent value="layout" className="mt-4 space-y-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <Label>Número de Colunas</Label>
                <Select 
                  value={block.layout.columns.toString()} 
                  onValueChange={(value) => handleLayoutChange('columns', parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Coluna</SelectItem>
                    <SelectItem value="2">2 Colunas</SelectItem>
                    <SelectItem value="3">3 Colunas</SelectItem>
                    <SelectItem value="4">4 Colunas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <Label>Alinhamento Horizontal</Label>
                <Select 
                  value={block.layout.alignment} 
                  onValueChange={(value) => handleLayoutChange('alignment', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="left">Esquerda</SelectItem>
                    <SelectItem value="center">Centro</SelectItem>
                    <SelectItem value="right">Direita</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-1">
                <Label>Alinhamento Vertical</Label>
                <Select 
                  value={block.layout.verticalAlignment} 
                  onValueChange={(value) => handleLayoutChange('verticalAlignment', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="top">Topo</SelectItem>
                    <SelectItem value="center">Centro</SelectItem>
                    <SelectItem value="bottom">Base</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="background" className="mt-4 space-y-4">
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
          </TabsContent>
          
          <TabsContent value="styles" className="mt-4 space-y-4">
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
                      onValueChange={([value]) => updateBlock(selectedBlockId, {
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
                    onValueChange={(value) => updateBlock(selectedBlockId, {
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
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BlockProperties;
