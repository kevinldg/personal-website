import { useContext } from "react";
import ThemeContext from "@/contexts/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        className={
          (theme === "dark" ? "bg-light-200" : "bg-black") + " p-1.5 rounded"
        }
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </div>
  );
}
