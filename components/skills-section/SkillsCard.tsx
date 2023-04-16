interface Skill {
  id: number;
  header: string;
  description: string[];
}
export default function SkillsCard({ skill }: { skill: Skill }) {
  return (
    <div className="border border-[#abb2bf] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
      <span className="font-semibold text-white text-base p-2">
        {skill.header}
      </span>
      <div className="border-t border-t-[#abb2bf] p-2 flex flex-wrap ">
        {skill.description.map((desc) => (
          <span className="text-[#abb2bf] text-base mr-2" key={skill.id}>
            {desc}
          </span>
        ))}
      </div>
    </div>
  );
}
