import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';
import logoImage from '../../assets/images/videos/file_00000000845c71fa9a49b9abaaf9349c.png';

const Footer = ({ isCompact = false }) => {
  if (isCompact) {
    return (
      <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white relative overflow-hidden py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-y-4 gap-x-12">
            
            {/* 1. Brand & Tagline + Address */}
            <div className="flex flex-col gap-3 flex-shrink-0 max-w-sm">
              <div className="flex items-center gap-4">
                <img src={logoImage} alt="ANJO Traders" className="h-10 sm:h-14 w-auto object-contain" />
                <div className="h-8 w-px bg-white/20 hidden sm:block" />
                <p className="text-orange-600 bg-white px-3 py-1 rounded text-[11px] font-black tracking-widest uppercase leading-none shadow-sm">
                  Export · Import
                </p>
              </div>
              
              <div className="text-[11px] sm:text-[12px] leading-relaxed text-orange-50 font-medium pl-1">
                <span className="text-white font-bold block mb-0.5 text-[10px] uppercase tracking-wider">Head Office (India)</span>
                11/625, Sahayamatha Pattanam, 5th Street,<br />
                Mariya Mahal Road, Tuticorin – 628002, TN
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-white font-bold border-t border-white/10 pt-2 uppercase text-[10px] tracking-tight">
                  <span className="opacity-80 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-orange-300" />Colombo Branch</span>
                  <span className="opacity-80 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-orange-300" />Thailand Branch</span>
                </div>
              </div>
            </div>
            
            {/* 2. Contact Grid */}
            <div className="flex flex-col gap-2.5 text-[13px] sm:text-[14px] text-white font-semibold">
              <div className="flex items-center gap-3">
                <FaPhone size={14} className="text-orange-200" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919994966061">+91 99949 66061</a>
                  <a href="tel:+919994587749">+91 99945 87749</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <FaEnvelope size={14} className="text-orange-200" />
                  <span className="border-b border-white/20 pb-0.5">info@anjotraders.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGlobe size={14} className="text-orange-200" />
                  <span className="border-b border-white/20 pb-0.5">www.anjotraders.com</span>
                </div>
              </div>
            </div>


          </div>
        </div>
      </footer>
    );
  }

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
                    <span>+91 99949 66061</span>
                    <span>+91 99945 87749</span>
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
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
