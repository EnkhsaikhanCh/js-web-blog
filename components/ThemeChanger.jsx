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
      className="flex h-[36px] w-[36px] items-center justify-center rounded-md bg-[#F4F4F5] dark:bg-[#000000]"
      onClick={changeTheme}
    >
      {theme === "light" && <CiSun />}
      {theme === "dark" && <LuMoon className="dark:text-white" />}
    </button>
  );
}
