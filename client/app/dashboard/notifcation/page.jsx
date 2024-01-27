"use client"
import React, { useState, useEffect } from "react";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/notifications');
        const data = await res.json();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto mt-8">
    <h2 className="text-3xl font-bold mb-6">Notifications</h2>
    {notifications.map((notif, index) => (
      <div key={notif.id} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg shadow-lg p-6 mb-6 text-white">
        <h3 className="text-xl font-semibold mb-2">
          Order Number: {notif.setOrderNumber}
        </h3>
        <p className="text-gray-100 mb-2">User email: {notif.email || 'N/A'}</p>
        <p className="text-gray-200 text-sm">created at: {notif.sentAt}</p>
      </div>
    ))}
  </div>
  
  
  )
  
};

export default Notification;
