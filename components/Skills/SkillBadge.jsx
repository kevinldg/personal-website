import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillBadge({ title, icon, color }) {
  return (
    <div
      className={`${color} text-white shadow-lg px-3 py-1 rounded flex gap-3 justify-center items-center w-fit`}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      <p>{title}</p>
    </div>
  );
}
