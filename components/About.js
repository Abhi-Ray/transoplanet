
"use client";
import React, { useState } from 'react';
import { Globe, Users, FileCheck, TrendingUp, Award, Target, Heart, Shield, Zap, CheckCircle, Building2, MapPinned, Clock, Lightbulb, ArrowRight, Briefcase, Handshake } from 'lucide-react';
import Link from 'next/link';
const AboutPage = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const milestones = [
    {
      year: "2010",
      title: "Foundation",
      description: "Transoplanet established in Guwahati, India with a vision to bridge language barriers"
    },
    {
      year: "2013",
      title: "10 Languages",
      description: "Expanded our services to cover 10 Indian and Asian languages"
    },
    {
      year: "2016",
      title: "Bangalore Office",
      description: "Opened our second office in Bangalore to serve South India better"
    },
    {
      year: "2019",
      title: "50M+ Words",
      description: "Achieved milestone of translating 50 million words"
    },
    {
      year: "2022",
      title: "Delhi Expansion",
      description: "Established presence in Delhi, expanding to 32+ languages"
    },
    {
      year: "2025",
      title: "100M+ Words",
      description: "Crossed 100 million words translated with 99% client satisfaction"
    }
  ];

  const approach = [
    {
      step: "01",
      icon: <Lightbulb className="w-12 h-12" />,
      title: "Understanding Client Needs",
      description: "We begin by thoroughly understanding your requirements, industry context, target audience, and specific objectives to ensure perfect alignment."
    },
    {
      step: "02",
      icon: <Users className="w-12 h-12" />,
      title: "Expert Translation & Review",
      description: "Native translators with domain expertise work on your content, followed by thorough peer review to ensure accuracy and naturalness."
    },
    {
      step: "03",
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Assurance",
      description: "Our QA team performs comprehensive checks for terminology consistency, cultural appropriateness, and technical accuracy."
    },
    {
      step: "04",
      icon: <Zap className="w-12 h-12" />,
      title: "Timely Delivery",
      description: "We deliver your translations on time, every time, with post-delivery support to ensure your complete satisfaction."
    }
  ];

  const values = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Accuracy",
      front: "Precision in Every Word",
      back: "We maintain the highest standards of accuracy, ensuring every translation preserves the original meaning and intent while adapting perfectly to the target language."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Confidentiality",
      front: "Your Trust, Our Priority",
      back: "We implement strict confidentiality protocols and NDAs to protect your sensitive information. Your documents are handled with utmost security and privacy."
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Timeliness",
      front: "Deadlines We Honor",
      back: "Time is valuable. We respect your deadlines and deliver quality translations on schedule, helping you stay ahead in your global initiatives."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      title: "Human Touch",
      front: "Beyond Words",
      back: "We understand that translation is more than words—it's about conveying meaning across cultures. Our team ensures cultural appropriateness in every project."
    }
  ];

  const offices = [
    {
      city: "Guwahati",
      state: "Assam, India",
      type: "Headquarters",
      icon: <Building2 className="w-8 h-8" />,
      description: "Our main office and operations center"
    },
    {
      city: "Bangalore",
      state: "Karnataka, India",
      type: "Regional Office",
      icon: <MapPinned className="w-8 h-8" />,
      description: "Serving South India with excellence"
    },
    {
      city: "Delhi",
      state: "India",
      type: "Branch Office",
      icon: <MapPinned className="w-8 h-8" />,
      description: "Supporting North India operations"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     {/* Hero Section */}


      {/* Company Story */}
      <section className="pt-36 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-6xl font-bold text-[#71d0f2] mb-6">About Us</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Founded in 2010, Transoplanet emerged from a simple yet powerful vision: to break down language barriers and enable seamless global communication.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What began as a small translation service in Guwahati has grown into a trusted partner for businesses worldwide, specializing in Indian, South Asian, South-East Asian, and European languages.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Today, with offices across India and a team of expert linguists, we've successfully translated over 100 million words, maintaining an impressive 99% client satisfaction rate.
                </p>
                <div className="flex gap-8">
                  <div>
                    <h3 className="text-3xl font-bold" style={{ color: '#71d0f2' }}>300+</h3>
                    <p className="text-gray-600">Expert Translators</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold" style={{ color: '#71d0f2' }}>500+</h3>
                    <p className="text-gray-600">Happy Clients</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold" style={{ color: '#71d0f2' }}>32+</h3>
                    <p className="text-gray-600">Languages</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                           src="/about2.jpeg"

                  alt="Office environment" 
                  className="rounded-2xl shadow-lg"
                />
              
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gray-50 rounded-2xl p-8 border-2" style={{ borderColor: '#71d0f2' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#71d0f2' }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To provide accurate, culturally sensitive, and timely translation services that empower businesses to communicate effectively across borders and cultures.
                </p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border-2" style={{ borderColor: '#71d0f2' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#71d0f2' }}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700">
                  To be the most trusted translation partner in Asia, known for exceptional quality, innovation, and customer service in language solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Timeline */}
<section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
      <p className="text-xl text-gray-600">15+ Years of Excellence and Growth</p>
    </div>

    <div className="max-w-5xl mx-auto relative">
      {/* Timeline Line (hidden on mobile) */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#71d0f2]"></div>

      {milestones.map((milestone, index) => (
        <div key={index} className="mb-12 flex flex-col md:flex-row items-center">
          {/* Left Column */}
          <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            {index % 2 === 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100 w-full md:w-auto">
                <div className="text-3xl font-bold mb-2" style={{ color: '#71d0f2' }}>
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            )}
          </div>

          {/* Center Dot */}
          <div className="hidden md:flex w-6 h-6 rounded-full border-4 border-white shadow-lg z-10 bg-[#71d0f2]"></div>

          {/* Right Column */}
          <div className={`w-full md:w-1/2 flex ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
            {index % 2 !== 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition border border-gray-100 w-full md:w-auto">
                <div className="text-3xl font-bold mb-2" style={{ color: '#71d0f2' }}>
                  {milestone.year}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The Principles That Guide Us</p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="relative h-80 cursor-pointer"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`absolute inset-0 transition-all duration-500 transform ${flippedCard === index ? 'rotate-y-180 opacity-0' : 'rotate-y-0 opacity-100'}`}>
                  <div className="rounded-2xl p-8 h-full flex flex-col items-center justify-center text-white shadow-xl" style={{ backgroundColor: '#71d0f2' }}>
                    <div className="mb-6">{value.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                    <p className="text-white opacity-90 text-center">{value.front}</p>
                  </div>
                </div>
                <div className={`absolute inset-0 transition-all duration-500 transform ${flippedCard === index ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0'}`}>
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center shadow-xl border-2" style={{ borderColor: '#71d0f2' }}>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-700">{value.back}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Offices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Serving You From Across India</p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
                <div className="mb-4" style={{ color: '#71d0f2' }}>{office.icon}</div>
                <div className="inline-block text-white px-3 py-1 rounded-full text-sm font-semibold mb-3" style={{ backgroundColor: '#71d0f2' }}>
                  {office.type}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{office.city}</h3>
                <p className="text-gray-600 mb-4">{office.state}</p>
                <p className="text-gray-700">{office.description}</p>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#71d0f2' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white opacity-95 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your global communication goals
          </p>
          <Link  href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold  transition"
              >
            Get Started Today
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
