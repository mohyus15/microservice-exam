import Link from 'next/link';
import React from 'react';
import { redirect } from 'next/navigation'


const SignUpHnadel = async (formData) => {
    "use server"
    const username = formData.get("username")
    const password = formData.get("password")
    
  


    const productsObject = {
       username,  password

    }
     const res = await fetch("http://localhost:8080/api/customers/login", {
      
    
       method: 'POST',
       body:JSON.stringify(productsObject),
       credentials:'include',
       headers:{
        "Content-Type": "application/json",
       },
      
       

    })

    if(res.ok){
      console.log(res)
      
    } else {
      console.log("Bad crendesial ")
    }
  
    redirect('./login')

}
const Login =() => {
 return (
 <form action={SignUpHnadel} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>username</label>
  <input type="text" id="username" name="username" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />
  <label htmlFor="password" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>password</label>
  <input type="password" id="password" name="password" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />
  <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>login</button>
  <Link href='../../signUp'>create account</Link>   
</form>
    )
      
}

export default Login;