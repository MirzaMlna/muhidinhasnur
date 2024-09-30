import { useState } from "react";
import AppNavbar from "./components/App/AppNavbar";
import HeroSection from "./sections/hero/HeroSection";
import AboutSection from "./sections/about/AboutSection";
import SynergySection from "./sections/synergy/SynergySection";
import VMSection from "./sections/visionAndMission/VMSection";
import CampaignPromisesSection from "./sections/campaignPromises/CampaignPromises";
import QNASection from "./sections/qnaSection/QNASection";
import SupportingSection from "./sections/supporting/SupportingSection";
import GallerySection from "./sections/gallery/GallerySection";
import Footer from "./sections/footer/Footer";
import SplashScreen from "./sections/SplashScreen";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isSplashCompleted, setIsSplashCompleted] = useState(false);

  const handleSplashComplete = () => {
    setIsSplashCompleted(true);
  };

  const handleIsDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div
      className={`App ${
        isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {!isSplashCompleted && (
        <SplashScreen
          onComplete={handleSplashComplete}
          splashDuration={2000}
          fadeDuration={1000}
        />
      )}

      {isSplashCompleted && (
        <div>
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
          <SupportingSection />
          <GallerySection isDarkTheme={isDarkTheme} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
