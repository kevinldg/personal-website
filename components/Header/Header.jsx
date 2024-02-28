import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Socials from "./Socials";

export default function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={
        (theme === "dark" ? "bg-dark-300 " : "bg-light-300 ") +
        (theme === "dark" ? "text-white " : "text-black ") +
        "sticky top-0 shadow-lg flex flex-col tablet:flex-row tablet:justify-between gap-4 items-center p-6  theme-transition"
      }
    >
      <h1 className=" text-2xl">Kevin Loeding</h1>
      <div className="flex gap-6 items-center">
        <Socials />
        <ThemeSwitch />
      </div>
    </header>
  );
}
