import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import { GridOutline, CloseOutline } from "react-ionicons";

function Header() {
  const [lastScrollY, setLastScrollY] = useState(0); // Tracks the last scroll position
  const [navUp, setNavUp] = useState(false); // Controls if navigation is hidden or visible

  const navHeight = 70; // Navigation height in pixels
  const delta = 10; // Minimum scroll distance to trigger changes

  const [navOpen, setNavOpen] = useState(false); // Tracks the state of the mobile nav
  const toggleNav = () => {
    setNavOpen(!navOpen); // Toggles the mobile nav menu
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollYMovements = window.scrollY;

      // Only trigger if scrolled enough (more than delta)
      if (Math.abs(lastScrollY - scrollYMovements) > delta) {
        // If scrolling down past the nav height, hide the navigation
        if (scrollYMovements > lastScrollY && scrollYMovements > navHeight) {
          setNavUp(true);
          // If scrolling up, show the navigation
        } else if (scrollYMovements < lastScrollY) {
          setNavUp(false);
        }
        setLastScrollY(scrollYMovements); // Update last scroll position
      }
    };

    // Throttle scroll event with an interval to improve performance
    const intervalId = setInterval(() => {
      handleScroll();
    }, 350);

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(intervalId); // Cleanup interval on unmount
      window.removeEventListener("scroll", handleScroll); // Cleanup scroll listener on unmount
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleLinkClick = (e, href) => {
      e.preventDefault(); // Prevent default link behavior

      // Scroll to top if href is "#"
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Smooth scroll to top
        });
        // Scroll to section if href is an anchor link
      } else if (href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        if (sectionEl) {
          sectionEl.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to section
        }
      }
    };

    const allLinks = document.querySelectorAll(`.${styles.navMenu__link}`);

    allLinks.forEach((link) => {
      const href = link.getAttribute("href"); // Get the href of each link
      const clickHandler = (e) => handleLinkClick(e, href); // Define click handler for the link
      link.addEventListener("click", clickHandler); // Attach click handler
      link._clickHandler = clickHandler; // Store the handler for cleanup
    });

    return () => {
      allLinks.forEach((link) => {
        const clickHandler = link._clickHandler;
        if (clickHandler) {
          link.removeEventListener("click", clickHandler); // Cleanup event listener on unmount
        }
      });
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${styles.sticky} ${
        navUp
          ? styles.navUp
          : "" || navOpen
          ? `${styles.header} ${styles.navOpen}`
          : styles.header
      }`}
    >
      <a className={styles.logo} href="">
        <img src="logo.png" width="62px" alt="Logo of Aleksandar Prodanovic" />
      </a>
      <nav className={styles.navMenu}>
        <ul className={styles.navMenu__list}>
          <li>
            <a
              className={`${styles.navMenu__link} ${styles.underline}`}
              href="#"
              aria-label="Go to Home section"
            >
              <span> Home </span>
            </a>
          </li>
          <li>
            <a
              className={`${styles.navMenu__link} ${styles.underline}`}
              href="#about"
              aria-label="Go to About section"
            >
              About
            </a>
          </li>
          <li>
            <a
              className={`${styles.navMenu__link} ${styles.underline}`}
              href="#work"
              aria-label="Go to Work section"
            >
              Work
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.btnMobileNav} onClick={toggleNav}>
        {navOpen ? (
          <CloseOutline
            className={styles.iconMobileNav}
            style={{
              width: "40px",
              height: "40px",
              color: "#fff",
              opacity: "80%",
            }}
          />
        ) : (
          <GridOutline
            className={styles.iconMobileNav}
            style={{
              width: "40px",
              height: "40px",
              color: "#6aead6",
              opacity: "80%",
            }}
          />
        )}
      </button>
    </header>
  );
}

export default Header;
