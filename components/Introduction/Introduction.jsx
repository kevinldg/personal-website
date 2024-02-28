import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

import Image from "next/image";

import ContactButton from "./ContactButton";
import IntroductionText from "./IntroductionText";

export default function Introduction() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme === "dark" ? "bg-dark-200 " : "bg-light-200 ") +
        (theme === "dark" ? "text-white " : "text-black ") +
        "flex desktop:px-[25vw] px-8 py-8 justify-between gap-8 items-center  theme-transition"
      }
    >
      <div className="flex flex-col gap-4">
        <IntroductionText />
        <ContactButton />
      </div>
      <div
        className={
          (theme === "dark" ? "bg-dark-300 " : "bg-light-300 ") +
          "hidden tablet:block px-4 pt-4 shadow-lg rounded  theme-transition"
        }
      >
        <Image src={"/avatar.png"} alt="Avatar" width={248} height={248} />
      </div>
    </div>
  );
}
