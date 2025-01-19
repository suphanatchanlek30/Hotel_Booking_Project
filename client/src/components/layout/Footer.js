export default function Footer() {
    return (
      <footer className="bg-[#7C6A46] text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="font-Dancing text-2xl mb-4">Paradise view</h3>
              <p className="text-[12px] font-raleway font-bold text-[#FFFFFF]">
                The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particularly impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)
              </p>
            </div>
   
            {/* Quick Links */}
            <div className="sm:ml-4 ml-0">
              <h4 className="font-raleway font-medium text-lg mb-4">Quick links</h4>
              <ul className="space-y-2">
                <li><a href="/book" className="text-sm hover:opacity-80 transition-opacity">Room booking</a></li>
                <li><a href="/rooms" className="text-sm hover:opacity-80 transition-opacity">Rooms</a></li>
                <li><a href="/contact" className="text-sm hover:opacity-80 transition-opacity">Contact</a></li>
                <li><a href="/explore" className="text-sm hover:opacity-80 transition-opacity">Explore</a></li>
              </ul>
            </div>
   
            {/* Company */}
            <div>
              <h4 className="font-raleway font-medium text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="/privacy" className="text-sm hover:opacity-80 transition-opacity">Privacy policy</a></li>
                <li><a href="/refund" className="text-sm hover:opacity-80 transition-opacity">Refund policy</a></li>
                <li><a href="/faq" className="text-sm hover:opacity-80 transition-opacity">F.A.Q</a></li>
                <li><a href="/about" className="text-sm hover:opacity-80 transition-opacity">About</a></li>
              </ul>
            </div>
   
            {/* Social Media */}
            <div>
              <h4 className="font-raleway font-medium text-lg mb-4">Social media</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Facebook</a></li>
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Twitter</a></li>
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">Instagram</a></li>
                <li><a href="#" className="text-sm hover:opacity-80 transition-opacity">LinkedIn</a></li>
              </ul>
            </div>
   
            {/* Newsletter */}
            <div>
              <h4 className="font-raleway font-medium text-lg mb-4">Newsletter</h4>
              <p className="text-sm mb-4">
                Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-4 rounded text-gray-800 flex-grow text-sm focus:outline-none"
                />
                <button className="bg-[#6F5B3E] text-white px-6 py-2 rounded hover:bg-[#6F5B3E] transition-colors text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
   
          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-sm">Paradise view 2023</p>
          </div>
        </div>
      </footer>
    );
   }