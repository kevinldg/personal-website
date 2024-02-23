import Socials from "./Socials";

export default function Header() {
  return (
    <header className=" bg-dark-300 flex justify-between items-center p-6">
      <h1 className=" text-2xl">Kevin Loeding</h1>
      <Socials />
    </header>
  );
}
