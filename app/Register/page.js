"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const RegisterPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 py-10">
      {/* Parent Container */}
      <div
        className="w-full max-w-5xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden"
        data-aos="flip-left"
      >
        {/* Left - Image Section */}
        <div className="w-full lg:w-1/2 bg-indigo-500 flex items-center justify-center p-8">
          <Image
            src="/banner.png"
            alt="Register Illustration"
            className="w-3/4 h-auto object-contain drop-shadow-lg"
          />
        </div>

        {/* Right - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-10">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Create Account
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                Join us and start your journey
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition-all duration-300"
              >
                Sign Up
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-700 mt-6">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-600 hover:underline font-medium"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
