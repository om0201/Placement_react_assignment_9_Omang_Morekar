import { useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ThemeContext from "./ThemeContext";

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#242424" : "#f9f9f9",
        color: theme === "dark" ? "#f9f9f9" : "#242424",
      }}
      className={`App ${theme === "dark" ? "dark" : "light"}`}
    >
      <div>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>React Theme Changer</h1>
      <div className="card">
        <button
          onClick={() =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark"))
          }
        >
          Set theme to {theme === "dark" ? "light" : "dark"}
        </button>
      </div>
    </div>
  );
}

export default App;
