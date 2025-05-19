
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Copy, Trash2, Eye, GripVertical } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

const BlockManager = () => {
  const { 
    landingPage, 
    selectedBlockId, 
    selectBlock, 
    moveBlock,
    duplicateBlock,
    removeBlock
  } = useEditor();

  const sortedBlocks = [...landingPage.blocks].sort((a, b) => a.order - b.order);

  const getBlockIcon = (type: string) => {
    switch(type) {
      case 'hero': return '🏆';
      case 'benefits': return '✅';
      case 'curriculum': return '📚';
      case 'testimonials': return '💬';
      case 'offer': return '💰';
      case 'instructor': return '👨‍🏫';
      case 'faq': return '❓';
      case 'cta': return '👆';
      case 'footer': return '🔗';
      case 'products': return '🛒';
      default: return '📄';
    }
  };
  
  // Drag and drop handlers
  const [draggedItemId, setDraggedItemId] = React.useState<string | null>(null);
  
  const handleDragStart = (e: React.DragEvent, blockId: string) => {
    setDraggedItemId(blockId);
    // Add some styling to the dragged item
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = '0.4';
    }
    e.dataTransfer.effectAllowed = 'move';
  };
  
  const handleDragEnd = (e: React.DragEvent) => {
    setDraggedItemId(null);
    // Reset styling
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = '1';
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  
  const handleDrop = (e: React.DragEvent, targetBlockId: string) => {
    e.preventDefault();
    
    // Reset any styling
    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = '1';
    }
    
    if (draggedItemId && draggedItemId !== targetBlockId) {
      moveBlock(draggedItemId, targetBlockId);
    }
    
    setDraggedItemId(null);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Blocos da Página</h3>
          <Button variant="ghost" size="sm" className="px-2">
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        <Separator className="my-2" />
        <ScrollArea className="h-[300px]">
          <div className="space-y-2 mt-3">
            {sortedBlocks.map((block) => (
              <div 
                key={block.id}
                className={`
                  flex items-center justify-between p-2 rounded-md cursor-pointer
                  ${selectedBlockId === block.id ? 'bg-secondary text-secondary-foreground' : 'bg-card hover:bg-muted'}
                `}
                onClick={() => selectBlock(block.id)}
                draggable
                onDragStart={(e) => handleDragStart(e, block.id)}
                onDragEnd={handleDragEnd}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, block.id)}
              >
                <div className="flex items-center gap-2">
                  <div className="cursor-grab p-1">
                    <GripVertical className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <span className="text-lg" role="img" aria-label={block.type}>
                    {getBlockIcon(block.type)}
                  </span>
                  <span className="text-sm font-medium truncate max-w-[150px]">
                    {block.name}
                  </span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6"
                    onClick={(e) => {
                      e.stopPropagation();
                      duplicateBlock(block.id);
                    }}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6 text-destructive hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeBlock(block.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
            
            {landingPage.blocks.length === 0 && (
              <div className="text-center py-4 text-muted-foreground">
                Nenhum bloco adicionado
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default BlockManager;
