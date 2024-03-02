import { useEffect, useState } from "react";
import { CiSun, IoMoon } from "react-icons/io"; // Ensure these are your actual icon imports

export function ThemeChanger() {
  const [theme, setTheme] = useState("light"); // Initialize with default theme

  useEffect(() => {
    // Access localStorage only after component mounts, ensuring code runs on client
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme); // Update state with stored theme, if available
    document.documentElement.classList.add(storedTheme);

    // Optional: Sync theme changes across tabs
    const handleStorage = (e) => {
      if (e.key === "theme") {
        changeTheme(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      document.documentElement.classList.remove(storedTheme);
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  const changeTheme = (newTheme = null) => {
    const currentTheme = newTheme || (theme === "light" ? "dark" : "light");
    setTheme(currentTheme); // Update state
    document.documentElement.classList.replace(theme, currentTheme); // Update <html> class
    localStorage.setItem("theme", currentTheme); // Save new theme to localStorage
  };

  return (
    <button
      className="flex h-[36px] w-[36px] items-center justify-center rounded-md border border-[#F4F4F5] bg-[#F4F4F5] hover:border-blue-300 dark:border-[#39404f] dark:bg-[#39404f] dark:hover:border-blue-300"
      onClick={() => changeTheme()}
    >
      {theme === "light" ? <CiSun /> : <IoMoon className="text-white" />}
    </button>
  );
}
