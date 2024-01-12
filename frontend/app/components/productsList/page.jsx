"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="container mx-auto">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex justify-center">
        {products.map((pro) => (
          <Link key={pro.id} href={`/components/productsDetail/${pro.id}`}>
            <div className="bg-gray-100 p-4 rounded-lg mx-2">
              <img
                src={pro.image}
                alt={pro.name}
                height={200}
                width={440}
                className="mx-auto"
              />
              <div className="mt-5 text-center">
                <p className="text-lg font-semibold">{pro.name}</p>
                <p className="text-gray-600">${pro.price}</p>
                <p className="text-gray-500">{pro.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductsList;
