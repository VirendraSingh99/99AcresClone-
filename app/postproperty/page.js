"use client";
import React, { useRef, useState } from "react";

const PostPropertySection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question:
        "What type of property I can post on 99acres.com for selling/renting?",
      answer:
        "You can post residential, commercial, and land properties for sale or rent on 99acres.com. Make sure to provide accurate details and images for better visibility.",
    },
    {
      question: "Is posting property for selling/renting on 99acres.com FREE?",
      answer:
        "Yes, you can post basic property listings for free. However, there are premium options available to boost visibility.",
    },
    {
      question:
        "Can I sell/rent out my property on my own without paying brokerage?",
      answer:
        "Absolutely! By posting directly on 99acres.com, you can reach potential buyers or tenants without involving a broker.",
    },
    {
      question: "How can I rent/sell my property faster?",
      answer:
        "Use clear images, detailed descriptions, competitive pricing, and respond promptly to inquiries to attract buyers or tenants quickly.",
    },
    {
      question:
        "Will I get genuine buyers & tenants even with free property listings?",
      answer:
        "Yes, free listings still reach genuine buyers and tenants, but premium listings may increase visibility and response rate.",
    },
    {
      question: "How do I post a property on 99acres.com for renting/selling?",
      answer:
        "Sign up on 99acres.com, click on 'Post Property', fill in the details, upload images, and submit your listing.",
    },
    {
      question: "How to post your property SMARTLY?",
      answer:
        "Provide high-quality photos, accurate property details, attractive headlines, and reasonable pricing to make your listing stand out.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      {/* 🌇 MAIN PROPERTY SECTION */}
      <section
        className="w-full bg-[#f4f8fb] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-10 lg:py-16 gap-10"
        style={{
          backgroundImage: "url('/new.gif')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
        }}
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 max-w-xl" data-aos="fade-right">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
            Sell or Rent Property{" "}
            <span className="text-blue-700">online faster</span> with
            99acres.com
          </h2>

          <ul className="space-y-3 text-gray-800 text-base sm:text-lg">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-lg">✔</span>
              Advertise for FREE
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-lg">✔</span>
              Get unlimited enquiries
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-lg">✔</span>
              Get shortlisted buyers and tenants{" "}
              <span className="text-blue-600">*</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold text-lg">✔</span>
              Assistance in co-ordinating site visits{" "}
              <span className="text-blue-600">*</span>
            </li>
          </ul>

          <p className="text-gray-500 text-sm mt-4">
            * Available with Owner Assist Plans
          </p>
        </div>

        {/* RIGHT FORM CARD */}
        <div
          className="w-full lg:w-[420px] bg-white rounded-xl shadow-2xl p-6 sm:p-8"
          data-aos="fade-left"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6">
            Start posting your property, it’s free
          </h3>

          <form className="space-y-6">
            {/* Looking To */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                You are looking to …
              </label>
              <div className="flex flex-wrap gap-2">
                {["Sell", "Rent / Lease", "PG"].map((option, i) => (
                  <button
                    key={i}
                    type="button"
                    className="px-4 py-2 rounded-full border text-sm font-medium text-gray-700 bg-white hover:bg-blue-50 transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                And its a …
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Residential",
                  "Commercial",
                  "Flat/Apartment",
                  "Independent House / Villa",
                  "Independent / Builder Floor",
                  "Plot / Land",
                ].map((type, i) => (
                  <button
                    key={i}
                    type="button"
                    className="px-4 py-2 rounded-full border text-sm font-medium text-gray-700 bg-white hover:bg-blue-50 transition"
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Phone Input */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 block">
                Your contact details for the buyer to reach you
              </label>
              <input
                type="tel"
                placeholder="+91 1234567890"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
              <p className="text-red-500 text-xs mt-1">
                This field is required
              </p>
            </div>

            <p className="text-sm text-gray-600">
              Are you a registered user?{" "}
              <a
                href="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Login
              </a>
            </p>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Start now
            </button>
          </form>
        </div>
      </section>

      {/* 🧩 3 SIMPLE STEPS SECTION */}
      <section className="w-full bg-white py-10 sm:py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-gray-500 uppercase text-xs sm:text-sm font-semibold tracking-wider mb-2">
            HOW TO POST
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            Post Your Property in{" "}
            <span className="text-black">3 Simple Steps</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 text-left">
            {[
              {
                img: "/download.png",
                title: "01. Add details of your property",
                desc: "Begin by telling us a few basic details about your property like property type, location, and number of rooms.",
              },
              {
                img: "/download2.png",
                title: "02. Upload Photos & Videos",
                desc: "Upload photos and videos of your property either from your desktop or directly from your mobile phone.",
              },
              {
                img: "/download3.png",
                title: "03. Add Pricing & Ownership",
                desc: "Update your property’s ownership details and expected price to get your property ready for posting.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-start"
                data-aos="fade-up"
                data-aos-delay={(i + 1) * 100}
              >
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-12 h-12 mb-4"
                />
                <h3 className="font-semibold text-base sm:text-lg text-black mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base transition">
              Begin to Post your Property
            </button>
          </div>
        </div>
      </section>

      {/* 📊 VISIBILITY STATS SECTION */}
      <section className="relative w-full py-16 px-6 flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/Newbanner.png')",
          }}
        ></div>

        <div className="relative bg-gray-50 shadow-xl max-w-5xl w-full text-center py-12 px-6 md:px-12 backdrop-blur-sm">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-arial text-gray-900 mb-8">
            With over{" "}
            <span className="text-black">7 million unique visitors</span>{" "}
            monthly, your property gets maximum visibility on{" "}
            <span className="text-black font-semibold">99acres.com</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-8">
            <div>
              <p className="text-xs uppercase text-gray-500">Over</p>
              <h3 className="text-3xl font-bold text-gray-900">1M</h3>
              <p className="text-sm text-gray-600 mt-1">Property Listings</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500">Over</p>
              <h3 className="text-3xl font-bold text-gray-900">5.5M</h3>
              <p className="text-sm text-gray-600 mt-1">Monthly Searches</p>
            </div>
            <div>
              <p className="text-xs uppercase text-gray-500">Over</p>
              <h3 className="text-3xl font-bold text-gray-900">200K</h3>
              <p className="text-sm text-gray-600 mt-1">
                Owners advertising monthly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 💬 TESTIMONIALS SECTION */}
      <section className="w-full bg-white py-16 px-6 relative">
        <div className="max-w-7xl mx-auto text-center relative">
          <p className="text-gray-400 uppercase tracking-wide text-sm mb-2">
            Testimonials
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            This is what other{" "}
            <span className="text-blue-700">Owners & Dealers</span> have to say…
          </h2>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
          >
            →
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-10"
            style={{ scrollbarWidth: "none" }} // Firefox
          >
            {[
              {
                name: "Mohan Rao",
                role: "Owner, Hyderabad",
                text: "I found Relationship Managers of 99acres beneficial as they responded to my issues very promptly. I will surely recommend 99acres to my family and friends.",
              },
              {
                name: "Ranganath RK",
                role: "Owner, Bangalore",
                text: "The team was constantly looking for the exact match of tenants and coordinating with both parties to get the deal fixed. I would recommend 99acres within my network & rate 5/5 for the services provided.",
              },
              {
                name: "Mr. Danasekar",
                role: "Property Agent, Chennai",
                text: "Our Experience with 99acres has been fruitful. We got a lot of enquiries and really good conversions. We are very happy that 99acres helped us in reaching a diverse audience.",
              },
              {
                name: "Ravi Sharma",
                role: "Dealer, Pune",
                text: "Thanks to 99acres, my properties get visibility fast! I have received multiple leads within days of listing.",
              },
              {
                name: "Sneha Kapoor",
                role: "Owner, Mumbai",
                text: "Listing my property on 99acres was seamless and fast. The platform gave me multiple leads in just a few days.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-80 p-6 bg-gradient-to-b from-white to-blue-50 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-gray-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500 italic">{item.role}</p>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.text}
                </p>
                <div className="mt-4 flex">
                  {/* Optional star rating */}
                  {[...Array(5)].map((_, idx) => (
                    <span key={idx} className="text-yellow-400 text-sm mr-1">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <p className="text-gray-500 uppercase text-sm font-semibold mb-2">
            ADDITIONAL BENEFITS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Everything 99acres does to sell or rent out your property faster...
          </h2>

          {/* Section Description */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            Post free property ads on 99acres.com, India’s No. 1 property
            portal, to find genuine buyers and tenants. If you are the owner of
            a house, flat, apartment, villa, or any other residential property,
            you can conveniently post property for rent or sale on our digital
            platform. Also, find your ideal tenants and buyers quickly to lease
            or sell your land, office space, shop, showroom, or any other
            commercial real estate. Whether you are a property owner, builder or
            broker, you can rent or sell property online on 99acres.com with
            ease.
          </p>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8">
            99acres.com is one of the most trustworthy portals buyers and
            tenants online for flats, independent houses, offices, shops,
            showrooms, warehouses, land and factories. What makes 99acres.com
            unique is our high-quality website traffic and reach to millions of
            households across India and abroad, who are looking to buy or rent
            residential or commercial properties across India.
          </p>

          {/* Call to Action */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Begin to Post your Property
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-sm text-gray-500 uppercase mb-2">
            Know More About Posting on 99acres
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-5 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-gray-500">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="mt-3 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PostPropertySection;
