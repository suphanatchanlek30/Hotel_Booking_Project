import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            Welcome to Paradise View
          </h1>
          <p className="text-xl text-gray-600 text-center mb-8">
            Discover your perfect stay with us
          </p>
          <div className="flex justify-center">
            <Link 
              href="/rooms" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
            >
              View Rooms
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Luxury Rooms</h3>
              <p className="text-gray-600">Experience comfort at its finest</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Swimming Pool</h3>
              <p className="text-gray-600">Relax by our infinity pool</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Restaurant</h3>
              <p className="text-gray-600">Enjoy exquisite dining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}