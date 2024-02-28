import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

import Image from "next/image";
import Link from "next/link";

import ProjectSkill from "./ProjectSkill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";

export default function ProjectShowcase({
  title,
  techStack,
  websiteLink,
  repositoryLink,
  image,
}) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme === "dark" ? "bg-dark-200 " : "bg-light-200 ") +
        (theme === "dark" ? "text-white " : "text-black ") +
        "shadow-lg p-4 rounded w-full flex flex-col gap-4 theme-transition"
      }
    >
      <Image
        src={`/${image}`}
        alt="Project Screenshot"
        width={1280}
        height={720}
        className="rounded self-center w-auto max-h-96"
      />
      <h4 className="font-bold self-center">{title}</h4>
      <div className="flex flex-wrap gap-3 pb-8 justify-center">
        {techStack.map((skill, index) => (
          <ProjectSkill key={index} skill={skill} />
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Link href={websiteLink}>Website</Link>
        <FontAwesomeIcon icon={faArrowsLeftRight} />
        <Link href={repositoryLink}>Repository</Link>
      </div>
    </div>
  );
}
