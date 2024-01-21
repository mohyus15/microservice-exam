'use client'

import Link from 'next/link';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8080/api/customers/login', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      const user = await res.json();
      const roles = user.roles || [];

      if (roles.includes('admin')) {
        redirect('/dashboard');
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        redirect('/CheckoutSteps');
        localStorage.setItem('user', JSON.stringify(user));
      }

    } else {
      console.log('Bad credentials');
    }
 localStorage.setItem('user', JSON.stringify(user));
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
      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Username</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
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
