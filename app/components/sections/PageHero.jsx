'use client';

import Button from "@/app/components/ui/Button";
import { useRouter } from 'next/navigation';

const PageHero = ({
  title,
  description,
  buttonText = "Explore Services",
  buttonLink = "/services",
  background = {
    type: 'color',
    color: '#141428'
  },
  height = "80vh",
  showButton = true,
  textColor = "text-white",
  buttonVariant = "primary"
}) => {
  const router = useRouter();

  const handleButtonClick = () => {
    if (buttonLink.startsWith('http')) {
      window.open(buttonLink, '_blank');
    } else {
      router.push(buttonLink);
    }
  };

  return (
    <section className={`relative ${height} flex flex-col`}>
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 
            background.type === 'gradient' ? background.gradient :
            background.type === 'image' ? `url(${background.image}) center/cover no-repeat` :
            background.color
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-20 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-6 sm:pb-10 md:pb-12 lg:pb-14 flex flex-col justify-between h-full">
          <div className="max-w-4xl flex-shrink-0">
            <h1 className={`${textColor} font-[500] font-syne leading-[1.15] sm:leading-[1.2] text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] mb-3 sm:mb-4 md:mb-5 lg:mb-6`}>
              {title}
            </h1>
            
            {description && (
              <p className={`${textColor} text-lg font-[400] font-inter sm:text-xl md:text-2xl max-w-3xl mb-6 sm:mb-8 md:mb-10`}>
                {description}
              </p>
            )}

            {showButton && (
              <Button 
                variant={buttonVariant}
                onClick={handleButtonClick}
                className="w-65"
              >
                {buttonText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
