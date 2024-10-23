import { useEffect } from "react";
import styles from "./CursorLight.module.css";

const CursorLight = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const light = document.getElementById("cursor-light");

      // Calculate position relative to the document including scroll
      const posX = e.clientX + window.pageXOffset;
      const posY = e.clientY + window.pageYOffset;

      light.style.left = `${posX}px`;
      light.style.top = `${posY}px`;
    };

    const handleScroll = () => {
      const light = document.getElementById("cursor-light");

      // Calculate current position of the cursor light relative to the viewport
      const posX = parseFloat(light.style.left) - window.pageXOffset;
      const posY = parseFloat(light.style.top) - window.pageYOffset;

      light.style.left = `${posX}px`;
      light.style.top = `${posY}px`;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <div id="cursor-light" className={styles.cursorLight} ></div>;
};

export default CursorLight;
