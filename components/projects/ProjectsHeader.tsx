export default function ProjectsHeader() {
  return (
    <div className="mt-24 flex justify-between items-center w-full">
      <div className="flex items-center">
        <span className="text-primary text-3xl">#</span>
        <span className="text-3xl font-semibold text-white">projects</span>
        <span className="bg-primary h-[2px] w-96 max-w-96 ml-8"></span>
      </div>
      <div>
        <span className="text-base text-white font-semibold">View all</span>
      </div>
    </div>
  );
}
