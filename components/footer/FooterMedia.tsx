import github from "../../public/images/Github.png";
import discord from "../../public/images/Discord.png";
import Link from "next/link";
import Image from "next/image";

export default function FooterMedia() {
  return (
    <div className="w-full flex flex-col ml-auto items-end">
      <p className="text-xl leading-8 text-white font-semibold">Media</p>
      <div className="flex mt-2">
        <Link href="https://github.com/kushtrimhyseni">
          <Image src={github} alt="GitHub" />
        </Link>
        <Link
          href="https://discordapp.com/users/500764517144330270"
          className="flex items-center"
        >
          <Image src={discord} alt="Discord" />
        </Link>
      </div>
    </div>
  );
}
