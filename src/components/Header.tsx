import React from 'react';
import { Menu, X, Code } from 'lucide-react';
import { NavLinks } from './NavLinks';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="w-8 h-8 text-blue-600" />
            <div className="text-2xl font-bold text-blue-600">CSS KUC</div>
          </div>
          
          <NavLinks className="hidden md:flex space-x-8" />

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <NavLinks 
            className="md:hidden pt-4 pb-2 flex flex-col" 
            itemClassName="block py-2"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </div>
    </header>
  );
}