import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">About Us</h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-500 text-xs sm:text-sm">Email</p>
              <a
                href="mailto:sales@goquant.io"
                className="text-gray-300 hover:text-goquant-green transition-colors flex items-center space-x-1 text-sm sm:text-base"
              >
                <span className="break-all">sales@goquant.io</span>
                <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Link to="/" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                Home
              </Link>
              <Link to="/products" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                Products
              </Link>
              <Link to="/insights" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                Insights
              </Link>
              <Link to="/about" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Social Media</h3>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <a
                href="https://www.linkedin.com/company/goquant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/go_quant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors"
              >
                GoQuant on X
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-3 sm:mb-4">Legal</h3>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <Link to="/terms-of-use" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/privacy-policy" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookie-policy" className="text-sm sm:text-base text-gray-300 hover:text-goquant-green transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-900 text-center">
          <p className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} GoQuant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
