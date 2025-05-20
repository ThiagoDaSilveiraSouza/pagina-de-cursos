
import React from 'react';
import AdminTabsNav from '@/components/admin/AdminTabsNav';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Upload, Book } from 'lucide-react';

const AdminNewCoursePage = () => {
  return (
    <div className="container mx-auto py-6">
      <AdminTabsNav />
      
      <div className="flex justify-between items-center mb-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight">Criar Novo Curso</h2>
          <p className="text-muted-foreground">Adicione um novo curso à sua plataforma.</p>
        </div>
      </div>
      
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
          <TabsTrigger value="details">Detalhes do Curso</TabsTrigger>
          <TabsTrigger value="media">Mídia</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
              <CardDescription>Preencha as informações essenciais para criar um novo curso.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título do Curso</Label>
                <Input id="title" placeholder="Ex: Desenvolvimento Web com React" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" placeholder="Descreva o que os alunos irão aprender neste curso" className="min-h-32" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="level">Nível</Label>
                  <Input id="level" placeholder="Iniciante, Intermediário, Avançado" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Duração (horas)</Label>
                  <Input id="duration" type="number" min="1" placeholder="Ex: 20" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="ml-auto">Próximo</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="details">
          <Card>
            <CardHeader>
              <CardTitle>Detalhes do Curso</CardTitle>
              <CardDescription>Informações adicionais sobre o conteúdo do curso.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="requisites">Pré-requisitos</Label>
                <Textarea id="requisites" placeholder="Conhecimentos necessários para este curso" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="objectives">Objetivos de Aprendizagem</Label>
                <Textarea id="objectives" placeholder="O que os alunos saberão ao concluir o curso" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="target-audience">Público-alvo</Label>
                <Input id="target-audience" placeholder="Para quem este curso foi feito" />
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline">Voltar</Button>
              <Button>Próximo</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="media">
          <Card>
            <CardHeader>
              <CardTitle>Mídia do Curso</CardTitle>
              <CardDescription>Imagens e vídeos promocionais do curso.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Imagem de Capa</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Input id="thumbnail" type="file" accept="image/*" className="hidden" />
                  <label htmlFor="thumbnail" className="cursor-pointer flex flex-col items-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <span className="text-sm font-medium">Clique para fazer upload</span>
                    <span className="text-xs text-gray-500 mt-1">PNG, JPG ou GIF (1200×600px recomendado)</span>
                  </label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>Vídeo Promocional (Opcional)</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                  <Input id="promo-video" type="file" accept="video/*" className="hidden" />
                  <label htmlFor="promo-video" className="cursor-pointer flex flex-col items-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <span className="text-sm font-medium">Clique para fazer upload de um vídeo</span>
                    <span className="text-xs text-gray-500 mt-1">MP4, WebM (máximo 100MB)</span>
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline">Voltar</Button>
              <Button>
                <Book className="mr-2 h-4 w-4" /> Criar Curso
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminNewCoursePage;
