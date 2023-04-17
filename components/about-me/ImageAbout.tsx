import Image from "next/image";
import about from "../../public/images/AboutMe.png";
export default function ImageAbout() {
  return (
    <div className="w-full">
      <Image
        src={about}
        alt="About Image"
        className="ml-auto w-[320px] h-auto"
      />
    </div>
  );
}
