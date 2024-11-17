import React from 'react';
import ServiceCard from './ServiceCard';
import { Palette, Calendar, Video, Share2, DollarSign, BarChart2, Users } from 'lucide-react';

export default function ServicesCreators() {
  const services = [
    {
      icon: Palette,
      title: "Branding & Visual Identity",
      description: "Custom channel art, thumbnails, and merchandise design to establish your unique brand."
    },
    {
      icon: Calendar,
      title: "Content Strategy",
      description: "Data-driven content calendars and keyword optimization for maximum reach."
    },
    {
      icon: Video,
      title: "Video Production",
      description: "Professional video editing and post-production for all your content needs."
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Comprehensive social media strategy and engagement management."
    },
    {
      icon: DollarSign,
      title: "Monetization",
      description: "Revenue optimization and sponsorship strategies to maximize earnings."
    },
    {
      icon: BarChart2,
      title: "Analytics & Growth",
      description: "Detailed analytics and growth tracking to measure your success."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Network with other creators and brands for meaningful partnerships."
    }
  ];

  return (
    <section id="services-creators" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services for Creators</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to grow your online presence and engage with your audience effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}