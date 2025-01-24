import Footer from "@/components/layout/Footer";

export default function RoomsPage() {
    const rooms = [
      {
        id: 1,
        name: "The Royal Room",
        price: "₦190,000",
        image: "/images/royal-room.jpg",
        available: "Yes",
        amenities: ["tv", "ac", "wifi"]
      },
      // Repeat similar objects for other rooms...
    ];
   
    return (
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] mb-16">
          <div className="absolute inset-0">
            <img 
              src="/Rooms/room.svg"
              alt="Rooms Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 font-raleway">
              Rooms and Suites
            </h1>
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg font-raleway">
              The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.
            </p>
   
            {/* Scroll Down Arrow */}
            <div className="absolute bottom-8">
              <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center animate-bounce">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </section>
   
        {/* Rooms Grid */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img 
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
   
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-[#7C6A46]">
                      {room.name}
                    </h3>
                    <div className="text-sm">
                      <span className="text-gray-600">Available: </span>
                      <span className="text-green-600">{room.available}</span>
                    </div>
                  </div>
   
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-lg font-medium">{room.price}</p>
                    <div className="flex space-x-4">
                      {room.amenities.map((amenity, index) => (
                        <div key={index} className="text-gray-600">
                          {amenity === 'tv' && (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 14H4V6h16v12z" />
                            </svg>
                          )}
                          {amenity === 'ac' && (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                            </svg>
                          )}
                          {amenity === 'wifi' && (
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 16a4 4 0 100-8 4 4 0 000 8z" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
   
                  <button className="w-full py-2 bg-[#7C6A46] text-white rounded hover:bg-[#6F5B3E] transition-colors">
                    Book now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer/>
      </main>
    );
   }