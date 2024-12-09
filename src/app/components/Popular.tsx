import Image from 'next/image';
import Link from 'next/link';
const Popular = () => {
  return (
    <section className="text-gray-600 font-[Santosh] body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Our popular products
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          
          {/* First Content Block */}
          <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                src="/sofa.jpg"
                width={1203}
                height={503}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Poplar suede sofa</h2>
            <p className="text-base leading-relaxed mt-2">
              £980
            </p>
          </div>

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
            <p className="text-base leading-relaxed mt-2">
              £250
            </p>
          </div>

          <div className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                alt="content"
                src="/Photo.png"
                width={1203}
                height={503}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">The Dandy chair</h2>
            <p className="text-base leading-relaxed mt-2">
              £250
            </p>
          </div>

        </div>

        {/* Centering the button */}
        <div className="flex justify-center mt-6">
        <Link href="../p-listing" >
          <button className="text-gray-700 bg-[#F9F9F9] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            View Collections
          </button>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Popular;
