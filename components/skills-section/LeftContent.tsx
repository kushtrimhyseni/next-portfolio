import Image from "next/image";
import dots from "../../public/images/Dots.png";
export default function LeftContent() {
  return (
    <div className="flex justify-around">
      <Image src={dots} alt="Dots" className="w-[80px] h-[80px] mt-8" />
      <div className="border border-[#abb2bf] w-[80px] h-[80px]"></div>
    </div>
  );
}
