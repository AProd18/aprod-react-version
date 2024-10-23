import { LogoGithub, LogoLinkedin, LogoTwitter } from "react-ionicons";
import styles from "./SocialIcons.module.css";
import { useState } from "react";

function SocialIcons() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const iconStyle = {
    width: "30px",
    height: "30px",
  };

  const hoverStyle = {
    color: "#6aead6",
    transform: "scale(1.1) translateY(-5px)",
    transition: "0.5s",
  };

  return (
    <ul className={styles.icons} aria-label="Social media">
      <li
        className={styles.iconLi}
        onMouseEnter={() => setHoveredIcon("linkedin")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <a
          href="https://www.linkedin.com/in/aleksandar-prodanovic-9991a7236/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
        >
          <LogoLinkedin
            color={hoveredIcon === "linkedin" ? "#6aead6" : "#ffffff"}
            style={
              hoveredIcon === "linkedin"
                ? { ...iconStyle, ...hoverStyle }
                : iconStyle
            }
            className={styles.ionIcon}
          />
        </a>
      </li>
      <li
        className={styles.iconLi}
        onMouseEnter={() => setHoveredIcon("twitter")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Twitter profile"
        >
          <LogoTwitter
            color={hoveredIcon === "twitter" ? "#6aead6" : "#ffffff"}
            style={
              hoveredIcon === "twitter"
                ? { ...iconStyle, ...hoverStyle }
                : iconStyle
            }
            className="ionIcon"
          />
        </a>
      </li>
      <li
        className={styles.iconLi}
        onMouseEnter={() => setHoveredIcon("github")}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        <a
          href="https://github.com/AProd18"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
        >
          <LogoGithub
            color={hoveredIcon === "github" ? "#6aead6" : "#ffffff"}
            style={
              hoveredIcon === "github"
                ? { ...iconStyle, ...hoverStyle }
                : iconStyle
            }
            className="ionIcon"
          />
        </a>
      </li>
      <div className="divider"></div>
    </ul>
  );
}

export default SocialIcons;
