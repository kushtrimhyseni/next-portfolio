import Link from "next/link";

export default function AboutMe() {
  return (
    <div className="flex flex-col mt-8">
      <p className="text-[#abb2bf] text-base">
        I am a talented,ambitious and hardworking individual,with broad skills
        and experience. Furthermore, I am able to handle multiple tasks on a
        daily basis. I have experience working as part of a team and
        individually.
      </p>
      <p className="text-[#abb2bf] text-base mt-8">
        I work with the team to provide imaginative solutions for our customers,
        always coming up with innovative ideas. In the role, I identified a need
        for a new system and, with management backing, it has since been
        implemented. A key strength is communication; building strong
        relationships with people in order to deliver the best results.
      </p>
      <Link
        href="/about"
        className="text-base text-white font-md bg-transparent hover:bg-primary hover:opacity-30 w-[120px] border border-primary p-2 mt-8 text-center"
      >
        Read More
      </Link>
    </div>
  );
}
