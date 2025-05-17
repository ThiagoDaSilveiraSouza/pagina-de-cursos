
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import EditorToolbar from './EditorToolbar';
import BlockSelector from './BlockSelector';
import BlockManager from './BlockManager';
import BlockProperties from './BlockProperties';
import PageSettings from './PageSettings';
import PagePreview from './PagePreview';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

const EditorLayout = () => {
  const { isPreviewMode } = useEditor();

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
              <BlockSelector />
              <BlockManager />
            </div>
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={50} className="overflow-y-auto">
            <PagePreview />
          </ResizablePanel>

          <ResizableHandle />

          <ResizablePanel defaultSize={25} minSize={20} maxSize={40} >
            <div className="p-4 space-y-4 overflow-auto max-h-full">
              <BlockProperties />
              <PageSettings />
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      )}
    </div>
  );
};



export default EditorLayout;
