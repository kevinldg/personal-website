import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeSwitch() {
  const [darkMode, setDarkMode] = useState(true);

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <button
        onClick={handleThemeChange}
        className={
          (darkMode
            ? " bg-black text-slate-200"
            : " bg-neutral-200 text-black") + " shadow-lg px-4 py-2 rounded"
        }
      >
        {darkMode ? (
          <FontAwesomeIcon icon={faMoon} />
        ) : (
          <FontAwesomeIcon icon={faSun} className=" text-yellow-500" />
        )}
      </button>
    </>
  );
}
