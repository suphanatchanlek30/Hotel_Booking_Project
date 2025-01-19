import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '@/components/ui/SearchBar';
import Facilities from '@/components/sections/Facilities';
import LuxuriousRooms from '@/components/sections/LuxuriousRooms';
import Testimonials from '@/components/sections/Testimonials';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="pt-14">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-8 lg:mt-10 text-center lg:text-left">
            <h1 className="font-Dancing text-[40px] sm:text-[45px] lg:text-[50px] text-[#8B7355] mb-3 sm:mb-4">
              Paradise View
            </h1>
            <h2 className="font-raleway text-4xl lg:text-[55px] font-bold mb-6 leading-tight">               
              Hotel for every <br/> moment rich in <br/> emotion             </h2>
            <p className="font-raleway text-[14px] sm:text-[15px] font-medium mb-6 sm:mb-7 lg:mb-8 text-[#1C1C1C]">
              Every moment feels like the first time {' '}
              <span className="lg:hidden">in paradise view</span>
              <span className="hidden lg:block">
                in paradise view
              </span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/book-now"
                className="bg-[#7C6A46] text-white text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-medium px-6 sm:px-7 lg:px-8 py-2.5 sm:py-3 rounded-[50px] hover:bg-[#6F5B3E] transition-colors w-full sm:w-auto text-center"
              >
                Book now
              </Link>
              <button className="flex items-center justify-center sm:justify-start space-x-3 w-full sm:w-auto">
                <div className="w-[45px] h-[45px] sm:w-[50px] sm:h-[50px] lg:w-[55px] lg:h-[55px] rounded-full bg-teal-500 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-[30px] w-[30px] sm:h-[35px] sm:w-[35px] lg:h-[40px] lg:w-[40px] text-white" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                    />
                  </svg>
                </div>
                <span className='text-[#1C1C1C] font-inter font-medium text-[16px] sm:text-[18px] lg:text-[20px]'>
                  Take a tour
                </span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 w-full ">
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[700px]">
              <Image
                src="/images/Rectangle 5.svg"
                alt="Paradise View Hotel"
                fill
                className="object-contain lg:object-right"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="container mx-auto px-4 lg:px-8 -mt-20 sm:-mt-32 lg:-mt-52 relative z-10">
        <SearchBar />
      </div>

      {/* Facilities */}
      <Facilities />

      {/* Luxurious Rooms */}
      <LuxuriousRooms />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </div>
  );
}