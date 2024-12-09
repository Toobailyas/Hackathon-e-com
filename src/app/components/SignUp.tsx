export default function Signup(){
    return(
    <section className="text-gray-600 bg-[#F9F9F9] font-[Santoshi] body-font">
      <div className="container px-5 py-10 mx-auto bg-[#FFFFFF]">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="font-clash text-[36px] font-normal leading-[50.4px] text-[#2A254B] sm:text-3xl text-2xl title-font mb-4">
          Join the club and get the benefits
          </h1>
          <p className="text-[#2A254B] lg:w-2/3 mx-auto leading-relaxed text-base">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
        </div>
        <div className="flex lg:w-2/5  bg-[#F9F9F9] w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end sm:items-center">
          <div className="relative flex-grow w-full">
          <input
                  placeholder="your@email.com"
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="lg:w-80 sm:w-4 font-[Santoshi] text-white bg-[#FFFFFF26] border-0 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
          </div>
          <button className="text-white bg-[#2A254B] border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            SignUp
          </button>
        </div>
      </div>
    </section>
  );
}
