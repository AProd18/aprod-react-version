import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import styles from "./Hero.module.css";
import PropTypes from "prop-types";

function FadeInSection({ children }) {
  const [isVisible, setVisible] = useState(false); // Track if the section is visible
  const domRef = useRef(); // Reference to the DOM element

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true); // Mark section as visible when it intersects
          observer.unobserve(entry.target); // Unobserve after the first intersection
        }
      });
    });

    const currentRef = domRef.current;
    observer.observe(currentRef); // Start observing the element

    return () => observer.unobserve(currentRef); // Cleanup observer on unmount
  }, []);

  return (
    <div
      className={`${styles.fadeInSection} ${isVisible ? styles.isVisible : ""}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired, // Enforce prop type validation
};

export default FadeInSection;
