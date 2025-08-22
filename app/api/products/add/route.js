import clientPromise from "../../../lib/mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    // Check if user is logged in
    const session = await getServerSession(authOptions);
    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    // Get product data from request body
    const { name, description, price, image } = await req.json();

    if (!name || !description || !price) {
      return new Response("Missing fields", { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("myshop");

    const result = await db.collection("products").insertOne({
      name,
      description,
      price: parseFloat(price),
      image: image || "", // store empty string if no image provided
      createdBy: session.user.email,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ insertedId: result.insertedId }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response("Server error", { status: 500 });
  }
}
