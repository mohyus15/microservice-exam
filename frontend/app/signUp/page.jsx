import Link from 'next/link';
import React from 'react';

import { redirect } from 'next/navigation'

const SignUpHnadel = async (formData) =>{
    "use server"
    const name = formData.get("username")
    const image = formData.get("email")
    const brand = formData.get("password")


    const productsObject = {
        name,
        image,
        brand,
     

    }

     await fetch("http://localhost:8080/api/customera/register", {
       method: 'POST',
       body:JSON.stringify(productsObject),
       headers:{
        "Content-Type": "application/json",
       },
      
       
    })
    redirect('./login')
}
const SignUp =() => {


    return (
    
      <form action={SignUpHnadel} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>username</label>
  <input type="text" id="name" name="username" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>email</label>
  <input type="text" id="image" name="email" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <label htmlFor="brand" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>password</label>
  <input type="text" id="brand" name="password" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />
  <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Sign up</button>
  <Link href='../../login'>login if your have account</Link>
    
</form>
    )
      
}

export default SignUp;