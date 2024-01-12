"use client"
import React, { useEffect, useState } from 'react';

async function getProducts(id) {
    const res = await fetch('http://localhost:8080/api/products/' + id);
    const data = await res.json();
    return data;
}

async function productsDetail({ params }) {
  const result = await getProducts(params.id)
  console.log(result.name)
   
    return (
        <main>
            <div>
               <p>name {result.name}</p>
               <img src={result.image} width={600} height={400}/>
               <p>price {result.price} kr</p>
               <div>
                <p>{result.description}</p>
                <option> countInStock {result.countInStock}</option>
               </div>
               
            </div>
        </main>
    );
}

export default productsDetail;
