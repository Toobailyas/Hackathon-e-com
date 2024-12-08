import Image from 'next/image';

const ContentSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              New Ceramics
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          
          {/* First Content Block */}
          <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                src="/Photo (3).png"
                width={1203}
                height={503}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Dandy chair</h2>
            <p className="text-base leading-relaxed mt-2">£250</p>
          </div>

          {/* Second Content Block */}
          <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                src="/Photo (2).png"
                width={1204}
                height={504}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">Rustic vase set</h2>
            <p className="text-base leading-relaxed mt-2">£155</p>
          </div>

          {/* Third Content Block */}
          <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                src="/Photo (1).png"
                width={1203}
                height={503}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Silky vase</h2>
            <p className="text-base leading-relaxed mt-2">£125</p>
          </div>

          {/* Fourth Content Block */}
          <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                src="/Photo@2x.png"
                width={1205}
                height={505}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Lucy Lamp</h2>
            <p className="text-base leading-relaxed mt-2">£399</p>
          </div>

        </div>

        {/* Centering the Button */}
        <div className="flex justify-center mt-6">
          <button className="text-gray-700 bg-[#F9F9F9] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            View Collections
          </button>
        </div>

      </div>
    </section>
  );
};

export default ContentSection;
