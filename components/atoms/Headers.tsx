export default function Headers({ name }: { name: string }) {
  return (
    <div className="mt-8 lg:mt-24 justify-between items-center w-full">
      <div className="flex flex-col lg:flex-row items-start lg:items-center">
        <div>
          <span className="text-primary text-3xl">#</span>
          <span className="text-3xl font-semibold text-white">{name}</span>
        </div>
        <span className="bg-primary h-[2px] w-[220px] max-w-[220px] lg:w-96 lg:max-w-96 ml-8"></span>
      </div>
    </div>
  );
}
