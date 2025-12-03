import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#050505] border-b border-[#0c0c0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="text-white font-semibold text-xl sm:text-2xl lg:text-[26px] tracking-tight">
          Go<span className="text-[#00ff7f]">Q</span>uant
        </Link>

        {/* Desktop Menu Items */}
        <ul className="hidden lg:flex gap-6 xl:gap-10 text-[15px] text-white/80 font-medium">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-white transition">
            Products
          </Link>
          <Link to="/insights" className="hover:text-white transition">
            Insights
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </ul>

        {/* Desktop Book Demo Button */}
        <Link
          to="/contact"
          className="hidden sm:block relative px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-[15px] font-medium text-[#00ff7f] border border-[#00ff7f]
                     hover:bg-[#00ff7f] hover:text-black transition-all duration-300 shadow-[0_0_10px_#00ff7f30]"
        >
          Book Demo
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#050505] border-t border-[#0c0c0c]">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-white/80 hover:text-white py-2 transition" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="block text-white/80 hover:text-white py-2 transition" onClick={() => setIsMenuOpen(false)}>
              Products
            </Link>
            <Link to="/insights" className="block text-white/80 hover:text-white py-2 transition" onClick={() => setIsMenuOpen(false)}>
              Insights
            </Link>
            <Link to="/about" className="block text-white/80 hover:text-white py-2 transition" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="block text-white/80 hover:text-white py-2 transition" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link
              to="/contact"
              className="block sm:hidden text-center px-6 py-2 rounded-lg text-[15px] font-medium text-[#00ff7f] border border-[#00ff7f]
                         hover:bg-[#00ff7f] hover:text-black transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
