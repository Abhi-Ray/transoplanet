"use client";
import React, { useState } from 'react';
import { Users, Zap, MessageSquare, Clock, Shield, Award, CheckCircle, Languages } from 'lucide-react';
import Link from 'next/link';
import Language from './Language';
const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);

  const primaryColor = '#01add5';

  const services = [
    {
      id: 1,
      icon: <Users className="w-12 h-12" />,
      title: "Human Translation",
      shortDesc: "Professional native translators with industry-specific expertise",
      fullDesc: "Our team of native-speaking professional translators brings decades of combined experience across diverse industries. We ensure your content maintains cultural authenticity while conveying your message precisely.",
      
    },
    {
      id: 2,
      icon: <Zap className="w-12 h-12" />,
      title: "Machine Translation Post-Editing (MTPE)",
      shortDesc: "AI-assisted translation refined by human experts",
      fullDesc: "Combine the speed of artificial intelligence with human expertise. Our MTPE service leverages advanced AI translation engines with expert human reviewers to ensure accuracy without compromising delivery timelines.",
     
    },
    {
      id: 3,
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Transcription Services",
      shortDesc: "Convert audio and video content to accurate text",
      fullDesc: "Transform your multimedia content into precise text documents. Whether audio recordings or video files, we deliver accurate transcriptions with speaker identification and formatting options.",
     
    },
    {
      id: 4,
      icon: <Clock className="w-12 h-12" />,
      title: "Subtitles & Captions",
      shortDesc: "Professional subtitle creation for global audiences",
      fullDesc: "Make your video content accessible worldwide. We create professionally synchronized subtitles and captions that enhance viewer engagement while ensuring accessibility compliance.",
     
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12" />,
      title: "Localization Testing",
      shortDesc: "Comprehensive testing for localized products",
      fullDesc: "Ensure your products function flawlessly in every language and culture. Our localization testing validates linguistic accuracy, UI/UX compatibility, and cultural appropriateness.",
      
    },
    {
      id: 6,
      icon: <Award className="w-12 h-12" />,
      title: "Quality Assurance",
      shortDesc: "Multi-level review ensuring excellence",
      fullDesc: "Quality is never compromised. Our multi-level review process includes independent reviewers, terminology consistency checks, and final proofreading to guarantee perfection.",
      
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Comprehensive language solutions tailored to your business needs
          </p>
          <div className="flex justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>6</span> Core Services
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>32+</span> Languages
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {services.map((service) => (
    <div
      key={service.id}
      className={`bg-white rounded-xl border-2 overflow-hidden transition-all duration-300 ease-in-out ${
        expandedService === service.id ? 'shadow-xl scale-[1.02]' : 'shadow-sm'
      }`}
      style={{
        borderColor: expandedService === service.id ? primaryColor : '#e5e7eb',
      }}
    >
      <button
        onClick={() => toggleService(service.id)}
        className="w-full p-6 flex items-start space-x-4 hover:bg-gray-50 transition cursor-pointer text-left"
      >
        <div
          className="p-3 rounded-lg flex-shrink-0"
          style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
        >
          {service.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600">{service.shortDesc}</p>
        </div>
        <div
          className="flex-shrink-0 text-gray-400 text-2xl font-bold leading-none"
          style={{ lineHeight: 1 }}
        >
          {expandedService === service.id ? '−' : '+'}
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          expandedService === service.id
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6 border-t-2" style={{ borderColor: '#e5e7eb' }}>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {service.fullDesc}
          </p>
          <Link
            href="/contact"
            className="inline-block text-white py-3 px-8 rounded-lg hover:opacity-90 transition font-medium"
            style={{ backgroundColor: primaryColor }}
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
      </section>

     <Language/>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: primaryColor }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss which service best fits your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white px-8 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition" style={{ color: primaryColor }}>
              Get a Free Quote
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold transition">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;