"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from './ProductsList.module.css';
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
    <div className="card bg-base-300 shadow-xl mb-2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ">
      <div className={`max-w-10xl px-2 py-100 sm:px-6 sm:py-24 lg:px-8 ${styles.flexContainer}`}>
        <div className={styles.flexContainer}>
          {products.map((pro) => (
            <Link key={pro.id} href={`/components/productsDetail/${pro.id}`}>
              <p>{pro.name}</p>
              <div className={styles.productContainer}>
                <img
                width={650}
                height={600}
                  src={pro.image}
                  className={styles.productImage}
                />
                <div className={styles.productInfo} >
                  <p className={styles.productPrice}>${pro.price}</p>
                  <p className={styles.productDescription}>{pro.description}</p>
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
