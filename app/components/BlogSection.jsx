"use client";
import Image from "next/image";
import Link from "next/link";
import blogPosts from "../data/blogData";

const BlogSection = () => {
  return (
    <section className="mt-20 mb-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-rose-700 mb-8 text-center">Blog & Tips</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{post.excerpt}</p>
                <Link
                  href={post.link} target="_blank"
                  className="text-rose-700 hover:underline font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
