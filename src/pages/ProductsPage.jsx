import React, { useState, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card, { CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import Breadcrumb from '../components/common/Breadcrumb';
import './ProductsPage.css';

import bigOnionImage from '../assets/images/whatsapp-image-2025-09-26-at-10.27.41-pm.jpeg';
import shallotsImage from '../assets/images/whatsapp-image-2025-09-26-at-10.28.34-pm.jpeg';
import coconutImage from '../assets/images/whatsapp-image-2025-09-26-at-10.31.49-pm.jpeg';
import moongDalImage from '../assets/images/whatsapp-image-2025-09-26-at-11.17.50-pm.jpeg';
import channaImage from '../assets/images/whatsapp-image-2025-09-26-at-11.16.48-pm.jpeg';
import guavaImage from '../assets/images/whatsapp-image-2025-09-26-at-11.12.22-pm.jpeg';
import bananaImage from '../assets/images/whatsapp-image-2025-09-26-at-11.09.56-pm.jpeg';
import appleImage from '../assets/images/whatsapp-image-2025-09-26-at-11.08.02-pm.jpeg';
import pomegranateImage from '../assets/images/whatsapp-image-2025-09-26-at-11.06.15-pm.jpeg';
import orangeImage from '../assets/images/whatsapp-image-2025-09-26-at-11.04.10-pm.jpeg';
import grapesImage from '../assets/images/whatsapp-image-2025-09-26-at-11.01.37-pm.jpeg';
import garlicImage from '../assets/images/whatsapp-image-2025-09-26-at-10.59.34-pm.jpeg';
import chilliesImage from '../assets/images/whatsapp-image-2025-09-26-at-10.59.15-pm.jpeg';
import gingerImage from '../assets/images/whatsapp-image-2025-09-26-at-10.50.35-pm.jpeg';
import mangoImage from '../assets/images/whatsapp-image-2025-09-26-at-10.59.04-pm.jpeg';
import greenGramImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.19-am.jpeg';
import uradDalImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.20-am.jpeg';
import masoorDalImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.20-am-1.jpeg';
import horseGramImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.21-am.jpeg';
import maizeCornImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.22-am.jpeg';
import sugarImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.15-am.jpeg';
import vegetableOilImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am.jpeg';
import groceryImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am-4.jpeg';
import saltImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am-3.jpeg';
import dryFishImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am-1.jpeg';
import riceImage from '../assets/images/whatsapp-image-2025-09-27-at-2.58.52-am.jpeg';
import wheatImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.13-am.jpeg';

// Product data structure
const productsData = {
  vegetables: [
    {
      id: 'rice',
      name: 'Rice',
      image: riceImage,
      description: 'Premium quality rice varieties including basmati, non-basmati, and specialty rice.',
      specifications: {
        origin: 'India, Thailand, Vietnam',
        size: 'Long grain, Short grain',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (25 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'big-onion',
      name: 'Big Onion',
      image: bigOnionImage,
      description: 'Large, high-quality onions perfect for cooking, processing, and fresh consumption.',
      specifications: {
        origin: 'India, China, Netherlands',
        size: '60-80mm diameter',
        packaging: '25kg, 50kg mesh bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (25 MT)',
        shipping: 'Sea freight, Reefer containers'
      }
    },
    {
      id: 'shallots',
      name: 'Shallots (Red Onion)',
      image: shallotsImage,
      description: 'Small, flavorful shallots perfect for gourmet cooking and culinary applications.',
      specifications: {
        origin: 'India, Thailand, Vietnam',
        size: '20-35mm diameter',
        packaging: '10kg, 20kg cartons',
        quality: 'Grade A, Premium Quality'
      },
      exportInfo: {
        availability: 'Seasonal (Oct-Mar)',
        moq: '500kg minimum',
        shipping: 'Sea freight, Air freight'
      }
    },
    {
      id: 'coconut',
      name: 'Coconut',
      image: coconutImage,
      description: 'Fresh mature coconuts with high water content and tender meat.',
      specifications: {
        origin: 'India, Sri Lanka, Indonesia',
        size: 'Medium to Large',
        packaging: '25-30 pieces per sack',
        quality: 'Fresh, Mature'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (15-18 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'garlic',
      name: 'Garlic',
      image: garlicImage,
      description: 'Aromatic garlic bulbs with strong flavor and medicinal properties.',
      specifications: {
        origin: 'China, India, Spain',
        size: '45-65mm diameter',
        packaging: '10kg, 25kg mesh bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (12-15 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'chillies-dry',
      name: 'Chillies (Dry/Red)',
      image: chilliesImage,
      description: 'Premium quality dried red chillies with high pungency and color retention.',
      specifications: {
        origin: 'India, China, Mexico',
        size: '5-8cm length',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '500kg minimum',
        shipping: 'Sea freight, Air freight'
      }
    },
    {
      id: 'ginger',
      name: 'Ginger & Others',
      image: gingerImage,
      description: 'Fresh ginger rhizomes and other root vegetables with medicinal properties.',
      specifications: {
        origin: 'India, China, Nigeria',
        size: '100-200g per piece',
        packaging: '10kg, 25kg cartons',
        quality: 'Grade A, Fresh'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (15 MT)',
        shipping: 'Sea freight, Reefer containers'
      }
    }
  ],
  fruits: [
    {
      id: 'mango',
      name: 'Mango',
      image: mangoImage,
      description: 'Sweet and juicy tropical mangoes, perfect for fresh consumption and processing.',
      specifications: {
        origin: 'India, Pakistan, Mexico',
        size: '200-400g per fruit',
        packaging: '5kg, 10kg cartons',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Seasonal (Mar-Jun)',
        moq: '1 container (15 MT)',
        shipping: 'Sea freight, Air freight'
      }
    },
    {
      id: 'grapes',
      name: 'Grapes',
      image: grapesImage,
      description: 'Fresh table grapes and wine grapes with excellent taste and appearance.',
      specifications: {
        origin: 'India, Chile, South Africa',
        size: '15-20mm berries',
        packaging: '5kg, 10kg punnets',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Seasonal (Dec-May)',
        moq: '1 container (10 MT)',
        shipping: 'Sea freight, Reefer containers'
      }
    },
    {
      id: 'orange',
      name: 'Orange',
      image: orangeImage,
      description: 'Juicy citrus oranges rich in vitamin C and perfect for fresh consumption.',
      specifications: {
        origin: 'Spain, Egypt, South Africa',
        size: '60-80mm diameter',
        packaging: '15kg cartons',
        quality: 'Grade A, Fresh'
      },
      exportInfo: {
        availability: 'Seasonal (Nov-Apr)',
        moq: '1 container (15 MT)',
        shipping: 'Sea freight, Reefer containers'
      }
    },
    {
      id: 'pomegranate',
      name: 'Pomegranate',
      image: pomegranateImage,
      description: 'Ruby red pomegranate arils with sweet-tart flavor and numerous health benefits.',
      specifications: {
        origin: 'India, Iran, Turkey',
        size: '200-300g per fruit',
        packaging: '5kg, 10kg cartons',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Seasonal (Sep-Dec)',
        moq: '500kg minimum',
        shipping: 'Sea freight, Air freight'
      }
    },
    {
      id: 'apple',
      name: 'Apple',
      image: appleImage,
      description: 'Crisp and juicy apples available in various varieties for different markets.',
      specifications: {
        origin: 'USA, New Zealand, China',
        size: '60-80mm diameter',
        packaging: '18kg cartons',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Seasonal (Aug-Mar)',
        moq: '1 container (20 MT)',
        shipping: 'Sea freight, Reefer containers'
      }
    },
    {
      id: 'banana',
      name: 'Banana',
      image: bananaImage,
      description: 'Fresh Cavendish bananas with excellent shelf life and consistent quality.',
      specifications: {
        origin: 'Ecuador, Philippines, Costa Rica',
        size: '18-22cm length',
        packaging: '13kg boxes',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (20 MT)',
        shipping: 'Sea freight, Reefer containers'
      }
    },
    {
      id: 'guava',
      name: 'Guava',
      image: guavaImage,
      description: 'Tropical guavas with unique flavor profile and high nutritional value.',
      specifications: {
        origin: 'India, Mexico, Brazil',
        size: '100-200g per fruit',
        packaging: '5kg, 10kg cartons',
        quality: 'Grade A, Fresh'
      },
      exportInfo: {
        availability: 'Seasonal (Aug-Nov)',
        moq: '500kg minimum',
        shipping: 'Sea freight, Air freight'
      }
    }
  ],
  pulses: [
    {
      id: 'moong-dal',
      name: 'Moong Dal',
      image: moongDalImage,
      description: 'Premium quality split green gram with high protein content and easy digestibility.',
      specifications: {
        origin: 'India, Myanmar, Australia',
        size: 'Split lentils',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (24 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'chick-pea',
      name: 'Chick Pea / Channa',
      image: channaImage,
      description: 'Nutritious chickpeas available as whole or split, perfect for various culinary uses.',
      specifications: {
        origin: 'India, Turkey, Australia',
        size: '8-10mm diameter',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (24 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'green-gram',
      name: 'Green Gram',
      image: greenGramImage,
      description: 'Whole green gram with high nutritional value and versatile cooking applications.',
      specifications: {
        origin: 'India, China, Myanmar',
        size: '3-4mm length',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (24 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'urad-dal',
      name: 'Urad Dal',
      image: uradDalImage,
      description: 'Split black gram lentils, essential ingredient in South Indian cuisine.',
      specifications: {
        origin: 'India, Myanmar',
        size: 'Split lentils',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (24 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'masoor-dal',
      name: 'Masoor Dal',
      image: masoorDalImage,
      description: 'Red lentils that cook quickly and are rich in protein and dietary fiber.',
      specifications: {
        origin: 'India, Canada, Turkey',
        size: 'Split lentils',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (24 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'horse-gram',
      name: 'Horse Gram',
      image: horseGramImage,
      description: 'Nutritious horse gram with medicinal properties and high protein content.',
      specifications: {
        origin: 'India, Nepal',
        size: 'Whole seeds',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (24 MT)',
        shipping: 'Sea freight'
      }
    }
  ],
  'cereals-food-grains': [
    {
      id: 'maize-corn',
      name: 'Maize / Corn',
      image: maizeCornImage,
      description: 'High-quality maize suitable for food processing, animal feed, and industrial use.',
      specifications: {
        origin: 'India, USA, Brazil',
        size: 'Grade 1, 2, 3',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (25 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'wheat',
      name: 'Wheat (Maida / Sooji)',
      image: wheatImage,
      description: 'High-grade wheat flour and semolina for bakery and food processing industries.',
      specifications: {
        origin: 'India, Ukraine, Russia',
        size: 'Fine, Medium, Coarse',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (25 MT)',
        shipping: 'Sea freight'
      }
    }
  ],
  merchandise: [
    {
      id: 'vegetable-oil',
      name: 'Vegetable Oil',
      image: vegetableOilImage,
      description: 'Pure refined vegetable oils suitable for cooking and food processing.',
      specifications: {
        origin: 'Malaysia, Indonesia, India',
        size: '1L, 5L, 15kg tins',
        packaging: 'Bulk containers',
        quality: 'Grade A, Refined'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (20 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'dry-fish',
      name: 'Dry Fish',
      image: dryFishImage,
      description: 'Premium quality dried fish products with extended shelf life.',
      specifications: {
        origin: 'Sri Lanka, India, Bangladesh',
        size: 'Various sizes',
        packaging: '10kg, 25kg cartons',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '500kg minimum',
        shipping: 'Sea freight, Air freight'
      }
    },
    {
      id: 'salt',
      name: 'Salt',
      image: saltImage,
      description: 'Pure refined salt suitable for food processing and industrial applications.',
      specifications: {
        origin: 'India, Pakistan, Australia',
        size: 'Fine, Coarse',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Iodized/Non-iodized'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (25 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'grocery',
      name: 'Grocery',
      image: groceryImage,
      description: 'Essential grocery items and food products for retail and wholesale.',
      specifications: {
        origin: 'Various countries',
        size: 'Various packaging',
        packaging: 'Retail and bulk',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: 'Mixed container loads',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'sugar',
      name: 'Sugar',
      image: sugarImage,
      description: 'Refined white sugar suitable for food processing and retail packaging.',
      specifications: {
        origin: 'India, Brazil, Thailand',
        size: 'ICUMSA 45',
        packaging: '25kg, 50kg bags',
        quality: 'Grade A, Refined'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (25 MT)',
        shipping: 'Sea freight'
      }
    },
    {
      id: 'machineries',
      name: 'Machineries & Equipments',
      image: riceImage, // Using rice image as placeholder for machineries
      description: 'Food processing machinery and equipment for agricultural and food industries.',
      specifications: {
        origin: 'Various manufacturers',
        size: 'Various specifications',
        packaging: 'Crated for shipping',
        quality: 'Industrial Grade'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: 'As per requirement',
        shipping: 'Sea freight, Specialized shipping'
      }
    }
  ]
};

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  // Filter products based on selected category and search term
  const filteredProducts = useMemo(() => {
    let products = [];

    // Get products based on selected category
    if (selectedCategory === 'all') {
      // Combine all products from all categories
      Object.values(productsData).forEach(categoryProducts => {
        products = products.concat(categoryProducts);
      });
    } else {
      products = productsData[selectedCategory] || [];
    }

    // Filter by search term if provided
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower)
      );
    }

    return products;
  }, [selectedCategory, searchTerm]);

  const categories = useMemo(() => [
    { id: 'all', name: 'All Products', count: Object.values(productsData).reduce((sum, products) => sum + products.length, 0) },
    { id: 'vegetables', name: 'Vegetables', count: productsData.vegetables.length },
    { id: 'fruits', name: 'Fruits', count: productsData.fruits.length },
    { id: 'pulses', name: 'Pulses', count: productsData.pulses.length },
    { id: 'cereals-food-grains', name: 'Cereals & Food Grains', count: productsData['cereals-food-grains'].length },
    { id: 'merchandise', name: 'Merchandise', count: productsData.merchandise.length }
  ], []);

  useEffect(() => {
    if (location.hash) {
      const categoryId = location.hash.substring(1); // Remove the '#'
      const normalizedCategoryId = categoryId.replace('and', '&'); // Convert 'and' back to '&' for matching
      const categoryExists = categories.some(cat => cat.id === normalizedCategoryId);

      if (categoryExists) {
        setSelectedCategory(normalizedCategoryId);
        // Scroll to the products grid section after category is set
        const productsGrid = document.getElementById('products-grid-section');
        if (productsGrid) {
          productsGrid.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setSelectedCategory('all'); // Reset to all if no hash
    }
  }, [location, categories]);



  const handleDownloadCatalog = () => {
    // Create a simple PDF-like content (in a real app, you'd generate an actual PDF)
    const catalogContent = `
ANJO TRADERS - PRODUCT CATALOG

VEGETABLES:
${productsData.vegetables.map(p => `- ${p.name}: ${p.description}`).join('\n')}

FRUITS:
${productsData.fruits.map(p => `- ${p.name}: ${p.description}`).join('\n')}

PULSES:
${productsData.pulses.map(p => `- ${p.name}: ${p.description}`).join('\n')}

CEREALS & FOOD GRAINS:
${productsData['cereals-food-grains'].map(p => `- ${p.name}: ${p.description}`).join('\n')}

MERCHANDISE:
${productsData.merchandise.map(p => `- ${p.name}: ${p.description}`).join('\n')}

For detailed specifications and quotes, please contact us:
Email: info@anjotraders.com
Phone: +1 (555) 123-4567
WhatsApp: +1 (555) 987-6543
    `;

    const blob = new Blob([catalogContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'anjo-traders-product-catalog.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="pt-20 page-enter">
      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', link: '/' },
              { name: 'Products', link: '/products' }
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-20 w-48 h-48 bg-green-400 opacity-10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            Premium Bulk Commodities
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8 reveal" style={{ transitionDelay: '0.15s' }}>
            High-volume commodities sourced globally, securely containerized, and shipped with unrivaled logistics reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal" style={{ transitionDelay: '0.3s' }}>
            <Button
              onClick={handleDownloadCatalog}
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Product Catalog
            </Button>
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-shadow hover:shadow-sm"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid-section" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal">
            <SectionHeader
              title={selectedCategory === 'all' ? 'All Products' : categories.find(c => c.id === selectedCategory)?.name || 'Products'}
              subtitle={`${filteredProducts.length} products available`}
            />
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12 reveal">
              <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-grid">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group cursor-pointer reveal card-premium border border-gray-100" hover={false}>
                  <div className="aspect-w-16 aspect-h-10 img-zoom bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <Link
                      to={`/product/${product.id}`}
                      className="w-full inline-block text-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-green-50 hover:text-green-700 hover:border-green-200 transition-all font-medium"
                    >
                      View Details
                    </Link>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  );
};
export default ProductsPage;
