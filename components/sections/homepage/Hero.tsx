import Navbar from "@/components/shared/Navbar";
import FindOutMore from "@/components/ui/buttons/FindOutMore";
import PlayDemo from "@/components/ui/buttons/PlayDemo";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* light purple gradient ball at top left */}
      <div className="absolute -top-36 -left-56 w-md h-112 rounded-full bg-linear-to-tr from-[#c084fc] to-[#e879f9] opacity-25 blur-3xl pointer-events-none z-0"></div>

      {/* Hero Section Content */}
      <div className="relative z-10 w-full">
        <Navbar />
        <div className="flex flex-col lg:flex-row pt-8 lg:pt-16 items-center w-full container mx-auto px-4 md:px-8 lg:px-16 gap-10 lg:gap-0">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="max-w-136.25">
              <h3 className="text-[#DF6951] font-bold text-base sm:text-lg md:text-[20px] uppercase mb-4 md:mb-6 font-poppins tracking-wider">
                Best Destinations around the world
              </h3>
              {/* Heading */}
              <h1 className="text-[#181E4B] font-bold text-4xl sm:text-5xl lg:text-[84px] font-volkhov tracking-[-4%] leading-tight lg:leading-22.25 mb-6 md:mb-7.5">
                Travel, enjoy and live a new and full life
              </h1>
              {/* Description */}
              <p className="font-poppins text-[#5E6282] font-medium text-sm md:text-base mb-6 md:mb-8 leading-relaxed">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell they
                west hard for the.
              </p>
              {/* CTA Button */}
              <div className="flex gap-x-6 md:gap-x-11 items-center justify-center lg:justify-start">
                <FindOutMore />
                <PlayDemo />
              </div>
            </div>
          </div>
          {/* Right Content */}
          <div className="w-full lg:w-1/2 z-10 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-125 lg:max-w-196">
              {/* Background Airplane (behind backpack) */}
              <div className="absolute top-[12%] right-[-2%] w-20 md:w-32.5 z-0 pointer-events-none opacity-90 -rotate-12">
                <Image
                  src="/assets/airplane.svg"
                  alt="Background Airplane"
                  width={119}
                  height={154}
                  className="w-full h-auto"
                />
              </div>

              {/* Traveler Image */}
              <Image
                src="/assets/traveller.svg"
                alt="Hero Image"
                width={784}
                height={764}
                className="relative z-10 w-full h-auto object-contain"
                priority
              />

              {/* Foreground Airplane (above passport) */}
              <div className="absolute top-[1%] left-[16%] w-20 md:w-32.5 z-20 pointer-events-none">
                <Image
                  src="/assets/airplane.svg"
                  alt="Foreground Airplane"
                  width={119}
                  height={154}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;