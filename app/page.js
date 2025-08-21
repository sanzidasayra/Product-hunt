import Image from "next/image";
import Banner from "./components/Banner";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
     <>
      <Banner />
    <div className="max-w-7xl mx-auto">
      <ProductHighlights />
    </div>
     </>
  );
}
