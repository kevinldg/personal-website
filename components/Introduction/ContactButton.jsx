import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ContactButton() {
  return (
    <div className="flex gap-4 items-center">
      <button className=" bg-vsc-blue text-white shadow-lg px-4 py-1 rounded font-semibold w-fit hover:scale-105 transition-transform">
        Contact
      </button>
      <div className="flex gap-2 items-center text-dark-600 font-bold">
        <FontAwesomeIcon icon={faArrowLeft} />
        <p>Coming soon</p>
      </div>
    </div>
  );
}
