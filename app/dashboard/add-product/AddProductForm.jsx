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
    <form onSubmit={handleSubmit} className="grid gap-4">
      {/* Product Name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
        className="input input-bordered w-full py-2 px-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
        required
      />

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="input input-bordered w-full py-2 px-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 transition resize-none"
        rows={4}
        required
      />

      {/* Price */}
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        className="input input-bordered w-full py-2 px-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
        min="0"
        step="0.01"
        required
      />

      {/* Image URL */}
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Product Image URL"
        className="input input-bordered w-full py-2 px-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-700 transition"
      />

      {/* Preview Image */}
      {image && (
        <div className="w-full h-64 border border-gray-300 rounded-lg overflow-hidden flex items-center justify-center">
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
        className={`w-full bg-rose-700 hover:bg-rose-800 text-white py-2 rounded-lg font-medium transition-colors duration-300 ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Adding Product..." : "Add Product"}
      </button>
    </form>
  );
}
