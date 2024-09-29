import { useState } from "react";
import AppNavbar from "./components/App/AppNavbar";
import HeroSection from "./sections/hero/HeroSection";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const handleIsDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  return (
    <div
      className={`App ${
        isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <AppNavbar
        isDarkTheme={isDarkTheme}
        handleIsDarkTheme={handleIsDarkTheme}
      />
      <HeroSection isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
