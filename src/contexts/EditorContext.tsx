
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Block, BlockType, LandingPageData } from '../types/editor';
import { v4 as uuidv4 } from 'uuid';
import { toast } from '@/components/ui/use-toast';

// Initial landing page data with sample blocks
const initialLandingPage: LandingPageData = {
  title: "Curso Online",
  blocks: [
    {
      id: uuidv4(),
      type: 'hero',
      name: 'Hero Section',
      background: {
        type: 'gradient',
        value: 'linear-gradient(90deg, #3182ce 0%, #805ad5 100%)'
      },
      styles: {
        padding: { top: 80, bottom: 80, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 2,
        alignment: 'center',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Domine a Estratégia Digital',
        subtitle: 'Aprenda a criar campanhas de marketing digital que convertem',
        content: 'Descubra as estratégias comprovadas que transformaram negócios e aumentaram a receita em mais de 300%.',
        ctaText: 'Quero Transformar Meu Negócio',
        ctaLink: '#offer',
        image: '/placeholder.svg'
      },
      active: true,
      order: 0
    },
    {
      id: uuidv4(),
      type: 'benefits',
      name: 'Benefits Section',
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
        columns: 3,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {
        title: 'O Que Você Vai Aprender',
        subtitle: 'Habilidades que transformam resultados',
        items: [
          {
            title: 'Estratégia de Conteúdo',
            content: 'Descubra como criar conteúdo que engaja e converte sua audiência.',
            icon: 'file-text'
          },
          {
            title: 'Tráfego Pago',
            content: 'Domine as técnicas de anúncios pagos no Facebook e Instagram.',
            icon: 'circle-check'
          },
          {
            title: 'Copywriting',
            content: 'Aprenda a escrever textos persuasivos que aumentam suas vendas.',
            icon: 'book'
          }
        ]
      },
      active: true,
      order: 1
    }
  ],
  metadata: {
    title: 'Curso de Marketing Digital - Domine a Estratégia',
    description: 'Aprenda a criar campanhas de marketing digital que convertem e transformam seu negócio.',
    keywords: 'marketing digital, curso online, estratégia digital'
  },
  settings: {
    fontPrimary: 'Inter, sans-serif',
    fontSecondary: 'Poppins, sans-serif',
    colorPrimary: '#3182ce',
    colorSecondary: '#805ad5',
    colorAccent: '#e53e3e'
  }
};

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
  duplicateBlock: (blockId: string) => void;
  
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
  const [landingPage, setLandingPage] = useState<LandingPageData>(initialLandingPage);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [isPreviewMode, setIsPreviewMode] = useState(false);
  const [devicePreview, setDevicePreview] = useState<'desktop' | 'mobile'>('desktop');

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
        block.id === blockId ? { ...block, ...data } : block
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
    setLandingPage(initialLandingPage);
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
      duplicateBlock,
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
