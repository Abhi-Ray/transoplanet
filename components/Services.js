
"use client";
import React, { useState } from 'react';
import { Globe, Users, FileText, MessageSquare, Clock, Shield, Award, Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle, Zap, Target, Heart, Briefcase, Scale, Smartphone, Newspaper, ArrowRight, Languages, Wallet, Laptop, Megaphone, BookOpen, Wrench, Landmark, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const primaryColor = '#71d0f2';

  const coreServices = [
    {
      id: 1,
      icon: <Users className="w-10 h-10" />,
      title: "Human Translation",
      shortDesc: "Professional native translators with industry-specific expertise",
      features: [
        "Native-speaking professional translators",
        "Industry-specific subject matter experts",
        "Cultural adaptation and localization",
        "Quality assurance at every step"
      ]
    },
    {
      id: 2,
      icon: <Zap className="w-10 h-10" />,
      title: "MTPE",
      shortDesc: "AI-assisted translation refined by human experts",
      features: [
        "Advanced AI translation engines",
        "Expert human post-editing",
        "Light or full editing options",
        "Faster delivery timelines"
      ]
    },
    {
      id: 3,
      icon: <MessageSquare className="w-10 h-10" />,
      title: "Transcription",
      shortDesc: "Convert audio and video content to accurate text",
      features: [
        "Audio and video transcription",
        "Multi-language support",
        "Verbatim or clean read options",
        "Speaker identification"
      ]
    },
    {
      id: 4,
      icon: <Clock className="w-10 h-10" />,
      title: "Subtitles & Captions",
      shortDesc: "Professional subtitle creation for global audiences",
      features: [
        "Multi-language subtitle creation",
        "SRT, VTT, and other formats",
        "Time-code synchronization",
        "Accessibility compliance"
      ]
    },
    {
      id: 5,
      icon: <Shield className="w-10 h-10" />,
      title: "Localization Testing",
      shortDesc: "Comprehensive testing for localized products",
      features: [
        "Linguistic testing and validation",
        "UI/UX testing in target languages",
        "Cultural appropriateness verification",
        "Bug identification and reporting"
      ]
    },
    {
      id: 6,
      icon: <Award className="w-10 h-10" />,
      title: "Quality Assurance",
      shortDesc: "Multi-level review ensuring excellence",
      features: [
        "Multi-level review process",
        "Independent quality reviewers",
        "Terminology consistency checks",
        "Final proofreading stage"
      ]
    }
  ];

  const industries = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medical & Healthcare Translation",
      description: "Where precision meets compassion.",
      image: "/medical.jpg"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal Translation",
      description: "Every clause counts.",
      image: "/legal.jpg"
    },
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "Financial & Insurance Translation",
      description: "Translating trust and transparency.",
      image: "/finance.jpg"
    },
    {
      icon: <Laptop className="w-8 h-8" />,
      title: "IT & Software Localization",
      description: "Turning apps into global experiences.",
      image: "/it.jpg"
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing & Transcreation",
      description: "Adapting ideas, not just words.",
      image: "/market.jpg"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "E-learning & Educational Content",
      description: "Learning made local.",
      image: "/education.jpg"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Technical Translation",
      description: "Manuals that speak every language.",
      image: "/technical.jpg"
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Government & Public Policy",
      description: "Making governance multilingual.",
      image: "/goverment.jpg"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Game Localization",
      description: "When play meets culture.",
      image: "/game.jpg"
    }
  ];

  const languageRegions = [
    {
      region: "Indian Languages",
      languages: ["Hindi", "Bengali", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", "Malayalam", "Punjabi", "Odia", "Assamese", "Urdu"]
    },
   {
  region: "Indian Rare Languages",
  languages: [
    "Bodo",
    "Bhojpuri",
    "Chhattisgarhi",
    "Dogri",
    "Garo",
    "Khasi",
    "Konkani",
    "Manipuri",
    "Mizo",
    "Maithili",
    "Newari",
    "Rajasthani",
    "Santhali",
    "Sanskrit",
    "Sindhi",
    "Tibbetan"
  ]
}
,
    {
      region: "South Asian",
      languages: ["Nepali", "Sinhala", "Pashto", "Dari", "Dhivehi"]
    },
    {
      region: "South-East Asian",
      languages: ["Thai", "Vietnamese", "Indonesian", "Malay", "Tagalog", "Khmer", "Burmese", "Lao"]
    },
    {
      region: "European",
      languages: ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Russian"]
    }
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Translation Services
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Comprehensive language solutions tailored to your business needs across 32+ languages
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>32+</span> Languages
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>6</span> Core Services
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-md border" style={{ borderColor: primaryColor }}>
              <span className="font-bold" style={{ color: primaryColor }}>9</span> Industries
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section - Compact Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional translation solutions designed to meet diverse business requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreServices.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-xl border-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                style={{ borderColor: expandedService === service.id ? primaryColor : '#e5e7eb' }}
                onClick={() => toggleService(service.id)}
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                    >
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-gray-600 text-sm mb-3">{service.shortDesc}</p>
                    </div>
                  </div>
                  
                 {expandedService === service.id && (
  <div className="mt-4 pt-4 border-t border-gray-100">
    <ul className="space-y-2">
      {service.features.map((feature, idx) => (
        <li key={idx} className="flex items-start space-x-2">
          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: primaryColor }} />
          <span className="text-sm text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
    <Link 
      href="/contact"
      className="mt-4 block w-full text-center text-white py-2 px-4 rounded-lg hover:opacity-90 transition text-sm font-medium"
      style={{ backgroundColor: primaryColor }}
    >
      Get Started
    </Link>
  </div>
)}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions - Compact Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized translation services tailored to your industry's unique requirements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border"
                style={{ borderColor: '#e5e7eb' }}
              >
                <div className="p-6">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                  >
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{industry.description}</p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Capabilities - Compact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Language Capabilities</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Supporting 32+ languages across multiple regions
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedRegion === 'all'
                  ? 'text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              style={selectedRegion === 'all' ? { backgroundColor: primaryColor } : {}}
            >
              All Languages
            </button>
            {languageRegions.map((region, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRegion(region.region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedRegion === region.region
                    ? 'text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={selectedRegion === region.region ? { backgroundColor: primaryColor } : {}}
              >
                {region.region}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {languageRegions
              .filter(region => selectedRegion === 'all' || selectedRegion === region.region)
              .map((region, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Languages className="w-5 h-5" style={{ color: primaryColor }} />
                    <h3 className="text-base font-bold text-gray-900">{region.region}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {region.languages.map((lang, langIdx) => (
                      <span
                        key={langIdx}
                        className="bg-white px-2.5 py-1 rounded-md text-xs font-medium text-gray-700 border border-gray-200"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

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
            Let's discuss how our translation services can help you reach global audiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white px-8 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition" style={{ color: primaryColor }}>
              Get a Free Quote
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold transition" 
            
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
