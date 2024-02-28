"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import bcrypt from 'bcryptjs';

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        // Update form data on input change
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const res = await fetch('http://localhost:8080/api/v1/all');
            if (!res.ok) {
                throw new Error('Failed to fetch user data');
            }

            const users = await res.json();
            const foundUser = users.find(user => user.email === formData.email);

            if (foundUser) {
                // Compare hashed passwords
                const passwordMatch = await bcrypt.compare(formData.password, foundUser.password);

                if (passwordMatch) {
                    // Check if the user has the role ROLE_ADMIN
                    const isAdmin = foundUser.authorities.some(authority => authority.authority === 'ROLE_ADMIN');

                    if (isAdmin) {
                        router.push('/dashboard');
                    } else {
                        // Retrieve productsObject from localStorage
                        const productsObjectString = localStorage.getItem('productsObject');

                        if (productsObjectString) {
                            const productsObject = JSON.parse(productsObjectString);
                            const storedEmail = productsObject.email;
                            const storedPassword = productsObject.password;

                            if (formData.email === storedEmail && formData.password === storedPassword) {
                                router.push('/components/CheckoutSteps');
                            } else {
                                throw new Error("Sorry, you are not logged in");
                            }
                        } else {
                            throw new Error("No user data found");
                        }
                    }
                } else {
                    // Passwords do not match
                    throw new Error('Invalid credentials');
                }
            } else {
                // User not found
                throw new Error('User not found');
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: '400px',
                margin: 'auto',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
        >
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Email</label>
            <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '16px',
                    color: 'black',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />

            <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                Password
            </label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={{
                    width: '100%',
                    padding: '8px',
                    marginBottom: '16px',
                    color: 'black',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                }}
            />

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
                Login
            </button>

            <Link href="./signUp">Create Account</Link>
        </form>
    );
};

export default Login;

