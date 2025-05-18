
import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate, useLocation } from 'react-router-dom';

const AdminTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  
  const tabs = [
    { value: '/admin', label: 'Editor' },
    { value: '/admin/info', label: 'Informações' },
    { value: '/admin/sales', label: 'Vendas' },
    { value: '/admin/analytics', label: 'Analytics' },
  ];
  
  const handleTabChange = (value: string) => {
    navigate(value);
  };
  
  return (
    <div className="bg-background border-b p-2">
      <Tabs 
        value={currentPath} 
        onValueChange={handleTabChange}
        className="w-full max-w-3xl mx-auto"
      >
        <TabsList className="grid grid-cols-4">
          {tabs.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

export default AdminTabs;
