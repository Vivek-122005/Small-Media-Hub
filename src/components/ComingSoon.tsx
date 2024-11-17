import React from 'react';
import { Clock } from 'lucide-react';

export default function ComingSoon() {
  return (
    <section id="content" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Clock className="h-16 w-16 text-indigo-600 mx-auto mb-8" />
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Creation Services</h2>
        <p className="text-xl text-gray-600 mb-8">
          Our content creation services are coming soon! Stay tuned for exciting updates.
        </p>
        
        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border-2 border-gray-300 focus:border-indigo-600 focus:outline-none"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}