
import React, { useState } from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import EditorLayout from '@/components/editor/EditorLayout';
import AdminTabs from '@/components/editor/AdminTabs';

// Import the tab content components
import AdminInfoContent from './AdminInfo';
import AdminSalesContent from './AdminSales';
import AdminAnalyticsContent from './AdminAnalytics';
import AdminCoursesContent from './AdminCourses';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('editor');

  // Render the appropriate content based on active tab
  const renderContent = () => {
    switch (activeTab) {
      case 'info':
        return <AdminInfoContent />;
      case 'sales':
        return <AdminSalesContent />;
      case 'analytics':
        return <AdminAnalyticsContent />;
      case 'courses':
        return <AdminCoursesContent />;
      case 'editor':
      default:
        return <EditorLayout />;
    }
  };

  return (
    <EditorProvider>
      <div className="h-screen flex flex-col bg-background">
        <AdminTabs onTabChange={setActiveTab} />
        <div className="flex-1 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </EditorProvider>
  );
};

export default Admin;
