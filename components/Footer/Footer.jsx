import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [commitHash, setCommitHash] = useState("");

  useEffect(() => {
    const fetchLastCommitHash = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/kevinldg/personal-website/commits/main"
        );
        setCommitHash(response.data.sha.slice(0, 7));
      } catch (error) {
        console.error("Fehler beim Abrufen des Commits:", error);
      }
    };

    fetchLastCommitHash();
  }, []);

  return (
    <footer className="p-8 flex justify-between items-center bg-vsc-blue">
      <p>© 2024 Kevin Loeding</p>
      <Link href="https://github.com/kevinldg/personal-website/commits/main/">
        Last Commit: {commitHash}
      </Link>
    </footer>
  );
}
