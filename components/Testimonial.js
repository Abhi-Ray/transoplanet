
"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Phone, Mail, MapPin, Star, Quote, Building2, MapPinned, TrendingUp, Users, Award, CheckCircle, MessageSquare, Calendar } from 'lucide-react';
import Link from 'next/link';
const TestimonialsPage = () => {
  const [filter, setFilter] = useState('all');
  const primaryColor = '#71d0f2';

  const testimonials = [
    {
      id: 1,
      author: "PAB Translation Centre",
      role: "Project Manager",
      company: "PAB Translation Centre",
      hasLogo: true,
      logoUrl: "/pab.png",
      text: "We are truly grateful for Binod's exceptional work as our language supplier. His expertise in managing multilingual translation projects with precision, cultural awareness, and accuracy has been invaluable. Binod’s professionalism, reliability, and timely delivery under tight deadlines make him a trusted partner. His dedication to high-quality work and seamless communication have greatly contributed to our success. We look forward to continuing our collaboration and appreciate his outstanding service.",
      rating: 5,
      date: "Feb 2025"
    },
    {
      id: 2,
      author: "Sonja Babic",
      role: "Project Director",
      company: "Halifax Consulting",
      hasLogo: true,
      logoUrl: "/hail.png",
      text: "Great cooperation always, very reliable partner.",
      rating: 5,
      date: "Jan 2025"
    },
    {
      id: 14,
      author: "Victoria Pierce",
      role: "Project Manager",
      company: "Language Connect",
      hasLogo: false,
      text: "Binod is a skilled linguist and has a professional approach to work. He always adheres to deadlines, and is flexible, accurate and responsive. I am confident that he would be an asset to any organisation.",
      rating: 5,
      date: "Oct 2024"
    },
    {
      id: 15,
      author: "Al HADEED TRANSLATION / AHTS",
      role: "Project Coordinator",
      company: "Al Hadeed Translation Services",
      hasLogo: true,
      text: "Punctual and experienced translator..",
      rating: 5,
      logoUrl: "/ahts.png",
      date: "Aug 2024"
    },
    {
      id: 3,
      author: "Lingvopedia",
      role: "Language Solutions Partner",
      company: "Lingvopedia Language Solutions",
      hasLogo: true,
      logoUrl: "/lingo.png",
      text: "Everything is working out really well with our association. Thank you.",
      rating: 5,
      date: "Apr 2023"
    },
    {
      id: 4,
      author: "Jonah Ondieki",
      role: "Language Services Manager",
      company: "OJ-LanguageHub LLC",
      hasLogo: true,
      logoUrl: "/oj.png",
      text: "Binod is the professional you would be looking for. Punctual deliveries and no complaints from clients. I firmly recommend him.",
      rating: 5,
      date: "May 2020"
    },
    {
      id: 5,
      author: "Kickwords Limited",
      role: "Operations Manager",
      company: "Kickwords Limited",
      hasLogo: true,
      logoUrl: "/kick.png",
      text: "Excellent! Binod is the linguist every translation agency wants to have and work with. His dedication and accuracy is top notch. Recommended.",
      rating: 5,
      date: "Jun 2018"
    },
    {
      id: 6,
      author: "IlaC",
      role: "Translation Coordinator",
      company: "ONCALL Language Services",
      hasLogo: true,
      logoUrl: "/oncall.png",
      text: "Binod is a kind and reliable translator, who delivers jobs in time and always faithful to the original. I have worked with him in 4/5 occasions and so far I can just say that I am willing to collaborate with him again in the future.",
      rating: 5,
      date: "Apr 2018"
    },
    {
      id: 7,
      author: "Marti Adler",
      role: "Project Coordinator",
      company: "Local-M",
      hasLogo: false,
      text: "Good translations and communication. Always on time.",
      rating: 5,
      date: "Feb 2016"
    },
    {
      id: 8,
      author: "The Translation Gate",
      role: "Quality Team",
      company: "The Translation Gate, LLC",
      hasLogo: true,
      logoUrl: "/gate.png",
      text: "Real professional, excellent quality, strictly follows instructions and always on time. Our team enjoys working with him.",
      rating: 5,
      date: "May 2016"
    },
    {
      id: 9,
      author: "Ale.V.",
      role: "Project Manager",
      company: "Lingua Pros, LLC",
      hasLogo: true,
      logoUrl: "/pro.png",
      text: "Excellent work and timely delivery.",
      rating: 5,
      date: "Apr 2015"
    },
    {
      id: 10,
      author: "TheLocMasters",
      role: "Localization Manager",
      company: "TheLocMasters",
      hasLogo: true,
      logoUrl: "/loc.png",
      text: "Great job, delivery always before deadline, high quality. Love to work with him again.",
      rating: 5,
      date: "Jul 2015"
    },
    {
      id: 11,
      author: "LingoTrust Team",
      role: "Quality Assurance",
      company: "LingoTrust Inc",
      hasLogo: false,
      text: "Excellent translator. On time and accurate.",
      rating: 5,
      date: "Jan 2014"
    },
    {
      id: 12,
      author: "Leah Mundy",
      role: "Localization Lead",
      company: "Eurotalk",
      hasLogo: true,
      logoUrl: "/euro.png",
      text: "Very happy with the quality of the work.",
      rating: 5,
      date: "Dec 2013"
    },
    {
      id: 13,
      author: "Miguel Sacrulli",
      role: "Events Coordinator",
      company: "Eventos Rosario",
      hasLogo: false,
      text: "Great work. Clients were very happy with the job done.",
      rating: 5,
      date: "Aug 2009"
    },
    
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="w-6 h-6" />, number: "99%", label: "Satisfaction Rate" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "95%", label: "Repeat Clients" },
    { icon: <CheckCircle className="w-6 h-6" />, number: "15+", label: "Years Experience" }
  ];

  const clientLogos = [
    { name: "PAB Translation Centre", logo: "/pab.png" },
    { name: "Halifax Consulting", logo: "/hail.png" },
    { name: "Lingvopedia", logo: "/lingo.png" },
    { name: "OJ-LanguageHub", logo: "/oj.png" },
    { name: "Kickwords Limited", logo: "/kick.png" },
    { name: "ONCALL Language", logo: "/oncall.png" }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-10" style={{ backgroundColor: primaryColor }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div 
            className="inline-block text-white px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: primaryColor }}
          >
            Client Success Stories
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12">
            Trusted by translation companies and businesses worldwide for quality, reliability, and excellence
          </p>

          {/* Stats Grid - Compact */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-4 md:p-6 text-center shadow-md border hover:shadow-lg transition"
                style={{ borderColor: `${primaryColor}40` }}
              >
                <div 
                  className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid - Compact */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real feedback from our valued clients across the globe
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-gray-200"
              >
                {/* Header with Logo/Initial and Company */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {testimonial.hasLogo ? (
                      <div className="w-12 h-12 rounded-lg border border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden">
                        <img 
                          src={testimonial.logoUrl} 
                          alt={testimonial.company}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = `<span class="text-lg font-bold" style="color: ${primaryColor}">${testimonial.company.charAt(0)}</span>`;
                          }}
                        />
                      </div>
                    ) : (
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                        style={{ backgroundColor: primaryColor }}
                      >
                        {testimonial.company.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 opacity-10" style={{ color: primaryColor }} />
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Footer with Company and Date */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Building2 className="w-3 h-3" />
                      <span>{testimonial.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        
        </div>
      </section>

      {/* Client Logos Section - Compact */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join hundreds of companies worldwide who trust us for their translation needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transform hover:scale-105 transition border border-gray-200"
              >
                {client.logo ? (
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="h-12 w-auto object-contain mb-2 opacity-70 hover:opacity-100 transition"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-center">
                          <div class="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center" style="background-color: ${primaryColor}20; color: ${primaryColor}">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                            </svg>
                          </div>
                          <p class="text-xs font-medium text-gray-700">${client.name}</p>
                        </div>
                      `;
                    }}
                  />
                ) : (
                  <>
                    <div 
                      className="w-10 h-10 rounded-lg mb-2 flex items-center justify-center"
                      style={{ backgroundColor: `${primaryColor}20`, color: primaryColor }}
                    >
                      <Building2 className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-medium text-gray-700">{client.name}</p>
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Additional Client Names */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-4">Also trusted by:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["The Translation Gate", "Lingua Pros", "TheLocMasters", "LingoTrust", "Eurotalk", "Local-M"].map((name, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 border border-gray-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden" style={{ backgroundColor: primaryColor }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-white rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have You Worked With Us?
            </h2>
            <p className="text-lg text-white opacity-90 mb-8">
              We'd love to hear about your experience! Share your feedback and help others discover our services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-white px-8 py-3 rounded-full text-base font-semibold hover:shadow-lg transform hover:scale-105 transition inline-flex items-center justify-center gap-2"
                style={{ color: primaryColor }}
              >
                Leave a Review
                <Star className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-base font-semibold  transition"
              
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TestimonialsPage;
