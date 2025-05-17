
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, LogIn, UserPlus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  
  // Form states
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would normally integrate with a backend authentication service
    // For now, we'll just show a toast message
    toast({
      title: isLogin ? "Login Attempt" : "Registration Attempt",
      description: `Email: ${email} - This is just a demo. No actual authentication is implemented yet.`,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="w-full max-w-md p-4">
        <Tabs defaultValue="login" onValueChange={(value) => setIsLogin(value === 'login')}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Registrar</TabsTrigger>
          </TabsList>
          
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>{isLogin ? 'Login' : 'Criar Nova Conta'}</CardTitle>
              <CardDescription>
                {isLogin 
                  ? 'Entre com suas credenciais para acessar sua conta.' 
                  : 'Crie uma nova conta para começar a usar o sistema.'}
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input 
                      id="name" 
                      placeholder="Digite seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Digite seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input 
                      id="password" 
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button 
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex flex-col space-y-4">
                <Button type="submit" className="w-full">
                  {isLogin ? (
                    <><LogIn size={18} className="mr-2" /> Login</>
                  ) : (
                    <><UserPlus size={18} className="mr-2" /> Criar Conta</>
                  )}
                </Button>
                
                <div className="text-center text-sm">
                  <Link to="/" className="text-primary hover:underline">
                    Voltar para a página inicial
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </Tabs>
      </div>
    </div>
  );
};

export default Auth;
