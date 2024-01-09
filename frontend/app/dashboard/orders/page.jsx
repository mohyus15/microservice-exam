import React from 'react';

const OrderList = async () => {
    const res = await fetch('http://localhost:8080/api/orders', {
        next: {
            revalidate:0,
        }
    });
  const orders = await res.json();
  return (
<div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container mx-auto">
  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Order List</h2>

  {orders.map(order => (
    <div key={order.id} className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h3 className="text-2xl font-semibold mb-4 text-gray-900">Order Number: {order.orderNumber}</h3>
      <p className="text-gray-600 mb-4">the user email: {order.email || 'N/A'}</p>
      <ul>
        {order.orderListItems.map(item => (
          <li key={item.id} className="mb-4">
            <div className="text-lg font-semibold text-blue-600">{item.name}</div>
            <div className="text-gray-700">Brand: {item.brand}</div>
            <div className="text-gray-700">Category: {item.category}</div>
            <div className="text-gray-700">Count in Stock: {item.countInStock}</div>
            <div className="text-gray-700">Description: {item.description}</div>
            <div className="text-gray-700">Price: ${item.price}</div>
            <div className="text-gray-700">Email: {item.email}</div> {/* Fix this line */}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

  
  );
};

export default OrderList;

