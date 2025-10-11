"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-lg py-4'
            : 'bg-white bg-opacity-95 backdrop-blur-sm py-6 shadow-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo.png"
                  alt="Transoplanet Logo"
                  className="object-contain"
                  width={200}
                  height={50}
                  priority
                />
            
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#71d0f2] transition font-medium">
                Home
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#71d0f2] transition font-medium">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#71d0f2] transition font-medium">
                Services
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#71d0f2] transition font-medium">
                Pricing
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#71d0f2] transition font-medium">
                Testimonials
              </Link>
              <Link href="#" className="text-gray-700 hover:text-[#71d0f2] transition font-medium">
                Contact
              </Link>
              <button className="bg-[#71d0f2] text-white px-6 py-2 rounded-full hover:bg-[#5bc9ef] hover:shadow-lg transform hover:scale-105 transition">
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? (
                <X className="text-gray-900 w-7 h-7" />
              ) : (
                <Menu className="text-gray-900 w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="text-gray-700 hover:text-[#71d0f2] py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#71d0f2] py-2" onClick={() => setIsMenuOpen(false)}>
              About Us
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#71d0f2] py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#71d0f2] py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#71d0f2] py-2" onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </Link>
            <Link href="#" className="text-gray-700 hover:text-[#71d0f2] py-2" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <button className="bg-[#71d0f2] text-white px-6 py-3 rounded-full w-full hover:bg-[#5bc9ef] transition">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
