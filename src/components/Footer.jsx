import { useEffect, useState } from "react";
import styles from "./Footer.module.css";

import { LogoGithub, LogoLinkedin, LogoTwitter } from "react-ionicons";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear()); // Store current year
  const [localTime, setLocalTime] = useState(""); // Store formatted local time

  const iconStyle = {
    width: "25px",
    opacity: "80%", // Inline styles for icons
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Europe/Belgrade",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // Use 24-hour format
      };
      const formatter = new Intl.DateTimeFormat("en-GB", options);
      setLocalTime(formatter.format(now)); // Update time display
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); // Update year in case of new year
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    // FOOTER
    <footer className={styles.flexContainer}>
      {/* TOP */}
      <div className={styles.topRow}>
        <div className={styles.footerSocialIcons} aria-label="Social media">
          <a
            href="https://www.linkedin.com/in/aleksandar-prodanovic-9991a7236/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit LinkedIn profile"
          >
            <LogoLinkedin
              color="#ffffff"
              opacity="85%"
              style={iconStyle}
              className={styles.socIc}
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Twitter profile"
          >
            <LogoTwitter
              color="#ffffff"
              opacity="85%"
              style={iconStyle}
              className={styles.socIc}
            />
          </a>
          <a
            href="https://github.com/AProd18"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit GitHub profile"
          >
            <LogoGithub
              color="#ffffff"
              opacity="85%"
              style={iconStyle}
              className={styles.socIc}
            />
          </a>
        </div>
        <div>
          <p className={styles.localTimeFooter}>
            Local time <span id="local-time">{localTime}</span>
          </p>
        </div>
        {/* RIGHT  */}
        <div className={styles.copyRightDesktop}>
          <p className={styles.copyRight}>
            Copyright &copy;{" "}
            <span id="copyright-year-desktop">{currentYear}</span> Aleksandar
            Prodanovic
          </p>
        </div>
        <div className="footer-right">
          <button id={styles.moveUpButton} onClick={scrollToTop}>
            Scroll to Top
          </button>
        </div>
      </div>
      {/* BOTTOM  */}
      <div className={styles.bottomRow}>
        <p className={styles.copyRight}>
          &copy; <span id="copyright-year-mobile">{currentYear}</span>{" "}
          Aleksandar Prodanovic
        </p>
      </div>
    </footer>
  );
}

export default Footer;
