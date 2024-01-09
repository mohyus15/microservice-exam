
import React from 'react'
import {products} from "../../api/page"
import { redirect } from 'next/navigation'

const addProducts = async (formData) =>{
    "use server"
    const name = formData.get("name")
    const image = formData.get("image")
    const brand = formData.get("brand")
    const category = formData.get("category")
    const countInStock = formData.get("countInStock")
    const description = formData.get("description")
    const price = formData.get("price")

    const productsObject = {
        name,
        image,
        brand,
        category,
        countInStock,
        description,
        price,

    }

     await fetch("http://localhost:8080/api/products", {
       method: 'POST',
       body:JSON.stringify(productsObject),
       headers:{
        "Content-Type": "application/json",
       },
      
       
    })
    redirect('/dashboard/products')
} 

function CreatePage() {
  return  (
  <form action={addProducts} style={{ maxWidth: '400px', margin: 'auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Name:</label>
  <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Image URL:</label>
  <input type="text" id="image" name="image" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <label htmlFor="brand" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Brand:</label>
  <input type="text" id="brand" name="brand" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Category:</label>
  <input type="text" id="category" name="category" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Count in Stock:</label>
  <input type="number" id="countInStock" name="countInStock" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Description:</label>
  <textarea id="description" name="description" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc', height:'100px' }}></textarea>

  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Price:</label>
  <input type="number" id="price" name="price" style={{ width: '100%', padding: '8px', marginBottom: '16px', borderRadius: '4px', border: '1px solid #ccc' }} />

  <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>Submit</button>
</form>

  );
}

export default CreatePage