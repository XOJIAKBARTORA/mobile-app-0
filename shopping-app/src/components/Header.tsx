import React, { useState } from 'react';
import { ShoppingCart, Search, Menu, User, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onCartClick, searchQuery, onSearchChange }) => {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-brand-dark-blue shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Hamburger Menu */}
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className="p-2 text-brand-white hover:text-gray-200 transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Center - Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="block w-full pl-12 pr-4 py-3 border border-gray-300 rounded-full leading-5 bg-brand-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-brand-white focus:border-transparent shadow-sm"
                  placeholder="Search products..."
                />
              </div>
            </div>

            {/* Right side - User and Cart */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-brand-white hover:text-gray-200 transition-colors">
                <User className="h-6 w-6" />
              </button>
              
              <button
                onClick={onCartClick}
                className="relative p-2 text-brand-white hover:text-gray-200 transition-colors"
              >
                <ShoppingCart className="h-6 w-6" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-brand-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {state.itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-out Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-brand-black bg-opacity-50 transition-opacity"
            onClick={toggleMenu}
          />
          
          {/* Menu Panel */}
          <div className="absolute left-0 top-0 h-full w-80 bg-brand-white shadow-xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-brand-dark-blue">
                <h2 className="text-xl font-semibold text-brand-white">Menu</h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-brand-white hover:text-gray-200 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex-1 py-6">
                <nav className="space-y-2 px-6">
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">🏠</span>
                    <span className="font-medium">Home</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">📱</span>
                    <span className="font-medium">Electronics</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">👕</span>
                    <span className="font-medium">Clothing</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">📚</span>
                    <span className="font-medium">Books</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">🏠</span>
                    <span className="font-medium">Home & Garden</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">⚽</span>
                    <span className="font-medium">Sports</span>
                  </a>
                </nav>

                <div className="border-t border-gray-200 mt-6 pt-6 px-6">
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">👤</span>
                    <span className="font-medium">My Account</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">📦</span>
                    <span className="font-medium">My Orders</span>
                  </a>
                  <a href="#" className="flex items-center px-4 py-3 text-brand-black hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-2xl mr-3">⚙️</span>
                    <span className="font-medium">Settings</span>
                  </a>
                </div>
              </div>

              {/* Menu Footer */}
              <div className="border-t border-gray-200 p-6">
                <p className="text-sm text-gray-500 text-center">
                  © 2024 ShopCo. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;