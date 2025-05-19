
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Block, Product } from '@/types/editor';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProductsBlockProps {
  block: Block;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  const handleCheckout = (productId: string) => {
    navigate(`/checkout/${productId}`);
  };

  return (
    <>
      <div 
        className="flex-shrink-0 w-64 mx-2 cursor-pointer rounded-lg overflow-hidden transition-transform hover:scale-105"
        onClick={() => setShowDetails(true)}
      >
        <div className="h-40 bg-muted overflow-hidden">
          {product.images && product.images.length > 0 ? (
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted-foreground/10">
              <p className="text-muted-foreground">Sem imagem</p>
            </div>
          )}
        </div>
        <div className="p-3 bg-card">
          <h4 className="font-medium line-clamp-1">{product.name}</h4>
          <p className="text-sm text-muted-foreground line-clamp-1">{product.description}</p>
          <p className="font-semibold mt-1">
            {new Intl.NumberFormat('pt-BR', { 
              style: 'currency', 
              currency: 'BRL' 
            }).format(product.price)}
          </p>
        </div>
      </div>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{product.name}</DialogTitle>
            <DialogDescription>
              Detalhes do produto
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="space-y-4">
              {product.images && product.images.length > 0 ? (
                <div className="aspect-square bg-muted rounded-md overflow-hidden">
                  <img 
                    src={product.images[0]} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="aspect-square bg-muted rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">Sem imagem</p>
                </div>
              )}

              {product.images && product.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto py-2">
                  {product.images.slice(1).map((img, index) => (
                    <div key={index} className="w-20 h-20 flex-shrink-0 bg-muted rounded-md overflow-hidden">
                      <img 
                        src={img} 
                        alt={`${product.name} - imagem ${index + 2}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-2xl font-bold mt-1">
                  {new Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' 
                  }).format(product.price)}
                </p>
              </div>
              
              <p className="text-muted-foreground">{product.description}</p>
              
              {product.features && product.features.length > 0 && (
                <div>
                  <h4 className="font-medium">Características</h4>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="pt-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => handleCheckout(product.id)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Comprar Agora
                </Button>
              </div>
            </div>
          </div>

          <DialogClose asChild>
            <Button variant="outline" className="mt-4">Fechar</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </>
  );
};

const ProductCarousel: React.FC<{ products: Product[] }> = ({ products }) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <Button 
          variant="secondary" 
          size="icon" 
          className="rounded-full shadow-lg"
          onClick={scrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <Button 
          variant="secondary" 
          size="icon" 
          className="rounded-full shadow-lg"
          onClick={scrollRight}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
      
      <div 
        ref={scrollRef} 
        className="flex overflow-x-auto py-4 px-8 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const ProductsBlock: React.FC<ProductsBlockProps> = ({ block }) => {
  const { content, styles } = block;
  const { title, subtitle, products = [] } = content;

  return (
    <div 
      className="w-full"
      style={{
        paddingTop: `${styles.padding.top}px`,
        paddingBottom: `${styles.padding.bottom}px`,
        paddingLeft: `${styles.padding.left}px`,
        paddingRight: `${styles.padding.right}px`,
        marginTop: `${styles.margin.top}px`,
        marginBottom: `${styles.margin.bottom}px`,
        borderRadius: `${styles.borderRadius}px`,
        boxShadow: styles.shadow === 'none' ? 'none' : `var(--shadow-${styles.shadow})`,
        borderWidth: `${styles.border.width}px`,
        borderStyle: styles.border.style,
        borderColor: styles.border.color
      }}
    >
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-8">
            {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
            {subtitle && <p className="text-xl text-muted-foreground">{subtitle}</p>}
          </div>
        )}
        
        {products.length > 0 ? (
          <ProductCarousel products={products} />
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">Nenhum produto adicionado</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProductsBlock;
