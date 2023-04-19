import Link from "next/link";
import Headers from "../atoms/Headers";
import FetchProjects from "./FetchProjects";

export default async function Projects() {
  return (
    <>
      <div className="flex items-center w-full">
        <Headers name="projects" />
        <Link
          href="/projects"
          className="mt-24 text-base text-white font-semibold w-[120px] flex justify-end items-end"
        >
          View all
        </Link>
      </div>
      <FetchProjects />
    </>
  );
}
