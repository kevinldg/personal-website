import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ProjectSkill from "./ProjectSkill";

export default function ProjectShowcase() {
  return (
    <div className="bg-dark-200 p-4 rounded w-fit flex flex-col gap-4">
      <Image
        src={"/project-example.jpg"}
        alt="Project Screenshot"
        width={400}
        height={150}
        className="rounded"
      />
      <h4 className="font-bold">Project Title</h4>
      <div className="flex flex-wrap gap-3 pb-8">
        <ProjectSkill />
        <ProjectSkill />
        <ProjectSkill />
        <ProjectSkill />
      </div>
      <div className="flex justify-between items-center">
        <p>Website</p>
        <FontAwesomeIcon icon={faArrowsLeftRight} />
        <p>Repository</p>
      </div>
    </div>
  );
}
