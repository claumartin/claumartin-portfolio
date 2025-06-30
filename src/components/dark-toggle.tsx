import { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const DarkToggle: React.FC = () => {

  const [dark, setDark] = useState(false);

  const handleDarkMode = () => {
    setDark(!dark);
    document.body.classList.toggle("dark")
  }

  return (
    <button
      onClick={() => handleDarkMode()}
      type="button"
      className="text-2xl flex items-center cursor-pointer hover:scale-105 transition-transform"
    >
      {dark && <BiSun /> }
      {!dark && <BiMoon /> }
    </button>
  );
}