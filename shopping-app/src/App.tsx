import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';
import { products } from './data/sampleData';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          onCartClick={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to ShopCo
            </h1>
            <p className="text-gray-600">
              Discover amazing products at great prices
            </p>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="mb-4">
            <p className="text-gray-600">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </main>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;
