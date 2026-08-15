import { useEffect, useState } from "react";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") !== "light");
  useEffect(() => { localStorage.setItem("theme", darkMode ? "dark" : "light"); }, [darkMode]);
  return { darkMode, toggleTheme: () => setDarkMode((current) => !current) };
}
