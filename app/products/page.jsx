import clientPromise from "../lib/mongodb";
import Link from "next/link";
import Image from "next/image";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("myshop");
  const products = await db.collection("products").find().sort({ createdAt: -1 }).toArray();

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-rose-700">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-xl shadow hover:shadow-2xl transition overflow-hidden bg-white flex flex-col"
          >
            {/* Product Image */}
            {product.image ? (
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ) : (
              <div className="w-full h-56 bg-gray-200 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}

            {/* Product Info */}
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description.slice(0, 80)}...</p>
              <p className="font-bold text-lg mb-4">${product.price}</p>
              <Link
                href={`/products/${product._id}`}
                className="mt-auto text-center bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
