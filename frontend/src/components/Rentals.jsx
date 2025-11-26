const Rentals = ({ onBooking }) => {
  const rentalItems = [
    {
      id: 1,
      name: 'Surfboard',
      category: 'Boards',
      options: [
        { size: 'Shortboard (5\'6" - 6\'4")', price: '$15/day', deposit: '$50' },
        { size: 'Funboard (6\'6" - 7\'6")', price: '$18/day', deposit: '$60' },
        { size: 'Longboard (8\'0" - 9\'6")', price: '$20/day', deposit: '$70' }
      ],
      description: 'High-quality surfboards for all skill levels',
      icon: '🏄‍♂️'
    },
    {
      id: 2,
      name: 'Wetsuit',
      category: 'Apparel',
      options: [
        { size: 'Spring Suit (2mm)', price: '$10/day', deposit: '$30' },
        { size: 'Full Suit (3/2mm)', price: '$12/day', deposit: '$40' },
        { size: 'Winter Suit (4/3mm)', price: '$15/day', deposit: '$50' }
      ],
      description: 'Premium wetsuits for comfort and protection',
      icon: '🤿'
    },
    {
      id: 3,
      name: 'Bodyboard',
      category: 'Boards',
      options: [
        { size: 'Kids (33" - 37")', price: '$8/day', deposit: '$25' },
        { size: 'Adult (38" - 42")', price: '$10/day', deposit: '$30' },
        { size: 'Pro (42" - 45")', price: '$12/day', deposit: '$35' }
      ],
      description: 'Fun and easy to ride bodyboards',
      icon: '🏊'
    },
    {
      id: 4,
      name: 'SUP Board',
      category: 'Boards',
      options: [
        { size: 'All-Around (10\'6")', price: '$25/day', deposit: '$80' },
        { size: 'Touring (11\'6")', price: '$28/day', deposit: '$90' },
        { size: 'Racing (12\'6")', price: '$30/day', deposit: '$100' }
      ],
      description: 'Stand-up paddleboards with paddle included',
      icon: '🚣'
    },
    {
      id: 5,
      name: 'Surf Accessories',
      category: 'Gear',
      options: [
        { size: 'Leash', price: '$3/day', deposit: '$10' },
        { size: 'Wax Set', price: '$2/day', deposit: '$5' },
        { size: 'Surf Hat', price: '$4/day', deposit: '$15' },
        { size: 'Waterproof Camera', price: '$20/day', deposit: '$100' }
      ],
      description: 'Essential surf accessories and gear',
      icon: '🎒'
    },
    {
      id: 6,
      name: 'Beach Equipment',
      category: 'Beach',
      options: [
        { size: 'Beach Umbrella', price: '$5/day', deposit: '$20' },
        { size: 'Beach Chair', price: '$4/day', deposit: '$15' },
        { size: 'Cooler Box', price: '$6/day', deposit: '$25' },
        { size: 'Beach Tent', price: '$10/day', deposit: '$40' }
      ],
      description: 'Relax in style with our beach equipment',
      icon: '🏖️'
    }
  ];

  return (
    <div id="rentals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Equipment Rentals</h2>
          <p className="text-xl text-gray-600">Premium gear for an amazing surf experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentalItems.map((item) => (
            <div 
              key={item.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
            >
              <div className="bg-ocean-500 text-white p-6">
                <div className="text-5xl mb-3">{item.icon}</div>
                <h3 className="text-2xl font-bold">{item.name}</h3>
                <p className="text-white text-sm mt-1">{item.category}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-800 mb-4 font-medium">{item.description}</p>
                
                <div className="space-y-3 mb-6">
                  {item.options.map((option, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-2">
                      <div>
                        <p className="font-semibold text-gray-900">{option.size}</p>
                        <p className="text-sm text-gray-600">Deposit: {option.deposit}</p>
                      </div>
                      <span className="text-ocean-600 font-bold">{option.price}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onBooking({ type: 'rental', item })}
                  className="w-full bg-ocean-600 text-white py-3 rounded-lg font-semibold hover:bg-ocean-700 transition duration-300"
                >
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-ocean-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Rental Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 text-ocean-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Rental Hours
              </h4>
              <p>Daily: 7:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-600">Extended hours available on request</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 text-ocean-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
                Payment
              </h4>
              <p>Cash, Card, or Mobile Payment</p>
              <p className="text-sm text-gray-600">Deposit required for all rentals</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 text-ocean-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                Multi-Day Discounts
              </h4>
              <p>3+ days: 10% off</p>
              <p>7+ days: 20% off</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 text-ocean-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Equipment Care
              </h4>
              <p>Please rinse after use</p>
              <p className="text-sm text-gray-600">Damage fees may apply</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
