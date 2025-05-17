import { LandingPageData } from "@/types/editor";

export const landingPageExample: LandingPageData = {
  "title": "Curso de Inteligência Artificial para Iniciantes",
  "metadata": {
    "title": "Desvende o Poder da Inteligência Artificial",
    "description": "Curso completo de Inteligência Artificial com Python, Machine Learning e mais. Do zero ao avançado.",
    "keywords": "inteligência artificial, IA, machine learning, curso, aprendizado de máquina, python"
  },
  "settings": {
    "fontPrimary": "Inter",
    "fontSecondary": "Open Sans",
    "colorPrimary": "#0f172a",
    "colorSecondary": "#1e293b",
    "colorAccent": "#3b82f6"
  },
  "blocks": [
    {
      "id": "block-hero",
      "type": "hero",
      "name": "Seção Hero",
      "background": {
        "type": "image",
        "value": "/images/ai-hero-bg.jpg"
      },
      "styles": {
        "padding": { "top": 60, "bottom": 60, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 40 },
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
        "title": "Desvende o Poder da IA",
        "subtitle": "Aprenda com projetos reais e teoria aplicada",
        "ctaText": "Comece agora",
        "ctaLink": "#oferta",
        "image": "/images/ai-hero-image.png"
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
        "value": "#f1f5f9"
      },
      "styles": {
        "padding": { "top": 40, "bottom": 40, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 40 },
        "borderRadius": 0,
        "shadow": "sm",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 3,
        "alignment": "center",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "O que você recebe",
        "items": [
          {
            "title": "Projetos Práticos",
            "content": "Aprenda com experiências reais de IA",
            "icon": "cpu"
          },
          {
            "title": "Mentoria Inclusa",
            "content": "Tire dúvidas com especialistas",
            "icon": "users"
          },
          {
            "title": "Atualizações Gratuitas",
            "content": "Conteúdo sempre atualizado com o mercado",
            "icon": "refresh-cw"
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
        "value": "#ffffff"
      },
      "styles": {
        "padding": { "top": 40, "bottom": 40, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 40 },
        "borderRadius": 0,
        "shadow": "none",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 1,
        "alignment": "left",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "O que você vai aprender",
        "items": [
          {
            "title": "Fundamentos de IA",
            "content": "O que é inteligência artificial e como aplicá-la"
          },
          {
            "title": "Python para IA",
            "content": "Bibliotecas como NumPy, Pandas e Matplotlib"
          },
          {
            "title": "Machine Learning",
            "content": "Modelos de regressão, classificação e clustering"
          },
          {
            "title": "Redes Neurais",
            "content": "Crie modelos com TensorFlow e Keras"
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
          "top": 40,
          "bottom": 40,
          "left": 20,
          "right": 20
        },
        "margin": {
          "top": 0,
          "bottom": 40
        },
        "borderRadius": 10,
        "shadow": "md",
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
        "title": "Alunos que transformaram suas carreiras",
        "items": [
          {
            "title": "Lucas Ferreira",
            "content": "Com o curso consegui meu primeiro estágio em ciência de dados!",
            "image": "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop"
          },
          {
            "title": "Ana Costa",
            "content": "Muito conteúdo prático e direto ao ponto. Recomendo para iniciantes!",
            "image": "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=400&h=400&q=80"
          }
        ]
      },
      "active": true,
      "order": 3
    },
    {
      "id": "block-offer",
      "type": "offer",
      "name": "Oferta Especial",
      "background": {
        "type": "color",
        "value": "#ecfdf5"
      },
      "styles": {
        "padding": { "top": 50, "bottom": 50, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 40 },
        "borderRadius": 8,
        "shadow": "lg",
        "border": {
          "width": 1,
          "color": "#10b981",
          "style": "solid"
        }
      },
      "layout": {
        "columns": 1,
        "alignment": "center",
        "verticalAlignment": "center"
      },
      "content": {
        "title": "Oferta por tempo limitado",
        "subtitle": "De R$ 597 por apenas R$ 249",
        "ctaText": "Quero aprender IA agora",
        "ctaLink": "#form"
      },
      "active": true,
      "order": 4
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
        "padding": { "top": 40, "bottom": 40, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 40 },
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
        "title": "Conheça o Instrutor",
        "content": "Dra. Carolina Vieira é cientista de dados com mais de 10 anos de experiência em IA, com projetos em empresas como IBM, Natura e Ambev.",
        "image": "/images/instructor-carolina.jpg"
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
        "padding": { "top": 40, "bottom": 40, "left": 20, "right": 20 },
        "margin": { "top": 0, "bottom": 40 },
        "borderRadius": 0,
        "shadow": "sm",
        "border": { "width": 0, "color": "#000", "style": "none" }
      },
      "layout": {
        "columns": 1,
        "alignment": "left",
        "verticalAlignment": "top"
      },
      "content": {
        "title": "Dúvidas Frequentes",
        "items": [
          {
            "title": "Preciso saber programar?",
            "content": "Não. O curso começa do absoluto zero e ensina tudo passo a passo."
          },
          {
            "title": "Recebo certificado?",
            "content": "Sim, ao final do curso você receberá um certificado reconhecido."
          }
        ]
      },
      "active": true,
      "order": 6
    }
  ]
}
