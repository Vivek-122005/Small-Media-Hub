import React from 'react';
import ServiceCard from './ServiceCard';
import { Globe, Target, Briefcase, Users, BarChart } from 'lucide-react';

export default function ServicesBrands() {
  const services = [
    {
      icon: Globe,
      title: "Website & E-commerce",
      description: "Custom website design and e-commerce solutions to establish your online presence."
    },
    {
      icon: Target,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including SEO and PPC campaigns."
    },
    {
      icon: Briefcase,
      title: "Brand Strategy",
      description: "Strategic brand positioning and identity development for market success."
    },
    {
      icon: Users,
      title: "Influencer Marketing",
      description: "Connect with relevant influencers to amplify your brand message."
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights and performance tracking for optimal results."
    }
  ];

  return (
    <section id="services-brands" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services for Brands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your brand thrive in the digital landscape.
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