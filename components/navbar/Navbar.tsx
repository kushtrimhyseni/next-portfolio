import Image from "next/image";
import NavBarLinks from "./NavBarLinks";
import logo from "../../public/images/logo_1.svg";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-screen-lg mx-auto mt-8 px-2">
      <Link href="/">
        <Image
          src={logo}
          alt="Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </Link>
      <NavBarLinks />
    </div>
  );
}
