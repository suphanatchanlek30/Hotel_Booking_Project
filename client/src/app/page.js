import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="font-cursive text-3xl text-[#8B7355] mb-4">
              Paradise View
            </h1>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Hotel for every moment rich in emotion
            </h2>
            <p className="text-gray-600 mb-8">
              Every moment feels like the first time in paradise view
            </p>
            <div className="flex space-x-4">
              <Link
                href="/book-now"
                className="bg-[#8B7355] text-white px-8 py-3 rounded-md hover:bg-[#6F5B3E]"
              >
                Book now
              </Link>
              <button className="flex items-center space-x-2 text-gray-700">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </div>
                <span>Take a tour</span>
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
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}