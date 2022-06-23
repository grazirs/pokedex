import { useState, useEffect } from "react";

export const useTheme = () => {
  const localStorageTheme = () => {
    const theme = localStorage.getItem("body");
    return theme ? theme : "light";
  };
  const [currentTheme, setCurrentTheme] = useState(localStorageTheme());

  useEffect(() => {
    localStorage.setItem("body", currentTheme);
  }, [currentTheme]);

  const switchTheme = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };
  return { currentTheme, switchTheme };
};
