"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../types/product";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Link from "next/link";
import { addToCart } from "../actions/actions";
import { title } from "process";
import Swal from  "sweetalert2"

const SHOES = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = groq `*[_type == "product"]{
          _id,
          name,
          slug,
          price,
          description,
          quantity,
          category->{name},
          image,
          tags,
          features,
          dimensions
        }`;
        const fetchedProducts: Product[] = await client.fetch(query);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("❌ Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) =>{
    e.preventDefault()
    addToCart(product)
    Swal.fire({
      position:"center",
      icon :"success",
      title : `${product.name} added to cart`,
      showConfirmButton:false,
      timer : 2000
    })

    
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 min-h-screen pb-32">
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {products.map((product) => (
          <div key={product._id} className="p-4 md:w-1/4 sm:mb-0 mb-6">
            <Link href={`/product2/${product.slug.current}`}>
              <div className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {product.image && (
                  <Image
                    src={urlFor(product.image)?.url() || ""}
                    alt={product.name || "Product Image"} 
                    width={1203}
                    height={503}
                    className="object-cover object-center h-64 w-full"
                  />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-medium title-font text-gray-900">{product.name}</h2>
                  <p className="text-base leading-relaxed mt-2">${product.price}</p>
                  <button className="bg-gradient-to-r from-slate-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg sgadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out
               " onClick={(e) => handleAddToCart(e,product)}>
                ADD TO CART
              </button>
                </div>
              </div>
             
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
