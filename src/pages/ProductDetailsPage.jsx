import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionHeader from '../components/ui/SectionHeader';
import Card, { CardBody } from '../components/common/Card';
import Button from '../components/common/Button';
import Breadcrumb from '../components/common/Breadcrumb';
import './ProductsPage.css';

// Import the same product data from ProductsPage
import potatoImage from '../assets/images/whatsapp-image-2025-09-26-at-10.26.36-pm.jpeg';
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
import uradDalImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.20-am-1.jpeg';
import groceryImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am-4.jpeg';
import masoorDalImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.20-am.jpeg';
import horseGramImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.21-am.jpeg';
import maizeCornImage from '../assets/images/whatsapp-image-2025-09-27-at-1.20.22-am.jpeg';
import wheatImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.13-am.jpeg';
import vegetableOilImage from '../assets/images/whatsapp-image-2025-09-27-at-3.21.14-am.jpeg';

// Product data structure (same as in ProductsPage)
const productsData = {
  vegetables: [
    {
      id: 'big-onion',
      name: 'Big Onion',
      image: bigOnionImage,
      description: 'Premium quality big onions with excellent storage life and rich flavor profile.',
      specifications: {
        origin: 'India, China, Netherlands',
        size: '50-80mm diameter',
        packaging: '10kg, 25kg mesh bags',
        quality: 'Grade A, Export Quality'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: '1 container (20-25 MT)',
        shipping: 'Sea freight, Air freight available',
        logistics: {
          tracking: 'Real-time GPS tracking',
          documentation: 'Digital customs clearance',
          delivery: 'Door-to-door service available',
          insurance: 'Comprehensive cargo insurance',
          temperature: 'Temperature-controlled shipping available'
        }
      }
    },
    {
      id: 'potato',
      name: 'Potato',
      image: potatoImage,
      description: 'Fresh potatoes suitable for various culinary applications and long-term storage.',
      specifications: {
        origin: 'India, Egypt, Netherlands',
        size: '45-65mm diameter',
        packaging: '25kg, 50kg sacks',
        quality: 'Grade A, Table Quality'
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
      id: 'grocery',
      name: 'Grocery',
      image: groceryImage,
      description: 'Essential grocery items and food products for retail and wholesale distribution. We offer a comprehensive range of staple food products including spices, canned goods, beverages, snacks, and other daily essentials sourced from trusted manufacturers worldwide.',
      detailedDescription: `Our South Indian grocery division specializes in authentic, traditional food products that capture the rich culinary heritage of South India. We source the finest quality ingredients directly from certified producers and manufacturers across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana.

      From the aromatic spice blends that define South Indian cooking to traditional rice varieties that form the foundation of every meal, our grocery selection encompasses everything needed for authentic South Indian cuisine. We work directly with local producers, small-scale manufacturers, and certified suppliers to ensure food safety, nutritional value, and authentic taste profiles are maintained throughout our supply chain.

      Our comprehensive range includes traditional spices like sambar powder, rasam powder, and curry leaves; premium rice varieties like ponni rice, sona masuri, and idli rice; a complete selection of dals and lentils essential for South Indian cooking; fresh coconut products; traditional tamarind and spice pastes; ready-to-cook dosa and idli batters; authentic pickles and chutneys; traditional sweets like mysore pak and halwa; and much more.

      Our wholesale grocery services cater to South Indian restaurants, hotels, caterers, supermarkets, and institutional buyers who require bulk quantities of authentic products. We offer flexible packaging options, private labeling services, and customized product assortments to meet specific market requirements while maintaining traditional quality standards.`,
      features: [
        'South Indian Spices & Masalas',
        'Traditional Rice Varieties',
        'Pulses & Lentils (Dal)',
        'Coconut Products',
        'Tamarind & Spice Pastes',
        'Ready-to-eat South Indian Mixes',
        'Pickles & Chutneys',
        'Traditional Sweets & Snacks',
        'Cooking Oils & Ghee',
        'Flours & Grains',
        'Beverages & Health Drinks',
        'Instant Masala Mixes'
      ],
      benefits: [
        'Consistent quality and supply',
        'Competitive wholesale pricing',
        'Flexible packaging options',
        'Private labeling available',
        'Long shelf life products',
        'Nutritional value preservation',
        'Cultural authenticity',
        'Food safety compliance'
      ],
      specifications: {
        origin: 'Various certified manufacturers worldwide',
        packaging: 'Retail packs, bulk containers, institutional sizes',
        quality: 'Grade A, Food Safety Certified',
        certifications: 'ISO 22000, HACCP, FDA Approved'
      },
      exportInfo: {
        availability: 'Year-round',
        moq: 'Mixed container loads (20ft/40ft containers)',
        leadTime: '15-30 days depending on destination',
        shipping: 'Sea freight (primary), Air freight (urgent orders)',
        paymentTerms: 'L/C, T/T, Advance Payment options',
        customization: 'Private labeling and custom packaging available'
      }
    },
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
    }
  ]
};

const ProductDetailsPage = () => {
  const { productId } = useParams();

  // Find the product across all categories
  const findProduct = (id) => {
    for (const category of Object.values(productsData)) {
      const product = category.find(p => p.id === id);
      if (product) return product;
    }
    return null;
  };

  const product = findProduct(productId);

  // If product not found, show 404-like page
  if (!product) {
    return (
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: 'Home', link: '/' },
              { name: 'Products', link: '/products' },
              { name: product.name, link: `/product/${product.id}` }
            ]}
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent rounded-2xl"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium Product
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-emerald-400 font-semibold">5.0 / 5.0 Rating</span>
              </div>
              <p className="text-xl text-green-100 leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-sm border border-emerald-500/30">
                  Export Quality
                </span>
                <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                  Internationally Certified
                </span>
                <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                  Premium Grade
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">

              {/* Product Overview */}
              <div className="bg-slate-50 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                  <svg className="w-8 h-8 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Product Overview
                </h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {product.detailedDescription || product.description}
                </p>
              </div>

              {/* Grocery-Specific Features Section */}
              {product.id === 'grocery' && product.features && (
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-8 border border-orange-200">
                  <h3 className="text-3xl font-bold text-slate-900 mb-6 flex items-center">
                    <svg className="w-8 h-8 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Grocery Product Categories
                  </h3>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-orange-100 hover:shadow-md transition-shadow">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-slate-700 font-medium text-sm">{feature}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Grocery Benefits */}
                  <div className="bg-white rounded-lg p-6 border border-orange-200">
                    <h4 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                      <svg className="w-6 h-6 text-orange-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Why Choose Our Grocery Products?
                    </h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Grocery-Specific Services */}
                  <div className="mt-8 grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 text-center border border-orange-200">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <h5 className="font-semibold text-slate-900 mb-2">Custom Packaging</h5>
                      <p className="text-sm text-slate-600">Tailored packaging solutions for retail and wholesale requirements</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 text-center border border-orange-200">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h5 className="font-semibold text-slate-900 mb-2">Private Labeling</h5>
                      <p className="text-sm text-slate-600">Custom branding and labeling services for your business</p>
                    </div>

                    <div className="bg-white rounded-lg p-6 text-center border border-orange-200">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <h5 className="font-semibold text-slate-900 mb-2">Flexible Pricing</h5>
                      <p className="text-sm text-slate-600">Competitive wholesale pricing with volume discounts</p>
                    </div>
                  </div>

                  {/* South Indian Special Section */}
                  <div className="mt-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-8 border border-yellow-200">
                    <h4 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                      <svg className="w-6 h-6 text-yellow-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      Featured South Indian Specialties
                    </h4>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Traditional Spice Blends */}
                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-900">Traditional Spice Blends</h5>
                            <p className="text-sm text-slate-600">Sambar Powder, Rasam Powder</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-3">Authentic South Indian spice blends made from freshly ground traditional ingredients.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Fresh Ground</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">No Preservatives</span>
                        </div>
                      </div>

                      {/* Premium Rice Varieties */}
                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-900">Premium Rice</h5>
                            <p className="text-sm text-slate-600">Ponni, Sona Masuri, Idli Rice</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-3">Finest quality rice varieties sourced from South Indian paddy fields.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Aged 2+ Years</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Premium Grade</span>
                        </div>
                      </div>

                      {/* Ready-to-Cook Items */}
                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-900">Ready-to-Cook</h5>
                            <p className="text-sm text-slate-600">Dosa Batter, Idli Batter</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-3">Fresh, traditional batters prepared daily using time-honored recipes.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Fresh Daily</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Traditional Recipe</span>
                        </div>
                      </div>

                      {/* Coconut Products */}
                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-900">Coconut Products</h5>
                            <p className="text-sm text-slate-600">Fresh Coconut, Coconut Oil</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-3">Pure coconut products sourced from Kerala's coastal regions.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Fresh Harvest</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Cold Pressed</span>
                        </div>
                      </div>

                      {/* Traditional Sweets */}
                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-900">Traditional Sweets</h5>
                            <p className="text-sm text-slate-600">Mysore Pak, Halwa, Laddu</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-3">Handcrafted traditional sweets made with pure ingredients and traditional methods.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Handcrafted</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Pure Ghee</span>
                        </div>
                      </div>

                      {/* Regional Specialties */}
                      <div className="bg-white rounded-lg p-6 border border-yellow-200">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                            <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-semibold text-slate-900">Regional Specialties</h5>
                            <p className="text-sm text-slate-600">Chettinad, Kerala, Andhra</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-700 mb-3">Region-specific spice blends and ingredients unique to different South Indian states.</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Authentic</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Region-Specific</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Specifications & Export Info in Tabs */}
              <div className="bg-white border border-slate-200 rounded-lg">
                <div className="border-b border-slate-200">
                  <nav className="flex space-x-8 px-8">
                    <button className="py-4 px-1 border-b-2 border-emerald-600 text-emerald-600 font-semibold">
                      Specifications
                    </button>
                    <button className="py-4 px-1 text-slate-500 hover:text-slate-700 font-medium">
                      Export Information
                    </button>
                  </nav>
                </div>

                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Specifications */}
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-6">Product Specifications</h4>
                      <div className="space-y-4">
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-3 border-b border-slate-100">
                            <span className="font-medium text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="text-slate-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Export Information */}
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-6">Export Details</h4>
                      <div className="space-y-4">
                        {Object.entries(product.exportInfo).map(([key, value]) => (
                          <div key={key} className="flex justify-between py-3 border-b border-slate-100">
                            <span className="font-medium text-slate-700 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="text-slate-600">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Product Information */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Quality Standards */}
                <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
                  <h4 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Quality Standards
                  </h4>
                  <ul className="space-y-3 text-emerald-800">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      ISO 22000 Certified
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      HACCP Compliant
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      Global GAP Certified
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></div>
                      FDA Approved
                    </li>
                  </ul>
                </div>

                {/* Packaging Information */}
                <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
                  <h4 className="text-xl font-semibold text-blue-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    Packaging Options
                  </h4>
                  <ul className="space-y-3 text-blue-800">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Carton Packaging
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Mesh Bags
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Vacuum Sealed
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Custom Packaging
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar - Professional Quote Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">

                {/* Quote Request Form */}
                <div className="bg-slate-900 rounded-lg p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-center">Request Quote</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Quantity Required</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter quantity"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        placeholder="Enter your email"
                      />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-semibold">
                      Get Quote
                    </Button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-lg p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Phone</p>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">Email</p>
                        <p className="text-slate-600">info@anjotraders.com</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">WhatsApp</p>
                        <p className="text-slate-600">+1 (555) 987-6543</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Benefits */}
                <div className="bg-emerald-50 rounded-lg p-8 border border-emerald-200">
                  <h3 className="text-xl font-semibold text-emerald-900 mb-6 flex items-center">
                    <svg className="w-6 h-6 text-emerald-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Why Choose Us?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-emerald-800 text-sm">Premium Quality Products</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-emerald-800 text-sm">Global Supply Chain</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-emerald-800 text-sm">Fast & Reliable Delivery</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-emerald-800 text-sm">Competitive Pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                      <span className="text-emerald-800 text-sm">24/7 Customer Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Related Products"
            subtitle="Explore our other premium products"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Get 4 random related products */}
            {(() => {
              const allProducts = Object.values(productsData).flat();
              const relatedProducts = allProducts
                .filter(p => p.id !== product.id)
                .sort(() => 0.5 - Math.random())
                .slice(0, 4);

              return relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden group cursor-pointer" hover={true}>
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardBody className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="text-green-600 hover:text-green-700 font-medium text-sm"
                    >
                      View Details →
                    </Link>
                  </CardBody>
                </Card>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your requirements and get a customized quote for {product.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-green-600 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailsPage;
