import { useEffect, useState } from "react";
import { IoIosSunny as CiSun, IoIosMoon as LuMoon } from "react-icons/io"; // Corrected imports

export function ThemeChanger() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  function changeTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      className="flex h-[36px] w-[36px] items-center justify-center rounded-md border border-[#F4F4F5] bg-[#F4F4F5] hover:border-blue-300 dark:border-[#39404f] dark:bg-[#39404f] dark:hover:border-blue-300"
      onClick={changeTheme}
    >
      {theme === "light" ? <CiSun /> : <LuMoon className="text-white" />}
    </button>
  );
}
