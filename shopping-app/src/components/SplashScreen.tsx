import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  brandName: string;
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ brandName, onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Animation starts immediately, lasts 600ms, then waits 200ms before navigating
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Small delay for fade out effect
      setTimeout(onComplete, 100);
    }, 800); // 600ms animation + 200ms delay

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-brand-dark-blue to-brand-navy flex items-center justify-center z-50">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-brand-white animate-fade-in">
          {brandName}
        </h1>
        <div className="mt-4 w-32 h-1 bg-brand-white mx-auto animate-slide-up" style={{ animationDelay: '300ms' }}></div>
      </div>
      
      {/* Loading indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-brand-white rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-brand-white rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
          <div className="w-3 h-3 bg-brand-white rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;