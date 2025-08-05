import React from 'react';
import { categories } from '../data/sampleData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  return (
    <div className="bg-brand-white p-6 rounded-xl shadow-md mb-6 border border-gray-100">
      <h3 className="text-xl font-bold text-brand-black mb-4">Categories</h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => onCategoryChange('')}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === ''
              ? 'bg-brand-dark-blue text-brand-white shadow-lg'
              : 'bg-gray-100 text-brand-black hover:bg-gray-200'
          }`}
        >
          All Products
        </button>
        
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
              selectedCategory === category.name
                ? 'bg-brand-dark-blue text-brand-white shadow-lg'
                : 'bg-gray-100 text-brand-black hover:bg-gray-200'
            }`}
          >
            <span>{category.icon}</span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;