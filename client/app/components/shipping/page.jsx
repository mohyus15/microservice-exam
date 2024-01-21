'use client'
import Link from 'next/link';
import React from 'react';
import { redirect } from 'next/navigation';

const SignUpHnadel = async (formData) => {
    // Retrieve user and username from local storage
    const user = JSON.parse(localStorage.getItem('user'));
    const username = user ? user.username : null;

    const address = formData.get("andress");
    const city = formData.get("city");
    const postcode = formData.get("postcode");
    const country = formData.get("country");

    const productsObject = {
        address,
        city,
        postcode,
        country,
        user: username,
    };

    console.log(productsObject);

    try {
        // Send the shipping details to the server
        const response = await fetch("http://localhost:8080/api/shipping", {
            method: 'POST',
            body: JSON.stringify(productsObject),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            // If the server successfully processes the shipping details, redirect to the orders page
            redirect('./orders');
        } else {
            console.log("Failed to submit shipping details");
        }
    } catch (error) {
        console.error("An error occurred while processing the shipping details:", error);
    }
};

const Shipping = () => {
    return (
        <form onSubmit={(e) => { e.preventDefault(); SignUpHnadel(new FormData(e.target)); }} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>address</label>
            <input type="text" id="address" name="andress" style={{ width: '100%', padding: '8px', color: "black", marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>city</label>
            <input type="text" id="city" name="city" style={{ width: '100%', padding: '8px', color: "black", marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>postcode</label>
            <input type="text" id="postcode" name="postcode" style={{ width: '100%', padding: '8px', marginBottom: '16px', color: "black", borderRadius: '4px', border: '1px solid #ccc' }} />

            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>country</label>
            <input type="text" id="country" name="country" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

            <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '4px', color: "black", border: 'none', cursor: 'pointer' }}>add your address</button>
        </form>
    );
};

export default Shipping;
