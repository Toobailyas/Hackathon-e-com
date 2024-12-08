import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#FFFFFF] py-10">
      <div className="container mx-auto px-5">
        <div className="flex flex-col lg:flex-row items-start bg-[#2A254B] text-white rounded-lg shadow-lg mb-12">
          {/* Left Column: Text */}
          <div className="lg:w-1/2 w-full flex flex-col p-14 justify-between">
            <div className="mb-6">
              <h3 className="font-clash text-[32px] font-normal leading-[44.8px] sm:text-3xl text-3xl mb-4">
                The furniture brand for the future, with timeless designs
              </h3>
              <button className="bg-[#F9F9F926] text-white py-2 px-6 hover:bg-indigo-700 transition-all duration-200">
                View Collection
              </button>
            </div>

            <p className="text-lg lg:mt-9  align-bottom">
              A new era in eco-friendly furniture with Avelon, the French luxury retail brand. With nice fonts, tasteful colors, and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>

          {/* Right Column: Image */}
          <div className="lg:w-1/2 w-full h-full">
            <Image
              src="/Photo (3).png" // Path to your image
              alt="hero"
              width={500} // Image width
              height={500} // Image height
              className="object-cover object-right-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
