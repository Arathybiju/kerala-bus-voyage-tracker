
import React from 'react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="text-6xl mb-4">🚌</div>
        <h1 className="text-4xl font-bold text-white mb-2">EdaVandi</h1>
        <p className="text-emerald-100 text-lg">Smart Bus Tracking</p>
        <div className="mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
