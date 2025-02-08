// "use client";

// import { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client";
// import { urlFor } from "@/sanity/lib/image";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import Link from "next/link";

// const ContentSection = () => {
//   const [ceramicsProducts, setCeramicsProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const query = groq`
//           *[_type == "product"]{
//             _id,
//             name,
//             price,
//             category->{name},
//             image
//           }
//         `;
//         const fetchedProducts = await client.fetch(query);

//         // Filtering Ceramics
//         const ceramics = fetchedProducts.filter(
//           (p: { category: { name: string; }; }) => p.category?.name === "Ceramics"
//         );

//         setCeramicsProducts(ceramics);
//       } catch (error) {
//         console.error("❌ Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <section className="text-gray-600 body-font">
//         <p>hello</p>
//       <div className="container px-5 py-8 mx-auto">
//         <div className="flex flex-col mb-12">
//           <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
//             New Ceramics
//           </h1>
//         </div>

//         {loading ? (
//           <p className="text-center text-gray-500">Loading products...</p>
//         ) : ceramicsProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No ceramics found.</p>
//         ) : (
//           <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//             {ceramicsProducts.map((product) => (
//               <div key={product._id} className="p-4 md:w-1/4 sm:mb-0 mb-6">
//                 <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
//                   {product.image && (
//                     <Image
//                       alt={product.name}
//                       src={urlFor(product.image)?.url() || ""}
//                       width={1203}
//                       height={503}
//                       className="object-cover object-center h-64 w-full"
//                     />
//                   )}
//                   <div className="p-6">
//                     <h2 className="text-xl font-medium title-font text-gray-900">
//                       {product.name}
//                     </h2>
//                     <p className="text-base leading-relaxed mt-2">
//                       ${product.price}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Centering the Button */}
//         <div className="flex justify-center mt-6">
//           <Link href="../p-listing">
//             <button className="text-gray-700 bg-[#F9F9F9] border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
//               View Collections
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContentSection;


export default function ContentSection(){
    return(
        <div>hello</div>
    )
}