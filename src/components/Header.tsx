import React from 'react';
import { Zap } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Zap size={32} className="text-blue-400" />
        <span className="text-2xl font-bold gradient-text">CLKK</span>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
          <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Benefits</a></li>
          <li><a href="#join" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full transition-colors">Join Waitlist</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;