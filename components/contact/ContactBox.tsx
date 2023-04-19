import Link from "next/link";
import Image from "next/image";
import discord from "../../public/images/Discord.png";
import email from "../../public/images/Email.png";

export default function ContactBox() {
  return (
    <div
      className="border border-[#abb2bf] mx-auto lg:ml-auto w-[320px] mt-8 p-2"
      id="contact-me"
    >
      <p className="text-white text-lg font-semibold mb-4">Message me here</p>
      <Link
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
        <p className="text-base text-[#abb2bf] ml-2">!Kushtrim Hyseni#4659</p>
      </Link>
      <Link
        href="mailto:kushtriimhyseni@gmail.com"
        className="flex items-center"
      >
        <Image
          src={email}
          alt="Email"
          width={36}
          height={36}
          className="w-10 h-10"
        />
        <p className="text-base text-[#abb2bf] ml-2">
          kushtriimhyseni@gmail.com
        </p>
      </Link>
    </div>
  );
}
