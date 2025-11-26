import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Rentals from './components/Rentals';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);

  const handleBooking = (data) => {
    setBookingData(data);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setBookingData(null);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Packages onBooking={handleBooking} />
      <Rentals onBooking={handleBooking} />
      <About />
      <Contact />
      <Footer />
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={closeBooking} 
        bookingData={bookingData}
      />
    </div>
  );
}

export default App;
