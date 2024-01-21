'use client'
// pages/ContactUs.js
import React from 'react';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl mb-4">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-100">
              Name:
            </label>
            <input type="text" id="name" name="name" required className="mt-1 p-2 w-full border rounded bg-green-900" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-100">
              Email:
            </label>
            <input type="email" id="email" name="email" required className="mt-1 p-2 w-full border rounded bg-green-900" />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-100">
              Phone Number (tlf):
            </label>
            <input type="tel" id="phone" name="phone" required className="mt-1 p-2 w-full border rounded bg-green-900" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-100">
              Message:
            </label>
            <textarea id="message"    name="message" rows="4" required className="mt-1 p-2 w-full border rounded text-dark-900 bg-green-900"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
