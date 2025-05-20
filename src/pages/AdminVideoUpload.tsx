
import React, { useState } from 'react';
import AdminTabsNav from '@/components/admin/AdminTabsNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Upload, Video } from 'lucide-react';

const AdminVideoUploadPage = () => {
  const [uploading, setUploading] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setVideoFile(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    setUploading(true);
    
    // Simulate upload process
    setTimeout(() => {
      setUploading(false);
      // Reset form or redirect
    }, 2000);
  };
  
  return (
    <div className="container mx-auto py-6">
      <AdminTabsNav />
      
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Upload de Vídeo</h2>
          <p className="text-muted-foreground">Envie um novo vídeo para sua biblioteca.</p>
        </div>
      </div>
      
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Selecionar Arquivo de Vídeo</CardTitle>
            <CardDescription>Arraste e solte ou clique para selecionar um arquivo de vídeo</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 cursor-pointer bg-gray-50 hover:bg-gray-100">
              <Input 
                id="video-upload"
                type="file" 
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label htmlFor="video-upload" className="flex flex-col items-center justify-center cursor-pointer">
                <Upload className="h-12 w-12 text-gray-400 mb-4" />
                <div className="text-center">
                  <p className="text-sm font-medium">
                    {videoFile ? videoFile.name : "Clique para fazer upload ou arraste e solte"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Suporta MP4, WebM, e Ogg (máximo 500MB)
                  </p>
                </div>
              </label>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Informações do Vídeo</CardTitle>
            <CardDescription>Preencha os detalhes para este vídeo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Vídeo</Label>
              <Input id="title" placeholder="Digite um título para o vídeo" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea id="description" placeholder="Descrição do conteúdo do vídeo" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="course">Curso Relacionado (Opcional)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="react">Introdução ao React</SelectItem>
                  <SelectItem value="javascript">JavaScript Avançado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="lesson">Aula Relacionada (Opcional)</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione uma aula" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="l1">O que é React?</SelectItem>
                  <SelectItem value="l2">Componentes e Props</SelectItem>
                  <SelectItem value="l3">Estado e Ciclo de Vida</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancelar</Button>
            <Button 
              onClick={handleUpload} 
              disabled={!videoFile || uploading}
            >
              {uploading ? (
                <span className="flex items-center">Enviando... <Video className="animate-pulse ml-2 h-4 w-4" /></span>
              ) : (
                <span className="flex items-center">Enviar Vídeo <Upload className="ml-2 h-4 w-4" /></span>
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AdminVideoUploadPage;
