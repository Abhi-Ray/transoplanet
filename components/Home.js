
"use client";
import React, { useState, useEffect,useRef } from 'react';
import { Globe, Languages, FileCheck, MessageSquare, Subtitles, Shield, Heart, Scale, Gamepad2, Newspaper, Phone, Mail, MapPin, ArrowRight, CheckCircle2, Zap, Clock, Award, ChevronDown, Menu, X, Star, Quote, TrendingUp, Users, Wallet, Laptop, Megaphone, BookOpen, Wrench, Landmark ,ChevronLeft, ChevronRight,} from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Link from 'next/link';
import { motion } from 'framer-motion';
const TransoplanetHome = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

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
    title: "Medical & Healthcare Translation",
    description: "Where precision meets compassion.",
          image: "/medical.jpg",

    gradient: "from-red-500 to-pink-500"
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Legal Translation",
    description: "Every clause counts.",
    image: "/legal.jpg",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    icon: <Wallet className="w-8 h-8" />,
    title: "Financial & Insurance Translation",
    description: "Translating trust and transparency.",
           image: "/finance.jpg",

    gradient: "from-green-500 to-emerald-600"
  },
  {
    icon: <Laptop className="w-8 h-8" />,
    title: "IT & Software Localization",
    description: "Turning apps into global experiences.",
       image: "/it.jpg",

    gradient: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: "Marketing & Transcreation",
    description: "Adapting ideas, not just words.",
       image: "/market.jpg",

    gradient: "from-orange-500 to-amber-500"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "E-learning & Educational Content",
    description: "Learning made local.",
           image: "/education.jpg",

    gradient: "from-teal-500 to-cyan-500"
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Technical Translation",
    description: "Manuals that speak every language.",
          image: "/technical.jpg",

    gradient: "from-gray-600 to-slate-700"
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Government & Public Policy",
    description: "Making governance multilingual.",
          image: "/goverment.jpg",

    gradient: "from-blue-700 to-sky-500"
  },
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: "Game Localization",
    description: "When play meets culture.",
          image: "/game.jpg",

    gradient: "from-pink-500 to-violet-600"
  }
];


  const testimonials = [
    {
      author: "PAB Translation Centre",
      role: "Project Manager",
      company: "PAB Translation Centre",
      hasLogo: true,
           logoUrl: "/pab.png",

      text: "Binod's expertise in managing multilingual translation projects with precision, cultural awareness, and accuracy has been invaluable. His professionalism, reliability, and timely delivery under tight deadlines make him a trusted partner.",
      rating: 5,
      date: "Feb 2025",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      author: "Sonja Babic",
      role: "Project Director",
      company: "Halifax Consulting",
      hasLogo: true,
           logoUrl: "/hail.png",

      text: "Great cooperation always, very reliable partner.",
      rating: 5,
      date: "Jan 2025",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      author: "Lingvopedia",
      role: "Language Solutions Partner",
      company: "Lingvopedia Language Solutions",
      hasLogo: true,
           logoUrl: "/lingo.png",

      text: "Everything is working out really well with our association. Thank you.",
      rating: 5,
      date: "Apr 2023",
      gradient: "from-emerald-500 to-green-600"
    },
    {
      author: "Jonah Ondieki",
      role: "Language Services Manager",
      company: "OJ-LanguageHub LLC",
      hasLogo: true,
           logoUrl: "/oj.png",

      text: "Binod is the professional you would be looking for. Punctual deliveries and no complaints from clients. I firmly recommend him.",
      rating: 5,
      date: "May 2020",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      author: "Kickwords Limited",
      role: "Operations Manager",
      company: "Kickwords Limited",
      hasLogo: true,
      logoUrl: "/kick.png",
      text: "Excellent! Binod is the linguist every translation agency wants to have and work with. His dedication and accuracy is top notch. Recommended.",
      rating: 5,
      date: "Jun 2018",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      author: "IlaC",
      role: "Translation Coordinator",
      company: "ONCALL Language Services",
      hasLogo: true,
      logoUrl: "/oncall.png",

      text: "Binod is a kind and reliable translator, who delivers jobs in time and always faithful to the original. I have worked with him in 4/5 occasions and so far I can just say that I am willing to collaborate with him again in the future.",
      rating: 5,
      date: "Apr 2018",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      author: "Marti Adler",
      role: "Project Coordinator",
      company: "Local-M",
      hasLogo: false,
      text: "Good translations and communication. Always on time.",
      rating: 5,
      date: "Feb 2016",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      author: "The Translation Gate",
      role: "Quality Team",
      company: "The Translation Gate, LLC",
      hasLogo: true,
           logoUrl: "/gate.png",

      text: "Real professional, excellent quality, strictly follows instructions and always on time. Our team enjoys working with him.",
      rating: 5,
      date: "May 2016",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      author: "Ale.V.",
      role: "Project Manager",
      company: "Lingua Pros, LLC",
      hasLogo: true,
           logoUrl: "/pro.png",

      text: "Excellent work and timely delivery.",
      rating: 5,
      date: "Apr 2015",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      author: "TheLocMasters",
      role: "Localization Manager",
      company: "TheLocMasters",
      hasLogo: true,
           logoUrl: "/loc.png",

      text: "Great job, delivery always before deadline, high quality. Love to work with him again.",
      rating: 5,
      date: "Jul 2015",
      gradient: "from-sky-500 to-blue-600"
    },
    {
      author: "LingoTrust Team",
      role: "Quality Assurance",
      company: "LingoTrust Inc",
      hasLogo: false,

      text: "Excellent translator. On time and accurate.",
      rating: 5,
      date: "Jan 2014",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      author: "Leah Mundy",
      role: "Localization Lead",
      company: "Eurotalk",
      hasLogo: true,
           logoUrl: "/euro.png",

      text: "Very happy with the quality of the work.",
      rating: 5,
      date: "Dec 2013",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      author: "Miguel Sacrulli",
      role: "Events Coordinator",
      company: "Eventos Rosario",
      hasLogo: false,
      text: "Great work. Clients were very happy with the job done.",
      rating: 5,
      date: "Aug 2009",
      gradient: "from-red-500 to-orange-600"
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
    { number: "Connecting", label: "Words, Culture & Businesses", icon: <FileCheck className="w-6 h-6" /> },
    { number: "15+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <CheckCircle2 className="w-6 h-6" /> }
  ];
  return (
    <div className="min-h-screen bg-[#f9fafb]">

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg mb-6">
                <div className="w-2 h-2 rounded-full bg-[#71d0f2] animate-pulse" />
                <span className="text-sm font-medium text-slate-700">Trusted by 500+ companies worldwide</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                One-Stop Solution in
                <span className="block text-[#71d0f2]">
                  Translation
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Expert translation services for Indian, South Asian, South-East Asian and European Languages
              </p>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
                <img 
                  src="/hero.jpeg" 
                  alt="Translation team"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-[#71d0f2]">{stat.icon}</div>
                        <span className="text-sm lg:text-2xl font-bold text-slate-900">{stat.number}</span>
                      </div>
                      <p className="text-xs lg:text-sm text-slate-600">{stat.label}</p>
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
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-[#71d0f2] mb-3 shadow">
                    {stat.icon}
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
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
                <div className={`h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white`}>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#71d0f2] text-white mb-5`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{service.description}</p>
                  <div className="mt-5 flex items-center text-[#71d0f2] font-medium group-hover:gap-2 transition-all">
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Areas of Expertise</h2>
            <p className="text-xl text-slate-600">Specialized expertise across multiple sectors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
                <img 
                  src={industry.image}
                  alt={industry.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                />
               <div className="absolute inset-0 bg-black/40 group-hover:opacity-50 transition-opacity" />

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


      {/* Team Section */}
      <section className="py-20 px-6 bg-[#f0f8ff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-[#71d0f2]/10 text-[#71d0f2] rounded-full text-sm font-semibold">
                Our Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Expert linguists dedicated to excellence
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
             {[
  { name: "Binod Ringania", image: "/binod.jpeg", role: "Founder & CEO" },
  { name: "Arif Hussain", image: "/arif.jpeg", role: "Head, Business Development & Projects" },
  { name: "Abhirup Agarwal", image: "/abhirup.jpeg", role: "Head, Technical Operations" },
  { name: "Riju Debnath", image: "/Riju.jpeg", role: "Linguistic Team Lead" },

  { name: "Deepshikha", image: "/deepshikha.jpeg", role: "Vendor Manager" },
  { name: "Ayush Bali", image: "/ayush.jpeg", role: "Project Executive" },
  { name: "Surajit Laskar", image: "/surajet.jpeg", role: "Project Executive" },
  { name: "Navneet", image: "/navneet.jpeg", role: "Operations Coordinator" },
].map((member, i) => (
                <div 
                  key={i} 
                  className="group"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${i * 0.1}s both`,
                  }}
                >
                  <div className="relative bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 w-[350px] lg:w-[300px]">
                    <div className="relative mb-6 overflow-hidden rounded-2xl ring-4 ring-white group-hover:ring-[#71d0f2] transition-all duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-[#71d0f2] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-xs text-slate-500">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
     <section className="pt-20 pb-10 px-6 bg-[#f9fafb]">
    <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#71d0f2]/10 text-[#71d0f2] mb-4">
            <Star className="w-4 h-4 fill-[#71d0f2]" />
            <span className="text-sm font-semibold">Trusted by 500+ Companies</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600">Real stories from real businesses</p>
        </div>

        <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group h-[450px] flex flex-col mb-12 mx-2">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#71d0f2]/10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-4 h-12 flex items-center">
                    {testimonial.hasLogo ? (
                      <div className="bg-white rounded-lg px-4 py-2 shadow-sm border border-slate-100">
                        <img
                          src={testimonial.logoUrl}
                          alt={testimonial.company}
                          className="h-8 object-contain"
                        />
                      </div>
                    ) : (
                      <div className="bg-[#71d0f2] w-12 h-12 rounded-xl flex items-center justify-center">
                        <Quote className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                 <div className="flex-grow mb-6 overflow-y-auto">
                    <p className="text-slate-700 leading-relaxed text-base">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-slate-600 text-sm">{testimonial.role}</p>
                    <p className="text-slate-500 text-xs mt-1">{testimonial.company}</p>
                    <p className="text-slate-400 text-xs mt-2">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
       {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
       className="absolute left-[-1rem] top-[60%] -translate-y-1/2 z-10 cursor-pointer"
      >
        <div className="w-11 h-11 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#71d0f2] transition-all duration-300 flex items-center justify-center group border border-slate-100 hover:border-transparent">
          <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
        </div>
      </div>

      <div
        ref={nextRef}
        className="absolute right-[-1rem] top-[60%] -translate-y-1/2 z-10 cursor-pointer"
      >
        <div className="w-11 h-11 bg-white rounded-xl shadow-lg hover:shadow-xl hover:bg-[#71d0f2] transition-all duration-300 flex items-center justify-center group border border-slate-100 hover:border-transparent">
          <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
    </section>


      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#71d0f2] rounded-3xl shadow-2xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Global?</h2>
              <p className="text-xl mb-8 text-blue-100">Join hundreds of companies who trust Transoplanet</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 rounded-xl bg-white text-[#71d0f2] font-bold shadow-xl hover:shadow-2xl transition-all">
                  Get Free Quote
                </Link>
                <Link href="/contact" className="px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-[#71d0f2] transition-all">
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
     
      `}</style>
    </div>
  );
};

export default TransoplanetHome;
