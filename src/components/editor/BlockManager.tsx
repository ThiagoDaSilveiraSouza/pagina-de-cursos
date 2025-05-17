
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ChevronUp, ChevronDown, Copy, Trash2, Eye } from 'lucide-react';

const BlockManager = () => {
  const { 
    landingPage, 
    selectedBlockId, 
    selectBlock, 
    moveBlockUp, 
    moveBlockDown,
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
      default: return '📄';
    }
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
        <div className="space-y-2 mt-3 max-h-[300px] overflow-y-auto">
          {sortedBlocks.map((block) => (
            <div 
              key={block.id}
              className={`
                flex items-center justify-between p-2 rounded-md cursor-pointer
                ${selectedBlockId === block.id ? 'bg-secondary text-secondary-foreground' : 'bg-card hover:bg-muted'}
              `}
              onClick={() => selectBlock(block.id)}
            >
              <div className="flex items-center gap-2">
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
                    moveBlockUp(block.id);
                  }}
                >
                  <ChevronUp className="h-4 w-4" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.stopPropagation();
                    moveBlockDown(block.id);
                  }}
                >
                  <ChevronDown className="h-4 w-4" />
                </Button>
                
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
      </CardContent>
    </Card>
  );
};

export default BlockManager;
