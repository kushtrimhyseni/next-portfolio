import Image from "next/image";
import NavBarLinks from "./NavBarLinks";
import logo from "../../public/images/logo_1.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto mt-8">
      <Image
        src={logo}
        alt="Logo"
        width={48}
        height={48}
        className="w-12 h-12"
      />
      <NavBarLinks />
    </div>
  );
}
