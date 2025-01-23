export default function TourFeatures() {
    const features = [
      {
        title: 'Luxurious rooms',
        image: '/Explore/Luxurious.svg',
        description: 'The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design'
      },
      {
        title: 'Gym center', 
        image: '/Explore/Gym.svg',
        description: 'The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design'
      },
      {
        title: 'Restaurant',
        image: '/Explore/Restaurant.svg',
        description: 'The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.Luxurious bedrooms that will make you never want to leave your room again. See more ideas about luxurious bedrooms, bedroom design'
      }
    ];
   
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-10 lg:mt-14 mb-16 sm:mb-20 lg:mb-24">
        <h2 className="text-center text-3xl sm:text-4xl lg:text-[40px] font-semibold mb-10 sm:mb-16 lg:mb-24 font-raleway">
          Take a tour
        </h2>
   
        <div className="space-y-20 sm:space-y-24 lg:space-y-28">
          {features.map((feature, index) => (
            <div key={index}>
              {/* Desktop Version */}
              <div className="relative hidden sm:block">
                <div className="aspect-[16/10] w-full overflow-hidden rounded-[30px]">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="absolute -bottom-10 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl bg-white p-8 shadow-xl lg:w-[80%]">
                  <h3 className="mb-4 text-center font-raleway text-2xl font-semibold text-[#7C6A46] lg:text-[24px]">
                    {feature.title}
                  </h3>
                  <p className="text-center font-raleway text-base font-medium leading-relaxed text-[#000000] lg:text-[15px]">
                    {feature.description}
                  </p>
                </div>
              </div>
   
              {/* Mobile Version */}
              <div className="sm:hidden">
                <div className="overflow-hidden rounded-[20px]">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                
                <div className="mt-4 px-2">
                  <h3 className="mb-2 text-center font-raleway text-xl font-semibold text-[#7C6A46]">
                    {feature.title}
                  </h3>
                  <p className="text-center font-raleway text-sm font-medium leading-relaxed text-[#000000]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
   }