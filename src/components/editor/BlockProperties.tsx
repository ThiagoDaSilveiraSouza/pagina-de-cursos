import React, { useEffect, useState } from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { BlockType, BlockBackground, BlockStyles } from '@/types/editor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import BackgroundProperties from './properties/BackgroundProperties';
import StylesProperties from './properties/StylesProperties';
import ContentProperties from './properties/ContentProperties';
import LayoutProperties from './properties/LayoutProperties';
import BlockTypeSelector from './BlockTypeSelector';

const BlockProperties = () => {
  const { 
    landingPage,
    selectedBlockId,
    updateBlock,
  } = useEditor();
  
  // Get the selected block from landingPage
  const selectedBlock = landingPage.blocks.find(block => block.id === selectedBlockId);

  const [name, setName] = useState('');
  const [active, setActive] = useState(true);
  const [blockType, setBlockType] = useState<BlockType>('hero');

  useEffect(() => {
    if (selectedBlock) {
      setName(selectedBlock.name);
      setActive(selectedBlock.active);
      setBlockType(selectedBlock.type);
    }
  }, [selectedBlock]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleActiveChange = (checked: boolean) => {
    setActive(checked);
  };

  const handleBlockTypeChange = (newType: BlockType) => {
    setBlockType(newType);
  };

  useEffect(() => {
    if (selectedBlock) {
      updateBlock(selectedBlock.id, { name, active, type: blockType });
    }
  }, [name, active, blockType, selectedBlock, updateBlock]);

  const handleBackgroundChange = (field: 'type' | 'value', value: string) => {
    if (selectedBlock) {
      const updatedBackground = { ...selectedBlock.background, [field]: value };
      updateBlock(selectedBlock.id, { background: updatedBackground });
    }
  };

  const handleStyleChange = <K extends keyof BlockStyles>(
    category: K, 
    field: keyof BlockStyles[K] & string, 
    value: any
  ) => {
    if (selectedBlock) {
      const updatedStyles = {
        ...selectedBlock.styles,
        [category]: {
          ...selectedBlock.styles[category],
          [field]: value
        }
      };
      updateBlock(selectedBlock.id, { styles: updatedStyles });
    }
  };

  const handleLayoutChange = (field: string, value: any) => {
    if (selectedBlock) {
      const updatedLayout = { ...selectedBlock.layout, [field]: value };
      updateBlock(selectedBlock.id, { layout: updatedLayout });
    }
  };

  const handleContentChange = (field: string, value: string) => {
    if (selectedBlock) {
      let parsedValue: any = value;
      
      // Parse JSON for items field
      if (field === 'items') {
        try {
          parsedValue = JSON.parse(value);
        } catch (e) {
          // If parsing fails, keep the original value
          parsedValue = value;
        }
      }
      
      const updatedContent = { ...selectedBlock.content, [field]: parsedValue };
      updateBlock(selectedBlock.id, { content: updatedContent });
    }
  };

  return (
    <div className="space-y-4 p-4">
      {selectedBlock ? (
        <>
          {/* Block Info Section */}
          <div className="space-y-4">
            <Label htmlFor="block-name">Block Name</Label>
            <Input
              id="block-name"
              type="text"
              value={name}
              onChange={handleNameChange}
            />

            <Label>Active</Label>
            <Switch
              checked={active}
              onCheckedChange={handleActiveChange}
            />

            <BlockTypeSelector />
          </div>

          {/* Block Properties Tabs */}
          <Tabs defaultValue="styles" className="w-full">
            <TabsList>
              <TabsTrigger value="styles">Styles</TabsTrigger>
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="layout">Layout</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>
            <TabsContent value="styles">
              <StylesProperties
                block={selectedBlock}
                handleStyleChange={handleStyleChange}
                updateBlock={updateBlock}
              />
            </TabsContent>
            <TabsContent value="background">
              <BackgroundProperties
                block={selectedBlock}
                handleBackgroundChange={handleBackgroundChange}
              />
            </TabsContent>
             <TabsContent value="layout">
               <LayoutProperties
                 block={selectedBlock}
                 handleLayoutChange={handleLayoutChange}
               />
             </TabsContent>
            <TabsContent value="content">
              <ContentProperties
                block={selectedBlock}
                handleContentChange={handleContentChange}
              />
            </TabsContent>
          </Tabs>
        </>
      ) : (
        <div className="text-center p-4">
          <p className="text-muted-foreground">Select a block to edit its properties</p>
        </div>
      )}
    </div>
  );
};

export default BlockProperties;
