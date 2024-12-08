"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center mt-10 mb-6 mx-7">
        {/* Logo */}
        <div className="flex items-center">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.7499 19.6894L15.0859 14.0254C16.4469 12.3914 17.1256 10.2956 16.9808 8.17395C16.8359 6.05231 15.8787 4.06819 14.3082 2.63434C12.7378 1.20048 10.675 0.427288 8.54894 0.4756C6.42292 0.523912 4.39736 1.39001 2.89365 2.89372C1.38993 4.39744 0.523836 6.42299 0.475524 8.54902C0.427212 10.675 1.20041 12.7378 2.63426 14.3083C4.06812 15.8788 6.05224 16.836 8.17387 16.9808C10.2955 17.1257 12.3913 16.447 14.0253 15.0859L19.6894 20.75L20.7499 19.6894ZM1.99993 8.75001C1.99993 7.41499 2.39581 6.10994 3.13751 4.99991C3.87921 3.88988 4.93342 3.02471 6.16682 2.51382C7.40022 2.00293 8.75742 1.86926 10.0668 2.12971C11.3762 2.39016 12.5789 3.03303 13.5229 3.97704C14.4669 4.92104 15.1098 6.12378 15.3702 7.43315C15.6307 8.74252 15.497 10.0997 14.9861 11.3331C14.4752 12.5665 13.6101 13.6207 12.5 14.3624C11.39 15.1041 10.085 15.5 8.74993 15.5C6.96033 15.498 5.2446 14.7862 3.97916 13.5208C2.71371 12.2553 2.00192 10.5396 1.99993 8.75001Z" fill="#2A254B"/>
          </svg>
          <h2 className="text-#22202E text-[24px] font-normal leading-[29.52px]" style={{ fontFamily: 'Clash Display' }}>Avian</h2>
        </div>

        {/* Search Icon Outside Burger Menu */}
        <div className="flex items-center space-x-6">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 21.5C8.32843 21.5 9 20.8285 9 20C9 19.1716 8.32843 18.5 7.5 18.5C6.67157 18.5 6 19.1716 6 20C6 20.8285 6.67157 21.5 7.5 21.5Z" fill="#2A254B"/>
            <path d="M18 21.5C18.8284 21.5 19.5 20.8285 19.5 20C19.5 19.1716 18.8284 18.5 18 18.5C17.1716 18.5 16.5 19.1716 16.5 20C16.5 20.8285 17.1716 21.5 18 21.5Z" fill="#2A254B"/>
            <path d="M21 4.25003H4.365L3.75 1.10003C3.71494 0.928074 3.62068 0.773857 3.48364 0.664226C3.3466 0.554595 3.17546 0.496492 3 0.500031H0V2.00003H2.385L5.25 16.4C5.28506 16.572 5.37932 16.7262 5.51636 16.8358C5.6534 16.9455 5.82454 17.0036 6 17H19.5V15.5H6.615L6 12.5H19.5C19.6734 12.5043 19.8429 12.4483 19.9796 12.3416C20.1163 12.235 20.2119 12.0842 20.25 11.915L21.75 5.16503C21.7751 5.05375 21.7745 4.9382 21.7483 4.82718C21.722 4.71616 21.6708 4.61259 21.5985 4.52436C21.5261 4.43613 21.4347 4.36556 21.3309 4.31802C21.2272 4.27048 21.114 4.24723 21 4.25003ZM18.9 11H5.715L4.665 5.75003H20.0625L18.9 11Z" fill="#2A254B"/>
          </svg>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden flex items-center p-2 border rounded focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="#2A254B" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Horizontal Line */}
      <svg width="1386" height="1" viewBox="0 0 1386 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="-4.37114e-08" y1="0.500122" x2="1386" y2="0.500001" stroke="black" strokeOpacity="0.1"/>
      </svg>

      {/* Navigation Links - Desktop View */}
      <div className="hidden lg:flex flex-wrap justify-center gap-6 mt-7">
        <Link href="/plant-pots">
          <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi' }}>Plant Pots</h4>
        </Link>
        <Link href="/ceramics">
          <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi' }}>Ceramics</h4>
        </Link>
        <Link href="/tables">
          <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi' }}>Tables</h4>
        </Link>
        <Link href="/chair">
          <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi' }}>Chair</h4>
        </Link>
        <Link href="/crockery">
          <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi' }}>Crockery</h4>
        </Link>
        <Link href="/tableware">
          <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi' }}>Tableware</h4>
        </Link>
        <Link href="/cutlery">
          <h4 className="text-[#726E8D] text-left text-[16px] font-normal leading-[21.6px]" style={{ fontFamily: 'Satoshi' }}>Cutlery</h4>
        </Link>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white p-4`}>
        <Link href="/plant-pots"><h4 className="text-[#726E8D] text-left text-[16px]">Plant Pots</h4></Link>
        <Link href="/ceramics"><h4 className="text-[#726E8D] text-left text-[16px]">Ceramics</h4></Link>
        <Link href="/tables"><h4 className="text-[#726E8D] text-left text-[16px]">Tables</h4></Link>
        <Link href="/chair"><h4 className="text-[#726E8D] text-left text-[16px]">Chair</h4></Link>
        <Link href="/crockery"><h4 className="text-[#726E8D] text-left text-[16px]">Crockery</h4></Link>
        <Link href="/tableware"><h4 className="text-[#726E8D] text-left text-[16px]">Tableware</h4></Link>
        <Link href="/cutlery"><h4 className="text-[#726E8D] text-left text-[16px]">Cutlery</h4></Link>
      </div>
    </div>
  );
};

export default Navbar;
