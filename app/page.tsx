import Image from "next/image";
import { Inter } from "next/font/google";
import Description from "@/components/Description";
import ImageWithDots from "@/components/ImageWithDots";
import QuoteText from "@/components/QuoteText";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex justify-between w-full items-center pt-24">
        <Description />
        <ImageWithDots />
      </div>
      <QuoteText />
    </main>
  );
}
