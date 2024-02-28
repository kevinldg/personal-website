import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

import Resume from "./Resume";
import {
  faGraduationCap,
  faComputer,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const entries = [
  {
    icon: faGraduationCap,
    title: "Computer Science Apprenticeship",
    date: "09/2019 - 06/2022",
    content: `During the computer science apprenticeship, I gained valuable knowledge and hands-on experience in system integration. I learned about integrating different software systems, ensuring seamless communication and data exchange between them. I also gained expertise in troubleshooting and resolving integration issues to ensure smooth operations of complex systems.`,
  },
  {
    icon: faComputer,
    title: "Service Desk Agent",
    date: "07/2022 - 10/2023",
    content: `As a service desk agent, I provided technical support and assistance to users. I resolved hardware and software issues, troubleshooted network problems, and ensured smooth operations of computer systems. I also communicated effectively with customers to understand and address their needs.`,
  },
  {
    icon: faCode,
    title: "Web Development Bootcamp",
    date: "11/2023 - 02/2024",
    content: `During the web development bootcamp, I immersed myself in the world of web development. I learned front-end and back-end technologies, built responsive and interactive websites, and gained a solid understanding of web development best practices. I also collaborated with fellow developers on various projects.`,
  },
];

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={
        (theme === "dark" ? "bg-dark-300 " : "bg-light-300 ") +
        (theme === "dark" ? "text-white " : "text-black ") +
        "desktop:px-[25vw] px-8 py-8 flex flex-col gap-4 theme-transition"
      }
    >
      <h3 className="text-2xl font-bold">About me</h3>
      {entries.map((entry, index) => (
        <Resume key={index} {...entry} />
      ))}
    </div>
  );
}
