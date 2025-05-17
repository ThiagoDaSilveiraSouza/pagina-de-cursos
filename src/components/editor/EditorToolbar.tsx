
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Monitor, Smartphone, Eye, EyeOff, Upload, Download, RotateCcw, Share2 } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const EditorToolbar = () => {
  const { 
    isPreviewMode,
    devicePreview,
    togglePreviewMode, 
    setDevicePreview,
    exportData,
    importData,
    resetToDefault
  } = useEditor();

  const handleExport = () => {
    const data = exportData();
    
    // Copy to clipboard
    navigator.clipboard.writeText(data)
      .then(() => {
        toast({
          title: "Dados copiados",
          description: "Os dados da sua landing page foram copiados para a área de transferência.",
        });
      })
      .catch((err) => {
        toast({
          title: "Erro ao copiar",
          description: "Não foi possível copiar os dados para a área de transferência.",
          variant: "destructive"
        });
      });
  };

  const handleImport = () => {
    const data = prompt("Cole os dados da landing page aqui:");
    if (data) {
      importData(data);
    }
  };
  
  const handleReset = () => {
    if (confirm("Tem certeza que deseja reiniciar para o modelo padrão? Todas as alterações serão perdidas.")) {
      resetToDefault();
    }
  };

  return (
    <header className="bg-background border-b border-border p-2 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <h1 className="font-semibold text-lg">Editor de Landing Page</h1>
      </div>
      
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          <Button
            variant={isPreviewMode ? "default" : "outline"}
            size="sm"
            onClick={togglePreviewMode}
            className="gap-1"
          >
            {isPreviewMode ? (
              <>
                <EyeOff className="h-4 w-4" />
                <span className="hidden sm:inline">Editar</span>
              </>
            ) : (
              <>
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">Preview</span>
              </>
            )}
          </Button>
          
          {isPreviewMode && (
            <div className="flex border rounded-md overflow-hidden ml-2">
              <Button
                variant={devicePreview === 'desktop' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-none"
                onClick={() => setDevicePreview('desktop')}
              >
                <Monitor className="h-4 w-4" />
              </Button>
              <Button
                variant={devicePreview === 'mobile' ? 'default' : 'ghost'}
                size="sm"
                className="rounded-none"
                onClick={() => setDevicePreview('mobile')}
              >
                <Smartphone className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
        
        <Separator orientation="vertical" className="h-6" />
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleExport}
          className="gap-1"
        >
          <Download className="h-4 w-4" />
          <span className="hidden sm:inline">Exportar</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleImport}
          className="gap-1"
        >
          <Upload className="h-4 w-4" />
          <span className="hidden sm:inline">Importar</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleReset}
          className="gap-1"
        >
          <RotateCcw className="h-4 w-4" />
          <span className="hidden sm:inline">Resetar</span>
        </Button>
        
        <Button 
          variant="default" 
          size="sm"
          className="gap-1"
        >
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">Publicar</span>
        </Button>
      </div>
    </header>
  );
};

export default EditorToolbar;
