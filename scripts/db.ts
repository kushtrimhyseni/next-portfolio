import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const projects = await prisma.projects.create({
    data: {
      project_name: "Alice",
      project_image: "https://ibb.co/SJkMDX7",
      project_title: "Project 1",
      project_description: "Description of project 1",
      project_technology: "Technology used for project 1",
    },
  });
  console.log(projects);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
