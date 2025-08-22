import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  const client = await clientPromise;
  const db = client.db("myshop");
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

  if (!product)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full overflow-hidden">
        {/* Product Image */}
        {product.image ? (
          <div className="relative w-full h-80">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-80 bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}

        {/* Product Details */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-rose-700 mb-4">{product.name}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="font-bold text-xl mb-6">${product.price}</p>

          <Link
            href="/products"
            className="inline-block bg-rose-700 text-white px-6 py-2 rounded hover:bg-rose-600 transition"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
