
import React, { useState } from 'react';
import { useEditor } from '@/contexts/EditorContext';
import EditorToolbar from './EditorToolbar';
import BlockSelector from './BlockSelector';
import BlockManager from './BlockManager';
import BlockProperties from './BlockProperties';
import PageSettings from './PageSettings';
import PagePreview from './PagePreview';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Settings, Plus, List } from 'lucide-react';

const EditorLayout = () => {
  const { isPreviewMode, selectedBlockId, clearBlockSelection } = useEditor();
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  
  const handleClosePropertiesDialog = () => {
    setPropertiesOpen(false);
    // Only clear selection when explicitly closing the dialog
    if (!propertiesOpen) {
      clearBlockSelection();
    }
  };
  
  return (
    <div className="h-screen w-full overflow-hidden flex flex-col bg-background">
      <EditorToolbar />

      {isPreviewMode ? (
        <div className="flex-1 overflow-hidden">
          <PagePreview />
        </div>
      ) : (
        <ResizablePanelGroup direction="horizontal" className="flex-1 overflow-hidden">
          <ResizablePanel defaultSize={25} minSize={20} maxSize={40} className="overflow-y-auto">
            <div className="p-4 space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="page-settings">
                  <AccordionTrigger className="py-2">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      <span>Configurações da Página</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <PageSettings />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="block-selector">
                  <AccordionTrigger className="py-2">
                    <div className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      <span>Adicionar Bloco</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* Removed the Dialog and button, now showing BlockSelector directly */}
                    <BlockSelector />
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="block-manager">
                  <AccordionTrigger className="py-2">
                    <div className="flex items-center gap-2">
                      <List className="h-4 w-4" />
                      <span>Blocos da Página</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <BlockManager />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={75} className="overflow-y-auto">
            <PagePreview />
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
      
      {selectedBlockId && !isPreviewMode && (
        <Dialog 
          open={propertiesOpen || !!selectedBlockId} 
          onOpenChange={(open) => {
            setPropertiesOpen(open);
            if (!open) clearBlockSelection();
          }}
        >
          <DialogTrigger asChild>
            <Button 
              className="fixed bottom-4 right-4 z-40"
              variant="default"
            >
              Editar Bloco
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Propriedades do Bloco</DialogTitle>
            </DialogHeader>
            <BlockProperties />
            <DialogClose asChild>
              <Button variant="outline" className="mt-4">Fechar</Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default EditorLayout;
