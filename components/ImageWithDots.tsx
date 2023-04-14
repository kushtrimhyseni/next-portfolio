import Image from "next/image";
import topImage from "../public/images/PersonImage.png";
import dots from "../public/images/Dots.png";
export default function ImageWithDots() {
  return (
    <div className="relative">
      <Image src={topImage} alt="MainImage" />
      <Image src={dots} alt="Dots" className="absolute bottom-8 right-4" />
    </div>
  );
}
