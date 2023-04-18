import Button from "../atoms/Button";

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
      <Button url="/about" title="About me" />
    </div>
  );
}
