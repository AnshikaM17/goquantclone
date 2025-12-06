import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">About Us</h3>
            <div className="space-y-3">
              <p className="text-gray-500 text-sm">Email</p>
              <a
                href="mailto:skvad.in@gmail.com"
                className="text-gray-300 hover:text-[#00FF94] transition-colors flex items-center space-x-1"
              >
                <span>skvad.in@gmail.com</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                Products
              </Link>
              <Link to="/insights" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                Insights
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Social Media</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00FF94] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Legal</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/terms-of-use" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-gray-300 hover:text-[#00FF94] transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#0a0a0a] text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GoQuant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
