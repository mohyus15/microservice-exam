import next from 'next';
import React from 'react';
const getProducts = async (id) => {
    const res = await fetch('http://localhost:8080/api/products/' + id);
    next: {
        revalidate: 60
    } 

  return res.json();
}
async function productsDetail({params}) {
    const productsList = await getProducts(params.id)
    return (
        <div>
           <div>
            <p>{productsList.id}</p>
           </div>
        </div>
    );
}

export default productsDetail;