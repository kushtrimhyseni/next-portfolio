import github from "../../public/images/Github.png";
// import discord from "../../public/images/Discord.png";
import Link from "next/link";
import Image from "next/image";

export default function FooterMedia() {
  return (
    <div className="w-full flex flex-col mx-auto items-center mt-4 lg:m-0 lg:ml-auto lg:items-end">
      <p className="text-xl leading-8 text-white font-semibold mr-4">Media</p>
      <div className="flex mt-2">
        <Link href="https://github.com/kushtrimhyseni">
          <Image
            src={github}
            alt="GitHub"
            width={36}
            height={36}
            className="w-10 h-10"
          />
        </Link>
        {/* <Link
          href="https://discordapp.com/users/500764517144330270"
          className="flex items-center"
        >
          <Image
            src={discord}
            alt="Discord"
            width={36}
            height={36}
            className="w-10 h-10"
          />
        </Link> */}
      </div>
    </div>
  );
}
