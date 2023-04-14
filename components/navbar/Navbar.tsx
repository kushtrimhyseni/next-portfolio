import NavBarLinks from "./NavBarLinks";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-screen-xl mx-auto mt-8">
      <span className="text-white text-base font-bold w-full">Trimi</span>
      <NavBarLinks />
    </div>
  );
}
