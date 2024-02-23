import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  return (
    <div className="flex gap-4">
      <FontAwesomeIcon icon={faAnglesRight} />
      <div className="flex flex-col gap-1">
        <h3 className="font-bold">Lorem ipsum</h3>
        <p>
          Lorem ipsum, dolor sit amet. Lorem ipsum, dolor sit amet. <br />
          Lorem ipsum, dolor sit amet. Lorem ipsum, dolor sit amet. <br />
          Lorem ipsum, dolor sit amet.
        </p>
      </div>
    </div>
  );
}
