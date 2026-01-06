"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const LoginPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true, // run only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4 py-10">
      {/* Parent Container */}
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col lg:flex-row overflow-hidden">
        {/* Left - Form Section */}
        <div
          className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-10"
          data-aos="flip-left"
        >
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                Sign In
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                Sign in to access your account
              </p>
            </div>

            {/* Form */}
            <form className="space-y-6">
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
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-xs text-indigo-600 hover:underline font-medium"
                  >
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-700 mt-6">
              Don’t have an account?{" "}
              <Link
                href="/Register"
                className="text-indigo-600 hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>

        {/* Right - Image Section */}
        <div
          className="w-full lg:w-1/2 bg-indigo-500 flex items-center justify-center p-8"
          data-aos="fade-left"
        >
          <Image
            src="/banner.png" // change this image path if needed
            alt="Login Illustration"
            className="w-3/4 h-auto object-contain drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
