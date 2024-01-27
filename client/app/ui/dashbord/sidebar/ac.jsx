"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

function Action() {
  const route = useRouter();

  useEffect(() => {
    const productsObjectString = localStorage.getItem('admin');
    if (productsObjectString) {
      const productsObject = JSON.parse(productsObjectString);
      const storedEmail = productsObject.email;
      setUserEmail(storedEmail);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin');
    setUserEmail(null);
    route.push("/");
  };

  return (
    <div>
        <button onClick={handleLogout}>cliket</button>
    </div>

  );
}

export default Action;


