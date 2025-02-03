import React from 'react';
import { Utensils, Truck, Trophy, Heart } from 'lucide-react';

const FeaturesOutline = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-8 gap-0 px-6 my-6">
      {/* Container 1 */}
      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-33 border-b-33 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Utensils className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Authentic Taste</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Enjoy our traditional recipes, inspired by rich culinary heritage.</p>
      </div>

      {/* Container 2 */}
      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-33 border-b-33 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Truck className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Service Excellence</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Outstanding service and unforgettable experiences.</p>
      </div>

      {/* Container 3 */}
      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-33 border-b-33 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Trophy className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Best Quality</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Top quality standards, excellence in every bite.</p>
      </div>

      {/* Container 4 */}
      <div className="border-10 lg:border-t-10 lg:border-b-10 border-t-33 border-b-33 border-yellow-400 p-6 lg:rounded-lg flex flex-col items-center text-center">
        <Heart className="w-12 h-12 mb-4 text-yellow-400 stroke-2" />
        <h3 className="text-2xl font-semibold mb-2 text-black libre-baskerville-text">Heritage</h3>
        <p className="text-black libre-baskerville-text1 text-lg">Venus catering blends food and heart, rooted in family traditions.</p>
      </div>
    </div>
  );
};

export default FeaturesOutline;