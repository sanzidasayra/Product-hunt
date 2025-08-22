import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../lib/mongodb";
import { compare } from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Email and password are required");
          }

          const client = await clientPromise;
          const db = client.db("myshop");

          const user = await db.collection("users").findOne({ email: credentials.email });
          if (!user) {
            console.log("Login failed: user not found");
            throw new Error("No user found with this email");
          }

          const isValid = await compare(credentials.password, user.password);
          if (!isValid) {
            console.log("Login failed: invalid password");
            throw new Error("Invalid password");
          }

          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            photo: user.photo,
          };
        } catch (error) {
          console.error("Authorize error:", error.message);
          return null; // NextAuth will respond with 401
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // your custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
