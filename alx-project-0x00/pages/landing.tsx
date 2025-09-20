import React from 'react';
import Button from '@/components/Button';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-3xl font-bold mb-8">Test dei Pulsanti</h1>
      
      <Button 
        title="Small Button" 
        styles="bg-blue-500 px-3 py-1 rounded-sm text-sm" 
      />
      
      <Button 
        title="Medium Button" 
        styles="bg-green-500 px-5 py-2 rounded-lg text-base"
      />
      
      <Button 
        title="Large Button" 
        styles="bg-red-500 px-8 py-3 rounded-full text-lg" 
      />
    </div>
  );
};

export default LandingPage;