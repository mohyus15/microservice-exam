"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignUp = () => {
  const router = useRouter();

  const SignUpHandle = async (formData) => {
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const password = formData.get("password");

    const admin = {
      firstName:"admin",
      lastName:"admin",
      email:"admin@admin.com",
      password:"password"
    }
    const productsObject = {
      firstName,
      lastName,
      email,
      password,
  
    };

    try {
      const response = await fetch("http://localhost:8080/api/v1/signup", {
        method: "POST",
        body: JSON.stringify(productsObject),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const user = await response.json();

        // Save the token to local storage
        localStorage.setItem("token", user.token);
        
        // Save the product information to local storage
        localStorage.setItem("userLoggedIn", "true");
        localStorage.setItem("productsObject", JSON.stringify(productsObject));
        localStorage.setItem("admin", JSON.stringify(admin));


        // Redirect to the login page
        router.push("/components/login");
      } else {
        // Handle registration failure
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        SignUpHandle(formData);
      }}
      style={{
        maxWidth: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        First Name
      </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          color: "black",
        }}
      />
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Last Name
      </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          color: "black",
        }}
      />
      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Email
      </label>
      <input
        type="text"
        id="email"
        name="email"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          color: "black",
        }}
      />

      <label
        htmlFor="password"
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          color: "black",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          padding: "10px",
          borderRadius: "4px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign up
      </button>
      <Link href="./login"> Login if you have an account</Link>
    </form>
  );
};

export default SignUp;
