import React from "react";

const Footer = () => {
  return (
    <footer className="text-white bg-[#2A254B] body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              MENU
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">
                  New Arrivals
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Recently viewed
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Popular this week
                </a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  All products
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">Crockery</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Furniture</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Homeware</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Plant pots</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Chairs</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Crockery</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              OUR COMPANY
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-white hover:text-gray-800">about us</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Vecancies</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Contact us</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">Privacy</a>
              </li>
              <li>
                <a className="text-white hover:text-gray-800">
                  Returns policy
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="font-[Clash-Display] text-base font-normal leading-[19.68px] text-left underline-from-font decoration-none text-white mb-3">
              Join our mailing list
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-55 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  placeholder="your@email.com"
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-80 font-[Santoshi] text-white bg-[#FFFFFF26] border-0 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 ml-0 xl:mt-0 flex-shrink-0 inline-flex text-[#2A254B] bg-[#ffff] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <svg width="1386" height="2" viewBox="0 0 1386 1" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="-4.37114e-08" y1="0.500122" x2="1386" y2="0.500001" stroke="white" stroke-opacity="0.1"/>
  </svg>
      <div className="bg-[#2A254B]">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
            Copyright 2022
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-white ml-1"
              target="_blank"
            >
              Avion LTD
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center gap-4 sm:justify-start">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.65 0H1.35C0.6 0 0 0.6 0 1.275V16.65C0 17.325 0.6 17.925 1.35 17.925H16.65C17.4 17.925 18 17.325 18 16.65V1.275C18 0.6 17.4 0 16.65 0ZM5.325 15.3H2.7V6.75H5.325V15.3ZM4.05 5.55C3.225 5.55 2.475 4.875 2.475 3.975C2.475 3.075 3.15 2.4 4.05 2.4C4.875 2.4 5.625 3.075 5.625 3.975C5.625 4.875 4.875 5.55 4.05 5.55ZM15.375 15.225H12.75V11.025C12.75 10.05 12.75 8.7 11.325 8.7C9.9 8.7 9.75 9.825 9.75 10.875V15.15H7.125V6.75H9.6V7.875H9.675C10.05 7.2 10.95 6.45 12.225 6.45C14.925 6.45 15.45 8.25 15.45 10.575V15.225H15.375Z"
                fill="#ffffff"
              />
            </svg>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0025 0H0.9975C0.733553 0.00196251 0.480974 0.107686 0.29433 0.29433C0.107686 0.480974 0.00196251 0.733553 0 0.9975V17.0025C0.00196251 17.2664 0.107686 17.519 0.29433 17.7057C0.480974 17.8923 0.733553 17.998 0.9975 18H9.615V11.04H7.275V8.3175H9.615V6.315C9.615 3.99 11.0325 2.7225 13.1175 2.7225C13.815 2.7225 14.5125 2.7225 15.21 2.8275V5.25H13.7775C12.645 5.25 12.4275 5.79 12.4275 6.5775V8.31H15.1275L14.775 11.0325H12.4275V18H17.0025C17.2664 17.998 17.519 17.8923 17.7057 17.7057C17.8923 17.519 17.998 17.2664 18 17.0025V0.9975C17.998 0.733553 17.8923 0.480974 17.7057 0.29433C17.519 0.107686 17.2664 0.00196251 17.0025 0Z"
                fill="#ffffff"
              />
            </svg>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
