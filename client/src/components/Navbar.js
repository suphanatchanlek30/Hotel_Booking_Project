import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold">Paradise View</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/rooms" className="text-gray-700 hover:text-gray-900">
              Rooms
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}