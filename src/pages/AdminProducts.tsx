
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';
import ProductForm from '@/components/ProductForm';
import { products, Product } from '@/data/products';

const AdminProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddProduct = () => {
    setIsAddingProduct(true);
    setEditingProduct(null);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsAddingProduct(false);
  };

  const handleCloseForm = () => {
    setIsAddingProduct(false);
    setEditingProduct(null);
  };

  if (isAddingProduct || editingProduct) {
    return (
      <div className="container mx-auto px-4 py-8">
        <ProductForm 
          product={editingProduct}
          onClose={handleCloseForm}
          categories={categories}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Administração de Produtos</h1>
        <Button onClick={handleAddProduct} className="bg-green-600 hover:bg-green-700">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Produto
        </Button>
      </div>

      {/* Filtro por categoria */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Filtrar por Categoria</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => setSelectedCategory('all')}
            className={selectedCategory === 'all' ? 'bg-green-600 hover:bg-green-700' : ''}
          >
            Todas ({products.length})
          </Button>
          {categories.map((category) => {
            const count = products.filter(p => p.category === category).length;
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'bg-green-600 hover:bg-green-700' : ''}
              >
                {category} ({count})
              </Button>
            );
          })}
        </div>
      </div>

      {/* Lista de produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="secondary">{product.category}</Badge>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
              <CardTitle className="text-sm font-medium line-clamp-2">
                {product.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-32 object-cover rounded"
                  onError={(e) => (e.currentTarget.src = '/placeholder.svg')}
                />
                <div className="flex justify-between items-center">
                  <span className="font-bold text-green-600">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                  <Badge variant={product.inStock ? 'default' : 'destructive'}>
                    {product.inStock ? 'Em Estoque' : 'Esgotado'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{product.description}</p>
                <div className="text-xs text-gray-500">
                  SKU: {product.sku} | ID: {product.id}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Nenhum produto encontrado
          </h3>
          <p className="text-gray-500">
            Tente selecionar uma categoria diferente
          </p>
        </div>
      )}
    </div>
  );
};

export default AdminProducts;
