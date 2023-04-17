import Image from "next/image";
import github from "../../public/images/Github.png";
import Link from "next/link";
export default function SocialMedia() {
  return (
    <div className="fixed top-0 left-4">
      <div className="flex flex-col items-center max-w-[32px]">
        <span className="w-[1px] h-[190px] bg-[#abb2bf] font-bold"></span>
        <Link href="https://github.com/kushtrimhyseni">
          <Image src={github} alt="GitHub" />
        </Link>
      </div>
    </div>
  );
}
