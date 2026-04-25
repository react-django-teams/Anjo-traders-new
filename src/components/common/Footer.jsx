import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import logoImage from '../../assets/images/videos/file_00000000845c71fa9a49b9abaaf9349c.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden">
      {/* Rainbow accent line matching brochure */}
      <div className="h-1 w-full rainbow-strip" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="max-w-md flex flex-col justify-center">
            <img src={logoImage} alt="ANJO Traders" className="h-10 w-auto mb-4 object-contain self-start" />
            <p className="text-orange-100 text-sm font-semibold tracking-widest uppercase leading-relaxed">
              Export · Import <br /> Traders of All Goods
            </p>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-bold opacity-90 text-lg mb-4">Contact & Locations</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white/80 mt-1 flex-shrink-0" size={16} />
                <div className="text-orange-100 text-sm leading-relaxed">
                  <span className="text-white font-semibold block mb-1">Head Office (India)</span>
                  11/625, Sahayamatha Pattanam, 5th Street,<br />
                  Mariya Mahal Road, Tuticorin – 628002, Tamilnadu
                  <div className="mt-3 space-y-1 text-orange-100/90">
                    <span className="block"><span className="text-white/60 mr-2">•</span>Colombo, Sri Lanka Branch</span>
                    <span className="block"><span className="text-white/60 mr-2">•</span>Laem Chabang, Thailand Branch</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3">
                  <FaPhone className="text-white/80 flex-shrink-0" size={14} />
                  <div className="text-orange-100 text-sm flex flex-wrap gap-x-4 gap-y-1">
                    <span>+91 98943 22104</span>
                    <span>+91 88704 00456</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="text-white/80 flex-shrink-0" size={14} />
                  <a href="mailto:info@anjotraders.com" className="text-orange-100 hover:text-white text-sm transition-colors break-all">info@anjotraders.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe className="text-white/80 flex-shrink-0" size={14} />
                  <a href="http://anjotraders.com" className="text-orange-100 hover:text-white text-sm transition-colors">www.anjotraders.com</a>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              {[FaFacebook, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
                <a key={i} href="/#" className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-orange-100 hover:text-white hover:border-white transition-all hover:bg-white/20">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-orange-100/80 text-xs">© {new Date().getFullYear()} ANJO Traders. All rights reserved.</p>
          <div className="flex gap-5">
            {[['Privacy Policy', '/privacy-policy'], ['Terms & Conditions', '/terms-and-conditions']].map(([name, path]) => (
              <Link key={name} to={path} className="text-orange-100/80 hover:text-white text-xs transition-colors">{name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
