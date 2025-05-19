import { v4 as uuidv4 } from 'uuid';
import { LandingPageData } from '@/types/editor';

export const landingPageExample: LandingPageData = {
  title: "Curso de Inteligência Artificial",
  blocks: [
    {
      id: uuidv4(),
      type: 'hero',
      name: 'Hero Section',
      background: {
        type: 'image',
        value: 'https://images.unsplash.com/photo-1555949963-4d8430a7f4b5?auto=format&fit=crop&w=1350&q=80'
      },
      styles: {
        padding: { top: 80, bottom: 80, left: 24, right: 24 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'md',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 2,
        alignment: 'left',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Domine a Inteligência Artificial e o Futuro da Tecnologia',
        subtitle: 'Aprenda IA, Machine Learning e Deep Learning com especialistas do mercado',
        content: 'Curso completo com aulas práticas, projetos reais e certificação. Ideal para iniciantes e profissionais.',
        ctaText: 'Matricule-se Agora',
        ctaLink: '#pricing',
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1350&q=80'
      },
      active: true,
      order: 0
    },
    {
      id: uuidv4(),
      type: 'benefits',
      name: 'Benefícios do Curso',
      background: {
        type: 'color',
        value: '#f8fafc'
      },
      styles: {
        padding: { top: 56, bottom: 56, left: 20, right: 20 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 12,
        shadow: 'sm',
        border: { width: 0, color: '#e5e7eb', style: 'solid' }
      },
      layout: {
        columns: 3,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Por que escolher nosso curso de IA?',
        subtitle: 'Uma abordagem prática e moderna para aprender IA',
        items: [
          { title: 'Projetos Reais', content: 'Aprenda criando aplicações com IA e ML reais.', icon: 'Cpu' },
          { title: 'Aulas Atualizadas', content: 'Conteúdo sempre atualizado com as últimas tendências.', icon: 'Zap' },
          { title: 'Comunidade Profissional', content: 'Participe de uma comunidade ativa de alunos e especialistas.', icon: 'Users' }
        ]
      },
      active: true,
      order: 1
    },
    {
      id: uuidv4(),
      type: 'curriculum',
      name: 'Conteúdo do Curso',
      background: {
        type: 'color',
        value: '#ffffff'
      },
      styles: {
        padding: { top: 48, bottom: 48, left: 20, right: 20 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'left',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Módulos do Curso',
        subtitle: 'Domine do básico ao avançado com módulos completos',
        items: [
          { title: 'Módulo 1: Fundamentos de IA', content: 'História, aplicações, tipos de IA e ética.' },
          { title: 'Módulo 2: Machine Learning', content: 'Algoritmos supervisionados, não supervisionados e validação de modelos.' },
          { title: 'Módulo 3: Deep Learning', content: 'Redes neurais, CNNs, RNNs e NLP com TensorFlow e PyTorch.' },
          { title: 'Módulo 4: IA Generativa', content: 'Introdução a modelos como GPT, Diffusion Models e aplicações com IA criativa.' }
        ]
      },
      active: true,
      order: 2
    },
    {
      id: uuidv4(),
      type: 'testimonials',
      name: 'Depoimentos',
      background: {
        type: 'color',
        value: '#f1f5f9'
      },
      styles: {
        padding: { top: 48, bottom: 48, left: 20, right: 20 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 12,
        shadow: 'md',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Alunos que já mudaram de vida com IA',
        subtitle: 'Veja o que dizem nossos alunos',
        items: [
          { title: 'Ana Pereira', content: 'Graças ao curso, consegui meu primeiro emprego como engenheira de IA!', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
          { title: 'Carlos Martins', content: 'A didática e os projetos práticos me ajudaram a entender IA de verdade.', image: 'https://randomuser.me/api/portraits/men/45.jpg' }
        ]
      },
      active: true,
      order: 3
    },
    {
      id: uuidv4(),
      type: 'offer',
      name: 'Oferta Especial',
      background: {
        type: 'gradient',
        value: 'linear-gradient(to right, #0ea5e9, #6366f1)'
      },
      styles: {
        padding: { top: 64, bottom: 64, left: 24, right: 24 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 16,
        shadow: 'xl',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Desconto Exclusivo por Tempo Limitado',
        subtitle: 'Garanta agora sua vaga no curso completo de IA',
        content: 'Inscreva-se hoje e aproveite condições especiais. Vagas limitadas!',
        ctaText: 'Quero Aprender IA',
        ctaLink: '#pricing',
        image: 'https://images.unsplash.com/photo-1656424859314-812a5e548d8f?auto=format&fit=crop&w=1350&q=80',
        items: [
          { title: '40% de Desconto', content: 'Oferta válida até o final da semana.' },
          { title: 'Acesso Vitalício', content: 'Estude no seu ritmo, sem prazos.' },
          { title: 'Certificação Profissional', content: 'Receba um certificado reconhecido no mercado.' }
        ]
      },
      active: true,
      order: 4
    },
    {
      id: uuidv4(),
      type: 'instructor',
      name: 'Instrutor',
      background: {
        type: 'color',
        value: '#ffffff'
      },
      styles: {
        padding: { top: 48, bottom: 48, left: 24, right: 24 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 12,
        shadow: 'lg',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 2,
        alignment: 'left',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Conheça seu Professor',
        subtitle: 'Especialista em IA com mais de 10 anos de experiência',
        content: 'PhD em Ciência da Computação, consultor em projetos de IA e apaixonado por ensinar. Já ajudou mais de 5.000 alunos a ingressarem em empresas de tecnologia de ponta.',
        ctaText: 'Ver Perfil',
        ctaLink: '#instructor',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80'
      },
      active: true,
      order: 5
    },
    {
      id: uuidv4(),
      type: 'products',
      name: 'Cursos Relacionados',
      background: {
        type: 'color',
        value: '#f8fafc'
      },
      styles: {
        padding: { top: 56, bottom: 56, left: 20, right: 20 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Outros Cursos Recomendados',
        subtitle: 'Aprenda mais e aumente suas habilidades',
        products: [
          {
            id: uuidv4(),
            name: 'Curso de Visão Computacional',
            description: 'Aprenda a usar IA para analisar imagens e vídeos.',
            price: 597.00,
            images: ['https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=1350&q=80'],
            features: ['20h de conteúdo', 'Exemplos práticos com OpenCV', 'Acesso vitalício', 'Certificado incluído']
          },
          {
            id: uuidv4(),
            name: 'Processamento de Linguagem Natural (NLP)',
            description: 'Domine técnicas modernas de NLP com Python.',
            price: 699.00,
            images: ['https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=1350&q=80'],
            features: ['Transformers', 'Chatbots', 'Text Classification', 'Fine-tuning de modelos']
          }
        ]
      },
      active: true,
      order: 6
    },
    {
      id: uuidv4(),
      type: 'faq',
      name: 'FAQ',
      background: {
        type: 'color',
        value: '#ffffff'
      },
      styles: {
        padding: { top: 32, bottom: 32, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'left',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Perguntas Frequentes',
        subtitle: 'Tudo que você precisa saber antes de começar',
        items: [
          { title: 'Preciso saber programar?', content: 'Conhecimento básico em lógica ou Python ajuda, mas o curso cobre os fundamentos.' },
          { title: 'O curso é certificado?', content: 'Sim! Emitimos certificado profissional após a conclusão.' },
          { title: 'É possível estudar no meu ritmo?', content: 'Sim! O curso é 100% online com acesso vitalício.' }
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
        value: 'linear-gradient(to right, #3b82f6, #8b5cf6)'
      },
      styles: {
        padding: { top: 64, bottom: 64, left: 16, right: 16 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 12,
        shadow: 'lg',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 1,
        alignment: 'center',
        verticalAlignment: 'center'
      },
      content: {
        title: 'Dê o próximo passo na sua carreira',
        subtitle: 'Aproveite agora e transforme seu futuro com IA',
        content: 'A inteligência artificial está moldando o mundo — e você pode fazer parte disso.',
        ctaText: 'Matricule-se Já',
        ctaLink: '#pricing',
        image: 'https://images.unsplash.com/photo-1605902711622-cfb43c4437d7?auto=format&fit=crop&w=1350&q=80'
      },
      active: true,
      order: 8
    },
    {
      id: uuidv4(),
      type: 'footer',
      name: 'Rodapé',
      background: {
        type: 'color',
        value: '#f3f4f6'
      },
      styles: {
        padding: { top: 48, bottom: 48, left: 24, right: 24 },
        margin: { top: 0, bottom: 0 },
        borderRadius: 0,
        shadow: 'none',
        border: { width: 0, color: '#000', style: 'none' }
      },
      layout: {
        columns: 3,
        alignment: 'center',
        verticalAlignment: 'top'
      },
      content: {
        title: 'Fale Conosco',
        subtitle: 'Estamos aqui para tirar suas dúvidas',
        items: [
          { title: 'Email', content: 'suporte@cursosia.com' },
          { title: 'WhatsApp', content: '+55 11 91234-5678' },
          { title: 'Telefone', content: '+55 11 4002-8922' },
          { title: 'Sobre Nós', content: '#about' },
          { title: 'Blog', content: '#blog' },
          { title: 'Termos de Uso', content: '#terms' },
          { title: 'Política de Privacidade', content: '#privacy' }
        ],
        content: '© 2025 CursosIA. Todos os direitos reservados.'
      },
      active: true,
      order: 9
    }
  ],
  metadata: {
    title: "Curso de Inteligência Artificial | Aprenda IA do Zero ao Avançado",
    description: "Domine Inteligência Artificial com nosso curso completo. Aprenda IA, Machine Learning e Deep Learning com projetos reais.",
    keywords: "inteligência artificial, machine learning, deep learning, IA, curso IA"
  },
  settings: {
    fontPrimary: "Inter",
    fontSecondary: "Roboto",
    colorPrimary: "#6366f1",
    colorSecondary: "#0f172a",
    colorAccent: "#f59e0b"
  }
};
