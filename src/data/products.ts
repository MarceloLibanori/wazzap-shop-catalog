
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
    image: "/images/tule/tuledevorepretocomnude.jpg",
    category: "Tule",
    description: "Tamanho P",
    inStock: true
  },
  {
    id: 2,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho M",
    price: 60.00,
    image: "/images/tule/tuledevorepretocomnude.jpg",
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 3,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho G",
    price: 60.00,
    image: "/images/tule/tuledevorepretocomnude.jpg",
    category: "Tule",
    description: "Tamanho G",
    inStock: true
  },
  {
    id: 4,
    name: "Tule Devore Animal Print Preto Tamanho M",
    price: 60.00,
    image: "/images/tule/tulepreto.jpg",
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 5,
    name: "Tule Devore Animal Print Preto Tamanho G",
    price: 60.00,
    image: "/images/tule/tulepreto.jpg",
    category: "Tule",
    description: "Tamanho G",
    inStock: true
  },
  {
    id: 6,
    name: "Tule Devore Animal Print Bordo Tamanho P",
    price: 60.00,
    image: "/images/tule/tulebordo.jpg",
    category: "Tule",
    description: "Tamanho P",
    inStock: true
  },
  {
    id: 7,
    name: "Tule Devore Animal Print Bordo Tamanho M",
    price: 60.00,
    image: "/images/tule/tulebordo.jpg",
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 8,
    name: "Tule Devore Animal Print Bordo Tamanho G",
    price: 60.00,
    image: "/images/tule/tulebordo.jpg",
    category: "Tule",
    description: "Tamanho G",
    inStock: true
  },
  {
    id: 9,
    name: "Colete Metalizado Bordo Tamanho U",
    price: 120.00,
    image: "/images/coletemetalizado/bordo.jpg",
    category: "Colete Metalizado",
    description: "Tamanho U",
    inStock: true
  },
  {
    id: 10,
    name: "Colete Metalizado Cobre Tamanho U",
    price: 120.00,
    image: "/images/coletemetalizado/bordo.jpg",
    category: "Colete Metalizado",
    description: "Tamanho U",
    inStock: true
  },
];
