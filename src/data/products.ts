
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
    name: "Tule Devore Animal Print Preto c/Nude Tamanho P",
    price: 60.00,
    image: "/images/tuledevorepretocomnude.jpg",
    category: "Tule",
    description: "Tamanho P",
    inStock: true
  },
  {
    id: 2,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho M",
    price: 60.00,
    image: "/images/tuledevorepretocomnude.jpg",
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 3,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho G",
    price: 60.00,
    image: "/images/tuledevorepretocomnude.jpg",
    category: "Tule",
    description: "Tamanho G",
    inStock: true
  },
  {
    id: 4,
    name: "Tule Devore Animal Print Preto Tamanho M",
    price: 60.00,
    image: "/images/tulepreto.jpg",
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 5,
    name: "Tule Devore Animal Print Preto Tamanho G",
    price: 60.00,
    image: "/images/tulepreto.jpg",
    category: "Tule",
    description: "Tamanho G",
    inStock: true
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
