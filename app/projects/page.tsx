import Headers from "@/components/atoms/Headers";
import { PrismaClient } from "@prisma/client";
import ProjectCard from "@/components/projects/ProjectCard";

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
    orderBy: {
      created_at: "desc",
    },
  });
  return projects;
};

export default async function ProjectPage() {
  const projects = await getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center max-w-screen-lg mx-auto">
      <div className="flex items-center w-full">
        <Headers name="projects" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}

export const metadata = {
  title: "KH | Projects",
  description: "My projects page.",
};
