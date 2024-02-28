import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

import SkillBadge from "./SkillBadge";

import {
  languages,
  frameworksLibaries,
  database,
  operatingSystem,
  design,
  planningProjectManagement,
  otherStuff,
} from "./SkillData";

export default function Skills() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme === "dark" ? "bg-dark-200 " : "bg-light-200 ") +
        (theme === "dark" ? "text-white " : "text-black ") +
        "desktop:px-[25vw] px-8 py-8 flex flex-col gap-4  theme-transition"
      }
    >
      <h3 className="text-2xl font-bold">Skills</h3>
      <h3 className="text-xl font-bold">Languages</h3>
      <div className="flex gap-3 flex-wrap">
        {languages.map((entry, index) => (
          <SkillBadge
            key={index}
            title={entry.title}
            icon={entry.icon}
            color={entry.color}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold">Frameworks / Libaries</h3>
      <div className="flex gap-3 flex-wrap">
        {frameworksLibaries.map((entry, index) => (
          <SkillBadge
            key={index}
            title={entry.title}
            icon={entry.icon}
            color={entry.color}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold">Database</h3>
      <div className="flex gap-3 flex-wrap">
        {database.map((entry, index) => (
          <SkillBadge
            key={index}
            title={entry.title}
            icon={entry.icon}
            color={entry.color}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold">Operating System</h3>
      <div className="flex gap-3 flex-wrap">
        {operatingSystem.map((entry, index) => (
          <SkillBadge
            key={index}
            title={entry.title}
            icon={entry.icon}
            color={entry.color}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold">Design</h3>
      <div className="flex gap-3 flex-wrap">
        {design.map((entry, index) => (
          <SkillBadge
            key={index}
            title={entry.title}
            icon={entry.icon}
            color={entry.color}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold">Planning / Project Management</h3>
      <div className="flex gap-3 flex-wrap">
        {planningProjectManagement.map((entry, index) => (
          <SkillBadge
            key={index}
            title={entry.title}
            icon={entry.icon}
            color={entry.color}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold">Other Stuff</h3>
      <div className="flex gap-3 flex-wrap">
        {otherStuff.map((entry, index) => (
          <SkillBadge
            key={index}
            title={entry.title}
            icon={entry.icon}
            color={entry.color}
          />
        ))}
      </div>
    </div>
  );
}
