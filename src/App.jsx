import { useState } from "react";
import AppNavbar from "./components/App/AppNavbar";
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import SynergySection from "./sections/synergy/SynergySection";
import VMSection from "./sections/visionAndMission/VMSection";
import CampaignPromisesSection from "./sections/campaignPromises/CampaignPromises";
import QNASection from "./sections/qnaSection/QNASection";

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
      <AboutSection />
      <SynergySection />
      <VMSection isDarkTheme={isDarkTheme} />
      <CampaignPromisesSection isDarkTheme={isDarkTheme} />
      <QNASection isDarkTheme={isDarkTheme} />
    </div>
  );
}

export default App;
