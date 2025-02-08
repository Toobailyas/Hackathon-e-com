"use client";

import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { Product } from "../../../types/product";
import Link from 'next/link';
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [expandedDescription, setExpandedDescription] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const router = useRouter();

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
        router.push("/checkOut")
      }
    });
  };


  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity !== undefined) {
      handleQuantityChange(id, product.quantity + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) {
      handleQuantityChange(id, product.quantity - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const toggleDescription = (id: string) => {
    setExpandedDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="max-w-4xl px-4 font-[ClashDisplay] my-10 text-[#2A254B]">
      <h1 className="text-4xl py-7 text-[36px] font-normal leading-[50.4px]">Your Shopping Cart</h1>
      <h2 className="text-2xl px-3 py-4">Product</h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse font-clash border-gray-200 text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 font-normal">Product</th>
              <th className="py-2 px-4 border-b border-gray-300 font-normal text-center">Quantity</th>
              <th className="py-2 px-4 border-b border-gray-300 font-normal text-right">Total</th>
              <th className="py-2 px-4 border-b border-gray-300 font-normal text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <tr key={item._id}>
                  <td className="py-4 px-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-4">
                      {item.image && (
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name || "product image"}
                          width={60}
                          height={80}
                          className="h-[50] rounded mb-4 sm:mb-0"
                        />
                      )}
                      <div className="sm:text-sm">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-500 text-sm">
                          {item.description && item.description.length > 100 && !expandedDescription[item._id]
                            ? `${item.description.substring(0, 100)}...`
                            : item.description || "Product description not available."}
                          {item.description && item.description.length > 100 && (
                            <button
                              className="text-blue-500"
                              onClick={() => toggleDescription(item._id)}
                            >
                              {expandedDescription[item._id] ? "Read less" : "Read more"}
                            </button>
                          )}
                        </p>
                        <p className="font-semibold mt-1">${item.price}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        onClick={() => handleDecrement(item._id)}
                        className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 text-xs sm:text-sm"
                      >
                        -
                      </button>
                      <span className="mx-2 text-xs sm:text-sm">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item._id)}
                        className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400 text-xs sm:text-sm"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right font-semibold text-xs sm:text-sm">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => handleRemove(item._id)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-xs sm:text-sm"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center py-4 text-gray-600">
                  Your cart is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 flex flex-col items-start sm:items-end gap-4 sm:text-right">
          <div className="flex gap-4 justify-between sm:justify-end w-full max-w-sm text-lg">
            <p className="font-medium">Subtotal</p>
            <p className="font-semibold">${calculateTotal().toFixed(2)}</p>
          </div>
          <p className="text-gray-500 text-sm">
            Taxes and shipping are calculated at checkout.
          </p>
          <Link href="../checkOut">
            <button className="text-white bg-[#2A254B] border-0 py-2 px-7 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Go to checkout
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
