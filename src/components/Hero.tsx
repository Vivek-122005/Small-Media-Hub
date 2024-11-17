import React from 'react';
import { ArrowRight, Users, Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Empowering <span className="text-indigo-600">Creators</span> and <span className="text-indigo-600">Brands</span>
            <br />with Impactful Digital Solutions
          </h1>
          
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your digital presence with our innovative solutions tailored for both content creators and established brands.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#services-creators" 
               className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105">
              For Creators
              <Users className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#services-brands"
               className="group inline-flex items-center justify-center px-8 py-3 text-lg font-medium text-indigo-600 bg-white border-2 border-indigo-600 rounded-full hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105">
              For Brands
              <Building2 className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowRight className="h-6 w-6 text-indigo-600 transform rotate-90" />
      </div>
    </div>
  );
}