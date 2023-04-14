import Image from "next/image";
import quotes from "../public/images/quotes.png";
export default function QuoteText() {
  return (
    <div className="border border-[#abb2bf] max-w-[712px] relative p-8">
      <Image src={quotes} alt="Quotes" className="absolute top-[-10px]" />
      <span className="text-white text-2xl font-medium">
        With great power comes great electricity bill
      </span>
    </div>
  );
}
