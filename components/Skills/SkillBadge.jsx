import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

export default function SkillBadge() {
  return (
    <div className="bg-mongo-green shadow-lg px-3 py-1 rounded flex gap-3 justify-center items-center w-fit">
      <FontAwesomeIcon icon={faDatabase} />
      <p>MongoDB</p>
    </div>
  );
}
