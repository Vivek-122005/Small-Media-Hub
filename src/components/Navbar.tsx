import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-indigo-600" />
              <span className="font-bold text-xl text-gray-900">Small Media Hub</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services-creators" className="text-gray-700 hover:text-indigo-600 transition-colors">For Creators</a>
            <a href="#services-brands" className="text-gray-700 hover:text-indigo-600 transition-colors">For Brands</a>
            <a href="#content" className="text-gray-700 hover:text-indigo-600 transition-colors">Content</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#services-creators" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">For Creators</a>
            <a href="#services-brands" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">For Brands</a>
            <a href="#content" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Content</a>
            <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}