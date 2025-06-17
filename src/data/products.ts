
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tule Devore Animal Print",
    price: 60.00,
   // originalPrice: 1199.99,
    image: "https://drive.google.com/file/d/1YyQ1tIM4csX-60j4YHWtou-t-QMtPqCs/view?usp=drive_link",
    category: "Tule",
    description: "Smartphone com câmera de 108MP e bateria de longa duração",
    inStock: true
  },
  {
    id: 2,
    name: "Tênis Running Sport",
    price: 159.90,
    originalPrice: 199.90,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    category: "Esportes",
    description: "Tênis confortável para corrida e caminhada",
    inStock: true
  },
  {
    id: 3,
    name: "Fone Bluetooth Premium",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
    category: "Eletrônicos",
    description: "Fone com cancelamento de ruído e qualidade Hi-Fi",
    inStock: true
  },
  {
    id: 4,
    name: "Camiseta Fitness Dry",
    price: 49.90,
    originalPrice: 69.90,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
    category: "Roupas",
    description: "Camiseta de alta performance com tecnologia dry-fit",
    inStock: true
  },
  {
    id: 5,
    name: "Relógio Smartwatch",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    category: "Eletrônicos",
    description: "Smartwatch com monitor cardíaco e GPS",
    inStock: false
  },
  {
    id: 6,
    name: "Mochila Urbana",
    price: 129.90,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    category: "Acessórios",
    description: "Mochila resistente à água com compartimento para laptop",
    inStock: true
  },
  {
    id: 7,
    name: "Cafeteira Espresso",
    price: 299.90,
    originalPrice: 399.90,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
    category: "Casa",
    description: "Cafeteira automática com sistema de espuma",
    inStock: true
  },
  {
    id: 8,
    name: "Kit Skincare Natural",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop",
    category: "Beleza",
    description: "Kit completo com produtos naturais para cuidados da pele",
    inStock: true
  }
];
