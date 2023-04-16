import Headers from "../atoms/Headers";
import ProjectCard from "./ProjectCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getProjects = async () => {
  const projects = await prisma.projects.findMany({
    select: {
      id: true,
      project_name: true,
      project_image: true,
      project_button: true,
      project_description: true,
      project_technology: true,
    },
    take: 3, // Limit the number of results
    orderBy: {
      created_at: "desc", // Order by the createdAt field in descending order
    },
  });
  return projects;
};

export default async function Projects() {
  const projects = await getProjects();
  return (
    <>
      <div className="flex items-center w-full">
        <Headers name="projects" />
        <span className="mt-24 text-base text-white font-semibold w-[120px] flex justify-end items-end">
          View all
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
