import { Factory } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  sku: string;
  inStock: boolean;
}

// ===== CATEGORIA: TULE =====
const tuleProducts: Product[] = [
  {
    id: 1,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho: P",
    price: 75.00,
    images: [
      "/images/tule/tuledevorepretocomnude.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho: P",
    sku: "1300",
    inStock: true
  },
  {
    id: 2,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho: M",
    price: 75.00,
    images: [
      "/images/tule/tuledevorepretocomnude.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho: M",
    sku: "1300",
    inStock: true
  },
  {
    id: 3,
    name: "Tule Devore Animal Print Preto c/Nude Tamanho: G",
    price: 75.00,
    images: [
      "/images/tule/tuledevorepretocomnude.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Tule",
    description: "Tamanho: G",
    sku: "1300",
    inStock: true
  },
  {
    id: 4,
    name: "Tule Devore Animal Print Preto Tamanho: P",
    price: 75.00,
    images: [
      "/images/tule/tulepreto.jpg",
      "/images/tule/tulepreto1.jpg",
    ],
    category: "Tule",
    description: "Tamanho: P",
    sku: "1300",
    inStock: false
  },
  {
    id: 5,
    name: "Tule Devore Animal Print Preto Tamanho: M",
    price: 75.00,
    images: [
      "/images/tule/tulepreto.jpg",
      "/images/tule/tulepreto1.jpg",
    ],
    category: "Tule",
    description: "Tamanho: M",
    sku: "1300",
    inStock: true
  },
  {
    id: 6,
    name: "Tule Devore Animal Print Preto Tamanho: G",
    price: 75.00,
    images: [
      "/images/tule/tulepreto.jpg",
      "/images/tule/tulepreto1.jpg",
    ],
    category: "Tule",
    description: "Tamanho: G",
    sku: "1300",
    inStock: true
  },
  {
    id: 7,
    name: "Tule Devore Animal Print Bordo Tamanho: P",
    price: 75.00,
    images: [
      "/images/tule/tulebordo.jpg",
      "/images/tule/tulebordo1.jpg",
    ],
    category: "Tule",
    description: "Tamanho: P",
    sku: "1300",
    inStock: true
  },
  {
    id: 8,
    name: "Tule Devore Animal Print Bordo Tamanho: M",
    price: 75.00,
    images: [
      "/images/tule/tulebordo.jpg",
      "/images/tule/tulebordo1.jpg",
    ],
    category: "Tule",
    description: "Tamanho: M",
    sku: "1300",
    inStock: true
  },
  {
    id: 9,
    name: "Tule Devore Animal Print Bordo Tamanho: G",
    price: 75.00,
    images: [
      "/images/tule/tulebordo.jpg",
      "/images/tule/tulebordo1.jpg",
    ],
    category: "Tule",
    description: "Tamanho: G",
    sku: "1300",
    inStock: true
  },
];

// ===== CATEGORIA: COLETE METALIZADO =====
const coleteMetalizadoProducts: Product[] = [
  {
    id: 20,
    name: "Colete Metalizado Bordo Tamanho: U",
    price: 156.25,
    images: [
      "/images/coletemetalizado/bordo.jpg",
      "/images/tule/tuledevorepretocomnude2.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho: U",
    sku: "821",
    inStock: true
  },
  {
    id: 21,
    name: "Colete Metalizado Cobre Tamanho: U",
    price: 156.25,
    images: [
      "/images/coletemetalizado/cobre.jpg",
      "/images/coletemetalizado/cobre1.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho: U",
    sku: "821",
    inStock: true
  },
  {
    id: 22,
    name: "Colete Metalizado Marrom Tamanho: U",
    price: 156.25,
    images: [
      "/images/coletemetalizado/marrom.jpg",
      "/images/coletemetalizado/marrom1.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho: U",
    sku: "821",
    inStock: true
  },
  {
    id: 23,
    name: "Colete Metalizado Dourado Tamanho: U",
    price: 156.25,
    images: [
      "/images/coletemetalizado/dourado.jpg",
      "/images/coletemetalizado/dourado1.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho: U",
    sku: "821",
    inStock: true
  },
  {
    id: 24,
    name: "Colete Metalizado Preto Tamanho: U",
    price: 156.25,
    images: [
      "/images/coletemetalizado/coletepreto.jpg",
      "/images/coletemetalizado/coletepreto1.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho: U",
    sku: "821",
    inStock: true
  },
  {
    id: 25,
    name: "Colete Metalizado Preto c/ Prata Tamanho: U",
    price: 156.25,
    images: [
      "/images/coletemetalizado/coletepretocomprata.jpg",
      "/images/coletemetalizado/coletepretocomprata1.jpg",
    ],
    category: "Colete Metalizado",
    description: "Tamanho: U",
    sku: "821",
    inStock: true
  },
];

// ===== CATEGORIA: TOP 3018 =====
const top3018Products: Product[] = [
  {
    id: 60,
    name: "Top Verão 3018 Preto Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/toppreto30181.jpg",
      "/images/top/toppreto3018.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 61,
    name: "Top Verão 3018 Preto Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/toppreto30181.jpg",
      "/images/top/toppreto3018.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 62,
    name: "Top Verão 3018 Preto Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/toppreto30181.jpg",
      "/images/top/toppreto3018.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 63,
    name: "Top Verão 3018 Preto Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/toppreto30181.jpg",
      "/images/top/toppreto3018.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  {
    id: 64,
    name: "Top Verão 3018 Nude Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/topnude3018.jpg",
      "/images/top/topnude30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 65,
    name: "Top Verão 3018 Nude Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/topnude3018.jpg",
      "/images/top/topnude30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 66,
    name: "Top Verão 3018 Nude Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/topnude3018.jpg",
      "/images/top/topnude30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 67,
    name: "Top Verão 3018 Nude Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/topnude3018.jpg",
      "/images/top/topnude30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  {
    id: 68,
    name: "Top Verão 3018 Lima Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/toplima3018.jpg",
      "/images/top/toplima30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: false
  },
  {
    id: 69,
    name: "Top Verão 3018 Lima Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/toplima3018.jpg",
      "/images/top/toplima30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 70,
    name: "Top Verão 3018 Lima Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/toplima3018.jpg",
      "/images/top/toplima30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 71,
    name: "Top Verão 3018 Lima Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/toplima3018.jpg",
      "/images/top/toplima30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: false
  },
  {
    id: 72,
    name: "Top Verão 3018 Verde Militar Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/topvmilitar3018.jpg",
      "/images/top/topvmilitar30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 73,
    name: "Top Verão 3018 Verde Militar Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/topvmilitar3018.jpg",
      "/images/top/topvmilitar30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 74,
    name: "Top Verão 3018 Verde Militar Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/topvmilitar3018.jpg",
      "/images/top/topvmilitar30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 75,
    name: "Top Verão 3018 Verde Militar Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/topvmilitar3018.jpg",
      "/images/top/topvmilitar30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  {
    id: 76,
    name: "Top Verão 3018 Tiffany Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/toptiffany3018.jpg",
      "/images/top/toptiffany30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: false
  },
  {
    id: 77,
    name: "Top Verão 3018 Tiffany Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/toptiffany3018.jpg",
      "/images/top/toptiffany30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 78,
    name: "Top Verão 3018 Tiffany Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/toptiffany3018.jpg",
      "/images/top/toptiffany30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 79,
    name: "Top Verão 3018 Tiffany Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/toptiffany3018.jpg",
      "/images/top/toptiffany30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: false
  },
  {
    id: 80,
    name: "Top Verão 3018 Chumbo Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/topchumbo3018.jpg",
      "/images/top/topchumbo30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 81,
    name: "Top Verão 3018 Chumbo Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/topchumbo3018.jpg",
      "/images/top/topchumbo30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 82,
    name: "Top Verão 3018 Chumbo Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/topchumbo3018.jpg",
      "/images/top/topchumbo30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 83,
    name: "Top Verão 3018 Chumbo Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/topchumbo3018.jpg",
      "/images/top/topchumbo30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  {
    id: 84,
    name: "Top Verão 3018 Marsala Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/topmarsala3018.jpg",
      "/images/top/topmarsala30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 85,
    name: "Top Verão 3018 Marsala Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/topmarsala3018.jpg",
      "/images/top/topmarsala30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 86,
    name: "Top Verão 3018 Marsala Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/topmarsala3018.jpg",
      "/images/top/topmarsala30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 87,
    name: "Top Verão 3018 Marsala Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/topmarsala3018.jpg",
      "/images/top/topmarsala30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  {
    id: 88,
    name: "Top Verão 3018 Pink Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/toppink3018.jpg",
      "/images/top/toppink30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 89,
    name: "Top Verão 3018 Pink Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/toppink3018.jpg",
      "/images/top/toppink30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 90,
    name: "Top Verão 3018 Pink Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/toppink3018.jpg",
      "/images/top/toppink30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 91,
    name: "Top Verão 3018 Pink Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/toppink3018.jpg",
      "/images/top/toppink30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  
  {
    id: 92,
    name: "Top Verão 3018 Branco Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/topbranco3018.jpg",
      "/images/top/topbranco30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 93,
    name: "Top Verão 3018 Branco Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/topbranco3018.jpg",
      "/images/top/topbranco30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: true
  },
  {
    id: 94,
    name: "Top Verão 3018 Branco Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/topbranco3018.jpg",
      "/images/top/topbranco30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: true
  },
  {
    id: 95,
    name: "Top Verão 3018 Branco Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/topbranco3018.jpg",
      "/images/top/topbranco30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  {
    id: 96,
    name: "Top Verão 3018 Pessego Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/toppessego3018.jpg",
      "/images/top/toppessego30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 97,
    name: "Top Verão 3018 Pessego Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/toppessego3018.jpg",
      "/images/top/toppessego30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: false
  },
  {
    id: 98,
    name: "Top Verão 3018 Pessego Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/toppessego3018.jpg",
      "/images/top/toppessego30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: false
  },
  {
    id: 99,
    name: "Top Verão 3018 Pessego Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/toppessego3018.jpg",
      "/images/top/toppessego30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: false
  },
  {
    id: 100,
    name: "Top Verão 3018 Coral Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/topcoral3018.jpg",
      "/images/top/topcoral30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 101,
    name: "Top Verão 3018 Coral Tamanho: M",
    price: 56.25,
    images: [
      "/images/top/topcoral3018.jpg",
      "/images/top/topcoral30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: M",
    sku: "3018",
    inStock: false
  },
  {
    id: 102,
    name: "Top Verão 3018 Coral Tamanho: G",
    price: 56.25,
    images: [
      "/images/top/topcoral3018.jpg",
      "/images/top/topcoral30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: G",
    sku: "3018",
    inStock: false
  },
  {
    id: 103,
    name: "Top Verão 3018 Coral Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/topcoral3018.jpg",
      "/images/top/topcoral30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: false
  },
];

// ===== CATEGORIA: TRICOT HOT FIX =====
const tricotHotFixProducts: Product[] = [
  {
    id: 30,
    name: "Tricot Hot Fix Preto Tamanho: U",
    price: 231.25,
    images: [
      "/images/tricothotfix/hotfixpreto.jpg",
      "/images/tricothotfix/hotfixpreto1.jpg",
    ],
    category: "Tricot Hot Fix",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  },
  {
    id: 31,
    name: "Tricot Hot Fix Marsala Tamanho: U",
    price: 231.25,
    images: [
      "/images/tricothotfix/hotfixmarsala.jpg",
      "/images/tricothotfix/hotfixmarsala1.jpg",
    ],
    category: "Tricot Hot Fix",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  },
  {
    id: 32,
    name: "Tricot Hot Fix Off White Tamanho: U",
    price: 231.25,
    images: [
      "/images/tricothotfix/hotfixoffwhite.jpg",
      "/images/tricothotfix/hotfixoffwhite1.jpg",
    ],
    category: "Tricot Hot Fix",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  }, 
  {
    id: 33,
    name: "Tricot Hot Fix Cinza Tamanho: U",
    price: 231.25,
    images: [
      "/images/tricothotfix/hotfixcinza.jpg",
      "/images/tricothotfix/hotfixcinza1.jpg",
    ],
    category: "Tricot Hot Fix",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  },
  {
    id: 34,
    name: "Tricot Hot Fix Mooca Tamanho: U",
    price: 231.25,
    images: [
      "/images/tricothotfix/hotfixmooca1.jpg",
      "/images/tricothotfix/hotfixmooca.jpg",
    ],
    category: "Tricot Hot Fix",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  },
  
  
];
const tricotmetalizadoProducts: Product[] = [
  {
    id: 860,
    name: "Tricot Metalizado Marrom Tamanho: U",
    price: 156.25,
    images: [
      "/images/tricotmetalizado/fiometalizadomarrom1.jpg",
      "/images/tricotmetalizado/fiometalizadomarrom.jpg",
    ],
    category: "Tricot Metalizado",
    description: "Tamanho: U",
    sku: "860",
    inStock: true
  },
  {
    id: 861,
    name: "Tricot Metalizado Azul Marinho Tamanho: U",
    price: 156.25,
    images: [
      "/images/tricotmetalizado/fiometalizadoazulmarinho.jpg",
      "/images/tricotmetalizado/fiometalizadoazulmarinho1.jpg",
    ],
    category: "Tricot Metalizado",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  },
  {
    id: 862,
    name: "Tricot Metalizado Preto Tamanho: U",
    price: 156.25,
    images: [
      "/images/tricotmetalizado/fiometalizadopreto.jpg",
      "/images/tricotmetalizado/fiometalizadopreto1.jpg",
    ],
    category: "Tricot Metalizado",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  }, 
  {
    id: 863,
    name: "Tricot Metalizado Preto com Prata Tamanho: U",
    price: 156.25,
    images: [
      "/images/tricotmetalizado/fiometalizadopretocprata1.JPG",
      "/images/tricotmetalizado/fiometalizadopretocprata.JPG",
    ],
    category: "Tricot Metalizado",
    description: "Tamanho: U",
    sku: "222",
    inStock: true
  }, 
  
  
  
  
];

// Combinando todos os produtos
export const products: Product[] = [
  ...tuleProducts,
  ...tricotmetalizadoProducts,
  ...coleteMetalizadoProducts,
  ...top3018Products,
  ...tricotHotFixProducts,
];
