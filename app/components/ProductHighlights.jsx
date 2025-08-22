import clientPromise from "../lib/mongodb";
import Link from "next/link";
import Image from "next/image";

const ProductHighlights = async () => {
  const client = await clientPromise;
  const db = client.db("myshop");

  // Fetch latest 3 products, sort by createdAt descending
  const products = await db
    .collection("products")
    .find()
    .sort({ createdAt: -1 })
    .limit(3)
    .toArray();

  return (
    <div className="mt-20">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-rose-700 mb-3">Product Highlights</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the best features of our products, designed to deliver quality and satisfaction.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-xl shadow hover:shadow-2xl transition flex flex-col overflow-hidden bg-white"
          >
            {/* Product Image */}
            {product.image ? (
              <div className="relative w-full h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
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
              <p className="text-gray-600 mb-2">{product.description.slice(0, 80)}...</p>
              <p className="font-bold text-lg mb-4">${product.price}</p>
              <Link
                href={`/products/${product._id}`}
                className="mt-auto inline-block text-center bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlights;
