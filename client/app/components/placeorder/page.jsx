"use client"
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const PlaceOrderAndSubmit = () => {
  const [shippingDetails, setShippingDetails] = useState({});
  const [cartItems, setCartItems] = useState([]);
  const [orderNumber, setOrderNumber] = useState("10022254545454001");
  const [orderEmail, setOrderEmail] = useState('');
  const route = useRouter()

  useEffect(() => {
    const storedShippingDetails = JSON.parse(localStorage.getItem('shippingDetails')) || {};
    setShippingDetails(storedShippingDetails);

    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    setCartItems(storedCartItems);
    if (storedShippingDetails.email) {
      setOrderEmail(storedShippingDetails.email);
    }

    console.log(cartItems.qty)
  }, []);

  const generateOrderNumber = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };

  const submitShippingDetails = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/shipping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(shippingDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const shippingResponse = await response.json();
      console.log('Shipping response:', shippingResponse);

      // Optionally handle the shipping response here

    } catch (error) {
      console.error('Error submitting shipping details:', error);
    }

  };

  const handleSubmit = async () => {
    await submitShippingDetails();
    const orderNumber = generateOrderNumber();
    setOrderNumber(orderNumber);

    const order = {
      email: orderEmail,
      orderListItemsDto: cartItems.map(item => ({
        name: item.name,
        image: item.image,
        brand: item.brand,
        category: item.category,
        countInStock: item.qty,
        description: item.description,
        price: item.price,
      })),
      orderNumber,
    };

    try {
      const response = await fetch('http://localhost:8080/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const orderResponse = await response.json();
      console.log('Order response:', orderResponse);

      // Optionally handle the order response here

    } catch (error) {
      console.error('Error making requests:', error);
    } finally {
      localStorage.removeItem('shippingDetails');
      localStorage.removeItem('cartItems');
    }
    route.push("/")

 
  };

  return (
    <div className="container mx-auto mt-8 p-4 bg-black text-white">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <p>Address: {shippingDetails.address}</p>
        <p>City: {shippingDetails.city}</p>
        <p>Country: {shippingDetails.country}</p>
        <p>Postcode: {shippingDetails.postcode}</p>
        <p>Email: {shippingDetails.username}</p>

        <h2 className="text-2xl font-bold mt-4">Place Order</h2>
        {cartItems.length > 0 && (
          <div className="mb-4 border-b pb-4">
            {cartItems.map((item, index) => (
              <div key={index}>
                <p className="text-lg font-semibold">Name: {item.name}</p>
                <img src={item.image} alt={item.name} className="max-w-full max-h-32 mb-2" />
                <p>Brand: {item.brand}</p>
                <p>Category: {item.category}</p>
                <p>Count In Stock: {item.qty}</p>
                <p>Description: {item.description}</p>
                <p>Price: {item.price}</p>
              </div>
            ))}
            <p>Order Number: {orderNumber}</p>
            <p>Email for Order: {shippingDetails.username}</p>
          </div>
        )}
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit Order
      </button>
    </div>
  );
};

export default PlaceOrderAndSubmit;
