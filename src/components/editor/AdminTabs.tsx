
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdminTabs = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  const [activeTab, setActiveTab] = useState('editor');
  
  const tabs = [
    { value: 'editor', label: 'Editor' },
    { value: 'info', label: 'Informações' },
    { value: 'sales', label: 'Vendas' },
    { value: 'analytics', label: 'Analytics' },
  ];
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onTabChange(value);
  };
  
  return (
    <div className="bg-background border-b p-2">
      <Tabs 
        value={activeTab} 
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
