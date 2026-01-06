"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown, Search, Headphones, User, Menu, X, Link } from "lucide-react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (isDropdownOpen && !target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
      if (isProfileOpen && !target.closest(".profile-container")) {
        setIsProfileOpen(false);
      }
      if (isLoginDropdownOpen && !target.closest(".login-dropdown-container")) {
        setIsLoginDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen, isProfileOpen, isLoginDropdownOpen]);

  const closeModal = () => setActiveModal("");
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleSidebarItemClick = (modalKey) => {
    setActiveModal(modalKey);
    setIsSidebarOpen(false);
  };

  // Sidebar component with all navigation items
  const Sidebar = ({ isOpen, onClose }) => {
    const sidebarClass = `fixed top-0 left-0 h-full w-[280px] bg-gradient-to-b from-[#1a1a1a] to-[#3b3b3b] text-white transform transition-transform duration-300 ease-in-out z-50 ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    }`;

    const overlayClass = `fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
      isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
    }`;

    const menuItems = [
      { key: "buyers", label: "For Buyers" },
      { key: "tenants", label: "For Tenants" },
      { key: "owners", label: "For Owners" },
      { key: "dealers", label: "For Dealers / Builders" },
      { key: "insights", label: "Insights", hasNew: true },
    ];

    return (
      <>
        <div className={overlayClass} onClick={onClose} />
        <div className={sidebarClass}>
          <div className="p-4 border-b border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-bold text-blue-400">KDIPL</h2>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-4 overflow-y-auto h-[calc(100vh-80px)]">
            {/* All India Dropdown in Sidebar */}
            <div className="mb-6">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-gray-200 hover:text-white border border-gray-600 rounded-md px-3 py-2.5"
              >
                <span>All India</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>

            {/* Main Navigation Items */}
            <nav className="space-y-4 mb-8">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleSidebarItemClick(item.key)}
                  className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                >
                  <span>{item.label}</span>
                  {item.hasNew && (
                    <span className="text-[10px] text-pink-400 bg-pink-100 px-1.5 py-0.5 rounded-md font-bold">
                      NEW
                    </span>
                  )}
                </button>
              ))}
            </nav>

            {/* Additional Actions */}
            <div className="space-y-4 mb-6">
              <Link
                href="/postproperty"
                className="w-full bg-white text-blue-700 font-semibold px-4 py-2.5 rounded-full text-sm border hover:bg-blue-50 transition flex items-center justify-center"
              >
                Post property{" "}
                <span className="text-[10px] text-green-600 ml-1 font-bold">
                  FREE
                </span>
              </Link>

              <Link
                href="/contact"
                className="flex items-center gap-2 text-gray-300 hover:text-white w-full text-left py-2"
              >
                <Headphones className="w-5 h-5" />
                <span>Support</span>
              </Link>
            </div>

            {/* Login/Register Dropdown in Sidebar */}
            <div className="login-dropdown-container border-t border-gray-700 pt-4">
              <button
                onClick={() => setIsLoginDropdownOpen(!isLoginDropdownOpen)}
                className="flex items-center justify-between w-full text-gray-300 hover:text-white py-2"
              >
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  User
                </div>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isLoginDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLoginDropdownOpen && (
                <div className="mt-2 ml-4 space-y-3 text-gray-300">
                  <button className="block w-full text-left hover:text-white py-1">
                    <Link
                      href="/login"
                      className="block w-full text-left text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition"
                    >
                      Login
                    </Link>
                  </button>

                  <button className="block w-full text-left hover:text-white py-1">
                    <Link
                      href="/Register"
                      className="block w-full text-left text-white hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition"
                    >
                      Register
                    </Link>
                  </button>

                  <button className="block w-full text-left hover:text-white py-1">
                    <Link
                      href="/logout"
                      className="block w-full text-left text-black hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition"
                    >
                      LogOut
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#1a1a1a]/90 to-[#3b3b3b]/70 text-white shadow-md">
      {/* Header Bar */}
      <header className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3">
        {/* Left section */}
        <div className="flex items-center gap-4 md:gap-6">
          <h1 className="text-xl md:text-2xl font-extrabold">
            <Link
              href="/"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              KDIPL
            </Link>
          </h1>

          {/* All India Dropdown - Hidden on mobile */}
          <div className="hidden sm:block relative dropdown-container">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-200 hover:text-white border border-gray-600 rounded-md px-3 py-1.5"
            >
              All India
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Center Navigation - Hidden on mobile */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold">
          <button
            onClick={() => setActiveModal("buyers")}
            className="hover:text-white text-gray-300 transition-colors"
          >
            For Buyers
          </button>
          <button
            onClick={() => setActiveModal("tenants")}
            className="hover:text-white text-gray-300 transition-colors"
          >
            For Tenants
          </button>
          <button
            onClick={() => setActiveModal("owners")}
            className="hover:text-white text-gray-300 transition-colors"
          >
            For Owners
          </button>
          <button
            onClick={() => setActiveModal("dealers")}
            className="hover:text-white text-gray-300 transition-colors"
          >
            For Dealers / Builders
          </button>
          <button
            onClick={() => setActiveModal("insights")}
            className="flex items-center gap-1 hover:text-white text-gray-300 transition-colors"
          >
            Insights{" "}
            <span className="text-[10px] text-pink-400 bg-pink-100 px-1.5 py-0.5 rounded-md font-bold ml-1">
              NEW
            </span>
          </button>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="hidden sm:flex bg-white text-blue-700 font-semibold px-3 md:px-4 py-1.5 rounded-full text-sm border hover:bg-blue-50 transition whitespace-nowrap">
            <Link href="/postproperty" className="flex items-center">
              Post property{" "}
              <span className="text-[10px] text-green-600 ml-1 font-bold">
                FREE
              </span>
            </Link>
          </button>

          {/* <Headphones className="w-5 h-5 text-gray-200 cursor-pointer hover:text-white hidden sm:block" /> */}
          <Link
            href="/contact"
            className="flex items-center gap-2 text-gray-300 hover:text-white w-full text-left py-2"
          >
            <Headphones className="w-5 h-5" />
            <span>Support</span>
          </Link>

          <div className="relative profile-container hidden sm:block">
            <User
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="w-5 h-5 text-gray-200 cursor-pointer hover:text-white"
            />
            {isProfileOpen && (
              <div className="absolute right-0 top-full mt-6 bg-white text-gray-800 shadow-lg rounded-md w-40 overflow-hidden z-50 border border-gray-200">
                <button className="block w-full text-left hover:text-white py-1">
                  <Link
                    href="/login"
                    className="block w-full text-left text-black hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition"
                  >
                    Login
                  </Link>
                </button>

                <button className="block w-full text-left hover:text-white py-1">
                  <Link
                    href="/Register"
                    className="block w-full text-left text-black hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition"
                  >
                    Register
                  </Link>
                </button>

                <button className="block w-full text-left hover:text-white py-1">
                  <Link
                    href="/logout"
                    className="block w-full text-left text-black hover:bg-blue-600 hover:text-white rounded-md px-3 py-1 transition"
                  >
                    Logout
                  </Link>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-gray-200 hover:text-white p-1"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Existing "All India" dropdown */}
      {isDropdownOpen && (
        <div className="absolute top-full left-0 w-full sm:w-[90vw] md:w-[800px] bg-white text-gray-800 shadow-xl py-8 sm:py-12 md:py-20 mt-2 sm:mt-8 sm:ml-8 px-4 sm:px-6 md:px-20 z-50 dropdown-container border border-gray-200 rounded-lg sm:rounded-none">
          <button
            onClick={() => setIsDropdownOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Explore real estate in...
          </h2>
          <div className="flex gap-4 sm:gap-6 mb-6 border-b border-gray-200 text-sm font-medium overflow-x-auto">
            {["Buy", "Rent / Lease", "Plots/Land", "PG / Co-living"].map(
              (tab, i) => (
                <button
                  key={i}
                  className={`pb-2 whitespace-nowrap ${
                    i === 0
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className="bg-white border rounded-xl shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center overflow-hidden">
            <select className="p-3 text-gray-700 text-sm outline-none border-b sm:border-b-0 sm:border-r border-gray-200 w-full sm:w-48">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Industrial</option>
            </select>
            <div className="flex items-center w-full px-4 py-3">
              <Search className="text-gray-400 w-5 h-5 flex-shrink-0" />
              <input
                type="text"
                placeholder="City Name"
                className="flex-1 px-2 py-1 outline-none text-sm text-gray-700"
              />
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 text-sm m-2 sm:m-0 sm:mx-2 rounded-md">
              Explore
            </button>
          </div>

          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">
              Continue browsing where you left off...
            </p>
            <button className="border border-blue-500 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-50">
              Buy in Gurgaon
            </button>
          </div>
        </div>
      )}

      {/* Modals with improved mobile spacing and ALL original content */}
      {activeModal && (
        <div className="absolute top-full left-0 w-[95vw] mx-[2.5vw] sm:w-[90vw] md:w-[800px] bg-white text-gray-800 shadow-xl py-8 sm:py-12 md:py-16 mt-4 sm:mt-8 sm:ml-8 px-4 sm:px-6 md:px-16 z-50 border border-gray-200 rounded-lg">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>

          {activeModal === "buyers" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                For Buyers
              </h2>
              <p className="text-gray-600 text-sm">
                Explore thousands of verified properties available for sale in
                India. Find your dream home with ease.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Buy A Home
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        COMMERCIAL
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        LAND/PLOT
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        POPULAR AREAS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        INSIGHTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        ARTICLES & NEWS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Properties In Noida
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        FLATS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        BUILDERS FLOORS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        INDEPENDENT HOUSES
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        PLOTS IN NOIDA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        SERVICED APARTMENTS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        FARM HOUSES
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    POPULAR SEARCHES
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        PROPERTY IN NOIDA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        VERIFIED PROPERTY IN NOIDA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        NEW PROJECT IN NOIDA
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeModal === "tenants" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                For Tenants
              </h2>
              <p className="text-gray-600 text-sm">
                Browse affordable rental listings and connect directly with
                property owners — no brokerage needed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    RENT A HOME
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        PG/CO LIVING
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        COMMERCIAL
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        LAND/PLOT
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        INSIGHTS
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Property Types
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Apartments
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Villas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Plots
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Commercial
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Post Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Contact Agent
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Legal Advice
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeModal === "owners" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                For Owners
              </h2>
              <p className="text-gray-600 text-sm">
                List your property for free and connect with verified buyers and
                tenants instantly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Popular Cities
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Delhi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Pune
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Property Types
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Apartments
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Villas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Plots
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Commercial
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Post Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Contact Agent
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Legal Advice
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeModal === "dealers" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                For Dealers / Builders
              </h2>
              <p className="text-gray-600 text-sm">
                Showcase your projects, attract potential buyers, and grow your
                business online.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Popular Cities
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Delhi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Pune
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Property Types
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Apartments
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Villas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Plots
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Commercial
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Post Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Contact Agent
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Legal Advice
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {activeModal === "insights" && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                Insights
              </h2>
              <p className="text-gray-600 text-sm">
                Get market analytics, latest property trends, and expert
                insights to make better investment decisions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 text-sm">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Popular Cities
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Mumbai
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Delhi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Bangalore
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Pune
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Property Types
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Apartments
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Villas
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Plots
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Commercial
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    Quick Links
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Post Property
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Contact Agent
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        Legal Advice
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/Filter"
                        className="hover:text-blue-600 cursor-pointer block transition-colors"
                      >
                        FAQs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
