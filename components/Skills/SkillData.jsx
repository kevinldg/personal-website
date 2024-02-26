import {
  faReact,
  faGit,
  faFigma,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faPhp,
  faPython,
  faBootstrap,
  faLaravel,
  faWindows,
  faLinux,
  faTrello,
  faDocker,
  faSlack,
  faReddit,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

const languages = [
  {
    title: "HTML",
    icon: faHtml5,
    color: "bg-blue-600",
  },
  {
    title: "CSS",
    icon: faCss3Alt,
    color: "bg-green-600",
  },
  {
    title: "Javascript",
    icon: faJsSquare,
    color: "bg-yellow-600",
  },
  {
    title: "PHP",
    icon: faPhp,
    color: "bg-purple-600",
  },
  {
    title: "Python",
    icon: faPython,
    color: "bg-red-600",
  },
];

const frameworksLibaries = [
  {
    title: "Bootstrap",
    icon: faBootstrap,
    color: "bg-indigo-600",
  },
  {
    title: "Laravel",
    icon: faLaravel,
    color: "bg-pink-600",
  },
  {
    title: "React",
    icon: faReact,
    color: "bg-blue-600",
  },
  {
    title: "Next.js",
    icon: null,
    color: "bg-yellow-600",
  },
  {
    title: "Styled Components",
    icon: faCss3Alt,
    color: "bg-green-600",
  },
];

const database = [
  {
    title: "MySQL",
    icon: faDatabase,
    color: "bg-blue-600",
  },
  {
    title: "MongoDB",
    icon: faDatabase,
    color: "bg-green-600",
  },
];

const operatingSystem = [
  {
    title: "Windows",
    icon: faWindows,
    color: "bg-blue-600",
  },
  {
    title: "Linux",
    icon: faLinux,
    color: "bg-green-600",
  },
];

const design = [
  {
    title: "GIMP",
    icon: null,
    color: "bg-red-600",
  },
  {
    title: "Figma",
    icon: faFigma,
    color: "bg-purple-600",
  },
];

const planningProjectManagement = [
  {
    title: "Notion",
    icon: null,
    color: "bg-blue-600",
  },
  {
    title: "Trello",
    icon: faTrello,
    color: "bg-green-600",
  },
];

const otherStuff = [
  {
    title: "Git",
    icon: faGit,
    color: "bg-red-600",
  },
  {
    title: "Docker",
    icon: faDocker,
    color: "bg-indigo-600",
  },
  {
    title: "Vercel",
    icon: null,
    color: "bg-pink-600",
  },
  {
    title: "Visual Studio Code",
    icon: faCode,
    color: "bg-blue-600",
  },
  {
    title: "Slack",
    icon: faSlack,
    color: "bg-green-600",
  },
  {
    title: "Udemy",
    icon: null,
    color: "bg-yellow-600",
  },
  {
    title: "Reddit",
    icon: faReddit,
    color: "bg-red-600",
  },
  {
    title: "Stack Overflow",
    icon: faStackOverflow,
    color: "bg-purple-600",
  },
  {
    title: "Node.js",
    icon: faNodeJs,
    color: "bg-blue-600",
  },
];

export {
  languages,
  frameworksLibaries,
  database,
  operatingSystem,
  design,
  planningProjectManagement,
  otherStuff,
};
