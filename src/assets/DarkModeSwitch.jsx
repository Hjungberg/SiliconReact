import React, { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggeDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.body.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  return (
    <div className="darkmode-toggle">
      <p className="hide">Dark Mode</p>
      <label className="toggle">
        <input type="checkbox" checked={isDarkMode} onChange={toggeDarkMode} />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
