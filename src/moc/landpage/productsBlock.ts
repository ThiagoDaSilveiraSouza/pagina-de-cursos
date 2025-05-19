
import { v4 as uuidv4 } from 'uuid';
import { Block } from '@/types/editor';

export const productsBlock: Block = {
  id: uuidv4(),
  type: 'products',
  name: 'Produtos em Destaque',
  background: {
    type: 'color',
    value: '#f9fafb'
  },
  styles: {
    padding: { top: 64, bottom: 64, left: 16, right: 16 },
    margin: { top: 0, bottom: 0 },
    borderRadius: 0,
    shadow: 'none',
    border: { width: 0, color: '#000000', style: 'none' }
  },
  layout: {
    columns: 1,
    alignment: 'center',
    verticalAlignment: 'top'
  },
  content: {
    title: 'Produtos Recomendados',
    subtitle: 'Escolhas especialmente selecionadas para você',
    products: [
      {
        id: uuidv4(),
        name: 'Curso Completo de Design UX/UI',
        description: 'Aprenda a criar interfaces intuitivas e experiências de usuário incríveis com este curso completo.',
        price: 497.00,
        images: [
          'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        features: [
          '40 horas de conteúdo em vídeo',
          'Projetos práticos para portfolio',
          'Certificado de conclusão',
          'Acesso vitalício'
        ]
      },
      {
        id: uuidv4(),
        name: 'Mentoria em Desenvolvimento Web',
        description: 'Sessões personalizadas de mentoria para acelerar sua carreira como desenvolvedor web.',
        price: 1299.00,
        images: [
          'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        features: [
          '4 sessões mensais de 1 hora',
          'Revisão de código personalizada',
          'Orientação de carreira',
          'Acompanhamento de projetos'
        ]
      },
      {
        id: uuidv4(),
        name: 'E-book: Dominando JavaScript',
        description: 'Um guia completo sobre JavaScript moderno, incluindo ES6+, Promises, async/await e mais.',
        price: 79.90,
        images: [
          'https://images.unsplash.com/photo-1544716278-e513176f20b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        features: [
          '300 páginas de conteúdo',
          'Exemplos práticos e exercícios',
          'Formato PDF e EPUB',
          'Atualizações gratuitas'
        ]
      },
      {
        id: uuidv4(),
        name: 'Pacote de Templates React',
        description: 'Coleção de templates React prontos para uso em seus projetos profissionais.',
        price: 149.00,
        images: [
          'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
        ],
        features: [
          '10 templates responsivos',
          'Código limpo e bem organizado',
          'Documentação completa',
          'Suporte por 6 meses'
        ]
      }
    ]
  },
  active: true,
  order: 6
};
