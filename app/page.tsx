// import { PrismaClient } from "@prisma/client";

import Description from "@/components/Description";
import ImageWithDots from "@/components/ImageWithDots";
import QuoteText from "@/components/QuoteText";
import Projects from "@/components/projects/Projects";
// const prisma = new PrismaClient();

export default async function Home() {
  // const projects = await prisma.projects.create({
  //   data: {
  //     project_name: "Alice",
  //     project_image: "https://ibb.co/SJkMDX7",
  //     project_title: "Project 1",
  //     project_description: "Description of project 1",
  //     project_technology: "Technology used for project 1",
  //   },
  // });
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex justify-between w-full items-center pt-24">
        <Description />
        <ImageWithDots />
      </div>
      <QuoteText />
      <Projects />
    </main>
  );
}
