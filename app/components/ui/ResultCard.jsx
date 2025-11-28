import Image from "next/image";
import React from "react";

export default function ResultCard({ quote, author, organization, logo, impact }) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-sm flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 hover:shadow-md h-full">
      {/* Quote Section */}
      <div>
        <p className="text-base sm:text-lg md:text-xl text-gray-900 font-bold font-syne leading-relaxed mb-3 sm:mb-4">
          "{quote}"
        </p>
        <p className="text-xs sm:text-sm text-gray-700">
          {author}, <span className="font-semibold">{organization}</span>
        </p>
      </div>

      {/* Divider */}
      <hr className="my-4 sm:my-6 border-gray-200" />

      {/* Logo + Impact */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <div className="w-16 h-12 sm:w-20 sm:h-16 relative flex-shrink-0">
          <Image src={logo} alt={`${organization} logo`} fill className="object-contain" />
        </div>
        <p className="text-gray-800 text-xs sm:text-sm font-inter leading-snug">
          {impact}
        </p>
      </div>
    </div>
  );
}