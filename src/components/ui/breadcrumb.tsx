"use client"

import * as React from "react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"

// Definição da interface para os itens do carrinho
interface CartItem {
  id: number
  name: string
  quantity: number
}

// Props do componente (caso queira passar os itens como prop)
interface CarrinhoBreadcrumbProps {
  cartItems: CartItem[]
}

export default function CarrinhoBreadcrumb({ cartItems }: CarrinhoBreadcrumbProps) {
  // Soma total de todos os itens no carrinho (incluindo quantidades repetidas)
  const totalItens = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  // Função simples para pluralizar
  const pluralizar = (singular: string, plural: string, quantidade: number) => {
    return quantidade === 1 ? singular : plural
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/carrinho">Carrinho</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>
            {totalItens} {pluralizar("item", "itens", totalItens)}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}