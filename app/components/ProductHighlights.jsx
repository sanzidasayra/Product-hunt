import clientPromise from "../lib/mongodb";
import Link from "next/link";

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
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold text-rose-700 mb-3">Product Highlights</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover the best features of our products, designed to deliver quality and satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-2">{product.description.slice(0, 60)}...</p>
              <p className="font-bold text-lg mb-2">${product.price}</p>
            </div>
            <Link
              href={`/products/${product._id}`}
              className="mt-4 inline-block text-center bg-rose-700 text-white px-4 py-2 rounded hover:bg-rose-600 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductHighlights;
