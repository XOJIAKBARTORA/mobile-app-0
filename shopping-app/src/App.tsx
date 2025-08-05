import React, { useState, useMemo } from 'react';
import { CartProvider } from './context/CartContext';
import SplashScreen from './components/SplashScreen';
import AuthPage from './components/AuthPage';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import CategoryFilter from './components/CategoryFilter';
import { products } from './data/sampleData';
import './App.css';

type AppState = 'splash' | 'auth' | 'main';

interface UserData {
  name: string;
  surname: string;
  phone: string;
}

function App() {
  const [appState, setAppState] = useState<AppState>('splash');
  const [userData, setUserData] = useState<UserData | null>(null);
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

  const handleSplashComplete = () => {
    setAppState('auth');
  };

  const handleAuthComplete = (data: UserData) => {
    setUserData(data);
    setAppState('main');
  };

  // Show splash screen
  if (appState === 'splash') {
    return (
      <SplashScreen 
        brandName="ShopCo" 
        onComplete={handleSplashComplete}
      />
    );
  }

  // Show auth page
  if (appState === 'auth') {
    return (
      <AuthPage onComplete={handleAuthComplete} />
    );
  }

  // Show main app
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
            <h1 className="text-4xl font-bold text-brand-black mb-2">
              Welcome back, {userData?.name}! 👋
            </h1>
            <p className="text-gray-600 text-lg">
              Discover amazing products at great prices
            </p>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="mb-6 flex items-center justify-between">
            <p className="text-gray-600 text-lg">
              {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
            </p>
            {searchQuery && (
              <p className="text-brand-dark-blue font-medium">
                Searching for: "{searchQuery}"
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-xl mb-2">
                No products found matching your criteria.
              </p>
              <p className="text-gray-400">
                Try adjusting your search or category filter.
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
