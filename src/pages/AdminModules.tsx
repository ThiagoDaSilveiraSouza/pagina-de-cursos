
import React, { useState } from 'react';
import AdminTabsNav from '@/components/admin/AdminTabsNav';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Search } from 'lucide-react';

// Mock data for modules
const mockModules = [
  { 
    id: 'm1', 
    title: 'Fundamentos do React', 
    description: 'Conceitos básicos da biblioteca',
    courseTitle: 'Introdução ao React',
    lessonsCount: 4,
    order: 1
  },
  { 
    id: 'm2', 
    title: 'Hooks no React', 
    description: 'Entendendo os hooks do React',
    courseTitle: 'Introdução ao React',
    lessonsCount: 3,
    order: 2
  },
  { 
    id: 'm3', 
    title: 'JavaScript Básico', 
    description: 'Fundamentos da linguagem JavaScript',
    courseTitle: 'JavaScript Avançado',
    lessonsCount: 5,
    order: 1
  },
];

const AdminModulesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredModules = mockModules.filter(module => 
    module.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    module.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6">
      <AdminTabsNav />
      
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Módulos</h2>
          <p className="text-muted-foreground">Gerencie os módulos dos seus cursos.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Novo Módulo
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Buscar Módulos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Buscar por título ou curso..."
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
            <TableHead>Curso</TableHead>
            <TableHead className="text-center">Aulas</TableHead>
            <TableHead className="text-center">Ordem</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredModules.length > 0 ? (
            filteredModules.map((module) => (
              <TableRow key={module.id}>
                <TableCell className="font-medium">{module.title}</TableCell>
                <TableCell>{module.description}</TableCell>
                <TableCell>{module.courseTitle}</TableCell>
                <TableCell className="text-center">{module.lessonsCount}</TableCell>
                <TableCell className="text-center">{module.order}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6">
                Nenhum módulo encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminModulesPage;
