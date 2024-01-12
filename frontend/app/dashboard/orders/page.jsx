import React from 'react';
import styles from "../products/productsList.module.css"
const OrderList = async () => {
    const res = await fetch('http://localhost:8080/api/orders', {
        next: {
            revalidate:0,
        }
    });
  const orders = await res.json();
  return (
    <div className={styles.container}>
    <div className={styles.top}>
  {orders.map(order => (
    <div key={order.id} className={styles.container} >
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">Order #{order.orderNumber}</h3>
        <p className="text-gray-600 mb-3">Customer Email: {order.email || 'N/A'}</p>
      </div>

      <ul className="flex justify-between ">
        {order.orderListItems.map(item => (
          <li key={item.id} className="py-3">
            <div className="text-lg font-semibold text-blue-700 mb-1">{item.name}</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <img
                alt="image"
                      width={40}
                      height={40}
                      src={item.image}
                    
                    />
              <div className="text-gray-700">Brand: {item.brand}</div>

              <div className="text-gray-700">Category: {item.category}</div>
              <div className="text-gray-700">Count in Stock: {item.countInStock}</div>
              <div className="text-gray-700">Description: {item.description}</div>
              <div className="text-gray-700">Price: ${item.price}</div>
              <div className="text-gray-700">Customer Email: {item.email || 'N/A'}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div>




  
  );
};

export default OrderList;

