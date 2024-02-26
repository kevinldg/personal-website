import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume({ icon, title, date, content }) {
  return (
    <div className="flex gap-4">
      <FontAwesomeIcon icon={icon} />
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-bold">{title}</h3>
          <p className=" font-bold">({date})</p>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
}
