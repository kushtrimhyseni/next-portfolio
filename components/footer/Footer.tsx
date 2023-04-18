import FooterLeft from "./FooterLeft";
import FooterMedia from "./FooterMedia";

export default function Footer() {
  return (
    <div className="border-t border-[#aab2bf] mt-24 w-full">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 mt-8">
        <FooterLeft />
        <FooterMedia />
      </div>
      <span className="flex justify-center items-center text-base leading-5 text-[#abb2bf] w-full my-12">
        © Copyright {new Date().getFullYear()}. Made by Kushtrim Hyseni
      </span>
    </div>
  );
}
