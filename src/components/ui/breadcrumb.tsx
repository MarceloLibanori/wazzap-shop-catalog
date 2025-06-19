"use client" // Se estiver usando Next.js App Router

import * as React from "react"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"

// Exemplo de dados do carrinho
const cartItems = [
  { id: 1, name: "Camisa", quantity: 2 },
  { id: 2, name: "Calça", quantity: 1 },
  { id: 3, name: "Tênis", quantity: 1 },
]

export default function CarrinhoBreadcrumb() {
  // Quantidade de unidades/produtos distintos
  const quantidadeUnidades = cartItems.length

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
            {quantidadeUnidades} unidade{quantidadeUnidades !== 1 ? "s" : ""}
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}