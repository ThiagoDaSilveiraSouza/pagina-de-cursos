
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Save, 
  Eye, 
  EyeOff, 
  Smartphone, 
  Monitor,
  Upload,
  Download,
  RotateCcw,
  Send
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const EditorToolbar = () => {
  const { 
    isPreviewMode, 
    togglePreviewMode, 
    devicePreview, 
    setDevicePreview,
    exportData,
    importData,
    resetToDefault,
    publishChanges
  } = useEditor();
  
  const { toast } = useToast();
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  
  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'landing-page-data.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Exportação concluída",
      description: "Seus dados foram exportados com sucesso.",
    });
  };
  
  const handleImportClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      try {
        importData(content);
      } catch (error) {
        toast({
          title: "Erro ao importar dados",
          description: "O arquivo selecionado possui um formato inválido.",
          variant: "destructive",
        });
      }
    };
    reader.readAsText(file);
    
    // Reset file input
    if (event.target) {
      event.target.value = "";
    }
  };
  
  const handleReset = () => {
    if (confirm("Tem certeza que deseja restaurar para os dados padrão? Esta ação não pode ser desfeita.")) {
      resetToDefault();
    }
  };

  const handlePublish = () => {
    publishChanges();
  };
  
  return (
    <div className="border-b bg-background p-2 flex justify-between items-center">
      {/* Device Selector */}
      <div className="flex items-center">
        <Tabs defaultValue={devicePreview} onValueChange={(value) => setDevicePreview(value as 'desktop' | 'mobile')}>
          <TabsList>
            <TabsTrigger value="desktop" className="flex items-center">
              <Monitor className="w-4 h-4 mr-2" />
              Desktop
            </TabsTrigger>
            <TabsTrigger value="mobile" className="flex items-center">
              <Smartphone className="w-4 h-4 mr-2" />
              Mobile
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {/* Action Buttons */}
      <div className="flex items-center space-x-2">
        <Button 
          variant="outline"
          size="sm" 
          onClick={togglePreviewMode}
          className="flex items-center"
        >
          {isPreviewMode ? (
            <>
              <EyeOff className="h-4 w-4 mr-1" />
              <span>Editor</span>
            </>
          ) : (
            <>
              <Eye className="h-4 w-4 mr-1" />
              <span>Visualizar</span>
            </>
          )}
        </Button>
        
        <div className="h-6 border-r border-border"></div>
        
        <Button variant="outline" size="sm" onClick={handleImportClick} className="flex items-center">
          <Upload className="h-4 w-4 mr-1" />
          <span>Importar</span>
        </Button>
        <input 
          type="file" 
          ref={fileInputRef}
          className="hidden" 
          accept=".json" 
          onChange={handleFileChange} 
        />
        
        <Button variant="outline" size="sm" onClick={handleExport} className="flex items-center">
          <Download className="h-4 w-4 mr-1" />
          <span>Exportar</span>
        </Button>
        
        <Button variant="outline" size="sm" onClick={handleReset} className="flex items-center text-destructive">
          <RotateCcw className="h-4 w-4 mr-1" />
          <span>Reset</span>
        </Button>

        <Button variant="default" size="sm" onClick={handlePublish} className="flex items-center">
          <Send className="h-4 w-4 mr-1" />
          <span>Publicar</span>
        </Button>
      </div>
    </div>
  );
};

export default EditorToolbar;
