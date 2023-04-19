import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getProjects = async () => {
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
