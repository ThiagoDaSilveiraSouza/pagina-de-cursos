
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BlockType } from '@/types/editor';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { FileText, BookOpen, MessageSquare, User, HelpCircle, MousePointer, FootprintsIcon, CheckCircle, PlusCircle } from 'lucide-react';

const BlockTypeSelector = () => {
  const { selectedBlockId, updateBlock, landingPage } = useEditor();
  
  if (!selectedBlockId) return null;
  
  const block = landingPage.blocks.find(b => b.id === selectedBlockId);
  if (!block) return null;
  
  const blockTypes: { value: BlockType, label: string, icon: React.ReactNode }[] = [
    { value: 'hero', label: 'Hero', icon: <MousePointer className="h-4 w-4" /> },
    { value: 'benefits', label: 'Benefícios', icon: <CheckCircle className="h-4 w-4" /> },
    { value: 'curriculum', label: 'Currículo', icon: <FileText className="h-4 w-4" /> },
    { value: 'testimonials', label: 'Depoimentos', icon: <MessageSquare className="h-4 w-4" /> },
    { value: 'offer', label: 'Oferta', icon: <PlusCircle className="h-4 w-4" /> },
    { value: 'instructor', label: 'Instrutor', icon: <User className="h-4 w-4" /> },
    { value: 'faq', label: 'FAQ', icon: <HelpCircle className="h-4 w-4" /> },
    { value: 'cta', label: 'CTA', icon: <MousePointer className="h-4 w-4" /> },
    { value: 'footer', label: 'Rodapé', icon: <FootprintsIcon className="h-4 w-4" /> },
  ];
  
  const handleTypeChange = (value: BlockType) => {
    updateBlock(selectedBlockId, { type: value });
  };
  
  const currentBlockType = blockTypes.find(t => t.value === block.type);
  
  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-2">
          <Label htmlFor="blockType">Tipo de Bloco</Label>
          <Select 
            value={block.type} 
            onValueChange={(value: BlockType) => handleTypeChange(value)}
          >
            <SelectTrigger id="blockType" className="w-full">
              <SelectValue placeholder="Selecione o tipo">
                <div className="flex items-center gap-2">
                  {currentBlockType?.icon}
                  <span>{currentBlockType?.label}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {blockTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  <div className="flex items-center gap-2">
                    {type.icon}
                    <span>{type.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockTypeSelector;
