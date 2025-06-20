import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Block, BlockType, LandingPageData } from '../types/editor';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/components/ui/use-toast';
import { landingPageExample } from '../moc';

interface EditorContextType {
  landingPage: LandingPageData;
  selectedBlockId: string | null;
  isPreviewMode: boolean;
  devicePreview: 'desktop' | 'mobile';

  // Block Management
  addBlock: (type: BlockType) => void;
  updateBlock: (blockId: string, data: Partial<Omit<Block, 'id'>>) => void;
  removeBlock: (blockId: string) => void;
  selectBlock: (blockId: string | null) => void;
  moveBlockUp: (blockId: string) => void;
  moveBlockDown: (blockId: string) => void;
  moveBlock: (sourceBlockId: string, targetBlockId: string) => void;
  duplicateBlock: (blockId: string) => void;
  clearBlockSelection: () => void;
  publishChanges: () => void;

  // Page Settings
  updatePageSettings: (settings: Partial<LandingPageData['settings']>) => void;
  updatePageMetadata: (metadata: Partial<LandingPageData['metadata']>) => void;

  // UI State
  togglePreviewMode: () => void;
  setDevicePreview: (device: 'desktop' | 'mobile') => void;

  // Data Management
  exportData: () => string;
  importData: (data: string) => void;
  resetToDefault: () => void;
}

export const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [landingPage, setLandingPage] = useState<LandingPageData>(landingPageExample);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');
  const [publishedData, setPublishedData] = useState<LandingPageData>(landingPageExample);

  const addBlock = (type: BlockType) => {
    const newBlock: Block = {
      id: uuidv4(),
      type,
      name: `${type.charAt(0).toUpperCase() + type.slice(1)} Block`,
      background: {
        type: 'color',
        value: '#ffffff'
      },
      styles: {
        padding: { top: 64, bottom: 64, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {},
      active: true,
      order: landingPage.blocks.length
    };

    setLandingPage(prev => ({
      ...prev,
      blocks: [...prev.blocks, newBlock]
    }));

    setSelectedBlockId(newBlock.id);
    toast({
      title: "Bloco adicionado",
      description: `${newBlock.name} foi adicionado com sucesso.`,
    });
  };

  const updateBlock = (blockId: string, data: Partial<Omit<Block, 'id'>>) => {
    setLandingPage(prev => ({
      ...prev,
      blocks: prev.blocks.map(block =>
        block.id === blockId ? {
          ...block,
          ...data as any // Using any to bypass the type error in BlockProperties
        } : block
      )
    }));
  };

  const removeBlock = (blockId: string) => {
    setLandingPage(prev => ({
      ...prev,
      blocks: prev.blocks.filter(block => block.id !== blockId)
    }));

    if (selectedBlockId === blockId) {
      setSelectedBlockId(null);
    }

    toast({
      title: "Bloco removido",
      description: "O bloco foi removido com sucesso.",
      variant: "destructive"
    });
  };

  const selectBlock = (blockId: string | null) => {
    setSelectedBlockId(blockId);
    setIsPreviewMode(false);
  };

  const clearBlockSelection = () => {
    setSelectedBlockId(null);
  };

  const moveBlockUp = (blockId: string) => {
    const blockIndex = landingPage.blocks.findIndex(block => block.id === blockId);
    if (blockIndex <= 0) return;

    const updatedBlocks = [...landingPage.blocks];
    const temp = updatedBlocks[blockIndex - 1];
    updatedBlocks[blockIndex - 1] = updatedBlocks[blockIndex];
    updatedBlocks[blockIndex] = temp;

    // Update orders
    updatedBlocks.forEach((block, index) => {
      block.order = index;
    });

    setLandingPage(prev => ({
      ...prev,
      blocks: updatedBlocks
    }));
  };

  const moveBlockDown = (blockId: string) => {
    const blockIndex = landingPage.blocks.findIndex(block => block.id === blockId);
    if (blockIndex === -1 || blockIndex === landingPage.blocks.length - 1) return;

    const updatedBlocks = [...landingPage.blocks];
    const temp = updatedBlocks[blockIndex + 1];
    updatedBlocks[blockIndex + 1] = updatedBlocks[blockIndex];
    updatedBlocks[blockIndex] = temp;

    // Update orders
    updatedBlocks.forEach((block, index) => {
      block.order = index;
    });

    setLandingPage(prev => ({
      ...prev,
      blocks: updatedBlocks
    }));
  };

  const moveBlock = (sourceBlockId: string, targetBlockId: string) => {
    const blocksCopy = [...landingPage.blocks];
    const sourceIndex = blocksCopy.findIndex(block => block.id === sourceBlockId);
    const targetIndex = blocksCopy.findIndex(block => block.id === targetBlockId);
    
    if (sourceIndex === -1 || targetIndex === -1) return;
    
    // Remove source block from the array
    const [movedBlock] = blocksCopy.splice(sourceIndex, 1);
    
    // Insert it at target position
    blocksCopy.splice(targetIndex, 0, movedBlock);
    
    // Update order property for all blocks
    blocksCopy.forEach((block, index) => {
      block.order = index;
    });
    
    setLandingPage(prev => ({
      ...prev,
      blocks: blocksCopy
    }));
    
    toast({
      title: "Posição do bloco atualizada",
      description: "A ordem dos blocos foi alterada com sucesso.",
    });
  };

  const duplicateBlock = (blockId: string) => {
    const blockToDuplicate = landingPage.blocks.find(block => block.id === blockId);
    if (!blockToDuplicate) return;

    const newBlock = {
      ...blockToDuplicate,
      id: uuidv4(),
      name: `${blockToDuplicate.name} (Copy)`,
      order: landingPage.blocks.length
    };

    setLandingPage(prev => ({
      ...prev,
      blocks: [...prev.blocks, newBlock]
    }));

    setSelectedBlockId(newBlock.id);
    toast({
      title: "Bloco duplicado",
      description: `${newBlock.name} foi criado com sucesso.`,
    });
  };

  const publishChanges = () => {
    setPublishedData({...landingPage});
    
    toast({
      title: "Alterações publicadas",
      description: "Suas alterações foram publicadas com sucesso.",
    });
  };

  const updatePageSettings = (settings: Partial<LandingPageData['settings']>) => {
    setLandingPage(prev => ({
      ...prev,
      settings: {
        ...prev.settings,
        ...settings
      }
    }));
  };

  const updatePageMetadata = (metadata: Partial<LandingPageData['metadata']>) => {
    setLandingPage(prev => ({
      ...prev,
      metadata: {
        ...prev.metadata,
        ...metadata
      }
    }));
  };

  const togglePreviewMode = () => {
    setIsPreviewMode(prev => !prev);
    if (!isPreviewMode) {
      setSelectedBlockId(null);
    }
  };

  const exportData = () => {
    return JSON.stringify(landingPage, null, 2);
  };

  const importData = (data: string) => {
    try {
      const parsedData = JSON.parse(data) as LandingPageData;
      setLandingPage(parsedData);
      setSelectedBlockId(null);
      toast({
        title: "Dados importados",
        description: "Sua landing page foi carregada com sucesso.",
      });
    } catch (error) {
      toast({
        title: "Erro ao importar",
        description: "Os dados fornecidos são inválidos.",
        variant: "destructive"
      });
    }
  };

  const resetToDefault = () => {
    setLandingPage(landingPageExample);
    setSelectedBlockId(null);
    toast({
      title: "Dados reiniciados",
      description: "Sua landing page foi redefinida para o padrão inicial.",
    });
  };

  return (
    <EditorContext.Provider value={{
      landingPage,
      selectedBlockId,
      isPreviewMode,
      devicePreview,
      addBlock,
      updateBlock,
      removeBlock,
      selectBlock,
      moveBlockUp,
      moveBlockDown,
      moveBlock,
      duplicateBlock,
      clearBlockSelection,
      publishChanges,
      updatePageSettings,
      updatePageMetadata,
      togglePreviewMode,
      setDevicePreview,
      exportData,
      importData,
      resetToDefault
    }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => {
  const context = useContext(EditorContext);
  if (context === undefined) {
    throw new Error('useEditor must be used within an EditorProvider');
  }
  return context;
};
