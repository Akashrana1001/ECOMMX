import React from 'react';
import { Leaf, Loader2 } from 'lucide-react';

const LoadingLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer spinning circle with leaves */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="h-20 w-20 rounded-full border-4 border-green-600 border-t-transparent" />
          <Leaf 
            className="absolute -top-2 left-1/2 -translate-x-1/2 text-green-600 animate-bounce" 
            size={24}
          />
          <Leaf 
            className="absolute top-1/2 -right-2 -translate-y-1/2 text-green-600 animate-bounce delay-100" 
            size={24}
          />
          <Leaf 
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-green-600 animate-bounce delay-200" 
            size={24}
          />
          <Leaf 
            className="absolute top-1/2 -left-2 -translate-y-1/2 text-green-600 animate-bounce delay-300" 
            size={24}
          />
        </div>
        
        {/* Inner spinning loader */}
        {/* <Loader2 
          className="h-20 w-20 animate-spin text-green-700" 
          strokeWidth={2}
        /> */}
      </div>
      <p className="text-green-700 font-medium animate-pulse">
      </p>
    </div>
  );
};

export default LoadingLogo;