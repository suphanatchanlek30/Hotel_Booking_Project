import Footer from "@/components/layout/Footer";

export default function Contact() {
    return (
      <main>
        {/* Hero Section */}
        <section className="relative h-[90vh] mb-20">
          <div className="absolute inset-0">
            <img 
              src="/Contact/contact.svg"
              alt="Contact Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 font-raleway">
              Contact us
            </h1>
            <p className="max-w-2xl text-sm sm:text-base lg:text-lg font-raleway">
              The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.
            </p>
          </div>
        </section>
   
        {/* Contact Form */}
        <section className="container mx-auto px-4 lg:px-8 mb-20">
          <form className="max-w-3xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-600 mb-2 font-raleway">Fullname</label>
                <input
                  type="text"
                  placeholder="e.g John Becker"
                  className="w-full p-3 border border-gray-300 rounded-md font-raleway text-gray-700 focus:outline-none focus:border-[#7C6A46]"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2 font-raleway">Email</label>
                <input
                  type="email"
                  placeholder="johnbecker@gmail.com"
                  className="w-full p-3 border border-gray-300 rounded-md font-raleway text-gray-700 focus:outline-none focus:border-[#7C6A46]"
                />
              </div>
            </div>
   
            <div>
              <label className="block text-gray-600 mb-2 font-raleway">Message</label>
              <textarea
                rows="8"
                placeholder="message"
                className="w-full p-3 border border-gray-300 rounded-md font-raleway text-gray-700 focus:outline-none focus:border-[#7C6A46]"
              ></textarea>
            </div>
          </form>
        </section>
   
        {/* Map */}
        <section className="">
          <div className="h-[400px] sm:h-[500px] lg:h-[600px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=your-map-embed-url"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <Footer/>
      </main>
    );
   }