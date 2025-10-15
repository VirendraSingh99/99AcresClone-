import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111820] text-gray-300 py-10 px-6 md:px-16">
      {/* ===== Top Grid Section ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* 99acres Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">99acres</h3>
          <ul className="space-y-2 text-sm">
            <li>Mobile Apps</li>
            <li>Our Services</li>
            <li>Price Trends</li>
            <li>Post your Property</li>
            <li>Real Estate Investments</li>
            <li>Builders in India</li>
            <li>Area Converter</li>
            <li>Articles</li>
            <li>Rent Receipt</li>
            <li>Customer Service</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Company Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers with us</li>
            <li>Terms & Conditions</li>
            <li>Request Info</li>
            <li>Feedback</li>
            <li>Report a problem</li>
            <li>Testimonials</li>
            <li>Privacy Policy</li>
            <li>Summons/Notices</li>
            <li>Grievances</li>
            <li>Safety Guide</li>
          </ul>
        </div>

        {/* Our Partners Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Partners</h3>
          <ul className="space-y-2 text-sm">
            <li>Naukri.com - Jobs in India</li>
            <li>NaukriGulf.com - Jobs in middle east</li>
            <li>Jeevansathi.com - Matrimonials</li>
            <li>Brij.com - Professional Networking</li>
            <li>Shiksha.com - Education Career Info</li>
            <li>Policybazaar.com - Insurance India</li>
            <li>PaisaBazaar.com</li>
            <li>AmbitionBox.com</li>
            <li>FirstNaukri.com - A jobsite for campus Hiring</li>
            <li>Jobhai.com - Find Jobs Near You</li>
          </ul>
        </div>

        {/* Contact Us Column */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">
            <strong>Toll Free - </strong>1800 41 99099
            <br />
            9:30 AM to 6:30 PM (Mon-Sun)
          </p>
          <p className="mt-3 text-sm">
            <strong>Email - </strong>feedback@99acres.com
          </p>

          {/* Social Icons */}
          <div className="mt-5">
            <h4 className="font-semibold mb-2 text-white">Connect with us</h4>
            <div className="flex space-x-3 text-lg">
              <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
              <FaYoutube className="hover:text-red-500 cursor-pointer" />
              <FaTwitter className="hover:text-sky-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            </div>
          </div>

          {/* App Store Buttons */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-white">Download the App</h4>
            <div className="flex space-x-2">
              <Image
                src="/Play.png"
                alt="Google Play"
                width={120}
                height={40}
              />
              <Image
                src="/ios.png"
                alt="App Store"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Footer Bottom Section ===== */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-sm text-gray-400 text-center md:text-left">
        <p>
          All trademarks are the property of their respective owners.
          <br />
          All rights reserved - Info Edge (India) Ltd. A naukri.com group
          venture.
        </p>
      </div>
    </footer>
  );
}
