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
          <div className="max-w-md">
            <img src={logoImage} alt="ANJO Traders" className="h-10 w-auto mb-3" />
            <p className="text-orange-100 text-xs font-semibold tracking-widest uppercase mb-2">Export · Import: Traders of All Goods</p>
            <p className="text-white text-base leading-relaxed mb-4 font-medium">
              Right People · Right Skill · Right Environment.<br />
              <span className="text-white font-extrabold tracking-wide drop-shadow-sm">Connected By Ethics.</span>
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse"></span>
                <span className="text-orange-100 text-sm">Colombo, Sri Lanka Branch</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_white] animate-pulse"></span>
                <span className="text-orange-100 text-sm">Laem Chabang, Thailand Branch</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="section-eyebrow mb-2 text-white font-bold opacity-90">Get in Touch</p>
            <ul className="space-y-1">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-white/80 mt-1 flex-shrink-0" size={13} />
                <span className="text-orange-100 text-xs leading-relaxed">
                  11/625, Sahayamatha Pattanam, 5th Street,<br />
                  Mariya Mahal Road, Tuticorin – 628002,<br />
                  Tamilnadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-white/80 flex-shrink-0" size={13} />
                <div className="text-orange-100 text-xs">
                  <div>98943 22104</div>
                  <div>88704 00456</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-white/80 flex-shrink-0" size={13} />
                <a href="mailto:info@anjotraders.com" className="text-orange-100 hover:text-white text-xs transition-colors">info@anjotraders.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-white/80 flex-shrink-0" size={13} />
                <a href="http://anjotraders.com" className="text-orange-100 hover:text-white text-xs transition-colors">anjotraders.com</a>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              {[FaFacebook, FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
                <a key={i} href="/#" className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-orange-100 hover:text-white hover:border-white transition-all hover:bg-white/20">
                  <Icon size={13} />
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
