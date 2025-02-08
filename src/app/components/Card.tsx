import Image from 'next/image';
import Link from 'next/link';

// Defining the type for the props for the card component
interface CardProps {
  image: string;
  title: string;
  price: string;
}

const Card = () => {
  const cards: CardProps[] = [
    {
      image: "/Photo (3).png",
      title: "The Dandy chair",
      price: "£250"
    },
    {
      image: "/Photo (2).png",
      title: "Rustic vase set",
      price: "£155"
    },
    {
      image: "/Photo (1).png",
      title: "The Silky vase",
      price: "£125"
    },
    {
      image: "/Photo@2x.png",
      title: "The Lucy Lamp",
      price: "£399"
    },
    {
        image: "/p-5.jpg",
        title: "The Dandy chair",
        price: "£250"
      },
    {
        image: "/P-6.jpg",
        title: "Rustic Vase set",
        price: "£155"
      },
      {
        image: "/P-7.jpg",
        title: "The Silky vase",
        price: "£125"
      },
      {
        image: "/P-8.jpg",
        title: "The Lucy Lamp",
        price: "£399"
      },
      {
        image: "/Photo@2x.png",
        title: "The Lucy Lamp",
        price: "£399"
      },
      {
        image: "/Photo (3).png",
        title: "The Dandy chair",
        price: "£250"
      },
      {
        image: "/Photo (2).png",
        title: "Rustic vase set",
        price: "£155"
      },
      {
        image: "/Photo (1).png",
        title: "The Silky vase",
        price: "£125"
      },
    
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-col mb-12">
          <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
            New Ceramics
          </h1>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {cards.map((card, index) => (
            <div key={index} className="p-4 md:w-1/4 sm:mb-0 mb-6">
                  <Link href="../cart" >
              <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Image
                  alt={card.title}
                  src={card.image}
                  width={1203}
                  height={503}
                  className="object-cover object-center h-64 w-full"
                />
                <div className="p-6">
                  <h2 className="text-xl font-medium title-font text-gray-900">{card.title}</h2>
                  <p className="text-base leading-relaxed mt-2">{card.price}</p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Centering the Button */}
        <Link href="../products">
        <div className="flex justify-center mt-6">
          <button className="text-gray-700 bg-[#F9F9F9] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
            View Collections
          </button>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Card;
