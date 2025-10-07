"use client";
import React, { useState } from 'react';
import { Globe, Users, FileText, MessageSquare, Clock, Shield, Award, Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle, Zap, Target, Heart, Briefcase, Scale, Smartphone, Newspaper, ArrowRight, Languages } from 'lucide-react';

const ServicesPage = () => {
  const [expandedService, setExpandedService] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('all');

  const coreServices = [
    {
      id: 1,
      icon: <Users className="w-12 h-12" />,
      title: "Human Translation",
      shortDesc: "Professional native translators with industry-specific expertise",
      fullDesc: "Our human translation services connect you with professional native translators who possess deep industry-specific expertise. Every project is handled by linguists who understand not just the language, but the cultural nuances, technical terminology, and contextual requirements of your content. We ensure accuracy, cultural relevance, and maintain the authentic voice of your message across all language pairs.",
      features: [
        "Native-speaking professional translators",
        "Industry-specific subject matter experts",
        "Cultural adaptation and localization",
        "Quality assurance at every step",
        "Terminology consistency management",
        "Confidentiality and NDA protection"
      ]
    },
    {
      id: 2,
      icon: <Zap className="w-12 h-12" />,
      title: "MTPE (Machine Translation Post-Editing)",
      shortDesc: "AI-assisted translation refined by human experts",
      fullDesc: "Machine Translation Post-Editing (MTPE) combines the speed of AI-powered translation with the precision of human expertise. Our skilled linguists review and refine machine-generated translations to ensure they meet the highest quality standards. This approach delivers faster turnaround times and cost-effective solutions without compromising on accuracy or readability.",
      features: [
        "Advanced AI translation engines",
        "Expert human post-editing",
        "Light or full editing options",
        "Faster delivery timelines",
        "Cost-effective pricing",
        "Ideal for high-volume content"
      ]
    },
    {
      id: 3,
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Transcription Services",
      shortDesc: "Convert audio and video content to accurate text",
      fullDesc: "Our transcription services transform your audio and video content into accurate, readable text documents. Whether you need verbatim transcripts, clean read transcripts, or timestamped versions, our experienced transcriptionists deliver precise results across multiple languages. Perfect for interviews, podcasts, webinars, meetings, and multimedia content.",
      features: [
        "Audio and video transcription",
        "Multi-language support",
        "Verbatim or clean read options",
        "Timestamping available",
        "Speaker identification",
        "Fast turnaround times"
      ]
    },
    {
      id: 4,
      icon: <Clock className="w-12 h-12" />,
      title: "Subtitles & Captions",
      shortDesc: "Professional subtitle creation for global audiences",
      fullDesc: "Make your video content accessible to global audiences with our professional subtitle and caption services. We create accurate, synchronized subtitles that capture dialogue, sound effects, and on-screen text. Our services ensure accessibility compliance and enhance viewer engagement across all platforms and devices.",
      features: [
        "Multi-language subtitle creation",
        "SRT, VTT, and other formats",
        "Time-code synchronization",
        "Accessibility compliance (WCAG)",
        "Closed captions for deaf/hard of hearing",
        "Quality control and review"
      ]
    },
    {
      id: 5,
      icon: <Shield className="w-12 h-12" />,
      title: "Localization Testing",
      shortDesc: "Comprehensive testing for localized products",
      fullDesc: "Our localization testing services ensure your software, apps, and digital products function flawlessly in target languages and markets. We verify linguistic accuracy, cultural appropriateness, UI/UX consistency, and functional integrity. Our testers identify and resolve issues before your product reaches end users.",
      features: [
        "Linguistic testing and validation",
        "UI/UX testing in target languages",
        "Cultural appropriateness verification",
        "Functional and compatibility testing",
        "Bug identification and reporting",
        "Device and platform testing"
      ]
    },
    {
      id: 6,
      icon: <Award className="w-12 h-12" />,
      title: "Quality Assurance",
      shortDesc: "Multi-level review ensuring excellence",
      fullDesc: "Quality is at the heart of everything we do. Our comprehensive QA process includes multiple review stages, terminology consistency checks, and rigorous proofreading. Every translation undergoes thorough evaluation by independent reviewers to ensure it meets our stringent quality standards and your specific requirements.",
      features: [
        "Multi-level review process",
        "Independent quality reviewers",
        "Terminology consistency checks",
        "Grammar and style validation",
        "Final proofreading stage",
        "Client feedback integration"
      ]
    }
  ];

  const industries = [
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Medical & Healthcare",
      gradient: "from-red-500 to-pink-600",
      description: "Specialized medical document translation with regulatory compliance and clinical expertise.",
      services: [
        "Medical document translation",
        "ICF (Informed Consent Forms)",
        "Clinical trial documentation",
        "Regulatory compliance materials",
        "Patient engagement materials",
        "Medical device documentation",
        "Pharmaceutical translations",
        "Healthcare website localization"
      ]
    },
    {
      icon: <Scale className="w-16 h-16" />,
      title: "Legal & Government",
      gradient: "from-blue-600 to-indigo-700",
      description: "Accurate legal translations with jurisdiction-specific terminology and complete confidentiality.",
      services: [
        "Contract translation",
        "Legal agreements and documents",
        "Government communications",
        "Jurisdiction-specific terminology",
        "Court document translation",
        "Immigration documents",
        "Corporate legal materials",
        "Policy and compliance documents"
      ]
    },
    {
      icon: <Smartphone className="w-16 h-16" />,
      title: "Apps & Games",
      gradient: "from-purple-600 to-pink-600",
      description: "Mobile app and game localization with cultural adaptation and UI/UX optimization.",
      services: [
        "Mobile app localization",
        "Game translation and adaptation",
        "UI/UX text optimization",
        "Cultural reference modification",
        "In-app content translation",
        "App Store optimization (ASO)",
        "Gaming narrative localization",
        "Character dialogue adaptation"
      ]
    },
    {
      icon: <Newspaper className="w-16 h-16" />,
      title: "Press Releases",
      gradient: "from-orange-500 to-red-600",
      description: "Media-ready translations preserving brand voice and maintaining journalistic impact.",
      services: [
        "Press release translation",
        "Brand voice preservation",
        "Journalistic impact maintenance",
        "Pan-Indian distribution optimization",
        "Cultural relevance adaptation",
        "Media kit localization",
        "Crisis communication materials",
        "Corporate announcement translation"
      ]
    }
  ];

  const languageRegions = [
    {
      region: "Indian Languages",
      languages: ["Hindi", "Bengali", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", "Malayalam", "Punjabi", "Odia", "Assamese", "Urdu"]
    },
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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Translation Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
            Comprehensive language solutions tailored to your business needs across 32+ languages
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-blue-600 font-bold">32+</span> Languages
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-blue-600 font-bold">6</span> Core Services
            </div>
            <div className="bg-white px-6 py-3 rounded-full shadow-lg">
              <span className="text-blue-600 font-bold">4</span> Industries
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional translation solutions designed to meet diverse business requirements
            </p>
          </div>

          <div className="space-y-6">
            {coreServices.map((service) => (
              <div key={service.id} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-blue-100">
                <div 
                  className="p-8 cursor-pointer"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-6 flex-1">
                      <div className="text-blue-600 bg-white p-4 rounded-xl shadow-md">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-gray-700 text-lg">{service.shortDesc}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 transition ml-4">
                      {expandedService === service.id ? (
                        <ChevronUp className="w-8 h-8" />
                      ) : (
                        <ChevronDown className="w-8 h-8" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedService === service.id && (
                  <div className="px-8 pb-8 animate-fade-in">
                    <div className="bg-white rounded-xl p-6 shadow-inner">
                      <p className="text-gray-700 mb-6 leading-relaxed">
                        {service.fullDesc}
                      </p>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Features:</h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 hover:shadow-lg transform hover:scale-105 transition flex items-center gap-2">
                        Get Started <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Solutions */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized translation services tailored to your industry's unique requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                <div className={`bg-gradient-to-r ${industry.gradient} p-8 text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white bg-opacity-20 p-4 rounded-2xl backdrop-blur-sm">
                      {industry.icon}
                    </div>
                    <Target className="w-8 h-8 opacity-50" />
                  </div>
                  <h3 className="text-3xl font-bold mb-3">{industry.title}</h3>
                  <p className="text-lg opacity-90">{industry.description}</p>
                </div>
                
                <div className="p-8">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Our Services Include:</h4>
                  <div className="space-y-3 mb-6">
                    {industry.services.map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full bg-gradient-to-r ${industry.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition flex items-center justify-center gap-2`}>
                    Get Started <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Capabilities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Language Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supporting 32+ languages across Indian, South Asian, South-East Asian, and European regions
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedRegion('all')}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                selectedRegion === 'all'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Languages
            </button>
            {languageRegions.map((region, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRegion(region.region)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  selectedRegion === region.region
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {region.region}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languageRegions
              .filter(region => selectedRegion === 'all' || selectedRegion === region.region)
              .map((region, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100 hover:shadow-xl transition">
                  <div className="flex items-center gap-3 mb-4">
                    <Languages className="w-8 h-8 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">{region.region}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.languages.map((lang, langIdx) => (
                      <span
                        key={langIdx}
                        className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md hover:scale-105 transition"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see your language? We're constantly expanding our capabilities.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition">
              Contact Us for Custom Requirements
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto">
            Let's discuss how our translation services can help you reach global audiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition flex items-center justify-center gap-2">
              Get a Free Quote <ArrowRight className="w-6 h-6" />
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
