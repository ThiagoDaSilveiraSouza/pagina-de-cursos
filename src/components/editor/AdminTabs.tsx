
import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLocation, useNavigate } from 'react-router-dom';

const AdminTabs = ({ onTabChange }: { onTabChange: (tab: string) => void }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Determine active tab based on current path
  const getInitialTab = () => {
    const path = location.pathname;
    if (path.includes('/admin/courses') || path.includes('/admin/modules') || 
        path.includes('/admin/lessons') || path.includes('/admin/videos')) {
      return 'courses';
    } else if (path === '/admin/info') {
      return 'info';
    } else if (path === '/admin/sales') {
      return 'sales';
    } else if (path === '/admin/analytics') {
      return 'analytics';
    }
    return 'editor';
  };
  
  const [activeTab, setActiveTab] = useState(getInitialTab());
  
  // Update active tab when location changes
  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [location]);
  
  const tabs = [
    { value: 'editor', label: 'Editor' },
    { value: 'info', label: 'Informações' },
    { value: 'sales', label: 'Vendas' },
    { value: 'analytics', label: 'Analytics' },
    { value: 'courses', label: 'Cursos' },
  ];
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onTabChange(value);
    
    // Navigate to the appropriate route based on tab
    if (value === 'courses') {
      navigate('/admin/courses');
    } else if (value === 'info') {
      navigate('/admin/info');
    } else if (value === 'sales') {
      navigate('/admin/sales');
    } else if (value === 'analytics') {
      navigate('/admin/analytics');
    } else {
      navigate('/admin');
    }
  };
  
  return (
    <div className="bg-background border-b p-2">
      <Tabs 
        value={activeTab} 
        onValueChange={handleTabChange}
        className="w-full max-w-3xl mx-auto"
      >
        <TabsList className="grid grid-cols-5">
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
