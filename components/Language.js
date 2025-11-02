"use client";
import React, { useState } from 'react';
import { Globe, Users, FileText, MessageSquare, Clock, Shield, Award, Menu, X, Phone, Mail, MapPin, ChevronDown, ChevronUp, CheckCircle, Zap, Target, Heart, Briefcase, Scale, Smartphone, Newspaper, ArrowRight, Languages, Wallet, Laptop, Megaphone, BookOpen, Wrench, Landmark, Gamepad2 } from 'lucide-react';
const Language = () => {
     const [selectedRegion, setSelectedRegion] = useState('all');

  const primaryColor = '#01add5';
    const languageRegions = [
    {
      region: "Indian Languages",
      languages: ["Hindi", "Bengali ⭐", "Tamil", "Telugu", "Marathi", "Gujarati", "Kannada", "Malayalam", "Punjabi", "Odia", "Assamese", "Urdu"]
    },
   {
  region: "Indian Rare Languages",
  languages: [
    "Bodo ⭐",
    "Bhojpuri ⭐",
    "Chhattisgarhi ⭐",
    "Dogri ⭐",
    "Garo ⭐",
    "Khasi ⭐",
    "Konkani ⭐",
    "Kashmiri ⭐",
    "Manipuri ⭐",
    "Mizo ⭐",
    "Maithili ⭐",
    "Newari ⭐",
    "Rajasthani ⭐",
    "Santhali ⭐",
    "Sanskrit ⭐",
    "Sindhi ⭐",
    "Tibbetan ⭐"
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
  return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Language Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
  )
}

export default Language
