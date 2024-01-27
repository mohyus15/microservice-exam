import React from 'react';

const ContactInfo = (props) => {
  const fakeContactInfo = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '47922333',
    address: 'tollbugate Norway',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(to right, #ff8c33, #fffb)',
  };

  const contactInfoStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#fff', // Example text color for better visibility on the background
  };

  return (
    <div style={containerStyle}>
      <div style={contactInfoStyle}>
        <h2 style={headingStyle}>Contact Information</h2>
        <p><strong>Name:</strong> {fakeContactInfo.name}</p>
        <p><strong>Email:</strong> {fakeContactInfo.email}</p>
        <p><strong>Phone:</strong> {fakeContactInfo.phone}</p>
        <p><strong>Address:</strong> {fakeContactInfo.address}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
