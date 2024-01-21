'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

async function getProducts(id) {
  const res = await fetch(`http://localhost:8080/api/products/${id}`);
  const data = await res.json();
  return data;
}

const ProductDetail = ({ params }) => {
  const [qty, setQty] = useState(0);
  const [product, setProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        const productData = await getProducts(params.id);
        setProduct(productData);
      }
    };

    fetchData();
  }, [params.id]);

  const addToCart = () => {
    if (product) {
      const newItem = {
        id: params.id,
        name: product.name,
        qty: qty,
        description: product.description,
        price: product.price,
        brand: product.brand,
        category: product.category,
      };

      const userConfirmed = window.confirm(
        'Do you want to add this item to the cart?'
      );

      if (userConfirmed) {
        setCartItems([...cartItems, newItem]);
        updateLocalStorage([...cartItems, newItem]);
        window.alert('Item added to cart!');
        goToCart();
      } else {
        window.alert('Item was not added to the cart.');
      }
    }
  };

  const updateLocalStorage = (items) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('cartItems', JSON.stringify(items));
    }
  };

  const goToCart = () => {
   
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-800">

  <div>
      <Link href="/" className="text-blue-500 hover:underline">
        Back to home page
      </Link>

      {product && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2" >
  
          <div className="col-span-1 md:col-span-1">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-md shadow-lg"
            />
          </div>


          <div className="col-span-1 md:col-span-1">
            <div className="space-y-4">
              <p className="text-lg font-semibold">Brand: {product.brand}</p>
              <p className="text-lg font-semibold">
                Description: {product.description}
              </p>
              <p className="text-lg font-semibold">
                Category: {product.category}
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1">
            <div className="bg-gray-500 p-4 rounded-md shadow-xl mb-4">
              <div className="flex justify-between items-center">
                <div className="font-semibold text-lg">Status</div>
                <div>
                  {product.countInStock > 0 ? 'In stock' : 'Unavailable'}
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="mb-2">
                {product.countInStock > 0 && (
                  <select
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="border rounded-md bg-gray-500 p-4 "
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x} value={x}>
                        {x}
                      </option>
                    ))}
                  </select>
                )}
                <button
                disabled={product.countInStock <= 0}
                className="bg-blue-500 text-black px-4 py-2 ml-3 rounded-md hover:bg-blue-100 focus:outline-none"
                onClick={addToCart}
              >
                Add to Cart
              </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </main>
  );
};

export default ProductDetail;
