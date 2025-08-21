import Image from "next/image";
import Banner from "./components/Banner";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
    <div>
      <Banner />
      <ProductHighlights />
    </div>
  );
}
