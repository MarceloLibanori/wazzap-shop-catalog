
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  description: string;
  sku: string; // Adicionado
  inStock: boolean;
}

export const products: Product[] = [
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
    sku: "1300", // Adicionado SKU
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
  //  INICIO TOP 3018
  {
    id: 15,
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
    id: 16,
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
    id: 17,
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
    id: 18,
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
    id: 19,
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
    id: 20,
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
    id: 21,
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
    id: 22,
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
    id: 23,
    name: "Top Verão 3018 Lima Tamanho: P",
    price: 56.25,
    images: [
      "/images/top/toplima3018.jpg",
      "/images/top/toplima30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: P",
    sku: "3018",
    inStock: true
  },
  {
    id: 23,
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
    id: 24,
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
    id: 24,
    name: "Top Verão 3018 Lima Tamanho: GG",
    price: 56.25,
    images: [
      "/images/top/toplima3018.jpg",
      "/images/top/toplima30181.jpg",
    ],
    category: "Top 3018",
    description: "Tamanho: GG",
    sku: "3018",
    inStock: true
  },
  {
    id: 25,
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
    id: 26,
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
    id: 27,
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
    id: 28,
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
    id: 29,
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
    id: 30,
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
    id: 31,
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
    id: 32,
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
    id: 33,
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
    id: 34,
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
    id: 35,
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
    id: 36,
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
    id: 37,
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
    id: 38,
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
    id: 39,
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
    id: 40,
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
    id: 41,
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
    id: 42,
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
    id: 43,
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
    id: 44,
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
    id: 45,
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
    id: 46,
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
    id: 47,
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
    id: 48,
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
//  INICIO TRICO HOT FIX
  {
    id: 49,
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
];

