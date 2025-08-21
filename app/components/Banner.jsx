"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";



const Banner = () => {

     return (
    <div className="relative w-full lg:h-[700px] md:h-[600px] h-[550px]">
  <Image
    src="/shopBanner.jpg"
    alt="Headphone Banner"
    fill
    className="object-cover"
  />

 <div className="absolute inset-0 flex  items-center lg:ml-[825px] md:justify-center sm:justify-center px-6 md:px-20">
  <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-l-3xl max-w-md text-white shadow-xl border border-white/20">
    <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-wide">
      Experience True Sound
    </h1>
    <p className="text-md md:text-lg mb-6 leading-relaxed text-gray-200">
      High-quality headphones crafted for immersive music, gaming, and ultimate comfort. Hear every detail.
    </p>
    <div className="flex justify-center">
      <Link
        href="/products"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full font-semibold shadow-md"
      >
        Shop Now
      </Link>
    </div>
  </div>
</div>

</div>


  );
};

export default Banner;
