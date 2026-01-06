"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  ArrowUpRight,
  Star,
} from "lucide-react";

export default function Home() {
  const projectsRef = useRef(null); // Add this line
  const handpickedRef = useRef(null); // Add this line
  const insightsRef = useRef(null);
  const newProjectsRef = useRef(null); // Add this line

  const slides = [
    "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
    "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg",
    "https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg",
    "https://images.pexels.com/photos/932328/pexels-photo-932328.jpeg",
    "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg",
  ];
  const advertisers = [
    {
      name: "Dealer",
      properties: "310+ Properties",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      name: "Owner",
      properties: "20+ Properties",
      icon: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
    },
    {
      name: "Builder",
      properties: "6 Properties",
      icon: "https://cdn-icons-png.flaticon.com/512/2967/2967350.png",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const propertyImages = [
    "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
  ];

  const bhkOptions = [
    { title: "1 RK/1 BHK", properties: "1,100+ Properties" },
    { title: "2 BHK", properties: "9,000+ Properties" },
    { title: "3 BHK", properties: "24,000+ Properties" },
    { title: "4 BHK", properties: "24,000+ Properties" },
    { title: "5 BHK", properties: "15,000+ Properties" },
  ];

  const [current, setCurrent] = useState(0);
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const localitiesRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); // 4 sec delay
    return () => clearInterval(interval);
  }, [slides.length]);

  // Scroll functions for carousels
  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === propertyImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [propertyImages.length]);

  const tools = [
    {
      title: "Budget Calculator",
      desc: "Check your affordability range for buying home",
      icon: "💰",
    },
    {
      title: "EMI Calculator",
      desc: "Calculate your home loan EMI",
      icon: "📱",
    },
    {
      title: "Loan Eligibility",
      desc: "See what you can borrow for your home",
      icon: "💳",
    },
    {
      title: "Area Converter",
      desc: "Convert area units easily and accurately",
      icon: "📏",
    },
    {
      title: "Stamp Duty Calculator",
      desc: "Know how much you’ll pay in stamp duty",
      icon: "📜",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth - 100;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const buildersList = [
    {
      logo: "/logo1.jpg",
      name: "M3M India",
      total: 33,
      city: 30,
    },
    {
      logo: "/logo2.jpg",
      name: "Vatika Group",
      total: 37,
      city: 27,
    },
    {
      logo: "/logo3.jpg",
      name: "Emaar India",
      total: 51,
      city: 30,
    },
    {
      logo: "/logo4.jpg",
      name: "BPTP Limited",
      total: 40,
      city: 20,
    },
    {
      logo: "/logo5.jpg",
      name: "DLF Builders",
      total: 60,
      city: 35,
    },
    {
      logo: "/logo6.jpg",
      name: "Signature Global",
      total: 25,
      city: 18,
    },
  ];
  const gainersData = [
    {
      icon: "/logo1.jpg",
      name: "Sector 36 Gurgaon",
      sub: "Dwarka Expressway",
      rate: "₹9,700/sq.ft",
      yield: "NA",
      trend: "+81.3% YoY",
    },
    {
      icon: "/logo2.jpg",
      name: "Sector 71 Gurgaon",
      sub: "Southern Peripheral Road",
      rate: "₹15,850/sq.ft",
      yield: "1%",
      trend: "+55.4% YoY",
    },
    {
      icon: "/logo3.jpg",
      name: "Sector 31 Gurgaon",
      sub: "Central Gurgaon",
      rate: "₹19,600/sq.ft",
      yield: "2%",
      trend: "+51.9% YoY",
    },
    {
      icon: "/logo4.jpg",
      name: "Sector 3 Gurgaon",
      sub: "Old Gurgaon",
      rate: "₹9,800/sq.ft",
      yield: "1%",
      trend: "+47.4% YoY",
    },
    {
      icon: "/logo5.jpg",
      name: "NH 8",
      sub: "National Highway",
      rate: "₹15,450/sq.ft",
      yield: "3%",
      trend: "+45.8% YoY",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Slider */}
      <section className="relative w-full h-[60vh] sm:h-[50vh] md:h-[70vh] overflow-hidden">
        {slides.map((url, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={url}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Optional dark overlay + title */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-3 drop-shadow-lg">
                Discover Beautiful Homes
              </h1>
              <p className="text-lg md:text-xl drop-shadow-md">
                Find your dream property with us
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Search Form Container */}
      <div className="relative -mt-12 sm:-mt-16 md:-mt-20 lg:-mt-24 px-4 sm:px-6 lg:px-8 z-20 mb-8 sm:mb-12 md:mb-16">
        <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
          {/* Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4 overflow-x-auto pb-3 border-b border-gray-200 text-gray-700 text-xs sm:text-sm md:text-base hide-scrollbar">
            {[
              "Buy",
              "Rent",
              "New Launch",
              "Commercial",
              "Plots/Land",
              "Projects",
            ].map((item, i) => (
              <button
                key={i}
                className={`whitespace-nowrap px-2 sm:px-3 lg:px-4 py-2 font-semibold transition-colors duration-200 ${
                  i === 0
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {item}
                {item === "New Launch" && (
                  <span className="text-red-500 ml-1">•</span>
                )}
              </button>
            ))}

            {/* Post Property Button */}
            <a href="/postproperty">
              <button className="ml-auto whitespace-nowrap text-green-600 font-bold text-xs sm:text-sm px-2 sm:px-3 py-2 hover:text-green-700 transition-colors duration-200 flex items-center">
                Post Property
                <span className="bg-green-100 text-green-700 ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold">
                  FREE
                </span>
              </button>
            </a>
          </div>

          {/* Search Bar */}
          <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <select className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm w-full sm:w-1/4 lg:w-1/5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white shadow-sm">
              <option>All Residential</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Plot</option>
            </select>

            <input
              type="text"
              placeholder='Search "PG in sector 74 Noida"'
              className="border border-gray-300 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 w-full sm:flex-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-200 w-full sm:w-auto text-xs sm:text-sm lg:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Search
            </button>
          </div>

          {/* Recent Searches */}
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-500">
            <span className="whitespace-nowrap">Recent searches:</span>
            <button className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-200 whitespace-nowrap text-xs hover:shadow-sm">
              Buy in Sector 36A, Gurgaon
            </button>
            <button className="px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-200 whitespace-nowrap text-xs hover:shadow-sm">
              View all searches
            </button>
          </div>
        </div>
      </div>

      {/* Property Cards Section 1 */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Recommended Projects
            </h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base">
              View All
            </button>
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scrollLeft(scrollRef1)}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &lt;
          </button>
          <button
            onClick={() => scrollRight(scrollRef1)}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &gt;
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef1}
            id="propertyScroll1"
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="min-w-[300px] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[360px] bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1560448204-e02f11c3d0e2",
                        "1600607687939-ce8a6c25118c",
                        "1600566753190-17f0baa2a6c3",
                        "1600585154526-990dced4db0d",
                        "1599427303058-f04cbcf4756f",
                        "1613977257363-707ba9348227",
                      ][item - 1]
                    }?w=600`}
                    alt={`Property ${item}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                    {item === 1 ? "Premium" : "Featured"}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  Beautiful Property {item}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">
                  Modern amenities with spacious living areas and premium
                  finishes in prime location.
                </p>
                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">
                    ₹{item}2,50,000
                  </span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center text-sm sm:text-base group">
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Cards Section 2 */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Recommended Properties
            </h2>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base">
              View All
            </button>
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scrollLeft(scrollRef2)}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &lt;
          </button>
          <button
            onClick={() => scrollRight(scrollRef2)}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &gt;
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef2}
            id="propertyScroll2"
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="min-w-[300px] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[360px] bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1560448204-e02f11c3d0e2",
                        "1600607687939-ce8a6c25118c",
                        "1600566753190-17f0baa2a6c3",
                        "1600585154526-990dced4db0d",
                        "1599427303058-f04cbcf4756f",
                        "1613977257363-707ba9348227",
                      ][item - 1]
                    }?w=600`}
                    alt={`Property ${item}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                    {item % 2 === 0 ? "New" : "Popular"}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  Luxury Property {item}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">
                  Premium location with excellent connectivity and modern
                  amenities for comfortable living.
                </p>
                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">
                    ₹{item}7,80,000
                  </span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center text-sm sm:text-base group">
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localities Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Localities You May Like
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              based on the localities you have explored in Gurgaon
            </p>
          </div>

          {/* Scrollable Cards Wrapper */}
          <div className="relative">
            {/* Left Arrow (hidden on mobile) */}
            <button
              onClick={() => scrollLeft(localitiesRef)}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &lt;
            </button>

            {/* Cards Scroll */}
            <div
              ref={localitiesRef}
              id="localitiesScroll"
              className="flex gap-5 overflow-x-auto hide-scrollbar scroll-smooth px-1 sm:px-2 pb-4"
            >
              {[
                {
                  name: "Sector 75 Gurgaon",
                  price: "Land from ₹76.5 Lac",
                },
                {
                  name: "Sector 9 Gurgaon",
                  price: "₹8,100/ sq.ft",
                  growth: "+13.3% YoY",
                  rating: "4.0",
                },
                {
                  name: "Sector 36A Gurgaon",
                  price: "₹19,250/ sq.ft",
                  growth: "-5.5% YoY",
                  rating: "3.7",
                },
                {
                  name: "Sector 57 Gurgaon",
                  price: "₹15,000/ sq.ft",
                  growth: "+7.2% YoY",
                  rating: "4.2",
                },
                {
                  name: "Sector 50 Gurgaon",
                  price: "₹12,300/ sq.ft",
                  growth: "+9.5% YoY",
                  rating: "4.1",
                },
                {
                  name: "Sector 43 Gurgaon",
                  price: "₹14,500/ sq.ft",
                  growth: "+8.1% YoY",
                  rating: "4.3",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="min-w-[250px] sm:min-w-[260px] md:min-w-[280px] bg-white border rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-5 flex flex-col hover:border-blue-200"
                >
                  {/* Title */}
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-600">{item.price}</p>

                  {/* Rating & Growth */}
                  <div className="flex items-center justify-between mt-3 text-xs sm:text-sm">
                    {item.rating && (
                      <span className="text-green-700 font-medium bg-green-100 px-2 py-1 rounded-full">
                        {item.rating} ★
                      </span>
                    )}
                    {item.growth && (
                      <span
                        className={`font-medium ${
                          item.growth.includes("-")
                            ? "text-red-600"
                            : "text-green-600"
                        }`}
                      >
                        {item.growth}
                      </span>
                    )}
                  </div>

                  {/* Bottom Buttons */}
                  <div className="flex mt-4 gap-4 text-sm">
                    <button className="text-blue-600 font-medium hover:underline transition-colors duration-200">
                      Insights
                    </button>
                    <button className="text-blue-600 font-medium hover:underline transition-colors duration-200">
                      Properties
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Arrow (hidden on mobile) */}
            <button
              onClick={() => scrollRight(localitiesRef)}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg border rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
              Property Types
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">
              Explore different types of properties available
            </p>
          </div>

          {/* Scrollable Wrapper */}
          <div className="relative">
            {/* Left Button */}
            <button
              onClick={() =>
                document
                  .getElementById("propertyTypesScroll")
                  ?.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &lt;
            </button>

            {/* Cards */}
            <div
              id="propertyTypesScroll"
              className="flex gap-4 sm:gap-5 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
            >
              {[
                {
                  name: "Residential Apartment",
                  count: "32,000+ Properties",
                  img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
                  color: "bg-orange-50",
                },
                {
                  name: "Independent/Builder Floor",
                  count: "13,000+ Properties",
                  img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
                  color: "bg-blue-50",
                },
                {
                  name: "Residential Land",
                  count: "6,900+ Properties",
                  img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600",
                  color: "bg-green-50",
                },
                {
                  name: "Villa",
                  count: "4,200+ Properties",
                  img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600",
                  color: "bg-pink-50",
                },
                {
                  name: "Penthouse",
                  count: "2,500+ Properties",
                  img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
                  color: "bg-purple-50",
                },
                {
                  name: "Studio Apartment",
                  count: "5,800+ Properties",
                  img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600",
                  color: "bg-indigo-50",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden ${item.color} hover:scale-105 transform`}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-48 sm:h-52 md:h-56 object-cover"
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600">{item.count}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Button */}
            <button
              onClick={() =>
                document
                  .getElementById("propertyTypesScroll")
                  ?.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>

      {/* Projects in High Demand Section */}
      {/* Projects in High Demand Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Projects in High Demand
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                The most explored projects in Gurgaon
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
              View All
            </button>
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scrollLeft(projectsRef)}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &lt;
            </button>
            <button
              onClick={() => scrollRight(projectsRef)}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &gt;
            </button>

            {/* Scrollable Cards */}
            <div
              ref={projectsRef}
              className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
            >
              {[
                {
                  title: "Krisumi Waterside Residences",
                  location: "2, 3, 4 BHK Apartment in Sector 36A, Gurgaon",
                  price: "₹ 4.44 - 18.12 Cr",
                  image:
                    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
                  badge: "RERA",
                  tag: "Possession from Oct 2029",
                },
                {
                  title: "Elan The Presidential",
                  location: "3, 4, 5 BHK Apartment in Sector 106, Gurgaon",
                  price: "₹ 4.66 - 13.99 Cr",
                  image:
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
                  badge: "RERA",
                  tag: "Possession from Oct 2027",
                },
                {
                  title: "Krisumi Waterfall Residences",
                  location: "2, 3, 4 BHK Apartment in Sector 36A, Gurgaon",
                  price: "₹ 3.62 - 16.42 Cr",
                  image:
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
                  badge: "RERA",
                  tag: "Ready To Move",
                },
                {
                  title: "M3M Golf Estate",
                  location: "3, 4, 5 BHK Apartment in Sector 65, Gurgaon",
                  price: "₹ 5.20 - 22.50 Cr",
                  image:
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
                  badge: "RERA",
                  tag: "Possession from Dec 2028",
                },
                {
                  title: "DLF The Camellias",
                  location: "4, 5 BHK Apartment in Sector 42, Gurgaon",
                  price: "₹ 18.50 - 45.00 Cr",
                  image:
                    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
                  badge: "RERA",
                  tag: "Ready To Move",
                },
                {
                  title: "Godrej Aristocrat",
                  location: "3, 4 BHK Apartment in Sector 49, Gurgaon",
                  price: "₹ 3.85 - 9.50 Cr",
                  image:
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
                  badge: "RERA",
                  tag: "Possession from Mar 2030",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="min-w-[300px] sm:min-w-[320px] md:min-w-[340px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 hover:scale-105"
                    />
                    {/* RERA Badge - Top Left */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-gray-800/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {project.badge}
                      </span>
                      <div className="mt-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">
                          SEEN
                        </span>
                      </div>
                    </div>

                    {/* Heart Icon - Top Right */}
                    <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-1.5 hover:bg-white/40 transition-colors duration-200">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>

                    {/* Possession Tag - Bottom Left */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-gray-900/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded">
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2 flex-1">
                      {project.location}
                    </p>
                    <div className="mt-auto">
                      <p className="text-lg sm:text-xl font-bold text-gray-900">
                        {project.price}
                      </p>
                      <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center text-sm sm:text-base group mt-2">
                        View Details
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Handpicked Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Handpicked Projects
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Featured Projects in Gurgaon
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
              View All
            </button>
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scrollLeft(handpickedRef)}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &lt;
            </button>
            <button
              onClick={() => scrollRight(handpickedRef)}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &gt;
            </button>

            {/* Scrollable Cards */}
            <div
              ref={handpickedRef}
              className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
            >
              {[
                {
                  title: "Altura at DXP 92",
                  location: "4 BHK Apartment, Sector 92",
                  price: "2.54 Cr",
                  image:
                    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600",
                  badge: "Featured",
                  tag: "New Launch",
                },
                {
                  title: "Saan Verdante",
                  location: "3,4 BHK Apartment, Sector 95",
                  price: "4.34 - 6.63 Cr",
                  image:
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600",
                  badge: "Featured",
                  tag: "Premium",
                },
                {
                  title: "Elan The Presidential",
                  location: "3,4,5 BHK Apartment, Sector 106",
                  price: "4.66 - 13.99 Cr",
                  image:
                    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600",
                  badge: "Featured",
                  tag: "Luxury",
                },
                {
                  title: "Krisumi Waterside",
                  location: "2,3,4 BHK Apartment, Sector 36A",
                  price: "4.44 - 18.12 Cr",
                  image:
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600",
                  badge: "Featured",
                  tag: "Waterfront",
                },
                {
                  title: "M3M Golf Estate",
                  location: "3,4,5 BHK Apartment, Sector 65",
                  price: "5.20 - 22.50 Cr",
                  image:
                    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600",
                  badge: "Featured",
                  tag: "Golf View",
                },
                {
                  title: "DLF Camellias",
                  location: "4,5 BHK Apartment, Sector 42",
                  price: "18.50 - 45.00 Cr",
                  image:
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600",
                  badge: "Featured",
                  tag: "Ultra Luxury",
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col group hover:scale-105 transform"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-52 object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Featured Badge - Top Left */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {project.badge}
                      </span>
                    </div>

                    {/* Tag - Bottom Left */}
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                        {project.tag}
                      </span>
                    </div>

                    {/* Heart Icon - Top Right */}
                    <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200 shadow-sm">
                      <svg
                        className="w-4 h-4 text-gray-600 hover:text-red-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-3 text-sm sm:text-base line-clamp-1">
                      {project.location}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <span className="text-lg sm:text-xl font-bold text-gray-900">
                        ₹{project.price}
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Insights Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Recommended Insights
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                based on your search results & history
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
              View All
            </button>
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scrollLeft(insightsRef)}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &lt;
            </button>
            <button
              onClick={() => scrollRight(insightsRef)}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &gt;
            </button>

            {/* Scrollable Cards */}
            <div
              ref={insightsRef}
              className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
            >
              {/* Main Insight Card with Image */}
              <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600"
                    alt="Sector 36A"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      Locality Insight
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Sector 36A
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Gurgaon
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm flex items-center group">
                    Explore
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Property Insight with Image */}
              <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600"
                    alt="Krisumi Waterfall Residences"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-purple-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      Society Insight
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                    Krisumi Waterfall Residences
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Sector 36A, Gurgaon
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm flex items-center group">
                    View Insight
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Reviews & Ratings with Image */}
              <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600"
                    alt="Reviews & Ratings"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      REVIEWS & RATINGS
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Sector 36A Gurgaon
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3">
                    Reviews & Rating
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">4.2/5</span>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm flex items-center group">
                      Read
                      <svg
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Price Trends with Image */}
              <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600"
                    alt="Price Trends"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      PRICE TRENDS
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Sector 36A Gurgaon
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Property Price Trend
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm flex items-center group">
                    View Trends
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Buyer's Guide with Image */}
              <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-32 sm:h-36 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600"
                    alt="Buyer's Guide"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                      GUIDE
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    Buyer&apos;s Guide
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">
                    Essential tips for home buyers
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm flex items-center group">
                    Read Guide
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* View All Insights */}
              <div className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200 p-5 sm:p-6 text-center hover:shadow-lg transition-all duration-300 flex flex-col justify-center">
                <div className="flex flex-col items-center justify-center h-full">
                  <svg
                    className="w-12 h-12 text-blue-600 mb-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    View all Insights
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Explore more insights and analysis
                  </p>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm">
                    Explore More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newly Launched Projects Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-10 sm:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Newly launched projects
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Preferred units at zero brokerage
              </p>
            </div>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap">
              View All
            </button>
          </div>

          {/* Scrollable Container */}
          <div className="relative">
            {/* Scroll Buttons */}
            <button
              onClick={() => scrollLeft(newProjectsRef)}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &lt;
            </button>
            <button
              onClick={() => scrollRight(newProjectsRef)}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
            >
              &gt;
            </button>

            {/* Scrollable Cards */}
            <div
              ref={newProjectsRef}
              className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
            >
              {/* Project Card 1 */}
              <div className="min-w-[320px] sm:min-w-[340px] md:min-w-[360px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* NEW LAUNCH Badge */}
                <div className="bg-blue-700 text-white px-4 py-2">
                  <span className="text-sm font-semibold">NEW LAUNCH</span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Project Title & Location */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      Godrej Sora
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Sector 53, Gurgaon
                    </p>
                  </div>

                  {/* Price & Configuration */}
                  <div className="mb-4">
                    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      ₹8.31 - 13.01 Cr
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      3,4 BHK Apartments
                    </p>
                  </div>

                  {/* Price Increase Info */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm font-medium">
                      14.2% price increase in last 1 year in this project
                    </p>
                  </div>

                  {/* Brokerage Info & CTA */}
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm font-medium">
                      Get preferred options @zero brokerage
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center group">
                      View Number
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="min-w-[320px] sm:min-w-[340px] md:min-w-[360px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* NEW LAUNCH Badge */}
                <div className="bg-blue-700 text-white px-4 py-2">
                  <span className="text-sm font-semibold">NEW LAUNCH</span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Project Title & Location */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      Signature Global Cloverdale
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Sector 71, Gurgaon
                    </p>
                  </div>

                  {/* Price & Configuration */}
                  <div className="mb-4">
                    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      ₹3.88 - 6.61 Cr
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      3,4 BHK Apartments
                    </p>
                  </div>

                  {/* Price Increase Info */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm font-medium">
                      13.6% price increase in last 3 months in this project
                    </p>
                  </div>

                  {/* Brokerage Info & CTA */}
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm font-medium">
                      Get preferred options @zero brokerage
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center group">
                      View Number
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Card 3 */}
              <div className="min-w-[320px] sm:min-w-[340px] md:min-w-[360px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* NEW LAUNCH Badge */}
                <div className="bg-blue-700 text-white px-4 py-2">
                  <span className="text-sm font-semibold">NEW LAUNCH</span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Project Title & Location */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      DLF The Valley
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Sector 63, Gurgaon
                    </p>
                  </div>

                  {/* Price & Configuration */}
                  <div className="mb-4">
                    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      ₹12.50 - 18.75 Cr
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      4,5 BHK Apartments
                    </p>
                  </div>

                  {/* Price Increase Info */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm font-medium">
                      16.8% price increase in last 6 months in this project
                    </p>
                  </div>

                  {/* Brokerage Info & CTA */}
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm font-medium">
                      Get preferred options @zero brokerage
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center group">
                      View Number
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Project Card 4 */}
              <div className="min-w-[320px] sm:min-w-[340px] md:min-w-[360px] bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
                {/* NEW LAUNCH Badge */}
                <div className="bg-blue-700 text-white px-4 py-2">
                  <span className="text-sm font-semibold">NEW LAUNCH</span>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  {/* Project Title & Location */}
                  <div className="mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                      M3M Capital
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Sector 113, Gurgaon
                    </p>
                  </div>

                  {/* Price & Configuration */}
                  <div className="mb-4">
                    <p className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                      ₹6.25 - 9.80 Cr
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      3,4 BHK Apartments
                    </p>
                  </div>

                  {/* Price Increase Info */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-700 text-sm font-medium">
                      11.5% price increase in last 4 months in this project
                    </p>
                  </div>

                  {/* Brokerage Info & CTA */}
                  <div className="space-y-3">
                    <p className="text-gray-700 text-sm font-medium">
                      Get preferred options @zero brokerage
                    </p>
                    <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center group">
                      View Number
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[500px] overflow-hidden">
        {propertyImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={img}
              alt={`Property ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay (dark gradient for text readability) */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                Upcoming Projects
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
                Visit these projects and get early bird benefits
              </p>
            </div>
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={() =>
            setActiveIndex(
              activeIndex === 0 ? propertyImages.length - 1 : activeIndex - 1
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 rounded-full"
        >
          ❮
        </button>

        <button
          onClick={() =>
            setActiveIndex(
              activeIndex === propertyImages.length - 1 ? 0 : activeIndex + 1
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white text-black p-2 rounded-full"
        >
          ❯
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {propertyImages.map((_, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </section>

      <section className="relative w-full bg-blue-50 py-10 px-8 rounded-none">
        {/* Header */}
        <div className="flex justify-between items-center mb-6 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Lightbulb className="text-blue-600 w-6 h-6" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Use popular tools
              </h2>
              <p className="text-sm text-gray-500">
                Go from browsing to buying
              </p>
            </div>
          </div>
          <button className="border border-blue-500 text-blue-500 px-4 py-1.5 rounded-md hover:bg-blue-500 hover:text-white transition">
            View all Insights
          </button>
        </div>

        {/* Scrollable Cards */}
        <div className="relative max-w-7xl mx-auto">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
          >
            <ChevronLeft />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-10"
          >
            {tools.map((tool, index) => (
              <div
                key={index}
                className="min-w-[260px] bg-white rounded-lg shadow hover:shadow-md p-6 flex flex-col items-center text-center transition"
              >
                <div className="text-4xl mb-3">{tool.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500">{tool.desc}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-800">
            Popular builders
          </h2>
          <p className="text-sm text-gray-500 mb-8">in Gurgaon</p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildersList.map((builder, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-lg hover:border-blue-400 transition-all duration-300"
              >
                {/* Logo Circle */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300">
                  <img
                    src={builder.logo}
                    alt={builder.name}
                    className="w-12 h-12 object-contain transform group-hover:scale-110 transition duration-300"
                  />
                </div>

                {/* Builder Info */}
                <div>
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg group-hover:text-blue-600 transition">
                    {builder.name}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 mt-1">
                    <span className="font-medium text-gray-700">
                      {builder.total}
                    </span>{" "}
                    Total Projects |{" "}
                    <span className="font-medium text-gray-700">
                      {builder.city}
                    </span>{" "}
                    in this city
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-14">
        <div className="max-w-8xl mx-auto px-4">
          {/* Section Header */}
          <div className="mb-8 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight">
              Top <span className="text-blue-600">Gainers</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm md:text-base">
              Across Gurgaon with highest appreciation this year
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto  border border-gray-100 bg-white/70 backdrop-blur-md shadow-lg transition-transform duration-300 hover:shadow-2xl">
            <table className="min-w-full border-collapse">
              <thead className="bg-gray-100/70">
                <tr className="text-left text-gray-700 text-sm md:text-base">
                  <th className="py-4 px-6 font-semibold">Locality</th>
                  <th className="py-4 px-6 font-semibold">Rate on 99acres</th>
                  <th className="py-4 px-6 font-semibold">Rental Yield</th>
                  <th className="py-4 px-6 font-semibold">Price Trends</th>
                </tr>
              </thead>

              <tbody>
                {gainersData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-100 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300"
                  >
                    {/* Locality */}
                    <td className="py-4 px-6 flex items-center gap-3">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm md:text-base">
                          {item.name}
                        </p>
                        <p className="text-xs text-gray-500">{item.sub}</p>
                      </div>
                    </td>

                    {/* Rate */}
                    <td className="py-4 px-6 text-sm text-gray-800">
                      <div className="font-semibold text-gray-900">
                        {item.rate}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        Current Market Rate
                      </p>
                    </td>

                    {/* Yield */}
                    <td className="py-4 px-6 text-sm text-gray-800">
                      <div className="font-semibold text-gray-900">
                        {item.yield}
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Rental Yield</p>
                    </td>

                    {/* Trend */}
                    <td className="py-4 px-6 text-sm font-semibold text-green-600">
                      <div className="flex items-center gap-1 mb-1">
                        <ArrowUpRight className="w-4 h-4" />
                        {item.trend}
                      </div>
                      <div className="w-full h-2 bg-green-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full transition-all duration-700"
                          style={{ width: item.trendWidth }}
                        ></div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fffaf5] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 rounded-2xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
            <div className="bg-[#fcebd7] p-3 rounded-xl flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="home"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                BHK choice in mind?
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                Browse by no. of bedrooms in the house
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
            {[
              { title: "1 RK/1 BHK", properties: "1,100+ Properties" },
              { title: "2 BHK", properties: "9,000+ Properties" },
              { title: "3 BHK", properties: "24,000+ Properties" },
              { title: "4 BHK", properties: "8,000+ Properties" },
              { title: "5 BHK", properties: "2,500+ Properties" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center w-full h-36 sm:h-40 md:h-44 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all p-4"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                  alt="home"
                  className="w-8 h-8 sm:w-10 sm:h-10 mb-2"
                />
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg text-center">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  {item.properties}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fffaf5] py-10 px-4 rounded-2xl">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Section */}
          <div className="flex items-center gap-3 lg:w-1/3">
            <div className="bg-[#fcebd7] p-3 rounded-xl flex-shrink-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
                alt="property"
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                Properties posted by
              </h2>
              <p className="text-sm sm:text-base text-gray-500">
                Choose type of advertiser
              </p>
            </div>
          </div>

          {/* Right Section (Card) */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 lg:w-2/3 w-full">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1">
              Choose type of advertiser
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-4">
              Browse your choice of listing
            </p>

            {/* Advertiser List */}
            <div className="space-y-3 sm:space-y-4">
              {advertisers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white hover:bg-gray-50 transition-all duration-200 cursor-pointer rounded-lg px-3 sm:px-4 py-2 sm:py-3"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <div>
                      <h4 className="text-sm sm:text-base md:text-lg font-medium text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.properties}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Move in now, next year or later */}

      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10 flex-wrap gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Move in now, next year or later
            </h2>

            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 text-sm sm:text-base">
              View All
            </button>
          </div>

          {/* Scroll Buttons (desktop only) */}
          <button
            onClick={() => scrollLeft(scrollRef2)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &lt;
          </button>
          <button
            onClick={() => scrollRight(scrollRef2)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &gt;
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef2}
            id="propertyScroll2"
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          >
            {[
              {
                year: "Ready to move",
                properties: "19,000+ Properties",
                color: "bg-[#fff5e9]", // peach
                img: "/building1.jpg",
              },
              {
                year: "Possession in 2025",
                properties: "630+ Properties",
                color: "bg-[#f0f7ff]", // light blue
                img: "/building2.jpg",
              },
              {
                year: "Possession in 2026",
                properties: "880+ Properties",
                color: "bg-[#e8f7ed]", // light green
                img: "/building1.jpg",
              },
              {
                year: "Possession in 2027",
                properties: "1020+ Properties",
                color: "bg-[#fffceb]", // light yellow
                img: "/building2.jpg",
              },
              {
                year: "Possession in 2028",
                properties: "1200+ Properties",
                color: "bg-[#f4f0ff]", // light purple
                img: "/building1.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.color} min-w-[200px] sm:min-w-[240px] md:min-w-[260px] lg:min-w-[280px] xl:min-w-[320px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden`}
              >
                {/* Text part */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                    {item.year}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">
                    {item.properties}
                  </p>
                </div>

                {/* Bigger Image bottom aligned */}
                <div className="h-36 sm:h-44 md:h-52 lg:h-60 flex items-end justify-center">
                  <img
                    src={item.img}
                    alt={item.year}
                    className="object-contain max-h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fff6e6] py-10 px-4 sm:px-6 lg:px-8 rounded-2xl flex flex-col lg:flex-row items-center lg:items-start gap-6">
        {/* Left Side */}
        <div className="flex items-center gap-4 lg:w-1/3">
          <div className="bg-[#ffe1b3] p-3 rounded-lg flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/616/616408.png" // Replace with your icon
              alt="budget icon"
              className="w-10 h-10"
            />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
            Have a budget in mind?
          </h2>
        </div>

        {/* Right Side Card */}
        <div className="bg-white shadow-md rounded-xl p-6 w-full lg:w-2/3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
            Browse by budget
          </h3>
          <p className="text-sm text-gray-500 mb-6">
            Project options based on your budget
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                label: "Affordable projects",
                range: "< ₹ 9700 / sq. ft",
                rupees: "₹",
              },
              {
                label: "Mid-Segment projects",
                range: "₹ 9700 - 16000 / sq. ft",
                rupees: "₹₹",
              },
              {
                label: "Luxury projects",
                range: "> ₹ 16000 / sq. ft",
                rupees: "₹₹₹",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-100 rounded-lg hover:bg-green-200 transition cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-100 rounded-full w-10 h-10 flex items-center justify-center text-green-800 font-semibold text-lg">
                    {item.rupees}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.range}</p>
                  </div>
                </div>
                <div className="text-gray-400 text-xl">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 py-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10 flex-wrap gap-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Emerging localities
            </h2>
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scrollLeft(scrollRef2)}
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &lt;
          </button>
          <button
            onClick={() => scrollRight(scrollRef2)}
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &gt;
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef2}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          >
            {[
              {
                title: "Sector 72 Noida",
                rating: "3.9",
                projects: "2 New Projects",
                img: "/building1.jpg",
                bgColor: "bg-white",
              },
              {
                title: "Sector 50 Noida",
                rating: "4.2",
                projects: "5 New Projects",
                img: "/building2.jpg",
                bgColor: "bg-white",
              },
              {
                title: "Sector 150 Noida",
                rating: "4.0",
                projects: "3 New Projects",
                img: "/building1.jpg",
                bgColor: "bg-white",
              },
              {
                title: "Sector 50 Noida",
                rating: "4.2",
                projects: "5 New Projects",
                img: "/building2.jpg",
                bgColor: "bg-white",
              },
              {
                title: "Sector 150 Noida",
                rating: "4.0",
                projects: "3 New Projects",
                img: "/building1.jpg",
                bgColor: "bg-white",
              },
              {
                title: "Sector 150 Noida",
                rating: "4.0",
                projects: "3 New Projects",
                img: "/building1.jpg",
                bgColor: "bg-white",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${item.bgColor} min-w-[220px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[300px] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col overflow-hidden`}
              >
                {/* Top part with image */}
                <div className="flex items-center gap-3 p-4 sm:p-5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-yellow-500 font-semibold">
                        {item.rating} ★
                      </span>
                      <span className="text-gray-500 text-sm">
                        {item.projects}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="px-4 sm:px-5 pb-4 flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white text-sm sm:text-base py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                    Insights
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 text-sm sm:text-base py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Projects
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col sm:flex-row items-center sm:justify-between bg-gray-300 rounded-xl p-6 sm:p-16 max-w-7xl mx-auto mt-6 mb-10 gap-6 sm:gap-0">
        {/* Left: Image and Text */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 gap-4 sm:gap-0 w-full sm:w-auto">
          {/* Image */}
          <div className="flex-shrink-0 rounded-lg flex items-center justify-center">
            <img
              src="/New1.jpg"
              alt="Verified Property"
              className="w-24 h-24 sm:w-36 sm:h-36 object-cover rounded-lg"
            />
          </div>

          {/* Text content */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              View properties verified by 99acres
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-1 sm:mt-2">
              Verified on site for genuineness. Check out real photos of the
              property
            </p>
          </div>
        </div>

        {/* Right: Arrow button */}
        <button className="mt-4 sm:mt-0 w-16 sm:w-24 h-12 sm:h-12 bg-gray-100 hover:bg-green-200 text-green-800 rounded-full flex items-center justify-center transition flex-shrink-0">
          <span className="text-2xl sm:text-4xl">→</span>
        </button>
      </section>

      <section className="flex flex-col sm:flex-row items-center sm:justify-start bg-orange-200 rounded-xl p-6 sm:p-16 max-w-7xl mx-auto mt-6 mb-10 gap-6">
        {/* Image */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <img
            src="/ReviewAvatar.png"
            alt="Verified Property"
            className="w-24 h-24 sm:w-36 sm:h-36 object-cover rounded-lg"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900">
            How would you rate your locality / society?
          </h3>

          {/* 5 Blank Stars */}
          <div className="flex gap-2">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="w-6 h-6 text-gray-400 hover:text-yellow-400 cursor-pointer transition"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Cards Section 1 */}
      <section className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-16 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
              Top articles on home buying
            </h2>
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={() => scrollLeft(scrollRef1)}
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &lt;
          </button>
          <button
            onClick={() => scrollRight(scrollRef1)}
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 z-10 hover:bg-gray-100 transition-all duration-200 hover:shadow-xl"
          >
            &gt;
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef1}
            id="propertyScroll1"
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto hide-scrollbar scroll-smooth pb-4"
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="min-w-[300px] sm:min-w-[320px] md:min-w-[340px] lg:min-w-[360px] bg-white rounded-xl shadow-lg p-4 sm:p-5 md:p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                <div className="w-full h-40 sm:h-44 md:h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg mb-3 sm:mb-4 flex items-center justify-center overflow-hidden relative">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1560448204-e02f11c3d0e2",
                        "1600607687939-ce8a6c25118c",
                        "1600566753190-17f0baa2a6c3",
                        "1600585154526-990dced4db0d",
                        "1599427303058-f04cbcf4756f",
                        "1613977257363-707ba9348227",
                      ][item - 1]
                    }?w=600`}
                    alt={`Property ${item}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-gray-700">
                    {item === 1 ? "Premium" : "Featured"}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-1">
                  Beautiful Property {item}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base line-clamp-2">
                  Modern amenities with spacious living areas and premium
                  finishes in prime location.
                </p>
                <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">
                    ₹{item}2,50,000
                  </span>
                  <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center text-sm sm:text-base group">
                    View Details
                    <svg
                      className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* banner */}

      <section className="w-full max-w-7xl bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-900 py-12 px-6 rounded-2xl flex flex-col md:flex-row items-center gap-8 mx-auto mb-10 shadow-lg">
        {/* Left Content */}
        <div className="md:w-2/3 flex flex-col items-start text-left gap-6">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight">
            Sell or rent faster at the right price!
          </h1>
          <p className="text-gray-800 md:text-lg sm:text-base">
            Your perfect buyer is waiting, list your property now
          </p>
          <div className="flex flex-col items-start gap-3 mt-2">
            <a
              href="/postproperty"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-semibold px-8 py-4 rounded-full shadow-md text-lg"
            >
              Post Property It&apos;s Free
            </a>
            <a href="/whatshap" className="text-slate-900 font-medium">
              Post via WhatsApp →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 md:w-1/3 flex justify-end mt-6 md:mt-0">
          <img
            src="/banner.png"
            alt="Banner"
            className="h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 object-contain"
          />
        </div>
      </section>

      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-100 via-white to-orange-50">
        {/* Inner content box */}
        <div className="relative z-10 w-full max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 shadow-xl">
          <span className="text-sm sm:text-base text-blue-700 font-semibold mb-2 block">
            99acres
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center sm:text-left">
            Explore our services
          </h2>

          {/* Cards Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="flex space-x-4 items-start bg-white/70 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg"
                alt="Buying"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Buying a commercial property
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Shops, offices, land, factories, warehouses and more
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex space-x-4 items-start bg-white/70 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                alt="Leasing"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Leasing a commercial property
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Shops, offices, land, factories, warehouses and more
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex space-x-4 items-start bg-white/70 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.pexels.com/photos/162539/architecture-building-amsterdam-blue-sky-162539.jpeg"
                alt="Plots"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Buy Plots/Land</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Residential Plots, Agricultural Farm lands, Inst. Lands and
                  more
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex space-x-4 items-start bg-white/70 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg"
                alt="Renting"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">Renting a home</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Apartments, builder floors, villas and more
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="flex space-x-4 items-start bg-white/70 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg"
                alt="PG"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800">
                  PG and co-living
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Organised, owner and broker listed PGs
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="flex space-x-4 items-start bg-white/70 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:scale-[1.02] transition duration-300">
              <img
                src="https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg"
                alt="Post Property"
                className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold text-gray-800 flex items-center flex-wrap gap-1">
                  Post Property
                  <span className="text-xs bg-green-100 text-green-600 font-bold px-2 py-0.5 rounded">
                    FREE
                  </span>
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Sell or rent faster at the right price
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-center">
        <img
          src="/phone.png"
          alt="Phone Display"
          className="w-full max-w-8xl h-auto object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </section>

      {/* Global Styles */}
      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  );
}
