import {
    Waves,
    Wifi,
    UtensilsCrossed,
    Dumbbell,
    Gamepad,
    Lamp,
    Shirt,
    Car
  } from 'lucide-react';
  
  const facilities = [
    { icon: Waves, name: 'Swimming Pool' },
    { icon: Wifi, name: 'Wifi' },
    { icon: UtensilsCrossed, name: 'Breakfast' },
    { icon: Dumbbell, name: 'Gym' },
    { icon: Gamepad, name: 'Game center' },
    { icon: Lamp, name: '24/7 Light' },
    { icon: Shirt, name: 'Laundry' },
    { icon: Car, name: 'Parking space' }
  ];
  
  export default function Facilities() {
    return (
      <section className="py-8 sm:py-12 lg:py-16 bg-white mt-8 sm:mt-10 lg:mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <h2 className="text-[28px] sm:text-[32px] lg:text-[40px] font-medium mb-2 sm:mb-3 lg:mb-4 font-poppins text-[#000000]">
              Our Facilities
            </h2>
            <p className="text-[13px] sm:text-[14px] lg:text-[15px] font-medium font-poppins text-[#000000] max-w-2xl mx-auto">
              We offer modern (5 star) hotel facilities for your comfort.
            </p>
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-[#FAFAFA] p-6 sm:p-8 lg:p-16 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <facility.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-3 sm:mb-4 text-[#7C6A46]" />
                <h3 className="text-[14px] sm:text-[15px] lg:text-[16px] font-medium font-poppins text-gray-700">
                  {facility.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }