"use client";
import useSWR from "swr";
import ProjectCard from "./ProjectCard";
import { Project } from "../../lib/ProjectsInterface";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function FetchProjects() {
  const { data: projects, error } = useSWR<Project[]>("/api/projects", fetcher);

  if (error) return <div>Error loading projects.</div>;
  if (!projects) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default FetchProjects;
