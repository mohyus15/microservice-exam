 "use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

async function getProducts(id) {
  const res = await fetch(`http://localhost:8080/api/products/${id}`);
  const data = await res.json();
  return data;
}

function ProductDetail({ params }) {
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
        "Do you want to add this item to the cart?"
      );

      if (userConfirmed) {
        setCartItems([...cartItems, newItem]);
        updateLocalStorage([...cartItems, newItem]);

        // Display the alert
        window.alert("Item added to cart!");

        // Navigate to the cart page
        goToCart();
      } else {
        // User clicked Cancel
        window.alert("Item was not added to the cart.");
      }
    }
  };

  const updateLocalStorage = (items) => {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem("cartItems", JSON.stringify(items));
    }
  };

  const goToCart = () => {
    router.push("/components/cart");
  };

  return (
    <>
      <Link className="my-2" href="/">
        Back to home page
      </Link>
      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="col-span-1 md:col-span-1">
            <p>name {product.name}</p>
            <img
              src={product.image}
              width={320}
              height={180}
              alt={product.name}
              style={{
                width: "50%",
                height: "auto",
              }}
            />
          </div>

          {/* Second Column */}
          <div className="col-span-1 md:col-span-1">
            <ul className="space-y-4">
              <li>
                <p>brand {product.brand}</p>
              </li>
              <li>
                <p>description {product.description}</p>
              </li>
              <li>
                <p>category {product.category}</p>
              </li>
            </ul>

            <div className="card bg-base-300 shadow-xl md:mt-0">
              <div className="card-body">
                <div className="mb-2 justify-between">
                  <div>Status</div>
                  <div>
                    {product.countInStock > 0 ? "In stock" : "Unavailable"}
                  </div>
                  <div className="mb-2">
                    {product.countInStock > 0 && (
                      <select
                        value={qty}
                        onChange={(e) => setQty(Number(e.target.value))}
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x} value={x}>
                            {x}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>
                <div className="card-options justify-center">
                  <button
                    disabled={product.countInStock <= 0}
                    className="btn btn-primary w-full"
                    onClick={addToCart}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
