 "use client"
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CartItems({ items }) {
  const route = useRouter()
  const storedItems =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems")) || []
      : [];

  const itemsArray = Array.isArray(items) ? items : [];
  const allItems = [...itemsArray, ...storedItems];
const goToSignUp =() => {
  route.push("/components/signUp");
}
  return (
    <section className="py-24 bg-gray-100 font-poppins dark:bg-gray-700">
      <div className="px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
        <div>
          <h2 className="mb-8 text-4xl font-bold dark:text-gray-400">
         Shopping cart
          </h2>
          {allItems.length > 0 ? (
            <ul className="cart-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {allItems.map((item, index) => (
                <li
                  key={index}
                  className="cart-item bg-white p-4 rounded shadow-md"
                >
                  <div className="mb-4">
                    <Image
                      src="/iphone-image.jpg" // Replace with the actual image path
                      alt={item.name}
                      width={320}
                      height={180}
                      className="rounded"
                    />
                  </div>
                  <div className="item-details">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-2">Brand: {item.brand}</p>
                    <p className="text-gray-600 mb-2">
                      Category: {item.category}
                    </p>
                    <p className="text-gray-600 mb-2">
                      Description: {item.description}
                    </p>
                    <p className="text-gray-600">
                      Price: $ { item.price}
                    </p>
                    <p className="text-gray-600">Quantity: {item.qty}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      className="bg-blue-500 text-white py-2 px-4 rounded"
                      onClick={goToSignUp}
                    >
                      Process Your Checkout
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your shopping cart is empty.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CartItems;
