"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    // Check if localStorage is available
    const storedItems =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItems")) || []
        : [];

    const quantity = storedItems.reduce((total, item) => total + item.qty, 0);
    setTotalQuantity(quantity);
  }, []);

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <button className="text-white">Content</button>
        </Link>
        <Link href="/components/login">
          <p className="text-white relative">
            Login
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2">
                {totalQuantity}
              </span>
            )}
          </p>
        </Link>
      </div>
      <Link href="/components/cart">
        <button className="text-white flex items-center">
          <span className="text-white mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className=" w-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </span>
          Your Cart
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;


