import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (product.inStock) {
      addToCart(product);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-brand-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-brand-black bg-opacity-60 flex items-center justify-center">
            <span className="text-brand-white font-semibold bg-red-500 px-3 py-1 rounded-full text-sm">
              Out of Stock
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-brand-dark-blue font-medium bg-blue-50 px-2 py-1 rounded-full">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            {renderStars(product.rating)}
            <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-brand-black mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-brand-black">
            ${product.price}
          </span>
          
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform ${
              product.inStock
                ? 'bg-brand-dark-blue text-brand-white hover:bg-brand-navy hover:scale-105 shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;