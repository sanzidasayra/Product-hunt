// app/api/auth/register/route.js
import { hash } from "bcryptjs";
import clientPromise from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password, photo } = await req.json();

    if (!name || !email || !password || !photo) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("myshop");

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "Email already exists" }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = {
      name,
      email,
      password: hashedPassword,
      photo,
      createdAt: new Date(),
    };

    await db.collection("users").insertOne(newUser);

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 });
  } catch (error) {
    console.error(error); // <-- log the error
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
