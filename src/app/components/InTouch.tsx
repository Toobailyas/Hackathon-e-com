import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="  font-[family-name:var(--font-geist-sans)]">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="font-[Santoshi] title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">From a studio in London to a global brand with
      over 400 outlets
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed font-[Santoshi] text-[#505977]">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.<br/>
      <br/>
      Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
      <div className="flex justify-center">
      <Link href="../about" >
        <button className="ml-4 inline-flex text-gray-700 bg-[#F9F9F9] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Get in touch</button>
      </Link>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image width={500} height={500} className="object-cover object-center rounded" alt="hero" src="/Image.png"/>
    </div>
  </div>
</section>
     
    </div>
  );
}
