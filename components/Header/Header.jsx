import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Socials from "./Socials";

export default function Header() {
  return (
    <header className=" bg-dark-300 sticky top-0 shadow-lg flex flex-col tablet:flex-row tablet:justify-between gap-4 items-center p-6">
      <h1 className=" text-2xl">Kevin Loeding</h1>
      <ThemeSwitch />
      <Socials />
    </header>
  );
}
