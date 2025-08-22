import clientPromise from "../../lib/mongodb";
import { ObjectId } from "mongodb";

export default async function ProductDetailsPage({ params }) {
  const { id } = params;

  const client = await clientPromise;
  const db = client.db("myshop");
  const product = await db.collection("products").findOne({ _id: new ObjectId(id) });

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="font-bold text-lg mb-4">${product.price}</p>
    </div>
  );
}
