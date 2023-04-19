import Link from "next/link";
export default function NavBarLinks() {
  return (
    <div className="flex items-center justify-end w-screen">
      <span className="text-base text-primary">#</span>
      <Link
        href="/"
        className="text-[#abb2bf] hover:text-white font-md text-base mr-4"
      >
        home
      </Link>

      <span className="text-base text-primary">#</span>
      <Link
        href="/projects"
        className="text-[#abb2bf] hover:text-white font-md text-base mr-4"
      >
        projects
      </Link>

      <span className="text-base text-primary">#</span>
      <Link
        href="/about"
        className="text-[#abb2bf] hover:text-white font-md text-base"
      >
        about-me
      </Link>
    </div>
  );
}
