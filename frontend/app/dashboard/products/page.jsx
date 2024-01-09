import Link from 'next/link';
import React from 'react';
import styles from "./productsList.module.css"
import deleteProduct from "../../actions/page"
const ProductsPage = async () => {
  const res = await fetch('http://localhost:8080/api/products', {
    next: {
      revalidate: 0,
    },
  });
  const products = await res.json();

  return (
    <>
   <div className={styles.container}>
      <div className={styles.top}>
        <Link href="./createProducts">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>name</td>
            <td>image</td>
            <td>brand</td>
            <td>category</td>
            <td>CountInStock</td>
            <td>Describtions</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                 
                  {product.name}
                  <img
                    src={product.image}
                    alt=""
                    width={50}
                    height={50}
                    className={styles.productImage}
                  />
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.countInStock} in stock</td>
              <td>{product.description}</td>
              <td> kr {product.price}</td>
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
    </>
  );
};



export default ProductsPage