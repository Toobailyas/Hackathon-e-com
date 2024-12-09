import React from 'react';
import Idea from "../components/Idea";
import Services from "../components/Services";
import Different from "../components/Different";
import Signup from '../components/SignUp';
import Link from 'next/link';

const page = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="font-[ClashDisplay] flex flex-col sm:flex-row justify-between items-center p-9">
        {/* Text Section */}
        <p className="sm:text-3xl text-center sm:text-left text-3xl mb-4 font-[ClashDisplay] leading-[50.4px] w-full sm:w-2/3 text-[32px] font-normal">
          A brand built on the love of craftsmanship,
          <br />
          quality, and outstanding customer service
        </p>
        
        {/* Button Section */}
        <Link href="/p-listing" >
        <button className="mt-4 sm:mt-0 sm:ml-4 inline-flex text-gray-700 bg-[#F9F9F9] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          View our products
        </button>
        </Link>
      </div>

      {/* Other Components */}
      <Idea />
      <Services />
      <Different />
      <Signup />
    </div>
  );
};

export default page;
