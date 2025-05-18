
import React from 'react';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Block } from '@/types/editor';

interface LayoutPropertiesProps {
  block: Block;
  handleLayoutChange: (field: string, value: any) => void;
}

const LayoutProperties: React.FC<LayoutPropertiesProps> = ({ block, handleLayoutChange }) => {
  return (
    <div className="space-y-3">
      <div className="space-y-1">
        <Label>Número de Colunas</Label>
        <Select 
          value={block.layout.columns.toString()} 
          onValueChange={(value) => handleLayoutChange('columns', parseInt(value))}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Coluna</SelectItem>
            <SelectItem value="2">2 Colunas</SelectItem>
            <SelectItem value="3">3 Colunas</SelectItem>
            <SelectItem value="4">4 Colunas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-1">
        <Label>Alinhamento Horizontal</Label>
        <Select 
          value={block.layout.alignment} 
          onValueChange={(value) => handleLayoutChange('alignment', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="left">Esquerda</SelectItem>
            <SelectItem value="center">Centro</SelectItem>
            <SelectItem value="right">Direita</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-1">
        <Label>Alinhamento Vertical</Label>
        <Select 
          value={block.layout.verticalAlignment} 
          onValueChange={(value) => handleLayoutChange('verticalAlignment', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="top">Topo</SelectItem>
            <SelectItem value="center">Centro</SelectItem>
            <SelectItem value="bottom">Base</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default LayoutProperties;
