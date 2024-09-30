import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Image } from "react-bootstrap";
import FadeOut from "../components/MotionWrapper/FadeOut";

const SplashScreen = ({
  onComplete,
  fadeDuration = 2000,
  splashDuration = 2000,
}) => {
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Timer untuk menampilkan splash screen
    const splashScreenTimer = setTimeout(() => {
      setStartFadeOut(true); // Mulai fade out

      // Timer untuk menyembunyikan splash screen setelah fade out
      const fadeOutTimer = setTimeout(() => {
        setIsVisible(false); // Sembunyikan splash screen
        onComplete && onComplete(); // Panggil callback ketika splash selesai
      }, fadeDuration);

      return () => clearTimeout(fadeOutTimer);
    }, splashDuration);

    return () => clearTimeout(splashScreenTimer);
  }, [fadeDuration, splashDuration, onComplete]);

  if (!isVisible) {
    return null; // Jangan tampilkan splash screen lagi jika sudah disembunyikan
  }

  return (
    <div className="splash-screen d-flex justify-content-center align-items-center vh-100 bg-light">
      {startFadeOut ? (
        <FadeOut duration={fadeDuration / 1000}>
          <Image
            src="splash-screen.webp"
            alt="MH Logo"
            style={{ width: "20rem" }}
          />
        </FadeOut>
      ) : (
        <Image
          src="splash-screen.webp"
          alt="MH Logo"
          style={{ width: "20rem" }}
        />
      )}
    </div>
  );
};

SplashScreen.propTypes = {
  onComplete: PropTypes.func,
  fadeDuration: PropTypes.number,
  splashDuration: PropTypes.number,
};
export default SplashScreen;
