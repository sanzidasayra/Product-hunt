"use client";
import { useState } from "react";

export default function AddProductForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/products/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, description, price, image }),
      });

      setLoading(false);

      if (res.ok) {
        alert("Product added successfully!");
        setName("");
        setDescription("");
        setPrice("");
        setImage("");
      } else {
        const msg = await res.text();
        alert(msg);
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-xl rounded-2xl p-8 space-y-4 max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-rose-700 text-center mb-4">
        Add New Product
      </h2>

      {/* Product Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 shadow-sm transition"
        required
      />

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        rows={4}
        className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 shadow-sm transition resize-none"
        required
      />

      {/* Price */}
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        min="0"
        step="0.01"
        className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 shadow-sm transition"
        required
      />

      {/* Image URL */}
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Product Image URL"
        className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 shadow-sm transition"
      />

      {/* Preview Image */}
      {image && (
        <div className="w-full h-64 rounded-xl overflow-hidden border border-gray-200 shadow-inner flex items-center justify-center bg-gray-50">
          <img
            src={image}
            alt="Product Preview"
            className="object-contain w-full h-full"
          />
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-xl text-white font-medium transition-all duration-300 ${
          loading
            ? "bg-rose-400 cursor-not-allowed"
            : "bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-700 hover:to-rose-600 shadow-md"
        }`}
      >
        {loading ? "Adding Product..." : "Add Product"}
      </button>
    </form>
  );
}
