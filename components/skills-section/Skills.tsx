import SkillsCard from "./SkillsCard";
import Header from "./SkillsHeader";
import { skills } from "@/util/Skills";
export default function Skills() {
  return (
    <>
      <Header />
      <div className="flex gap-4 flex-wrap">
        {skills.map((skill) => (
          <SkillsCard key={skill.id} skill={skill} />
        ))}
      </div>
    </>
  );
}
