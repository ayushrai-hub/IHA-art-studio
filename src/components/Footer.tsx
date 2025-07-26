import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, Palette } from 'lucide-react';
import Logo from '../assets/images/Logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="IHA Logo" className="h-10 w-10 rounded-lg shadow" />
              <span className="text-xl font-serif font-bold">IHA</span>
            </div>
            <p className="text-sage-200 text-sm leading-relaxed">
              Creating beautiful art experiences and building a community of creative souls through DIY workshops and artistic expression.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sage-200 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-sage-200 hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/workshops" className="text-sage-200 hover:text-white transition-colors duration-200">Workshops</Link></li>
              <li><Link to="/blog" className="text-sage-200 hover:text-white transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-terracotta-400" />
                <span className="text-sage-200 text-sm">Ihabyhimani@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-terracotta-400" />
                <span className="text-sage-200 text-sm">+91 8360967932</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-3">
              <a 
                href="https://www.instagram.com/ihabyhimani/" 
                className="p-2 bg-sage-700 rounded-lg hover:bg-terracotta-600 transition-colors duration-200"
                aria-label="Follow us on Instagram"
                target="_blank" rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/ihaartstudio/?ref=_xav_ig_profile_page_web#" 
                className="p-2 bg-sage-700 rounded-lg hover:bg-terracotta-600 transition-colors duration-200"
                aria-label="Follow us on Facebook"
                target="_blank" rel="noopener noreferrer"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.583.39-.719.664-.719h2.32V3.998h-3.18c-2.25 0-2.77 1.667-2.77 2.73v2.27H8.475v3.5h3.064V20h3.466v-7.502h2.32l.2-3.5z"></path></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-sage-700 mt-8 pt-8 text-center">
          <p className="text-sage-200 text-sm">
            © 2025 IHABYHIMANI. All rights reserved. Made with ❤️ for art lovers by Ayush Rai.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;