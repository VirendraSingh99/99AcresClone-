import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-16 px-4">
      <div className="grid max-w-screen-xl grid-cols-1 md:grid-cols-2 gap-12 p-8 rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-gray-900 dark:text-white">
              Let&apos;s talk!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have a question or want to work together? Fill out the form and we’ll get back to you!
            </p>
          </div>
          <Image
            src="/doodle.svg"
            alt="Doodle"
            className="mt-6 p-6 h-52 md:h-64 object-contain"
          />
        </div>

        {/* Right Side - Form */}
        <form
          noValidate
          className="space-y-6 bg-gray-50 dark:bg-gray-700 p-6 md:p-8 rounded-xl shadow-inner"
        >
          {/** Full Name */}
          <div className="relative">
            <input
              id="name"
              type="text"
              placeholder=" "
              className="peer w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
            >
              Full Name
            </label>
          </div>

          {/** Email */}
          <div className="relative">
            <input
              id="email"
              type="email"
              placeholder=" "
              className="peer w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
            >
              Email
            </label>
          </div>

          {/** Message */}
          <div className="relative">
            <textarea
              id="message"
              rows="5"
              placeholder=" "
              className="peer w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-2 text-gray-500 dark:text-gray-300 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base transition-all"
            >
              Message
            </label>
          </div>

          {/** Submit Button */}
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
