
import React from 'react';

const AdminInfo = () => {
  return (
    <div className="h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Informações da Página</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Estatísticas Gerais</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Tempo médio na página</p>
              <p className="text-2xl font-medium">2:34</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Taxa de conversão</p>
              <p className="text-2xl font-medium">3.2%</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Blocos mais visualizados</p>
              <p className="text-lg font-medium">Hero (90%), Benefícios (85%)</p>
            </div>
          </div>
        </div>
        
        <div className="p-6 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Performance</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Tempo de carregamento</p>
              <p className="text-2xl font-medium">1.2s</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Performance SEO</p>
              <p className="text-2xl font-medium">92/100</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mobile responsiveness</p>
              <p className="text-2xl font-medium">98/100</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminInfo;
