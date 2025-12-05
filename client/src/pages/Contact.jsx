import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#000000] to-[#000000] page-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-white mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-gray-400 mb-12 text-center">Get in touch to schedule a demo</p>
          
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00ff7f] focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00ff7f] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#00ff7f] focus:outline-none"
                  placeholder="Tell us about your needs"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-[#00ff7f] text-black rounded-lg font-semibold hover:bg-[#00e673] transition-all duration-300 hover:shadow-lg hover:shadow-[#00ff7f]/50"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
