"use client"
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter(); // Initialize router
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    // Update form data on input change
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const productsObjectString = localStorage.getItem('productsObject');

      if (productsObjectString) {
        const productsObject = JSON.parse(productsObjectString);
        const storedEmail = productsObject.email;
        const storedPassword = productsObject.password;

        if (formData.email === storedEmail && formData.password === storedPassword) {
          router.push('/components/CheckoutSteps'); // Redirect to the dashboard page
          return;
        } else {
          throw new Error("Sorry, you are not logged in");
        }
      } else {
        throw new Error("No user data found");
      }
    } catch (error) {
      console.error(error.message);
    }

    // Check if the credentials match the admin user
    if (formData.email === 'admin@admin.com' && formData.password === 'password') {
      localStorage.setItem('admin', JSON.stringify({
        firstName: 'admin',
        lastName: 'admin',
        email: 'admin@admin.com',
      }));

      router.push('/dashboard'); // Redirect to the dashboard page
    } else {
      console.error("Invalid credentials for admin");
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

