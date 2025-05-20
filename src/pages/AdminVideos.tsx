
import React, { useState } from 'react';
import AdminTabsNav from '@/components/admin/AdminTabsNav';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Play, Plus, Search, Video } from 'lucide-react';

// Mock data for videos
const mockVideos = [
  { 
    id: 'v1', 
    title: 'Introdução ao React', 
    duration: '10:25',
    lessonTitle: 'O que é React?',
    courseTitle: 'Introdução ao React',
    uploadDate: '2023-06-15'
  },
  { 
    id: 'v2', 
    title: 'Componentes React', 
    duration: '15:10',
    lessonTitle: 'Componentes e Props',
    courseTitle: 'Introdução ao React',
    uploadDate: '2023-06-20'
  },
  { 
    id: 'v3', 
    title: 'Hooks no React', 
    duration: '12:45',
    lessonTitle: 'useState e useEffect',
    courseTitle: 'Introdução ao React',
    uploadDate: '2023-06-25'
  },
];

const AdminVideosPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredVideos = mockVideos.filter(video => 
    video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.lessonTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    video.courseTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-6">
      <AdminTabsNav />
      
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Biblioteca de Vídeos</h2>
          <p className="text-muted-foreground">Gerencie os vídeos para suas aulas.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Upload de Vídeo
        </Button>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Buscar Vídeos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="search"
              placeholder="Buscar por título, aula ou curso..."
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
            <TableHead>Duração</TableHead>
            <TableHead>Aula Vinculada</TableHead>
            <TableHead>Curso</TableHead>
            <TableHead>Data de Upload</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <TableRow key={video.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center">
                    <Video className="h-4 w-4 mr-2 text-blue-500" />
                    {video.title}
                  </div>
                </TableCell>
                <TableCell>{video.duration}</TableCell>
                <TableCell>{video.lessonTitle}</TableCell>
                <TableCell>{video.courseTitle}</TableCell>
                <TableCell>{video.uploadDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="mr-2">
                    <Play className="h-4 w-4 mr-1" /> Reproduzir
                  </Button>
                  <Button variant="outline" size="sm" className="mr-2">Editar</Button>
                  <Button variant="destructive" size="sm">Excluir</Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center py-6">
                Nenhum vídeo encontrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminVideosPage;
