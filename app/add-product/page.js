"use client";

import { useState } from "react";

export default function AddProductForm() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "", 
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (res.ok) {
      alert("Product added successfully!");
      router.push("/products");
    } else {
      alert("Failed to add product.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-3xl font-semibold text-rose-700 mb-6 text-center">
          Add New Product
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition"
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={product.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition"
            required
          />
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-700 focus:border-transparent transition"
            required
          />
          <div className="flex justify-center">
            <button
            type="submit"
            className="bg-rose-700 text-white py-2 rounded-lg hover:bg-rose-800 transition font-medium shadow-md w-sm "
          >
            Add Product
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}
