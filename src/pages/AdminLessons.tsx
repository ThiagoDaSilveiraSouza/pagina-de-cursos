
import React, { useState } from 'react';
import AdminTabsNav from '@/components/admin/AdminTabsNav';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Play, Plus, Search } from 'lucide-react';

// Mock data for lessons
const mockLessons = [
  { 
    id: 'l1', 
    title: 'O que é React?', 
    description: 'Introdução à biblioteca React',
    moduleTitle: 'Fundamentos do React',
    courseTitle: 'Introdução ao React',
    hasVideo: true,
    order: 1
  },
  { 
    id: 'l2', 
    title: 'Componentes e Props', 
    description: 'Como criar e reutilizar componentes',
    moduleTitle: 'Fundamentos do React',
    courseTitle: 'Introdução ao React',
    hasVideo: true,
    order: 2
  },
  { 
    id: 'l3', 
    title: 'Estado e Ciclo de Vida', 
    description: 'Gerenciando estado em componentes React',
    moduleTitle: 'Fundamentos do React',
    courseTitle: 'Introdução ao React',
    hasVideo: false,
    order: 3
  },
];

const AdminLessonsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLessons = mockLessons.filter(lesson => 
    lesson.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.moduleTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lesson.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6">
      <AdminTabsNav />
      
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Aulas</h2>
          <p className="text-muted-foreground">Gerencie as aulas dos seus módulos.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Nova Aula
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Buscar Aulas</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Buscar por título, módulo ou curso..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
            <Button variant="outline">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Título</TableHead>
            <TableHead>Descrição</TableHead>
            <TableHead>Módulo</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead className="text-center">Ordem</TableHead>
            <TableHead className="text-center">Vídeo</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLessons.length > 0 ? (
            filteredLessons.map((lesson) => (
              <TableRow key={lesson.id}>
                <TableCell className="font-medium">{lesson.title}</TableCell>
                <TableCell>{lesson.description}</TableCell>
                <TableCell>{lesson.moduleTitle}</TableCell>
                <TableCell>{lesson.courseTitle}</TableCell>
                <TableCell className="text-center">{lesson.order}</TableCell>
                <TableCell className="text-center">
                  {lesson.hasVideo ? (
                    <Play className="h-4 w-4 mx-auto text-green-500" />
                  ) : (
                    <Book className="h-4 w-4 mx-auto text-gray-400" />
                  )}
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center py-6">
                Nenhuma aula encontrada.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminLessonsPage;
