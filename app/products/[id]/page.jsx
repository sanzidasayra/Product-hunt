import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  const client = await clientPromise;
  const db = client.db("myshop");
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <p className="text-gray-500 text-lg">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden">
        
        {/* Product Image */}
        <div className="relative w-full h-96 md:h-[500px]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-8 text-center">
          <h1 className="text-4xl font-bold text-rose-700 mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          
          <div className="inline-block bg-rose-100 text-rose-700 font-semibold px-6 py-3 rounded-full text-xl">
            ${product.price}
          </div>

          {/* Back to Products Button */}
          
        </div>
        <div className="flex justify-center mb-4">
          <Link
            href="/products"
            className="inline-block bg-rose-700 text-white px-8 py-3 rounded-xl shadow hover:bg-rose-600 transition font-semibold"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
