import Resume from "./Resume";

export default function About() {
  return (
    <div className="px-20 py-8 bg-dark-300 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">About me</h3>
      <Resume />
      <Resume />
      <Resume />
    </div>
  );
}
