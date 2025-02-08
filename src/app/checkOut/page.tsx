"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getCartItems } from "../actions/actions";
import { Product } from "../../../types/product";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

// Define types for the order and cart items
type cartItems = {
  _id: string;
  name: string;
  price: number;
  quantity?: number; // Ensure quantity is optional
  image?: any;
};

type OrderFormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  phone: string;
  status: string;
};

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
  const [formData, setFormData] = useState<OrderFormData>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    status: "pending",
  });

  // Fetch cart items and calculate total (mock data for demonstration)
  useEffect(() => {
    async function fetchCart() {
      const items = await getCartItems();
      setCartItems(items || []);
    }

    fetchCart();

    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const total = Math.max(subTotal - discount, 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlaceOrder = async () => {
    const orderData = {
      _type: "order",
      firstName: formData.firstName,
      lastName: formData.lastName,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
      phone: formData.phone,
      email: formData.email,
      cartItems: cartItems.map((item) => ({
        _type: "reference",
        _ref: item._id,
      })),
      total: total,
      discount: discount,
       status: "pending",
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");

      Swal.fire({
        icon: "success",
        title: "Order Placed!",
        text: "Your order has been placed successfully.",
        confirmButtonColor: "#4CAF50",
      });

      // Optionally, clear cart or redirect user
      setCartItems([]);
    } catch (error) {
      console.error("Error in creating order:", error);

      Swal.fire({
        icon: "error",
        title: "Order Failed",
        text: "There was an issue placing your order. Please try again.",
        confirmButtonColor: "#E74C3C",
      });
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-4xl font-bold text-center mt-5 mb-8">Checkout</h1>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Cart Items */}
        <div>
          <label className="block text-xl font-medium text-gray-700">Cart Items:</label>
          {cartItems.map((item) => (
            <ul key={item._id} className="mt-2 space-y-2">
              <li className="text-blue-600 font-bold">{item.name}</li>
              <li>${item.price}</li>
              <li>Quantity: {item.quantity || 1}</li>
              {item.image && (
                <Image
                  src={urlFor(item.image)?.url() || ""}
                  alt={item.name || "Product Image"}
                  width={120}
                  height={50}
                  className="h-[50] rounded mb-4 sm:mb-0 object-center"
                />
              )}
              <hr className="my-4 border-gray-300" />
            </ul>
          ))}
        </div>

        {/* Total */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Total in Dollars</label>
          <input
            type="number"
            value={total}
            readOnly
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        {/* Place Order Button */}
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
function nanoid(): any {
  throw new Error("Function not implemented.");
}

