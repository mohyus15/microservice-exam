"use client"
import React, { useState, useEffect } from 'react';

const ShippingComponent = () => {
    const [shippingData, setShippingData] = useState(null);
    console.log(shippingData);

    useEffect(() => {
        const fetchShippingData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/shipping');
                if (response.ok) {
                    const data = await response.json();
                    setShippingData(data);
                } else {
                    console.error('Failed to fetch shipping data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching shipping data:', error);
            }
        };

        fetchShippingData();
    }, []);

    return (
        <div>
            <h2>Shipping Information</h2>
            {shippingData ? (
                <div>
                    {shippingData.map((item) => (
                        <div key={item.id}>
                            <p><strong>ID:</strong> {item.id}</p>
                            <p><strong>Email:</strong> {item.email}</p>
                            <p><strong>Address:</strong> {item.address}</p>
                            <p><strong>City:</strong> {item.city}</p>
                            <p><strong>Postcode:</strong> {item.postcode}</p>
                            <p><strong>Country:</strong> {item.country}</p>
                            <hr /> {/* Add a horizontal line between each shipping item */}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading shipping information...</p>
            )}
        </div>
    );
};

export default ShippingComponent;

