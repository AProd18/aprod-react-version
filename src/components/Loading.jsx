import { useEffect, useState } from "react";
import styles from "./Loading.module.css";

function Loading() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (width >= 130) return;

    const timer = setTimeout(() => {
      setWidth(width + 1);
    }, 20); // Adjust the timeout to control speed

    return () => clearTimeout(timer);
  }, [width]);

  useEffect(() => {
    if (width >= 130) {
      const loadingElements = document.getElementsByClassName(styles.loading);
      if (loadingElements.length > 0) {
        loadingElements[0].style.display = "none";
      }
    }
  }, [width]);

  return (
    <div className={styles.loading}>
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${width}%` }}
          data-progress={width}
        ></div>
      </div>
    </div>
  );
}

export default Loading;
