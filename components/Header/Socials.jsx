import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="flex gap-4">
      <Link href="/">
        <FontAwesomeIcon icon={faGithub} /> kevinldg
      </Link>
      <Link href="/">
        <FontAwesomeIcon icon={faLinkedin} /> Kevin Löding
      </Link>
    </div>
  );
}
