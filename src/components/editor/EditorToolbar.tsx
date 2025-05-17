
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ButtonGroup } from '@/components/ui/button';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Eye, Settings, Download, Upload, Undo, Laptop, Smartphone } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { toast } from '@/components/ui/use-toast';

const EditorToolbar = () => {
  const { 
    togglePreviewMode, 
    isPreviewMode, 
    devicePreview,
    setDevicePreview,
    exportData,
    importData,
    resetToDefault
  } = useEditor();

  const [importDialogOpen, setImportDialogOpen] = useState(false);
  const [importText, setImportText] = useState('');
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [exportText, setExportText] = useState('');

  const handleExport = () => {
    const data = exportData();
    setExportText(data);
    setExportDialogOpen(true);
  };

  const handleImport = () => {
    try {
      importData(importText);
      setImportDialogOpen(false);
      setImportText('');
    } catch (error) {
      toast({
        title: "Erro na Importação",
        description: "O formato dos dados é inválido.",
        variant: "destructive",
      });
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      toast({
        title: "Dados Copiados",
        description: "Os dados foram copiados para a área de transferência.",
      });
    } catch (error) {
      toast({
        title: "Erro ao Copiar",
        description: "Não foi possível copiar os dados.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-between p-3 bg-background border-b">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" onClick={togglePreviewMode}>
          <Eye className="h-4 w-4 mr-1" />
          {isPreviewMode ? 'Modo Editor' : 'Preview'}
        </Button>
        
        {isPreviewMode && (
          <ToggleGroup type="single" value={devicePreview} onValueChange={(value) => {
            if (value) setDevicePreview(value as 'desktop' | 'mobile');
          }} className="ml-2">
            <ToggleGroupItem value="desktop" aria-label="Desktop View">
              <Laptop className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="mobile" aria-label="Mobile View">
              <Smartphone className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={handleExport}>
          <Download className="h-4 w-4 mr-1" />
          Exportar
        </Button>
        
        <Dialog open={importDialogOpen} onOpenChange={setImportDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <Upload className="h-4 w-4 mr-1" />
              Importar
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Importar Dados</DialogTitle>
              <DialogDescription>
                Cole os dados JSON da sua landing page para importá-los.
              </DialogDescription>
            </DialogHeader>
            <Textarea 
              className="min-h-[200px] font-mono text-sm"
              value={importText}
              onChange={(e) => setImportText(e.target.value)}
              placeholder='{"title": "Meu Curso", "blocks": [...], ...}'
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => setImportDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleImport}>Importar Agora</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Dialog open={exportDialogOpen} onOpenChange={setExportDialogOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Exportar Dados</DialogTitle>
              <DialogDescription>
                Copie os dados JSON abaixo para fazer backup da sua landing page.
              </DialogDescription>
            </DialogHeader>
            <Textarea 
              className="min-h-[200px] font-mono text-sm"
              value={exportText}
              readOnly
            />
            <DialogFooter>
              <Button variant="outline" onClick={() => setExportDialogOpen(false)}>
                Fechar
              </Button>
              <Button onClick={copyToClipboard}>Copiar</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        
        <Separator orientation="vertical" className="h-6" />
        
        <Button variant="outline" size="sm">
          <Settings className="h-4 w-4 mr-1" />
          Configurar
        </Button>
      </div>
    </div>
  );
};

export default EditorToolbar;
