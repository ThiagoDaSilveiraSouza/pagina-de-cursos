
import React, { useState } from 'react';
import AdminTabsNav from '@/components/admin/AdminTabsNav';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Edit, Plus, Trash2 } from 'lucide-react';

// Temporary type definitions for the course management
type Video = {
  id: string;
  title: string;
  url: string;
  duration: number;
};

type Lesson = {
  id: string;
  title: string;
  description: string;
  videoId?: string;
  order: number;
};

type Module = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  order: number;
};

type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: Module[];
};

// Mock data for demonstration
const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Introdução ao React',
    description: 'Aprenda os fundamentos do React em um curso completo',
    thumbnail: 'https://placehold.co/600x400/png',
    modules: [
      {
        id: 'm1',
        title: 'Fundamentos do React',
        description: 'Conceitos básicos da biblioteca',
        order: 1,
        lessons: [
          {
            id: 'l1',
            title: 'O que é React?',
            description: 'Introdução à biblioteca React',
            videoId: 'v1',
            order: 1,
          },
          {
            id: 'l2',
            title: 'Componentes e Props',
            description: 'Como criar e reutilizar componentes',
            videoId: 'v2',
            order: 2,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: 'JavaScript Avançado',
    description: 'Domine recursos avançados da linguagem JavaScript',
    thumbnail: 'https://placehold.co/600x400/png',
    modules: [],
  },
];

const AdminCoursesPage = () => {
  const [courses] = useState<Course[]>(mockCourses);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter(course => 
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6">
      <AdminTabsNav />
      
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Cursos</h2>
          <p className="text-muted-foreground">Gerencie seus cursos, módulos e aulas.</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="flex-1">
          <Label htmlFor="search" className="sr-only">Buscar</Label>
          <Input 
            id="search"
            placeholder="Buscar cursos..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Novo Curso
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(course => (
          <Card key={course.id}>
            <CardHeader className="p-0">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription className="mt-2">{course.description}</CardDescription>
                </div>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-md font-medium">
                  {course.modules.length} {course.modules.length === 1 ? 'módulo' : 'módulos'}
                </span>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2 flex items-center">
                  <Book className="h-4 w-4 mr-1" /> Módulos
                </h4>
                {course.modules.length > 0 ? (
                  <ul className="space-y-1 text-sm">
                    {course.modules.slice(0, 3).map(module => (
                      <li key={module.id} className="truncate text-muted-foreground">
                        • {module.title} ({module.lessons.length} aulas)
                      </li>
                    ))}
                    {course.modules.length > 3 && (
                      <li className="text-muted-foreground">• ... mais {course.modules.length - 3} módulos</li>
                    )}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground italic">Nenhum módulo adicionado</p>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-4">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-1" /> Editar
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="h-4 w-4 mr-1" /> Excluir
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <Book className="mx-auto h-12 w-12 text-muted-foreground" />
          <h3 className="mt-4 text-lg font-medium">Nenhum curso encontrado</h3>
          <p className="mt-2 text-muted-foreground">
            Comece criando um novo curso ou tente outra busca.
          </p>
          <Button className="mt-4">
            <Plus className="mr-2 h-4 w-4" /> Criar Curso
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminCoursesPage;
