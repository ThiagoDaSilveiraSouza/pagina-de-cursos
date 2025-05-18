
import { LandingPageData } from "@/types/editor";

export const landingPageExample: LandingPageData = {
  "title": "Academia de Programação Web",
  "metadata": {
    "title": "Academia de Programação Web | Aprenda a Criar Sites Modernos",
    "description": "Domine as tecnologias web mais requisitadas do mercado: React, Typescript, TailwindCSS e Node.js. Comece sua jornada profissional agora!",
    "keywords": "programação web, react, typescript, tailwindcss, nodejs, curso online, desenvolvimento web"
  },
  "settings": {
    "fontPrimary": "Inter",
    "fontSecondary": "Poppins",
    "colorPrimary": "#3b82f6",
    "colorSecondary": "#1e40af",
    "colorAccent": "#f97316"
  },
  "blocks": [
    {
      "id": "block-hero",
      "type": "hero",
      "name": "Seção Hero",
      "background": {
        "type": "gradient",
        "value": "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)"
      },
      "styles": {
        "padding": { "top": 80, "bottom": 80, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 2,
        "alignment": "center",
        "verticalAlignment": "center"
      },
      "content": {
        "title": "Domine o Desenvolvimento Web Moderno",
        "subtitle": "Aprenda as tecnologias mais requisitadas pelo mercado",
        "content": "Transforme sua carreira com nosso curso completo que te ensina a criar aplicações web profissionais usando as ferramentas mais atuais.",
        "ctaText": "Comece Agora",
        "ctaLink": "#oferta",
        "image": "https://images.unsplash.com/photo-1546146830-2cca9512c68e?w=600&auto=format&fit=crop&q=80"
      },
      "active": true,
      "order": 0
    },
    {
      "id": "block-benefits",
      "type": "benefits",
      "name": "Benefícios",
      "background": {
        "type": "color",
        "value": "#ffffff"
      },
      "styles": {
        "padding": { "top": 80, "bottom": 80, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 3,
        "alignment": "center",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "Por que Escolher Nossa Academia?",
        "subtitle": "Confira os diferenciais que vão te ajudar a se destacar no mercado",
        "items": [
          {
            "title": "Projetos Reais",
            "content": "Construa aplicações completas que poderá incluir em seu portfólio",
            "icon": "code"
          },
          {
            "title": "Mentoria Personalizada",
            "content": "Acesso a mentores experientes para tirar dúvidas e acelerar seu aprendizado",
            "icon": "users"
          },
          {
            "title": "Certificado Reconhecido",
            "content": "Receba um certificado valorizado no mercado após a conclusão do curso",
            "icon": "award"
          }
        ]
      },
      "active": true,
      "order": 1
    },
    {
      "id": "block-curriculum",
      "type": "curriculum",
      "name": "Conteúdo do Curso",
      "background": {
        "type": "color",
        "value": "#f8fafc"
      },
      "styles": {
        "padding": { "top": 80, "bottom": 80, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 2,
        "alignment": "center",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "O Que Você Vai Aprender",
        "subtitle": "Conteúdo completo para te transformar em um desenvolvedor web full-stack",
        "items": [
          {
            "title": "Fundamentos HTML/CSS",
            "content": "Domine a estrutura e a estilização de páginas web modernas",
            "icon": "file-text"
          },
          {
            "title": "JavaScript Avançado",
            "content": "Aprenda a criar interatividade e manipular dados de forma eficiente",
            "icon": "code"
          },
          {
            "title": "React & Hooks",
            "content": "Desenvolva interfaces reativas e componentizadas com a biblioteca mais popular do mercado",
            "icon": "layers"
          },
          {
            "title": "TypeScript",
            "content": "Adicione tipagem estática ao seu código para evitar bugs e melhorar a produtividade",
            "icon": "check-circle"
          },
          {
            "title": "TailwindCSS",
            "content": "Crie designs responsivos e modernos com o framework CSS utilitário mais eficiente",
            "icon": "palette"
          },
          {
            "title": "Node.js & APIs",
            "content": "Construa backends robustos e APIs RESTful para suas aplicações",
            "icon": "server"
          }
        ]
      },
      "active": true,
      "order": 2
    },
    {
      "id": "block-testimonials",
      "type": "testimonials",
      "name": "Depoimentos",
      "background": {
        "type": "gradient",
        "value": "linear-gradient(to right, #e0f2fe, #dbeafe)"
      },
      "styles": {
        "padding": {
          "top": 80,
          "bottom": 80,
          "left": 20,
          "right": 20
        },
        "margin": {
          "top": 0,
          "bottom": 0
        },
        "borderRadius": 0,
        "shadow": "none",
        "border": {
          "width": 0,
          "color": "#000",
          "style": "none"
        }
      },
      "layout": {
        "columns": 2,
        "alignment": "center",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "O Que Nossos Alunos Dizem",
        "subtitle": "Histórias reais de pessoas que transformaram suas carreiras",
        "items": [
          {
            "title": "Pedro Oliveira",
            "content": "Depois de concluir o curso, consegui minha primeira vaga como desenvolvedor React. O conteúdo prático e as mentorias foram essenciais para meu sucesso!",
            "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
          },
          {
            "title": "Amanda Santos",
            "content": "Mesmo sem experiência prévia em programação, consegui acompanhar todo o conteúdo e hoje trabalho como desenvolvedora front-end em uma startup internacional.",
            "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
          }
        ]
      },
      "active": true,
      "order": 3
    },
    {
      "id": "block-instructor",
      "type": "instructor",
      "name": "Instrutor",
      "background": {
        "type": "color",
        "value": "#ffffff"
      },
      "styles": {
        "padding": { "top": 80, "bottom": 80, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 2,
        "alignment": "left",
        "verticalAlignment": "center"
      },
      "content": {
        "title": "Conheça seu Mentor",
        "subtitle": "Quem vai te guiar nessa jornada de aprendizado",
        "content": "Rafael Almeida é desenvolvedor full-stack com mais de 10 anos de experiência no mercado. Trabalhou em empresas como Google, Microsoft e diversas startups de sucesso. Sua paixão é transformar iniciantes em desenvolvedores de alto nível através de uma metodologia prática e objetiva.",
        "image": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop"
      },
      "active": true,
      "order": 4
    },
    {
      "id": "block-offer",
      "type": "offer",
      "name": "Oferta Especial",
      "background": {
        "type": "gradient",
        "value": "linear-gradient(to right, #f0fdf4, #dcfce7)"
      },
      "styles": {
        "padding": { "top": 80, "bottom": 80, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": {
          "width": 0,
          "color": "#000",
          "style": "none"
        }
      },
      "layout": {
        "columns": 1,
        "alignment": "center",
        "verticalAlignment": "center"
      },
      "content": {
        "title": "Comece sua Jornada Hoje",
        "subtitle": "Promoção por tempo limitado",
        "content": "Acesso vitalício a todas as atualizações e novos módulos do curso",
        "ctaText": "Quero Garantir Minha Vaga",
        "ctaLink": "#form",
        "items": [
          {
            "title": "Acesso Completo",
            "content": "Mais de 100 horas de conteúdo em vídeo e material complementar"
          },
          {
            "title": "Mentoria Personalizada",
            "content": "6 meses de suporte direto com os instrutores para tirar dúvidas"
          },
          {
            "title": "Comunidade Exclusiva",
            "content": "Participe de um grupo seleto de alunos para networking e colaboração"
          },
          {
            "title": "Projetos Práticos",
            "content": "Desenvolva 8 projetos completos para o seu portfólio"
          }
        ]
      },
      "active": true,
      "order": 5
    },
    {
      "id": "block-faq",
      "type": "faq",
      "name": "Perguntas Frequentes",
      "background": {
        "type": "color",
        "value": "#f8fafc"
      },
      "styles": {
        "padding": { "top": 80, "bottom": 80, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 1,
        "alignment": "center",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "Dúvidas Frequentes",
        "subtitle": "Respostas para as perguntas mais comuns",
        "items": [
          {
            "title": "Preciso ter conhecimento prévio em programação?",
            "content": "Não, o curso foi desenvolvido para pessoas que estão começando do zero. Vamos construir uma base sólida antes de avançar para os tópicos mais complexos."
          },
          {
            "title": "Por quanto tempo terei acesso ao curso?",
            "content": "O acesso é vitalício! Você poderá assistir às aulas quantas vezes quiser e terá direito a todas as atualizações futuras do conteúdo."
          },
          {
            "title": "Como funcionam as mentorias?",
            "content": "Você terá acesso a sessões semanais de mentoria em grupo e poderá enviar suas dúvidas por escrito a qualquer momento, com resposta garantida em até 48 horas."
          },
          {
            "title": "Posso pedir reembolso se o curso não atender minhas expectativas?",
            "content": "Sim, oferecemos garantia de 30 dias. Se você não ficar satisfeito com o conteúdo, devolvemos 100% do seu investimento, sem burocracia."
          }
        ]
      },
      "active": true,
      "order": 6
    },
    {
      "id": "block-cta",
      "type": "cta",
      "name": "Chamada Final",
      "background": {
        "type": "gradient",
        "value": "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)"
      },
      "styles": {
        "padding": { "top": 80, "bottom": 80, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 1,
        "alignment": "center",
        "verticalAlignment": "center"
      },
      "content": {
        "title": "Sua Carreira em Desenvolvimento Web Começa Aqui",
        "subtitle": "Junte-se a mais de 3.000 alunos que já transformaram suas vidas",
        "ctaText": "Inscreva-se Agora",
        "ctaLink": "#form"
      },
      "active": true,
      "order": 7
    },
    {
      "id": "block-footer",
      "type": "footer",
      "name": "Rodapé",
      "background": {
        "type": "color",
        "value": "#0f172a"
      },
      "styles": {
        "padding": { "top": 60, "bottom": 60, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 0 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 3,
        "alignment": "left",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "Academia de Programação Web",
        "content": "Transformando iniciantes em desenvolvedores profissionais desde 2020.",
        "items": [
          {
            "title": "Links Rápidos",
            "content": "Início|#\nCurso|#curso\nDepoimentos|#depoimentos\nFAQ|#faq\nContato|#contato"
          },
          {
            "title": "Contato",
            "content": "Email|mailto:contato@academiaweb.com.br\nWhatsApp|https://wa.me/5511999999999\nInstagram|https://instagram.com/academiaweb"
          }
        ]
      },
      "active": true,
      "order": 8
    }
  ]
}
