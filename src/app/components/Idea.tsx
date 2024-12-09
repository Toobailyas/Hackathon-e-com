import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="  font-[family-name:var(--font-geist-sans)]">
      <section className="text-white body-font">
        
  <div className="container bg-[#2A254B] mx-auto flex md:flex-row flex-col items-center">
    <div className=" p-10 lg:flex-grow md:w-1/2 lg:w-1/2 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-[Santoshi] title-font sm:text-4xl text-3xl mb-4 font-medium">It started with a small idea

      </h1>
      <p className="mb-8 leading-relaxed font-[Santoshi]">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
      <div className="flex justify-center">
      <div className="flex justify-center mt-6">
      <Link href="../p-listing" >
          <button className="text-gray-700 bg-[#F9F9F9] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            View Collections
          </button>
          </Link>
          </div>
      </div>
    </div>
    <div className="lg:max-w-lg mr-7 lg:w-full md:w-1/2 w-5/6">
      <Image width={500} height={500} className="object-cover object-center rounded" alt="hero" src="/pic.jpg"/>
    </div>
  </div>
</section>
     
    </div>
  );
}
