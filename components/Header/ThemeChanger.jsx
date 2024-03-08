import { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

export function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.classList.add(storedTheme);
  }, []);

  function changeTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.replace(theme, newTheme);
    localStorage.setItem("theme", newTheme);
  }

  return (
    <button
      className="flex h-[30px] w-[30px] items-center justify-center rounded-md border border-[#F4F4F5] bg-[#F4F4F5] hover:border-blue-300 dark:border-[#39404f] dark:bg-[#39404f] dark:hover:border-blue-300"
      aria-label={
        theme === "light" ? "Switch to dark mode" : "Switch to light mode"
      }
      onClick={changeTheme}
    >
      {theme === "light" ? (
        <IoMoon className="text-[#6E7175]" />
      ) : (
        <IoSunny className="text-yellow-500" />
      )}
      <span className="sr-only">
        {theme === "light" ? "Activate dark mode" : "Activate light mode"}
      </span>
    </button>
  );
}
