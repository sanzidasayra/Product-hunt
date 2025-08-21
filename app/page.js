import Image from "next/image";
import Banner from "./components/Banner";
import ProductHighlights from "./components/ProductHighlights";
import BlogSection from "./components/BlogSection";

export default function Home() {
  return (
     <>
      <Banner />
    <div className="max-w-7xl mx-auto">
      <ProductHighlights />
      <BlogSection />
    </div>
     </>
  );
}
