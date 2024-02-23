import ProjectShowcase from "./ProjectShowcase";

export default function Projects() {
  return (
    <div className="px-20 py-8 bg-dark-300 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">My Projects</h3>
      <div className="flex flex-col gap-8 justify-center items-center">
        <ProjectShowcase />
        <ProjectShowcase />
      </div>
    </div>
  );
}
