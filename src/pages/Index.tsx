
import React from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import PagePreview from '@/components/editor/PagePreview';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Settings } from 'lucide-react';

const Index = () => {
  return (
    <EditorProvider>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Landing Page</h1>
            <Link to="/admin">
              <Button variant="outline" className="gap-2">
                <Settings size={18} />
                Editar Página
              </Button>
            </Link>
          </div>
          
          <div className="border rounded-lg overflow-hidden shadow-sm">
            <PagePreview />
          </div>
        </div>
      </div>
    </EditorProvider>
  );
};

export default Index;
