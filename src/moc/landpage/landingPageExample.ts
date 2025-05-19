import { v4 as uuidv4 } from 'uuid';
import { LandingPageData } from '@/types/editor';
import { productsBlock } from './productsBlock';

export const landingPageExample: LandingPageData = {
  title: "Minha Landing Page",
  blocks: [
    {
      id: uuidv4(),
      type: 'hero',
      name: 'Hero Section',
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
        columns: 2,
        alignment: 'left',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Domine o React e Construa Apps Modernos',
        subtitle: 'Aprenda a construir aplicações React do zero ao avançado',
        content: 'Nosso curso completo te leva da base até conceitos avançados com projetos reais e mentoria.',
        ctaText: 'Começar Agora',
        ctaLink: '#pricing',
        image: 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      active: true,
      order: 0
    },
    productsBlock,
    {
      id: uuidv4(),
      type: 'benefits',
      name: 'Key Benefits',
      background: {
        type: 'color',
        value: '#ffffff'
      },
      styles: {
        padding: { top: 48, bottom: 48, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 8,
        shadow: 'sm',
        border: { width: 1, color: '#e2e8f0', style: 'solid' }
      },
      layout: {
        columns: 3,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Transforme sua Carreira com React',
        subtitle: 'Veja como nosso curso pode impulsionar suas habilidades e abrir novas portas',
        items: [
          {
            title: 'Aprendizado Prático',
            content: 'Projetos reais que você pode adicionar ao seu portfólio.',
            icon: 'Code'
          },
          {
            title: 'Mentoria Exclusiva',
            content: 'Acesso direto a mentores experientes para tirar suas dúvidas.',
            icon: 'HelpCircle'
          },
          {
            title: 'Comunidade Ativa',
            content: 'Networking com outros estudantes e profissionais da área.',
            icon: 'Users'
          }
        ]
      },
      active: true,
      order: 1
    },
    {
      id: uuidv4(),
      type: 'curriculum',
      name: 'Course Curriculum',
      background: {
        type: 'color',
        value: '#f0f9ff'
      },
      styles: {
        padding: { top: 32, bottom: 32, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'left',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Currículo do Curso',
        subtitle: 'Módulos e aulas que você vai encontrar no curso',
        items: [
          {
            title: 'Módulo 1: Introdução ao React',
            content: 'Setup do ambiente, JSX, componentes funcionais e de classe.'
          },
          {
            title: 'Módulo 2: Componentes e Props',
            content: 'Aprofundando em props, state e lifecycle dos componentes.'
          },
          {
            title: 'Módulo 3: Hooks do React',
            content: 'Utilizando useState, useEffect e criando seus próprios hooks.'
          },
          {
            title: 'Módulo 4: Gerenciamento de Estado',
            content: 'Context API, Redux e outras soluções para gerenciar o estado da aplicação.'
          }
        ]
      },
      active: true,
      order: 2
    },
    {
      id: uuidv4(),
      type: 'testimonials',
      name: 'Student Testimonials',
      background: {
        type: 'color',
        value: '#ffffff'
      },
      styles: {
        padding: { top: 48, bottom: 48, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 8,
        shadow: 'md',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {
        title: 'O que nossos alunos estão dizendo',
        subtitle: 'Veja os depoimentos de quem já transformou sua carreira com nosso curso',
        items: [
          {
            title: 'João Silva',
            content: 'O curso superou minhas expectativas! Aprendi muito e já estou aplicando em projetos reais.',
            image: 'https://randomuser.me/api/portraits/men/1.jpg'
          },
          {
            title: 'Maria Oliveira',
            content: 'A mentoria foi essencial para tirar minhas dúvidas e me dar um direcionamento na carreira.',
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
          }
        ]
      },
      active: true,
      order: 3
    },
    {
      id: uuidv4(),
      type: 'offer',
      name: 'Special Offer',
      background: {
        type: 'gradient',
        value: 'linear-gradient(to right, #6366f1, #a855f7)'
      },
      styles: {
        padding: { top: 64, bottom: 64, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 12,
        shadow: 'lg',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Oferta Especial por Tempo Limitado',
        subtitle: 'Inscreva-se agora e ganhe descontos exclusivos',
        content: 'Aproveite nossa oferta especial e garanta seu acesso ao curso completo com um preço incrível.',
        ctaText: 'Inscrever-se Agora',
        ctaLink: '#pricing',
        image: 'https://images.unsplash.com/photo-1550064824-8f993041b160?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        items: [
          {
            title: 'Desconto de 50%',
            content: 'Aproveite 50% de desconto no curso completo.'
          },
          {
            title: 'Acesso Vitalício',
            content: 'Acesso ilimitado ao conteúdo do curso.'
          },
          {
            title: 'Mentoria Gratuita',
            content: 'Sessões de mentoria individual inclusas.'
          }
        ]
      },
      active: true,
      order: 4
    },
    {
      id: uuidv4(),
      type: 'instructor',
      name: 'Our Instructor',
      background: {
        type: 'color',
        value: '#ffffff'
      },
      styles: {
        padding: { top: 48, bottom: 48, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 8,
        shadow: 'md',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 2,
        alignment: 'left',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Conheça o Instrutor',
        subtitle: 'Um especialista em React com anos de experiência no mercado',
        content: 'Nosso instrutor é um desenvolvedor experiente com anos de experiência em React e apaixonado por ensinar.',
        ctaText: 'Ver Perfil',
        ctaLink: '#instructor',
        image: 'https://images.unsplash.com/photo-1544005279-0aca48d13c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      active: true,
      order: 5
    },
    {
      id: uuidv4(),
      type: 'faq',
      name: 'Frequently Asked Questions',
      background: {
        type: 'color',
        value: '#f9fafb'
      },
      styles: {
        padding: { top: 32, bottom: 32, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'left',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Perguntas Frequentes',
        subtitle: 'Tire suas dúvidas sobre o curso',
        items: [
          {
            title: 'Qual o nível de conhecimento necessário para fazer o curso?',
            content: 'O curso é para todos os níveis, desde iniciantes até avançados.'
          },
          {
            title: 'O curso tem certificado de conclusão?',
            content: 'Sim, o curso tem certificado de conclusão.'
          },
          {
            title: 'Por quanto tempo terei acesso ao curso?',
            content: 'O acesso ao curso é vitalício.'
          }
        ]
      },
      active: true,
      order: 7
    },
    {
      id: uuidv4(),
      type: 'cta',
      name: 'Call to Action',
      background: {
        type: 'gradient',
        value: 'linear-gradient(to right, #3b82f6, #6366f1)'
      },
      styles: {
        padding: { top: 64, bottom: 64, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 12,
        shadow: 'lg',
        border: { width: 0, color: '#000000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Pronto para Começar?',
        subtitle: 'Não perca mais tempo e comece a transformar sua carreira agora mesmo',
        content: 'Inscreva-se no nosso curso e tenha acesso a todo o conteúdo, mentoria e comunidade exclusiva.',
        ctaText: 'Começar Agora',
        ctaLink: '#pricing',
        image: 'https://images.unsplash.com/photo-1518770660439-464ef52689bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
      },
      active: true,
      order: 8
    },
    {
      id: uuidv4(),
      type: 'footer',
      name: 'Footer',
      background: {
        type: 'color',
        value: '#1e293b'
      },
      styles: {
        padding: { top: 32, bottom: 32, left: 16, right: 16 },
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
        title: 'Entre em Contato',
        subtitle: 'Estamos sempre prontos para te ajudar',
        items: [
          {
            title: 'Email',
            content: 'contato@example.com'
          },
          {
            title: 'Telefone',
            content: '+55 11 99999-9999'
          },
          {
            title: 'Redes Sociais',
            content: '@example'
          }
        ]
      },
      active: true,
      order: 9
    }
  ],
  metadata: {
    title: "Curso de React | Aprenda a construir apps modernos",
    description: "Domine React e construa aplicações web modernas e responsivas com nosso curso completo.",
    keywords: "react, javascript, desenvolvimento web, curso online"
  },
  settings: {
    fontPrimary: "Inter",
    fontSecondary: "Poppins",
    colorPrimary: "#3b82f6",
    colorSecondary: "#1e293b",
    colorAccent: "#f97316"
  }
};
