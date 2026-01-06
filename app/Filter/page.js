"use client";
import React, { useState } from "react";
import { Home, MapPin, Bed, DollarSign, X } from "lucide-react";

const properties = [
  {
    id: 1,
    title: "Luxury Villa",
    type: "Villa",
    price: 500000,
    bedrooms: 4,
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Cozy Apartment",
    type: "Apartment",
    price: 200000,
    bedrooms: 2,
    city: "Delhi",
    image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
  },
  {
    id: 3,
    title: "Beach House",
    type: "House",
    price: 700000,
    bedrooms: 5,
    city: "Goa",
    image: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg",
  },
  {
    id: 4,
    title: "Modern Apartment",
    type: "Apartment",
    price: 300000,
    bedrooms: 3,
    city: "Mumbai",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
  {
    id: 5,
    title: "Country Villa",
    type: "Villa",
    price: 600000,
    bedrooms: 4,
    city: "Pune",
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg",
  },
  {
    id: 6,
    title: "Luxury Villa Pune",
    type: "Villa",
    price: 1000000,
    bedrooms: 4,
    city: "Pune",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
  },
  {
    id: 7,
    title: "Modern Apartment",
    type: "Apartment",
    price: 300000,
    bedrooms: 3,
    city: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Country Villa",
    type: "Villa",
    price: 600000,
    bedrooms: 4,
    city: "Pune",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Luxury Villa Pune",
    type: "Villa",
    price: 1000000,
    bedrooms: 4,
    city: "Pune",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
  },
];

function RealEstateFilter() {
  const [priceRange, setPriceRange] = useState([0, 1000000]); // Fixed max to match property prices
  const [selectedType, setSelectedType] = useState([]);
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);
  const [selectedCity, setSelectedCity] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const toggleSelection = (value, setter, selected) => {
    if (selected.includes(value)) {
      setter(selected.filter((v) => v !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const filteredProperties = properties.filter((prop) => {
    const withinPrice =
      prop.price >= priceRange[0] && prop.price <= priceRange[1];
    const typeMatch =
      selectedType.length === 0 || selectedType.includes(prop.type);
    const bedroomMatch =
      selectedBedrooms.length === 0 || selectedBedrooms.includes(prop.bedrooms);
    const cityMatch =
      selectedCity.length === 0 || selectedCity.includes(prop.city);
    return withinPrice && typeMatch && bedroomMatch && cityMatch;
  });

  const resetFilters = () => {
    setPriceRange([0, 1000000]); // Adjusted
    setSelectedType([]);
    setSelectedBedrooms([]);
    setSelectedCity([]);
  };

  const activeFiltersCount =
    selectedType.length + selectedBedrooms.length + selectedCity.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
          <div className="flex items-center gap-3">
            <Home className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors justify-center"
          >
            {showFilters ? "Hide Filters" : "Show Filters"}
            {activeFiltersCount > 0 && (
              <span className="bg-white text-indigo-600 px-2 py-0.5 rounded-full text-xs font-semibold">
                {activeFiltersCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Section */}
        {showFilters && (
          <div className="bg-white shadow-lg p-4 sm:p-6 mb-8 border border-indigo-100 ">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Refine Your Search
              </h2>
              <button
                onClick={resetFilters}
                className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Reset All
              </button>
            </div>

            {/* Filters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Price Range */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-800">Price Range</h3>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4">
                  <input
                    type="range"
                    min="0"
                    max="1000000"
                    step="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                    className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-3 text-sm font-bold text-indigo-600">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Property Type */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Home className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-800">Property Type</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Villa", "Apartment", "House"].map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        toggleSelection(type, setSelectedType, selectedType)
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedType.includes(type)
                          ? "bg-indigo-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-800">Bedrooms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((bed) => (
                    <button
                      key={bed}
                      onClick={() =>
                        toggleSelection(
                          bed,
                          setSelectedBedrooms,
                          selectedBedrooms
                        )
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedBedrooms.includes(bed)
                          ? "bg-purple-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {bed} BHK
                    </button>
                  ))}
                </div>
              </div>

              {/* City */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold text-gray-800">Location</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["Mumbai", "Delhi", "Goa", "Pune"].map((city) => (
                    <button
                      key={city}
                      onClick={() =>
                        toggleSelection(city, setSelectedCity, selectedCity)
                      }
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedCity.includes(city)
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Available Properties
            <span className="text-indigo-600 ml-2">
              ({filteredProperties.length})
            </span>
          </h2>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white rounded overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <Image
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-indigo-600 shadow">
                    {prop.type}
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{prop.city}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Bed className="w-4 h-4" />
                    <span className="text-sm">{prop.bedrooms} Bedrooms</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-100 gap-2">
                    <div className="text-2xl font-bold text-indigo-600">
                      ${prop.price.toLocaleString()}
                    </div>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium w-full sm:w-auto">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-gray-400 mb-4">
                <Home className="w-16 h-16 mx-auto" />
              </div>
              <p className="text-lg sm:text-xl text-gray-600 font-medium">
                No properties match your filters
              </p>
              <button
                onClick={resetFilters}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RealEstateFilter;
