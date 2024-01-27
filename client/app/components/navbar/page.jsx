'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function Navbar() {
  const [cartItems, setCartItems] = useState([]);
  const [userEmail, setUserEmail] = useState(null);
  const route = useRouter()

  useEffect(() => {
    const productsObjectString = localStorage.getItem('productsObject');
    if (productsObjectString) {
      const productsObject = JSON.parse(productsObjectString);
      const storedEmail = productsObject.email;
      setUserEmail(storedEmail);
    }


    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      const parsedCartItems = JSON.parse(cartItemsString);
      setCartItems(parsedCartItems);
      console.log("Cart items:", parsedCartItems);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('productsObject');
    setUserEmail(null);
    route.push("/")

  };

  return (
    <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-700 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        {/* Logo */}
        <div className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0">
          <Link href="/">
            <img
              src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
              style={{ height: '15px' }}
              alt="TE Logo"
              loading="lazy"
            />
          </Link>
        </div>


        <div className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">
          <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
            <li className="mr-4">
              <Link href="/components/contant">Contact Us</Link>
            </li>
          </ul>
        </div>

  
        {userEmail ? (
          <div className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0">
            <p>{userEmail}</p>
            <button onClick={handleLogout} className="ml-2 text-blue-500 cursor-pointer">
              Logout
            </button>
          </div>
        ) : (
          // Login Link
          <div className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0">
            <Link href="/components/login">Login</Link>
          </div>
        )}

        {/* Shopping Cart Icon */}
        <div className="ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0">
          <Link href="/components/cart">
            <div className="flex items-center">
              <div className="h-10 bg-gray-800 flex justify-center items-center">
                <div className="relative py-1">
                  <div className="t-0 absolute left-3">
                    <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-700 p-3 text-xs text-white">
                      {cartItems.map((item, index) => (
                        <p key={index}>{item.qty}</p>
                      ))}
                    </p>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

