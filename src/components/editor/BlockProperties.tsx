
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { BlockStyles } from '@/types/editor';
import BlockTypeSelector from './BlockTypeSelector';
import ContentProperties from './properties/ContentProperties';
import LayoutProperties from './properties/LayoutProperties';
import BackgroundProperties from './properties/BackgroundProperties';
import StylesProperties from './properties/StylesProperties';

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
  
  // Fix the type error by specifying correct typing for handleStyleChange
  const handleStyleChange = <K extends keyof BlockStyles>(
    category: K, 
    field: keyof BlockStyles[K] & string, 
    value: any
  ) => {
    const updatedCategory = {
      ...block.styles[category],
      [field]: value
    } as BlockStyles[K];
    
    updateBlock(selectedBlockId, {
      styles: {
        ...block.styles,
        [category]: updatedCategory
      }
    });
  };

  return (
    <>
      <BlockTypeSelector />
      
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
              <ContentProperties 
                block={block}
                handleContentChange={handleContentChange}
              />
            </TabsContent>
            
            <TabsContent value="layout" className="mt-4 space-y-4">
              <LayoutProperties 
                block={block}
                handleLayoutChange={handleLayoutChange}
              />
            </TabsContent>
            
            <TabsContent value="background" className="mt-4 space-y-4">
              <BackgroundProperties 
                block={block}
                handleBackgroundChange={handleBackgroundChange}
              />
            </TabsContent>
            
            <TabsContent value="styles" className="mt-4 space-y-4">
              <StylesProperties 
                block={block}
                handleStyleChange={handleStyleChange}
                updateBlock={updateBlock}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </>
  );
};

export default BlockProperties;
