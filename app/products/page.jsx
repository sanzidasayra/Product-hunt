import clientPromise from "../lib/mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function ProductsPage() {
  const client = await clientPromise;
  const db = client.db("myshop");
  const products = await db.collection("products").find().toArray();

  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0">
      <h1 className="text-4xl mt-10 font-extrabold text-rose-700 mb-8 text-center">
        All Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-0.5 flex flex-col overflow-hidden"
          >
            {/* Product Image */}
            {product.image && (
              <div className="w-full h-56 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-t-2xl"
                />
              </div>
            )}

            <div className="p-5 flex flex-col flex-grow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-4 flex-grow">{product.description.slice(0, 100)}...</p>
              <div className="flex items-center justify-between mt-auto">
                <p className="text-lg font-bold text-gray-800">${product.price}</p>
                <Link
                  href={`/products/${product._id}`}
                  className="px-4 py-2 bg-rose-700 text-white rounded-lg text-sm font-medium hover:bg-rose-600 transition"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
