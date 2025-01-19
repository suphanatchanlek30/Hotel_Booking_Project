import Image from 'next/image';
import Link from 'next/link';

import SearchBar from '@/components/ui/SearchBar';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-8 lg:mt-8">
            <h1 className="font-Dancing text-[50px] text-[#8B7355] mb-4">
              Paradise View
            </h1>
            <h2 className="font-raleway text-4xl lg:text-[55px] font-bold mb-6 leading-tight">
              Hotel for every <br/> moment rich in <br/> emotion
            </h2>
            <p className="font-raleway lg:text-[15px] font-medium mb-8 text-[#1C1C1C]">
              Every moment feels like the first time <br/> in paradise view
            </p>
            <div className="flex space-x-6">
              <Link
                href="/book-now"
                className="bg-[#7C6A46] text-white text-[20px] font-inter font-medium px-8 py-3 rounded-[50px] hover:bg-[#6F5B3E]"
              >
                Book now
              </Link>
              <button className="flex items-center space-x-2 text-gray-700">
                <div className="w-[55px] h-[55px] rounded-full bg-teal-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-[60px] w-[60px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
                <span className='text-[#1C1C1C] font-inter font-medium text-[20px]'>Take a tour</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/images/Rectangle 5.svg"
              alt="Paradise View Hotel"
              width={600}
              height={400}
              className="mx-auto ml-[125px]"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 -mt-48 relative z-10">
        <SearchBar />
      </div>
    </div>
  );
}