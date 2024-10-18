import React from 'react';
import { CreditCard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-5xl font-bold mb-6 gradient-text">Revolutionize Nightlife Payments with CLKK</h1>
      <p className="text-xl mb-8 text-gray-300">Instant transactions and settlements for the modern nightlife experience</p>
      <div className="flex justify-center items-center space-x-4 animate-float">
        <CreditCard size={48} className="text-blue-400" />
        <span className="text-2xl font-semibold">Tap. Pay. Party.</span>
      </div>
    </section>
  );
};

export default Hero;