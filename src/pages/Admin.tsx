
import React, { useState } from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import EditorLayout from '@/components/editor/EditorLayout';
import AdminTabs from '@/components/editor/AdminTabs';
import { useLocation } from 'react-router-dom';

// Import the tab content components
import AdminInfoContent from './AdminInfo';
import AdminSalesContent from './AdminSales';
import AdminAnalyticsContent from './AdminAnalytics';
import AdminCoursesPage from './AdminCourses';
import AdminNewCoursePage from './AdminNewCourse';
import AdminModulesPage from './AdminModules';
import AdminLessonsPage from './AdminLessons';
import AdminVideosPage from './AdminVideos';
import AdminVideoUploadPage from './AdminVideoUpload';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const location = useLocation();
  const path = location.pathname;
  
  // Determine content based on current path or active tab
  const renderContent = () => {
    // Check URL path first for specific admin pages
    if (path === '/admin/courses') return <AdminCoursesPage />;
    if (path === '/admin/courses/new') return <AdminNewCoursePage />;
    if (path === '/admin/modules') return <AdminModulesPage />;
    if (path === '/admin/lessons') return <AdminLessonsPage />;
    if (path === '/admin/videos') return <AdminVideosPage />;
    if (path === '/admin/videos/upload') return <AdminVideoUploadPage />;
    
    // If not a specific path, use tab-based rendering
    switch (activeTab) {
      case 'info':
        return <AdminInfoContent />;
      case 'sales':
        return <AdminSalesContent />;
      case 'analytics':
        return <AdminAnalyticsContent />;
      case 'courses':
        return <AdminCoursesPage />;
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
