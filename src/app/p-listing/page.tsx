import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <div>
      <div className="mt-8" 
         style={{
            backgroundImage: 'url("/bg-product.jpg")', // Replace with your image URL
            backgroundSize: 'cover', // Make sure the image covers the entire h1
            backgroundPosition: 'center', // Center the image in the h1
            color: 'white', // Set text color to ensure it's visible on the image
            padding: '50px', // Add some padding to give space around the text
            height:'180px'
          }}>
        <h1  className="sm:w-2/5  text-4xl title-font  mb-2 sm:mb-0 font-[clash] text-[32px] font-normal leading-[44.8px]"
        >
          All Products
        </h1>
      </div>
      <div className="flex justify-between items-center m-7 text-[#2A254B] font-satoshi text-sm-body font-normal leading-sm-body">
        {/* Left side: Filter Buttons */}
        <div className="flex space-x-4">
          <button className="flex items-center">
            Category{" "}
            <span>
              <svg
              className="ml-2"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L6 7.5L0 0H12Z" fill="#2A254B" />
              </svg>
            </span>
          </button>
          <button className="flex items-center">
            Product type{" "}
            <span>
              <svg
              className="ml-2"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L6 7.5L0 0H12Z" fill="#2A254B" />
              </svg>
            </span>
          </button>
          <button className="flex items-center">
            Price{" "}
            <span>
              <svg
              className="ml-2"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L6 7.5L0 0H12Z" fill="#2A254B" />
              </svg>
            </span>
          </button>
          <button className="flex items-center">
            Brand{" "}
            <span>
              <svg
              className="ml-2"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L6 7.5L0 0H12Z" fill="#2A254B" />
              </svg>
            </span>
          </button>
        </div>

        {/* Right side: Sorting and Date Added */}
        <div className="flex items-center space-x-4">
          {/* Left side: Sorting By */}
          <button>Sorting By:</button>
          
          {/* Right side: Date Added */}
          <button className="flex items-center">
            Date Added{" "}
              <svg 
              className="ml-2"
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L6 7.5L0 0H12Z" fill="#2A254B" />
              </svg>
          </button>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default page;
