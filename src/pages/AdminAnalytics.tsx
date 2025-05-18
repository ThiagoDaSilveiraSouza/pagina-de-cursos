
import React from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import { Card } from '@/components/ui/card';

const AdminAnalytics = () => {
  return (
    <EditorProvider>
      <div className="h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Tráfego por Fonte</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Direto</span>
                <span>45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Redes Sociais</span>
                <span>30%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-600 h-2 rounded-full" style={{ width: '30%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Pesquisa Orgânica</span>
                <span>15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
              
              <div className="flex justify-between items-center">
                <span>Email</span>
                <span>10%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-lg font-medium mb-4">Comportamento do Usuário</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Taxa de Rejeição</p>
                <p className="text-2xl font-medium">32%</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Páginas / Sessão</p>
                <p className="text-2xl font-medium">2.7</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Tempo Médio na Página</p>
                <p className="text-2xl font-medium">2m 43s</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Taxa de Conversão</p>
                <p className="text-2xl font-medium">3.5%</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </EditorProvider>
  );
};

export default AdminAnalytics;
