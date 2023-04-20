import Image from "next/image";
import logo from "../../public/images/logo_1.svg";
import Link from "next/link";

export default function FooterLeft() {
  return (
    <div className="flex flex-col p-2 lg:p-0 md:mr-auto mr-auto">
      <div className="flex justify-start items-center gap-2">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
        </Link>
        <p className="text-base text-[#abb2bf]">kushtriimhyseni@gmail.com</p>
      </div>
      <p className="text-white text-base leading-5 mt-4 text-center lg:text-left">
        Front-end developer
      </p>
    </div>
  );
}
