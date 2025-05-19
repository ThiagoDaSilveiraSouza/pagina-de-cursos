
import React from 'react';
import { Button } from '@/components/ui/button';
import { BlockType } from '@/types/editor';
import { useEditor } from '@/contexts/EditorContext';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import {
  FileText,
  BookOpen,
  MessageSquare,
  User,
  HelpCircle,
  MousePointer,
  FootprintsIcon,
  CheckCircle,
  PlusCircle
} from 'lucide-react';

const BlockSelector = () => {
  const { addBlock } = useEditor();

  const blocks: { type: BlockType, label: string, icon: React.ReactNode, description: string }[] = [
    {
      type: 'hero',
      label: 'Hero',
      icon: <MousePointer />,
      description: 'Seção principal com título, subtítulo e CTA'
    },
    {
      type: 'benefits',
      label: 'Benefícios',
      icon: <CheckCircle />,
      description: 'Destaques e benefícios em formato de lista ou cards'
    },
    {
      type: 'curriculum',
      label: 'Currículo',
      icon: <FileText />,
      description: 'Lista de módulos e aulas do curso'
    },
    {
      type: 'testimonials',
      label: 'Depoimentos',
      icon: <MessageSquare />,
      description: 'Feedback e avaliações de alunos'
    },
    {
      type: 'offer',
      label: 'Oferta',
      icon: <PlusCircle />,
      description: 'Detalhes de preço, garantia e bônus'
    },
    {
      type: 'instructor',
      label: 'Instrutor',
      icon: <User />,
      description: 'Biografia e qualificações do professor'
    },
    {
      type: 'faq',
      label: 'FAQ',
      icon: <HelpCircle />,
      description: 'Perguntas frequentes em formato acordeão'
    },
    {
      type: 'cta',
      label: 'CTA',
      icon: <MousePointer />,
      description: 'Chamada para ação destacada'
    },
    {
      type: 'footer',
      label: 'Rodapé',
      icon: <FootprintsIcon />,
      description: 'Links e informações de contato'
    },
  ];

  const handleAddBlock = (type: BlockType) => {
    addBlock(type);
  };

  return (
    <div className="space-y-2">
      <TooltipProvider>
        {blocks.map((block) => (
          <Tooltip key={block.type}>
            <TooltipTrigger asChild>
              <Button 
                variant="outline" 
                className="flex items-center h-auto p-3 justify-start text-left w-full"
                onClick={() => handleAddBlock(block.type)}
              >
                <div className="bg-muted rounded-md p-2 mr-3">{block.icon}</div>
                <div className="font-medium">{block.label}</div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{block.description}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default BlockSelector;
