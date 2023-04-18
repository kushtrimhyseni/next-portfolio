import Image from "next/image";
import logo from "../../public/images/logo_1.svg";

export default function FooterLeft() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-start items-center gap-2">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
        <p className="text-base text-[#abb2bf]">kushtriimhyseni@gmail.com</p>
      </div>
      <p className="text-white text-base leading-5 mt-4">Front-end developer</p>
    </div>
  );
}
