'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Shipping = () => {
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const address = formData.get("address");
    const city = formData.get("city");
    const postcode = formData.get("postcode");
    const country = formData.get("country");
  
    // Retrieve user from local storage
    const productsObjectString = localStorage.getItem('productsObject');
    const productsObject = productsObjectString ? JSON.parse(productsObjectString) : null;
  
    if (!productsObject) {
      console.log("User not found in local storage");
      return;
    }
  
    const shippingDetails = {
      address,
      city,
      postcode,
      country,
      email: productsObject.email,
    };
  
    localStorage.setItem('shippingDetails', JSON.stringify(shippingDetails));
    router.push("/components/placeorder")

  };

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); handleSubmit(new FormData(e.target)); }}
      style={{
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Address</label>
      <input type="text" id="address" name="address" style={{ width: '100%', padding: '8px', color: "black", marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>City</label>
      <input type="text" id="city" name="city" style={{ width: '100%', padding: '8px', color: "black", marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Postcode</label>
      <input type="text" id="postcode" name="postcode" style={{ width: '100%', padding: '8px', marginBottom: '16px', color: "black", borderRadius: '4px', border: '1px solid #ccc' }} />

      <label htmlFor="country" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Country</label>
      <input type="text" id="country" name="country" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

      <button
        type="submit"
        style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Add Your Address
      </button>
    </form>
  );
};

export default Shipping;
