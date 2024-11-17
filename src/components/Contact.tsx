import React from 'react';
import { Mail, Linkedin, Instagram, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Create Something Extraordinary</h2>
            <p className="text-xl text-gray-600 mb-8">
              At Small Media Hub, we're dedicated to helping creators and brands grow through tailored digital solutions.
              Whether you need website development, digital marketing, content creation, or influencer partnerships,
              we have you covered.
            </p>
            
            <div className="space-y-4">
              <a href="mailto:connect@smallmediahub.com" 
                 className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                connect@smallmediahub.com
              </a>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-600 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-600 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-indigo-600 focus:outline-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}