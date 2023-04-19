import Headers from "@/components/atoms/Headers";
import Image from "next/image";
import about from "../../public/images/AboutMe.png";
import WhoAmI from "./components/WhoAmI";
import Skills from "@/components/skills-section/Skills";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center max-w-screen-lg mx-auto p-2">
      <div className="flex flex-col items-center w-full">
        <Headers name="about-me" />
        <span className="text-md text-[#abb2bf] text-left w-full mt-4">
          Who am i?
        </span>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center m-0 md:mt-12">
        <div className="w-full">
          <Image
            src={about}
            alt="About Image"
            className="lg:ml-auto w-[320px] h-auto"
          />
        </div>
        <WhoAmI />
      </div>
      <Skills />
    </main>
  );
}

export const metadata = {
  title: "KH | About",
  description: "About me page.",
};
