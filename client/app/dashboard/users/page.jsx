import Link from 'next/link';
import React from 'react';
import styles from "../products/productsList.module.css"
import deleteProduct from "../../actions/page"
const UsersPagePage= async () => {
  const res = await fetch('http://localhost:8080/api/customers/all', {
    next: {
      revalidate: 0,
    },
  });
  const users = await res.json();

  return (
    <>
   <div className={styles.container}>
  
      <table className={styles.table}>
        <thead>
          <tr>
          <td>id</td>
            <td>username</td>
            <td>email</td>
            <td>role</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <div className={styles.product}>
                 
                <td>{user.id}</td>
                
                </div>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
              <div className={styles.buttons}>
                  <form action={deleteProduct}>
                    <input type="hidden" name="id" value={user.id} />
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



export default UsersPagePage