"use client";
import React, { useState, useEffect } from 'react';
import { Globe, Languages, FileCheck, MessageSquare, Subtitles, Shield, Heart, Scale, Gamepad2, Newspaper, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Zap, Clock, Award, ChevronDown, Menu, X, Star, Quote, TrendingUp, Users } from 'lucide-react';

import { motion } from 'framer-motion';
const TransoplanetHome = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Languages className="w-7 h-7" />,
      title: "Human Translation",
      description: "Native translators with deep industry expertise deliver culturally accurate translations",
      color: "bg-gradient-to-br from-blue-50 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "MTPE",
      description: "AI-powered machine translation refined by expert linguists for speed and precision",
      color: "bg-gradient-to-br from-purple-50 to-pink-100",
      iconColor: "text-purple-600"
    },
    {
      icon: <MessageSquare className="w-7 h-7" />,
      title: "Transcription",
      description: "Audio-to-text conversion with accurate timestamping and speaker identification",
      color: "bg-gradient-to-br from-amber-50 to-orange-100",
      iconColor: "text-amber-600"
    },
    {
      icon: <Subtitles className="w-7 h-7" />,
      title: "Subtitles",
      description: "Professional subtitle creation and synchronization for video content",
      color: "bg-gradient-to-br from-emerald-50 to-teal-100",
      iconColor: "text-emerald-600"
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Localization Testing",
      description: "Comprehensive UI/UX testing ensuring flawless experience in target languages",
      color: "bg-gradient-to-br from-rose-50 to-red-100",
      iconColor: "text-rose-600"
    },
    {
      icon: <FileCheck className="w-7 h-7" />,
      title: "Quality Assurance",
      description: "Multi-level review process guaranteeing accuracy and consistency",
      color: "bg-gradient-to-br from-cyan-50 to-blue-100",
      iconColor: "text-cyan-600"
    }
  ];

  const industries = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Medical & Healthcare",
      description: "Clinical translations preserving accuracy and regulatory compliance",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Legal & Government",
      description: "Precise legal document translations with jurisdiction-specific expertise",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
      gradient: "from-blue-600 to-indigo-600"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Apps & Games",
      description: "Full localization for mobile apps and gaming experiences",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&q=80",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Press & Media",
      description: "Media-ready translations maintaining brand voice and impact",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechVentures",
      location: "San Francisco, CA",
      text: "The results exceeded our expectations. ROI increased by 340% in just 6 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      metric: "340% ROI",
      icon: TrendingUp,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Marcus Johnson",
      role: "Founder, InnovateLabs",
      location: "Austin, TX",
      text: "Game-changing partnership. Their expertise transformed our entire digital strategy.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      metric: "10x Growth",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      location: "Miami, FL",
      text: "Outstanding service and support. They truly understand what businesses need to succeed.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      metric: "5-Star Team",
      icon: Award,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "David Park",
      role: "CTO, CloudScale",
      location: "Seattle, WA",
      text: "Incredibly professional team. Delivered on time and beyond scope expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      metric: "200+ Projects",
      icon: Users,
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };




  const stats = [
    { number: "32+", label: "Languages Supported", icon: <Languages className="w-6 h-6" /> },
    { number: "100M+", label: "Words Translated", icon: <FileCheck className="w-6 h-6" /> },
    { number: "15+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <CheckCircle2 className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
     

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Trusted by 500+ companies worldwide</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                One-Stop Solution in
                <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Translation
                </span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Expert translation services for Indian, South Asia, South-East Asia and European Languages
              </p>
              
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-xl shadow-blue-200 hover:shadow-2xl hover:shadow-blue-300 transition-all flex items-center gap-2">
                  Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 rounded-xl bg-white text-slate-700 font-medium shadow-lg hover:shadow-xl transition-all">
                  View Pricing
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-3xl blur-3xl opacity-20" />
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80" 
                  alt="Translation team"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-blue-600">{stat.icon}</div>
                        <span className="text-2xl font-bold text-slate-900">{stat.number}</span>
                      </div>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-100 text-blue-600 mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Services</h2>
            <p className="text-xl text-slate-600">Comprehensive solutions tailored to your translation needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group relative">
                <div className={`h-full ${service.color} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-md mb-5 ${service.iconColor}`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{service.description}</p>
                  <div className="mt-5 flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600">Specialized expertise across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} opacity-80 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <div className="mb-4">{industry.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{industry.title}</h3>
                  <p className="text-white/90">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">How It Works</h2>
            <p className="text-xl text-slate-600">Simple, efficient, and reliable process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Upload Documents", desc: "Share your content securely through our platform", icon: <FileCheck className="w-8 h-8" /> },
              { num: "02", title: "Expert Translation", desc: "Our team of native translators works on your project", icon: <Languages className="w-8 h-8" /> },
              { num: "03", title: "Quality Delivery", desc: "Receive polished, accurate translations and services on time", icon: <CheckCircle2 className="w-8 h-8" /> }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-6xl font-bold text-blue-100">{step.num}</div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-blue-300">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
     <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4"
          >
            <Star className="w-4 h-4 fill-blue-700" />
            <span className="text-sm font-semibold">Trusted by 500+ Companies</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">Real stories from real businesses</p>
        </motion.div>

        {/* Testimonials Grid - Equal Card Layout */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group"
            >
              {/* Gradient Background Effect */}
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative z-10">
                {/* Icon Badge */}
                <div className={`bg-gradient-to-br ${testimonial.gradient} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(testimonial.icon, { className: "w-6 h-6 text-white" })}
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <Quote className="w-8 h-8 text-slate-200 mb-3" />
                <p className="text-slate-700 mb-6 leading-relaxed text-base">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100"
                    />
                    <div>
                      <p className="font-bold text-slate-900">{testimonial.name}</p>
                      <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Metric Badge */}
                  <div className={`bg-gradient-to-br ${testimonial.gradient} text-white px-4 py-2 rounded-lg`}>
                    <span className="font-bold text-sm whitespace-nowrap">{testimonial.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

       
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Global?</h2>
              <p className="text-xl mb-8 text-blue-100">Join hundreds of companies who trust Transoplanet</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-xl hover:shadow-2xl transition-all">
                  Get Free Quote
                </button>
                <button className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default TransoplanetHome;