import SkillBadge from "./SkillBadge";

import {
  faReact,
  faGit,
  faFigma,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";

const entries = [
  {
    title: "React",
    icon: faReact,
    color: "bg-blue-600",
  },
  {
    title: "Styled Components",
    icon: null,
    color: "bg-pink-600",
  },
  {
    title: "Node.js",
    icon: faNodeJs,
    color: "bg-green-600",
  },
  {
    title: "Next.js",
    icon: null,
    color: "bg-purple-600",
  },
  {
    title: "Git",
    icon: faGit,
    color: "bg-red-600",
  },
  {
    title: "MongoDB",
    icon: faDatabase,
    color: "bg-yellow-600",
  },
  {
    title: "Figma",
    icon: faFigma,
    color: "bg-indigo-600",
  },
  {
    title: "Agile Methoden",
    icon: null,
    color: "bg-orange-600",
  },
  {
    title: "Vercel",
    icon: null,
    color: "bg-teal-600",
  },
  {
    title: "Cloudinary",
    icon: null,
    color: "bg-cyan-600",
  },
  {
    title: "NextAuth.js",
    icon: null,
    color: "bg-lime-600",
  },
];

export default function Skills() {
  return (
    <div className="desktop:px-[25vw] px-8 py-8 flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Skills</h3>
      <div className="flex gap-3 flex-wrap">
        {entries.map((entry, index) => (
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
