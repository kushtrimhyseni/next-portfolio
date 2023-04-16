import Headers from "../atoms/Headers";

export default function ProjectsHeader() {
  return (
    <div className="mt-24 flex justify-between items-center w-full">
      <Headers name="projects" />
      <div>
        <span className="text-base text-white font-semibold">View all</span>
      </div>
    </div>
  );
}
