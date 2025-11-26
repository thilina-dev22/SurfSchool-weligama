const About = () => {
  return (
    <div id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Weligama Surf School</h2>
          <p className="text-xl text-gray-300">Your premier surfing destination in Sri Lanka</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-1">
            <h3 className="text-3xl font-bold text-white mb-6">Our Story</h3>
            <p className="text-gray-300 mb-4">
              Founded in 2010, Weligama Surf School has been introducing surf enthusiasts to the beautiful waves of Sri Lanka's southern coast. Our experienced instructors are passionate about sharing their love for surfing and ocean safety.
            </p>
            <p className="text-gray-300 mb-4">
              Located on the stunning Weligama Beach, we offer the perfect combination of consistent waves, warm water, and a welcoming community. Whether you're catching your first wave or refining advanced techniques, we're here to support your surf journey.
            </p>
            <p className="text-gray-300">
              We pride ourselves on maintaining high safety standards, using quality equipment, and creating an inclusive environment where everyone can enjoy the ocean.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80" 
              alt="Surf School" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover mb-6"
            />
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 mb-16 shadow-xl border-2 border-ocean-500">
          <h4 className="text-2xl font-bold mb-6 text-white">Why Choose Us?</h4>
          <div className="space-y-4">
            <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              <div>
                <h5 className="font-semibold text-white">ISA Certified Instructors</h5>
                <p className="text-gray-300 text-sm">Professional coaching from internationally certified surf instructors</p>
              </div>
            </div>
            <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              <div>
                <h5 className="font-semibold text-white">Premium Equipment</h5>
                <p className="text-gray-300 text-sm">Top-quality surfboards and safety gear for all skill levels</p>
              </div>
            </div>
            <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              <div>
                <h5 className="font-semibold text-white">Perfect Location</h5>
                <p className="text-gray-300 text-sm">Ideal waves for beginners and challenging spots for advanced surfers</p>
              </div>
            </div>
            <div className="flex items-start">
                <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-1 text-ocean-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              <div>
                <h5 className="font-semibold text-white">Small Group Classes</h5>
                <p className="text-gray-300 text-sm">Maximum 4 students per instructor for personalized attention</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center bg-gray-800 rounded-xl p-8 shadow-lg border border-ocean-500">
            <div className="text-4xl font-bold text-ocean-400 mb-2 text-gray-100">15+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
          <div className="text-center bg-gray-800 rounded-xl p-8 shadow-lg border border-ocean-500">
            <div className="text-4xl font-bold text-ocean-400 mb-2 text-gray-100">10,000+</div>
            <div className="text-gray-300">Happy Surfers</div>
          </div>
          <div className="text-center bg-gray-800 rounded-xl p-8 shadow-lg border border-ocean-500">
            <div className="text-4xl font-bold text-ocean-400 mb-2 text-gray-100">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
