
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { BlockType } from '@/types/editor';
import { useEditor } from '@/contexts/EditorContext';
import {
  FileText,
  BookOpen,
  MessageSquare,
  Video,
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

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">Adicionar Bloco</h3>
        <Separator className="my-2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 mt-3">
          {blocks.map((block) => (
            <Button 
              key={block.type}
              variant="outline" 
              className="flex items-center h-auto p-3 justify-start text-left gap-3"
              onClick={() => addBlock(block.type)}
            >
              <div className="bg-muted rounded-md p-2">{block.icon}</div>
              <div>
                <div className="font-medium">{block.label}</div>
                <div className="text-xs text-muted-foreground">{block.description}</div>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlockSelector;
