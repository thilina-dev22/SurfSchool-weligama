const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">🏄 Weligama Surf School</h3>
            <p className="text-gray-400 text-sm">
              Your premier destination for surfing lessons and equipment rentals in beautiful Weligama, Sri Lanka.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#packages" className="hover:text-white transition">Packages</a></li>
              <li><a href="#rentals" className="hover:text-white transition">Rentals</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Surf Lessons</li>
              <li>Equipment Rentals</li>
              <li>Surf Photography</li>
              <li>Private Coaching</li>
              <li>Group Sessions</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📍 Weligama Beach Road</li>
              <li>📞 +94 77 123 4567</li>
              <li>✉️ info@weligamasurf.com</li>
              <li>🕐 7:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Weligama Surf School. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
