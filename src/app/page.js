import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#1212121]">
      <div className="container mx-auto py-12 py-4">
        <HeroSection/>
      </div>
    </main>
  );
}
