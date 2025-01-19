const testimonials = [
    {
      date: "2 Mar. 2023",
      rating: 5,
      content: "The service at the Hotel Monteleone was exceptional. There was absolutely no thing that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the overall quality of the food. Forward to the conference site. Particular positive in the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor) but there is absolutely nothing that could be improved - you have set the bar very high!",
      author: {
        name: "Anthony Bruff",
        image: "/images_Testimonies/Anthony.svg" 
      }
    },
    {
      date: "25 Mar. 2023", 
      rating: 5,
      content: "The service at the Hotel Monteleone was exceptional. There was absolutely no thing that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the overall quality of the food. Forward to the conference site. Particular positive in the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor) but there is absolutely nothing that could be improved - you have set the bar very high!",
      author: {
        name: "Regina Gella",
        image: "/images_Testimonies/Jamiyu.svg"
      }
    },
    {
      date: "5 Apr. 2023",
      rating: 4,
      content: "The service at the Hotel Monteleone was exceptional. There was absolutely no thing that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the overall quality of the food. Forward to the conference site. Particular positive in the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor) but there is absolutely nothing that could be improved - you have set the bar very high!",
      author: {
        name: "Jamiyu Aliyu",
        image: "/images_Testimonies/Regina.svg"
      }
    }
   ];
   
   export default function Testimonials() {
    return (
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-medium text-center mb-12 sm:mb-16 font-raleway">
            Testimonies
          </h2>
   
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-[#FAFAFA] rounded-lg p-6 sm:p-8"
              >
                {/* Date and Rating */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-sm text-gray-600">{testimonial.date}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
   
                {/* Content */}
                <div className="mb-6">
                  <q className="text-sm sm:text-[15px] leading-relaxed font-raleway font-medium text-gray-700">
                    {testimonial.content}
                  </q>
                </div>
   
                {/* Author */}
                <div className="flex items-center pt-8">
                  <img
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="font-medium text-sm sm:text-[15px] font-poppins">
                    {testimonial.author.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
   }