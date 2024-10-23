import styles from "./Hero.module.css";
import FadeInSection from "./FadeInSection";

function Hero() {
  const handleClick = (event) => {
    event.preventDefault();
    const email = "business@aleksandarprod.com";
    const subject = "Subject Text";
    const body = "Body text here";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };
  return (
    <section id="home" className={styles.heroSection}>
      <FadeInSection>
        <div className={styles.heroAnimation}>Hello, I&apos;m</div>
        <div className={styles.heroName}>
          <h1 className={styles.headingName}>Aleksandar Prodanovic.</h1>
        </div>
        <div className={styles.heroDescription}>
          I&apos;m a <strong>full-stack developer</strong> with a passion for
          creating dynamic, user-friendly web applications that deliver optimal
          performance and user experience.
        </div>
        <div>
          <a className={styles.heroBtn} href="#contact" onClick={handleClick}>
            Contact Me
          </a>
        </div>
      </FadeInSection>
    </section>
  );
}

export default Hero;
