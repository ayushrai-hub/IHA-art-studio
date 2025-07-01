import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../assets/images/Logo.jpg';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Workshops', href: '/workshops' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img src={Logo} alt="IHA Logo" className="h-10 w-10 rounded-lg shadow" />
            <span className="text-xl font-serif font-bold text-sage-800">IHA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1 items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-terracotta-100 text-terracotta-700'
                    : 'text-sage-600 hover:bg-sage-50 hover:text-sage-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Social Media Links */}
            <a href="https://www.instagram.com/ihabyhimani/" target="_blank" rel="noopener noreferrer" className="ml-4 text-sage-600 hover:text-terracotta-600">
              <span className="sr-only">Instagram</span>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"></path></svg>
            </a>
            <a href="https://www.facebook.com/ihaartstudio/?ref=_xav_ig_profile_page_web#" target="_blank" rel="noopener noreferrer" className="ml-2 text-sage-600 hover:text-terracotta-600">
              <span className="sr-only">Facebook</span>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M17.525 8.998h-3.02V7.498c0-.583.39-.719.664-.719h2.32V3.998h-3.18c-2.25 0-2.77 1.667-2.77 2.73v2.27H8.475v3.5h3.064V20h3.466v-7.502h2.32l.2-3.5z"></path></svg>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-sage-600 hover:bg-sage-50 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-terracotta-100 text-terracotta-700'
                      : 'text-sage-600 hover:bg-sage-50 hover:text-sage-800'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;