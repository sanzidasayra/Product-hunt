import clientPromise from "../lib/mongodb";
import Link from "next/link";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("myshop");
  const products = await db.collection("products").find().toArray();

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="p-4 border rounded-lg shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.description.slice(0, 60)}...</p>
            <p className="font-bold mb-2">${product.price}</p>
            <Link href={`/products/${product._id}`} className="text-rose-600 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
