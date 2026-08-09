import { useState } from "react";
import styles from "./DarkMode.module.css";
const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  function handleClick() {
    setDarkMode(!darkMode);
  }
  return (
    <div className={`${styles.container} ${darkMode ? styles.dark : styles.light}`}>
      <button className={styles.button} type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Light Mode"}{" "}
      </button>
    </div>
  );
};
export default DarkModeButton;
