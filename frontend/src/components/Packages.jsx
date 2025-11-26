import { useState } from 'react';

const Packages = ({ onBooking }) => {
  const packages = [
    {
      id: 1,
      name: 'Beginner Wave',
      duration: '2 Hours',
      price: '$45',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&q=80',
      features: [
        'Professional instructor',
        'All equipment included',
        'Beach theory session',
        'Safety briefing',
        'Photo package'
      ],
      popular: false
    },
    {
      id: 2,
      name: 'Intermediate Rider',
      duration: '3 Hours',
      price: '$65',
      image: 'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=400&q=80',
      features: [
        'Advanced techniques training',
        'Premium surfboard selection',
        'Video analysis',
        'Personalized coaching',
        'Ocean safety course',
        'Photo & video package'
      ],
      popular: true
    },
    {
      id: 3,
      name: 'Pro Surfer',
      duration: '5 Hours',
      price: '$95',
      image: 'https://images.unsplash.com/photo-1537519646099-335112f03225?w=400&q=80',
      features: [
        'Expert one-on-one coaching',
        'Competition preparation',
        'Advanced wave reading',
        'Professional equipment',
        'Full day access',
        'Meal included',
        'HD video analysis'
      ],
      popular: false
    },
    {
      id: 4,
      name: 'Week Package',
      duration: '7 Days',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80',
      features: [
        '2 hours daily training',
        'Progress tracking',
        'All equipment included',
        'Flexible scheduling',
        'Certificate on completion',
        'Full media package',
        'Surf community access'
      ],
      popular: false
    }
  ];

  return (
    <div id="packages" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Surf Lesson Packages</h2>
          <p className="text-xl text-gray-300">Choose the perfect package for your skill level</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className={`bg-gray-900 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 border border-gray-700 ${
                pkg.popular ? 'ring-4 ring-ocean-500' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-ocean-500 text-white text-center py-2 font-semibold">
                  MOST POPULAR
                </div>
              )}
              <img 
                src={pkg.image} 
                alt={pkg.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300 mb-4">{pkg.duration}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{pkg.price}</span>
                  <span className="text-gray-400">/session</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => onBooking({ type: 'package', item: pkg })}
                  className="w-full bg-ocean-600 text-white py-3 rounded-lg font-semibold hover:bg-ocean-700 transition duration-300 border-2 border-ocean-500"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
