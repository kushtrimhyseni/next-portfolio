import Headers from "../atoms/Headers";
import LeftContent from "./LeftContent";
import SkillsCard from "./SkillsCard";
import { skills } from "@/util/Skills";
export default function Skills() {
  return (
    <>
      <div className="mt-24 flex justify-between items-center w-full">
        <Headers name="skills" />
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="w-1/2 mt-12">
          <LeftContent />
        </div>
        {skills.map((skill) => (
          <SkillsCard key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
}
