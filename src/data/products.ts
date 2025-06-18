
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho P",
    price: 60.00,
    images: [
      "/images/tule/tuledevorepretocomnude.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho P",
    inStock: true
  },
  {
    id: 2,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho M",
    price: 60.00,
    images: [
      "/images/tule/tuledevorepretocomnude.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 3,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho G",
    price: 60.00,
    images: [
      "/images/tule/tuledevorepretocomnude.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho G",
    inStock: true
  },
  {
    id: 4,
    name: "Tule Devore Animal Print Preto Tamanho M",
    price: 60.00,
    images: [
       "/images/tule/tulepreto.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 5,
    name: "Tule Devore Animal Print Preto Tamanho G",
    price: 60.00,
    images: [
       "/images/tule/tulepreto.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho G",
    inStock: true
  },
  {
    id: 6,
    name: "Tule Devore Animal Print Bordo Tamanho P",
    price: 60.00,
    images: [
       "/images/tule/tulebordo.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho P",
    inStock: true
  },
  {
    id: 7,
    name: "Tule Devore Animal Print Bordo Tamanho M",
    price: 60.00,
    images: [
       "/images/tule/tulebordo.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho M",
    inStock: true
  },
  {
    id: 8,
    name: "Tule Devore Animal Print Bordo Tamanho G",
    price: 60.00,
    images: [
       "/images/tule/tulebordo.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho G",
    inStock: true
  },
  {
    id: 9,
    name: "Colete Metalizado Bordo Tamanho U",
    price: 120.00,
    images: [
      "/images/coletemetalizado/bordo.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho U",
    inStock: true
  },
  {
    id: 10,
    name: "Colete Metalizado Cobre Tamanho U",
    price: 120.00,
    images: [
      "/images/coletemetalizado/cobre.jpg",
      "/images/coletemetalizado/cobre1.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho U",
    inStock: true
  },
  {
    id: 11,
    name: "Colete Metalizado Marrom Tamanho U",
    price: 120.00,
    images: [
      "/images/coletemetalizado/marrom.jpg",
       "/images/coletemetalizado/marrom1.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho U",
    inStock: true
  },
];
