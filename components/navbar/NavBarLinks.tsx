"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
function NavBarLinks() {
  const pathname = usePathname();

  const getLinkClass = (href: string) =>
    pathname === href
      ? "text-white font-md text-base text-lg mr-4"
      : "text-[#abb2bf] hover:text-white font-md text-base mr-4";

  return (
    <div className="flex items-center justify-end w-screen">
      <span className="text-base text-primary">#</span>
      <Link href="/" className={getLinkClass("/")}>
        home
      </Link>

      <span className="text-base text-primary">#</span>
      <Link href="/projects" className={getLinkClass("/projects")}>
        projects
      </Link>

      <span className="text-base text-primary">#</span>
      <Link href="/about" className={getLinkClass("/about")}>
        about-me
      </Link>
    </div>
  );
}

export default NavBarLinks;
