import React, { useEffect, useState } from 'react';
import { useEditorContext } from '@/contexts/EditorContext';
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
import { ColorPicker } from '@/components/ui/color-picker';

const BlockProperties = () => {
  const { 
    state, 
    updateBlock,
  } = useEditorContext();
  
  // Get the selected block from state
  const selectedBlock = state.selectedBlock;

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
      updateBlock({ ...selectedBlock, name, active, type: blockType });
    }
  }, [name, active, blockType, selectedBlock, updateBlock]);

  const updateBackground = (background: BlockBackground) => {
    if (selectedBlock) {
      updateBlock({ ...selectedBlock, background });
    }
  };

  const updateStyles = (styles: BlockStyles) => {
    if (selectedBlock) {
      updateBlock({ ...selectedBlock, styles });
    }
  };

  const updateLayout = (layout: any) => {
     if (selectedBlock) {
       updateBlock({ ...selectedBlock, layout });
     }
  };

  const updateContent = (content: any) => {
    if (selectedBlock) {
      updateBlock({ ...selectedBlock, content });
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

            <BlockTypeSelector
              selectedType={blockType}
              onTypeChange={handleBlockTypeChange}
            />
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
                styles={selectedBlock.styles}
                onStylesChange={updateStyles}
              />
            </TabsContent>
            <TabsContent value="background">
              <BackgroundProperties
                background={selectedBlock.background}
                onBackgroundChange={updateBackground}
              />
            </TabsContent>
             <TabsContent value="layout">
               <LayoutProperties
                 layout={selectedBlock.layout}
                 onLayoutChange={updateLayout}
               />
             </TabsContent>
            <TabsContent value="content">
              <ContentProperties
                content={selectedBlock.content}
                onContentChange={updateContent}
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
