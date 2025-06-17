
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  productCounts: Record<string, number>;
}

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  productCounts 
}: CategoryFilterProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorias</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          onClick={() => onCategoryChange('all')}
          className={`relative ${
            selectedCategory === 'all' 
              ? 'bg-whatsapp-500 hover:bg-whatsapp-600 text-white' 
              : 'hover:border-whatsapp-500 hover:text-whatsapp-600'
          }`}
        >
          Todos
          <Badge 
            variant="secondary" 
            className="ml-2 bg-gray-100 text-gray-700 text-xs"
          >
            {Object.values(productCounts).reduce((acc, count) => acc + count, 0)}
          </Badge>
        </Button>
        
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            onClick={() => onCategoryChange(category)}
            className={`relative ${
              selectedCategory === category 
                ? 'bg-whatsapp-500 hover:bg-whatsapp-600 text-white' 
                : 'hover:border-whatsapp-500 hover:text-whatsapp-600'
            }`}
          >
            {category}
            <Badge 
              variant="secondary" 
              className="ml-2 bg-gray-100 text-gray-700 text-xs"
            >
              {productCounts[category] || 0}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
