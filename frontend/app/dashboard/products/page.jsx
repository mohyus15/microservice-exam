"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from "./productsList.module.css"
import deleteProduct from "../../actions/page"
const ProductsPage = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch('http://localhost:8080/api/products');
          const data = await res.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching notifications:', error);
        }
      };
  
      fetchData();
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
  
    return (
        <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/dashboard/createProducts">
            <button className={styles.addButton}>createProducts</button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>name</td>
              <td>image</td>
              <td>brand</td>
              <td>category</td>
              <td>countInStock</td>
              <td>description</td>
              <td>price</td>
              <td>view</td>
              <td>delete</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                  
                  {product.name}
                <td>
          
                    <img
                      src={product.image}
                      alt=""
                      width={40}
                      height={40}
                      className={styles.productImage}
                    />
                 
            
                </td>
                <td>{product.brand}</td>
                <td>${product.category}</td>
                <td>{product.countInStock}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/productsDetail/${product.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteProduct}>
                      <input type="hidden" name="id" value={product.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
      </div>
    
    );
};

export default ProductsPage;
