
export type BlockType = 
  | 'hero'
  | 'benefits'
  | 'curriculum'
  | 'testimonials'
  | 'offer'
  | 'instructor'
  | 'faq'
  | 'cta'
  | 'footer'
  | 'products'; // Add products block type

export type BlockBackground = {
  type: 'color' | 'gradient' | 'image';
  value: string;
};

export type BlockStyles = {
  padding: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  margin: {
    top: number;
    bottom: number;
  };
  borderRadius: number;
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  border: {
    width: number;
    color: string;
    style: 'solid' | 'dashed' | 'dotted' | 'none';
  };
};

export interface BlockLayout {
  columns: 1 | 2 | 3 | 4;
  alignment: 'left' | 'center' | 'right';
  verticalAlignment: 'top' | 'center' | 'bottom';
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  features?: string[];
}

export interface BlockContent {
  title?: string;
  subtitle?: string;
  content?: string;
  ctaText?: string;
  ctaLink?: string;
  image?: string;
  video?: string;
  products?: Product[];
  items?: Array<{ 
    title?: string;
    content?: string;
    image?: string;
    icon?: string;
  }>;
}

export interface Block {
  id: string;
  type: BlockType;
  name: string;
  background: BlockBackground;
  styles: BlockStyles;
  layout: BlockLayout;
  content: BlockContent;
  active: boolean;
  order: number;
}

export interface LandingPageData {
  title: string;
  blocks: Block[];
  metadata: {
    title: string;
    description: string;
    keywords: string;
  };
  settings: {
    fontPrimary: string;
    fontSecondary: string;
    colorPrimary: string;
    colorSecondary: string;
    colorAccent: string;
  };
}
