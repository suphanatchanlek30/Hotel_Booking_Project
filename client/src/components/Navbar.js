import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Paradise View"
                width={50}
                height={50}
                className="h-[34px] w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-poppins text-[15px] font-medium">
            <Link href="/" className="text-[#000000] hover:text-[#7C6A46]">
              Home
            </Link>
            <Link href="/explore" className="text-[#000000] hover:text-[#7C6A46]">
              Explore
            </Link>
            <Link href="/rooms" className="text-[#000000] hover:text-[#7C6A46]">
              Rooms
            </Link>
            <Link href="/about" className="text-[#000000] hover:text-[#7C6A46]">
              About
            </Link>
            <Link href="/contact" className="text-[#000000] hover:text-[#7C6A46]">
              Contact
            </Link>
          </div>

          <div>
            <Link 
              href="/book-now"
              className="bg-[#7C6A46] text-white px-[40px] py-[15px] rounded-[5px] hover:bg-[#6F5B3E]"
            >
              Book now
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}