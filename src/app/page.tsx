import Hero from "@/components/blocks/Hero";
import Afisha from "@/components/blocks/Afisha";
import News from "@/components/blocks/News";

export default function Home() {
  return (
    <div className="p-10">
      <Hero />
      <Afisha />
      <News />
    </div>
  );
}
