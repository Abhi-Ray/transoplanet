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
                <Link href="/about" className="block text-gray-600 hover:text-[#71d0f2] transition">About Us</Link>
                <Link href="/services" className="block text-gray-600 hover:text-[#71d0f2] transition">Services</Link>
                <Link href="/contact" className="block text-gray-600 hover:text-[#71d0f2] transition">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <div className="space-y-2">
                <Link href="/services" className="block text-gray-600 hover:text-[#71d0f2] transition">Human Translation</Link>
                <Link href="/services" className="block text-gray-600 hover:text-[#71d0f2] transition">MTPE</Link>
                <Link href="/services" className="block text-gray-600 hover:text-[#71d0f2] transition">Transcription</Link>
                <Link href="/services" className="block text-gray-600 hover:text-[#71d0f2] transition">Localization</Link>
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
      </a>
    </>
  );
};

export default Footer;
