
"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const SignUpHandle = async (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  const productsObject = {
    username,
    email,
    password,
  };

  try {
    const response = await fetch(
      "http://localhost:8080/api/customers/register",
      {
        method: "POST",
        body: JSON.stringify(productsObject),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      // Registration successful, set a cookie or perform any other actions
      document.cookie = "userLoggedIn=true; path=/"; // Example cookie, modify as needed

      // Redirect to the login page
      const router = useRouter();
      router.push("/components/login");
    } else {
      // Handle registration failure
      console.error("Registration failed");
    }
  } catch (error) {
    console.error("Error during registration:", error);
  }
};

const SignUp = () => {
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
        username
      </label>
      <input
        type="text"
        id="username"
        name="username"
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      <label
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        email
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
        }}
      />

      <label
        htmlFor="password"
        style={{ display: "block", marginBottom: "8px", fontWeight: "bold" }}
      >
        password
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
      <Link href="./login"> login if you have an account</Link>
    </form>
  );
};

export default SignUp;
