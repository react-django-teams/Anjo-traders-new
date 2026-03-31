import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import SectionHeader from '../ui/SectionHeader';
import exportImportImage from '../../assets/images/WhatsApp Image 2025-09-27 at 5.04.36 AM.jpeg';
import maritimeLogisticsImage from '../../assets/images/WhatsApp Image 2025-09-27 at 5.04.13 AM.jpeg';
import containerCommercializationImage from '../../assets/images/WhatsApp Image 2025-09-27 at 5.04.09 AM.jpeg';
import saltManufacturingImage from '../../assets/images/WhatsApp Image 2025-09-27 at 5.20.06 AM.jpeg';

const ServicesHighlight = () => {
  const services = [
    {
      title: 'Export & Import Solutions',
      description: 'Comprehensive international trade services connecting suppliers and buyers across global markets.',
      image: exportImportImage,
      link: '/services#export-import'
    },
    {
      title: 'Maritime & Logistics',
      description: 'End-to-end shipping and logistics solutions with real-time tracking and optimized routes.',
      image: maritimeLogisticsImage,
      link: '/services#maritime-logistics'
    },
    {
      title: 'Container Commercialization',
      description: 'Efficient container management and commercialization services for streamlined operations.',
      image: containerCommercializationImage,
      link: '/services#container-commercialization'
    },
    {
      title: 'Salt Manufacturing',
      description: 'High-quality salt production and distribution with focus on purity, consistency, and sustainable manufacturing practices.',
      image: saltManufacturingImage,
      link: '/services#salt-manufacturing'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Our Core Services"
          subtitle="Discover our comprehensive range of trading and logistics solutions designed to meet your business needs"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer" hover={true}>
              <div className="aspect-w-16 aspect-h-10">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Learn More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Services
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesHighlight;
