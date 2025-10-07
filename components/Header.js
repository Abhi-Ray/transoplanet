"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-4' : 'bg-white bg-opacity-95 backdrop-blur-sm py-6 shadow-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-blue-600" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TRANSOPLANET</h1>
                <p className="text-xs text-gray-600">One-stop Translation Solution</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition font-medium">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">About Us</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Services</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Pricing</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Testimonials</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition font-medium">Contact</Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition">
                Get a Quote
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="text-gray-900" /> : <Menu className="text-gray-900" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Testimonials</Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full w-full">Get a Quote</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
