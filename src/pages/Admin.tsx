
import React from 'react';
import { EditorProvider } from '@/contexts/EditorContext';
import EditorLayout from '@/components/editor/EditorLayout';

const Admin = () => {
  return (
    <EditorProvider>
      <EditorLayout />
    </EditorProvider>
  );
};

export default Admin;
