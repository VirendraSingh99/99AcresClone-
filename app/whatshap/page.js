"use client";
import React, { useEffect } from "react";
import { Loader2 } from "lucide-react";

const Page = () => {
  useEffect(() => {
    // 👇 Replace with your real WhatsApp group or chat link
    const whatsappLink = "https://chat.whatsapp.com/EXAMPLEGROUPLINK";

    // Redirect after 1 second
    const timer = setTimeout(() => {
      window.location.href = whatsappLink;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center">
      <Loader2 className="animate-spin text-green-600 mb-4" size={40} />
      <h1 className="text-lg font-semibold text-gray-800">
        Opening WhatsApp Group...
      </h1>
      <p className="text-sm text-gray-500 mt-2">
        If it doesn’t open automatically,{" "}
        <a
          href="https://chat.whatsapp.com/EXAMPLEGROUPLINK"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 underline"
        >
          click here
        </a>
        .
      </p>

      {/* Footer */}
      <footer className="absolute bottom-3 text-xs text-gray-500">
        © {new Date().getFullYear()} Ghumakkar Masti
      </footer>
    </div>
  );
};

export default Page;
