
import React from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { Book, Video, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const AdminTabsNav = () => {
  return (
    <div className="border-b pb-2 mb-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Gerenciar Cursos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-4 w-[400px]">
                <Link to="/admin/courses" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Book className="h-5 w-5" />
                  <div>
                    <h4 className="font-medium">Listar Cursos</h4>
                    <p className="text-sm text-muted-foreground">Veja e edite todos os cursos</p>
                  </div>
                </Link>
                <Link to="/admin/courses/new" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Plus className="h-5 w-5" />
                  <div>
                    <h4 className="font-medium">Novo Curso</h4>
                    <p className="text-sm text-muted-foreground">Criar um novo curso do zero</p>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Conteúdo Didático</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-4 w-[400px]">
                <Link to="/admin/modules" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Book className="h-5 w-5" />
                  <div>
                    <h4 className="font-medium">Módulos</h4>
                    <p className="text-sm text-muted-foreground">Gerenciar módulos dos cursos</p>
                  </div>
                </Link>
                <Link to="/admin/lessons" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Book className="h-5 w-5" />
                  <div>
                    <h4 className="font-medium">Aulas</h4>
                    <p className="text-sm text-muted-foreground">Gerenciar aulas dos módulos</p>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Biblioteca de Mídias</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid gap-3 p-4 w-[400px]">
                <Link to="/admin/videos" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Video className="h-5 w-5" />
                  <div>
                    <h4 className="font-medium">Vídeos</h4>
                    <p className="text-sm text-muted-foreground">Gerenciar biblioteca de vídeos</p>
                  </div>
                </Link>
                <Link to="/admin/videos/upload" className="flex items-center gap-2 p-2 hover:bg-muted rounded-md">
                  <Plus className="h-5 w-5" />
                  <div>
                    <h4 className="font-medium">Upload de Vídeo</h4>
                    <p className="text-sm text-muted-foreground">Enviar novo vídeo para a biblioteca</p>
                  </div>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex justify-end mt-2">
        <Button variant="outline" size="sm" className="mr-2">Importar</Button>
        <Button variant="default" size="sm">Novo Curso</Button>
      </div>
    </div>
  );
};

export default AdminTabsNav;
