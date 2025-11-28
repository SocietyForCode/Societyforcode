"use client";
import React from "react";

const LogoMarquee = () => {
  const partners = [
    { name: "AWS", logo: "/awslogo.svg" },
    { name: "Microsoft", logo: "/logos/microsoftlogo.svg" },
    { name: "ServiceNow", logo: "/logos/ServiceNow_logo.svg" },
    { name: "Tenable", logo: "/logos/tenablelogo.svg" },
    { name: "Snowflake", logo: "/logos/snowfakelogo.svg" },
   
  ];

  return (
    <div className="w-full bg-gradient-to-r from-purple-700 via-purple-600 to-blue-600 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-center text-white mb-2 tracking-wide">
          Tech Stack we Work on 
        </h2>
      </div>

      <div className="relative">
        {/* Left & Right gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-purple-700 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-blue-600 to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee">
          {[...Array(3)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-8 sm:gap-16 px-4 sm:px-8 shrink-0">
              {partners.map((partner, idx) => (
                <div
                  key={`${setIdx}-${idx}`}
                  className="flex items-center justify-center shrink-0 w-28 sm:w-48 h-16 sm:h-24"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain brightness-0 invert opacity-90"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 768px) {
          .animate-marquee {
            flex-wrap: nowrap;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
