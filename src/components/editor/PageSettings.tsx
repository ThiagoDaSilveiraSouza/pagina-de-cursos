
import React from 'react';
import { useEditor } from '@/contexts/EditorContext';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const PageSettings = () => {
  const { landingPage, updatePageSettings, updatePageMetadata } = useEditor();
  const { settings, metadata } = landingPage;

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2">Configurações da Página</h3>
        
        <Tabs defaultValue="metadata">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="metadata">SEO & Metadata</TabsTrigger>
            <TabsTrigger value="design">Design & Tipografia</TabsTrigger>
          </TabsList>
          
          <TabsContent value="metadata" className="mt-4 space-y-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="pageTitle">Título da Página (SEO)</Label>
                <Input
                  id="pageTitle"
                  value={metadata.title}
                  onChange={(e) => updatePageMetadata({ title: e.target.value })}
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="pageDescription">Descrição (Meta)</Label>
                <Textarea
                  id="pageDescription"
                  value={metadata.description}
                  onChange={(e) => updatePageMetadata({ description: e.target.value })}
                  rows={3}
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="pageKeywords">Palavras-chave (SEO)</Label>
                <Input
                  id="pageKeywords"
                  value={metadata.keywords}
                  onChange={(e) => updatePageMetadata({ keywords: e.target.value })}
                  placeholder="palavra1, palavra2, palavra3"
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="design" className="mt-4 space-y-4">
            <div className="space-y-3">
              <div className="space-y-1">
                <Label htmlFor="fontPrimary">Fonte Principal</Label>
                <Input
                  id="fontPrimary"
                  value={settings.fontPrimary}
                  onChange={(e) => updatePageSettings({ fontPrimary: e.target.value })}
                  placeholder="Inter, sans-serif"
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="fontSecondary">Fonte Secundária</Label>
                <Input
                  id="fontSecondary"
                  value={settings.fontSecondary}
                  onChange={(e) => updatePageSettings({ fontSecondary: e.target.value })}
                  placeholder="Poppins, sans-serif"
                />
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-1">
                  <Label htmlFor="colorPrimary">Cor Primária</Label>
                  <div className="flex gap-2">
                    <Input
                      id="colorPrimary"
                      type="color"
                      value={settings.colorPrimary}
                      onChange={(e) => updatePageSettings({ colorPrimary: e.target.value })}
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      value={settings.colorPrimary}
                      onChange={(e) => updatePageSettings({ colorPrimary: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="colorSecondary">Cor Secundária</Label>
                  <div className="flex gap-2">
                    <Input
                      id="colorSecondary"
                      type="color"
                      value={settings.colorSecondary}
                      onChange={(e) => updatePageSettings({ colorSecondary: e.target.value })}
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      value={settings.colorSecondary}
                      onChange={(e) => updatePageSettings({ colorSecondary: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="colorAccent">Cor de Destaque</Label>
                  <div className="flex gap-2">
                    <Input
                      id="colorAccent"
                      type="color"
                      value={settings.colorAccent}
                      onChange={(e) => updatePageSettings({ colorAccent: e.target.value })}
                      className="w-12 h-9 p-1"
                    />
                    <Input
                      value={settings.colorAccent}
                      onChange={(e) => updatePageSettings({ colorAccent: e.target.value })}
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PageSettings;
