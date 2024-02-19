import { useEffect, useState } from "react";
import { CiSun } from "react-icons/ci";
import { LuMoon } from "react-icons/lu";

export function ThemeChanger() {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    setTheme(localTheme);
    document.documentElement.classList.add(localTheme);
  }, []);

  return (
    <button
      className="flex h-[36px] w-[36px] items-center justify-center rounded-md border border-[#F4F4F5] bg-[#F4F4F5] hover:border-blue-300 dark:border-[#39404f] dark:bg-[#39404f] dark:hover:border-blue-300"
      onClick={changeTheme}
    >
      {theme === "light" && <CiSun />}
      {theme === "dark" && <LuMoon className="dark:text-white" />}
    </button>
  );
}
