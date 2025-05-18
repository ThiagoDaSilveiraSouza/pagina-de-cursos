
import React from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import { Card } from '@/components/ui/card';

const AdminSales = () => {
  return (
    <EditorProvider>
      <div className="h-screen p-8">
        <h1 className="text-3xl font-bold mb-6">Relatório de Vendas</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Vendas Totais</h3>
            <p className="text-3xl font-bold mt-2">R$ 12.500,00</p>
            <p className="text-sm text-green-600 mt-1">+15% em relação ao mês anterior</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Conversões</h3>
            <p className="text-3xl font-bold mt-2">127</p>
            <p className="text-sm text-green-600 mt-1">+8% em relação ao mês anterior</p>
          </Card>
          
          <Card className="p-6">
            <h3 className="text-sm font-medium text-muted-foreground">Ticket Médio</h3>
            <p className="text-3xl font-bold mt-2">R$ 98,42</p>
            <p className="text-sm text-green-600 mt-1">+5% em relação ao mês anterior</p>
          </Card>
        </div>
        
        <div className="border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Últimas Vendas</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-medium">ID</th>
                  <th className="text-left py-3 px-4 font-medium">Data</th>
                  <th className="text-left py-3 px-4 font-medium">Cliente</th>
                  <th className="text-right py-3 px-4 font-medium">Valor</th>
                  <th className="text-center py-3 px-4 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i} className="border-b">
                    <td className="py-3 px-4">#00{i}234</td>
                    <td className="py-3 px-4">18/05/2023</td>
                    <td className="py-3 px-4">Cliente {i}</td>
                    <td className="py-3 px-4 text-right">R$ 97,00</td>
                    <td className="py-3 px-4 text-center">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                        Completo
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </EditorProvider>
  );
};

export default AdminSales;
