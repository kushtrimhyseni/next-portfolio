import Image from "next/image";
import Link from "next/link";

interface Projects {
  id: number;
  project_name: string;
  project_image: string;
  project_button: string;
  project_description: string;
  project_technology: string;
}
export default function ProjectCard({ project }: { project: Projects }) {
  return (
    <div className="border border-[#abb2bf]">
      <Image
        src={project.project_image}
        alt="Project Image"
        height={200}
        width={330}
        className="border-b border-[#abb2bf] w-[330px] h-[200px] object-contain bg-white"
      />
      <div className="flex gap-4 p-2">
        <span className="text-base text-[#abb2bf] font-medium min-h-[48px] flex items-center">
          {project.project_technology}
        </span>
      </div>
      <div className="flex flex-col border-t border-[#abb2bf]">
        <span className="text-xl font-semibold text-white px-4 mt-2">
          {project.project_name}
        </span>
        <span className="text-base text-[#abb2bf] font-medium px-4 mt-2 min-h-[48px]">
          {project.project_description}
        </span>
      </div>
      <div className="px-4 my-6 flex">
        <Link href={project.project_button}>Live</Link>
      </div>
    </div>
  );
}
