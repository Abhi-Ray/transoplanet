"use client";
import React from 'react';
import { Globe, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-gray-50 text-gray-900 py-16 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div>
                  <Image
                    src="/logo.png"
                    alt="Transoplanet Logo"
                    className="object-contain"
                    width={200}
                    height={50}
                  />
                </div>
              </div>
              <p className="text-gray-600">Professional translation services for global communication</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-600 hover:text-[#71d0f2] transition">Home</Link>
                <Link href="#" className="block text-gray-600 hover:text-[#71d0f2] transition">About Us</Link>
                <Link href="#" className="block text-gray-600 hover:text-[#71d0f2] transition">Services</Link>
                <Link href="#" className="block text-gray-600 hover:text-[#71d0f2] transition">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-gray-600 hover:text-[#71d0f2] transition">Human Translation</Link>
                <Link href="#" className="block text-gray-600 hover:text-[#71d0f2] transition">MTPE</Link>
                <Link href="#" className="block text-gray-600 hover:text-[#71d0f2] transition">Transcription</Link>
                <Link href="#" className="block text-gray-600 hover:text-[#71d0f2] transition">Localization</Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-[#71d0f2] mt-1" />
                  <a href="tel:+919864072186" className="text-gray-600 hover:text-[#71d0f2] transition">+91-9864072186</a>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-[#71d0f2] mt-1" />
                  <a href="mailto:info@transoplanet.com" className="text-gray-600 hover:text-[#71d0f2] transition">info@transoplanet.com</a>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#71d0f2] mt-1" />
                  <span className="text-gray-600">Guwahati, Bangalore, Delhi</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>© 2025 TRANSOPLANET INDIA. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919864072186?text=Hi,%20I'm%20interested%20in%20your%20translation%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transform hover:scale-110 transition z-50 animate-pulse"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </>
  );
};

export default Footer;
