"use client"

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { Product } from "../../../../types/product";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Swal from "sweetalert2";
import { addToCart } from "@/app/actions/actions";

interface ProductPageProps {
  params: { slug: string };
}

// Fixing async function syntax
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`
      *[_type == "product" && slug.current == $slug][0]{
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
      }
    `,
    { slug }
  );
}

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

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProduct(slug);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className ="aspect-square">
        {product.image && (
        <img
          src={urlFor(product.image)?.url() || ""}
          alt={product.name}
          className="w-full h-auto mt-4 rounded-lg shadow-lg"
        />
      )}
      </div>
      <div className="flex flex-col gap-8">
      <h1 className=" text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <p className="mt-4">{product.features}</p>
      <button className="bg-gradient-to-r from-slate-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg sgadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out
               " onClick={(e) => handleAddToCart(e,product)}>
                ADD TO CART
              </button>
      <p className="mt-4">{product.description}</p>
      </div>
      </div>
    </div>
  );
}
