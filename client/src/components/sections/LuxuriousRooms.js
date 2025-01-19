export default function LuxuriousRooms() {
  const rooms = [
    {
      image: "/images_All_room/2room.svg",
      available: "2 Rooms available",
      title: "Television set, Extra sheets and Breakfast"
    },
    {
      image: "/images_All_room/4room.svg",
      available: "4 Rooms available",
      title: "Television set, Extra sheets, Breakfast, and fireplace"
    },
    {
      image: "/images_All_room/8room.svg",
      available: "8 Rooms available",
      title: "Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest"
    }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-24">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images_All_room/bg.svg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "#474742E3"
        }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-medium text-white mb-2 sm:mb-3 lg:mb-4 font-raleway">
            Luxurious Rooms
          </h2>
          <p className="text-white text-sm sm:text-[15px] font-raleway font-medium px-4">
            All room are design for your comfort
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {rooms.map((room, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Room Image Container */}
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[300px]">
                {/* Available Rooms Badge */}
                <div className="absolute top-6 sm:top-8 right-4 sm:right-6 bg-[#7C6A46] text-white text-xs sm:text-sm px-2 sm:px-3 py-2 sm:py-3 rounded transition-transform duration-300 hover:scale-105">
                  {room.available}
                </div>
                {/* Room Image */}
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full p-4 object-center object-cover transition-transform duration-300"
                />
              </div>
              {/* Room Description */}
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-sm sm:text-base lg:text-[17px] text-[#000000] font-normal font-raleway leading-relaxed">
                  {room.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}