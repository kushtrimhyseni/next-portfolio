import Headers from "../atoms/Headers";
import SkillsCard from "./SkillsCard";
import { skills } from "@/util/Skills";
export default function Skills() {
  return (
    <>
      <div className="mt-24 flex justify-between items-center w-full">
        <Headers name="skills" />
      </div>
      <div className="flex gap-4 flex-wrap">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
}
