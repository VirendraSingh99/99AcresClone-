"use client";
import React from "react";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear authentication tokens
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-8">
      <div className="bg-white shadow-2xl rounded-2xl p-6 md:p-8 max-w-md w-full mx-auto border border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Logout Confirmation
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Are you sure you want to log out of your account? You'll need to sign in again to access your dashboard.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={handleLogout}
            className="flex-1 bg-red-500 hover:bg-red-600 focus:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 shadow-md hover:shadow-lg"
          >
            Yes, Logout
          </button>
          <button
            onClick={() => router.push("/")}
            className="flex-1 bg-white hover:bg-gray-50 focus:bg-gray-50 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-all duration-300 border border-gray-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 shadow-sm hover:shadow-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;