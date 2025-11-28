import Button from "../ui/Button";

export default function GridBackgroundSection() {
  return (
    <section
      className="relative flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-12 sm:py-16 lg:py-20"
      style={{
        backgroundColor: '#7859d4',
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}
    >
      {/* Left Side - Heading */}
      <div className="font-syne text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
          Ready to transform your business with SYSUSA?
        </h1>
      </div>

      {/* Right Side - Paragraph and Button */}
      <div className="font-inter text-center lg:text-left lg:w-1/2 max-w-lg">
        <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed mb-6 px-1 sm:px-0">
          Our experts are here to guide you every step of the way, ensuring you reduce costs,
          increase performance, and achieve a higher ROI.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button>Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
