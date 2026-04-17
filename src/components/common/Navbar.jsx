import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import logoImage from '../../assets/images/videos/file_00000000845c71fa9a49b9abaaf9349c.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isPrimePage = location.pathname === '/prime-products';
  const isAboutPage = location.pathname === '/about';
  const isServicesPage = location.pathname === '/services';
  const isResearchPage = location.pathname === '/global-research';
  const isGreenLinkPage = location.pathname === '/green-link';
  const isContainerPage = location.pathname === '/container-commercialization';
  const isSaltPage = location.pathname === '/anjo-salt';
  const isAutomobilesPage = location.pathname === '/automobiles';
  const isContactPage = location.pathname === '/contact';
  const isAnimatedGalleryPage = location.pathname === '/animated-gallery';
  const isTransparentPage = isHomePage || isPrimePage || isAboutPage || isServicesPage || isResearchPage || isGreenLinkPage || isContainerPage || isSaltPage || isAutomobilesPage || isContactPage || isAnimatedGalleryPage;

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.pageYOffset > 60);
    if (isTransparentPage) {
      window.addEventListener('scroll', handleScroll);
      setIsScrolled(false);
    } else {
      setIsScrolled(true);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isTransparentPage]);

  useEffect(() => { setIsMenuOpen(false); }, [location]);

  const navLinks = [
    { name: 'Home',           path: '/' },
    { name: 'Prime Products', path: '/prime-products' },
    { name: 'Solutions',      path: '/business-solution' },
    { 
      name: 'Our Divisions', 
      dropdown: [
        { name: 'Green Link',     path: '/green-link' },
        { name: 'Containers',     path: '/container-commercialization' },
        { name: 'Anjo Salt',      path: '/anjo-salt' },
      ]
    },
    { name: 'Automobiles',    path: '/animated-gallery' },
    { name: 'Contact Us',     path: '/contact' },
  ];

  const scrolled = isScrolled || !isTransparentPage || isMenuOpen;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled ? 'glass-navbar shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-2 relative">
          
          {/* 1. Logo Container (Left) */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logoImage}
                alt="ANJO Traders Logo"
                className="h-12 sm:h-14 md:h-16 w-auto transition-all duration-300"
              />
            </Link>
          </div>

          {/* 2. Desktop Nav (Absolute Center) */}
          <div className="hidden lg:flex items-center justify-center space-x-12">
            {navLinks.map((link) => {
              if (link.dropdown) {
                const isAnyChildActive = link.dropdown.some(child => location.pathname === child.path);
                return (
                  <div key={link.name} className="relative group py-4">
                    <button className={`flex items-center gap-1 text-sm font-semibold transition-all duration-200 ${
                      isAnyChildActive ? 'nav-active' : scrolled ? 'text-gray-700 hover:text-red-600' : 'text-white hover:text-red-200'
                    }`}>
                      {link.name} <FaChevronDown size={10} className="group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-[60]">
                      <div className="bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden py-1">
                        {link.dropdown.map(sub => (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className={`block px-5 py-3 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-red-600 ${
                              location.pathname === sub.path ? 'text-red-600 bg-red-50' : 'text-gray-700'
                            }`}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`link-underline text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'nav-active'
                      : scrolled
                        ? 'text-gray-700 hover:text-red-600'
                        : 'text-white hover:text-red-200'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* 3. Right Section / Mobile Toggle (Balance) */}
          <div className="flex-1 flex justify-end items-center">
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-white border-t border-gray-100 py-4 px-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            if (link.dropdown) {
              const isOpen = openDropdown === link.name;
              const isAnyChildActive = link.dropdown.some(child => location.pathname === child.path);
              return (
                <div key={link.name} className="space-y-1">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                      isAnyChildActive ? 'bg-red-50 text-red-600' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name} <FaChevronDown size={12} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-60 opacity-100 mb-2' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 space-y-1 mt-1 border-l-2 border-gray-100 ml-4">
                      {link.dropdown.map(sub => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                            location.pathname === sub.path ? 'text-red-600 bg-red-50' : 'text-gray-600 hover:text-red-600'
                          }`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                  isActive ? 'bg-red-50 text-red-600 border-l-4 border-red-600 pl-3' : 'text-gray-700 hover:bg-gray-50 hover:text-red-600'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
