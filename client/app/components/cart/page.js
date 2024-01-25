'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

function CartItems({ items }) {
  const route = useRouter();
  const storedItems =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems")) || []
      : [];

  const itemsArray = Array.isArray(items) ? items : [];
  const allItems = [...itemsArray, ...storedItems];
  console.log(allItems)

  const goToSignUp = () => {
    route.push("/components/signUp");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">
      <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div>
          <h2 className="mb-8 text-4xl font-bold text-white">
            Shopping Cart
          </h2>
          {allItems.length > 0 ? (
            <table className="cart-table w-full border-collapse">
              <thead>
                <tr className="text-white">
                  <th className="py-2">image</th>
                  <th className="py-2">Price</th>
                  <th className="py-2"> in stock</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">buy</th>
                </tr>
              </thead>
              <tbody>
                {allItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="mr-4">
                        <Image
                        src={item.image}
                        alt={item.name}
                         className="w-full h-auto rounded-md shadow-lg p-5"  />
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="text-gray-600">
                        <td className="py-4 text-gray-600">${item.price}</td>
                      </p>
                    </td>

                    <td className="py-4">
                      <p className="text-gray-600">
                        <td className="py-4 text-gray-600">{item.countInStock}</td>
                      </p>
                    </td>
            
                    <td className="py-4 p-5 text-gray-600">{item.qty}</td>
                    <td className="py-4">
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                        onClick={goToSignUp}
                      >
                        Process Checkout
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-white">Your shopping cart is empty.</p>
          )}
        </div>
      </div>
    </main>
  );
}

export default CartItems;
