import styles from "./About.module.css";
import FadeInSection from "./FadeInSection";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutHeading}>
        <span className={styles.bgColor}>About Me</span>
      </div>

      <div className={styles.aboutDescription}>
        <div className={styles.aboutText__grid}>
          <FadeInSection>
            <p className={styles.aboutParagraph__first}>
              I started getting interested in programming back in 2004, and I
              knew that my hobby would eventually turn into a way for me to earn
              a good living.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.aboutParagraph__second}>
              I got my first job in 2009, playing one mmorpg on a private server
              as a creator of in-game items and mechanics. Shortly after that,
              in 2010/11, I began working in web development, which fulfilled me
              the most, and I worked for a company called{" "}
              <strong>Six-Solutions.</strong>
              <br />
              Later, in 2013, I enrolled in the{" "}
              <a className={styles.workLinks} href="https://singidunum.ac.rs/">
                <strong>Faculty of Computer Science</strong>
              </a>{" "}
              and during my second year, I started an internship at the company{" "}
              <strong>Brain-Win Project</strong>. For many years alongside my
              job, I have also been doing <strong>freelance work</strong> as
              side jobs, mostly as a full-stack web developer.
            </p>
          </FadeInSection>
          <FadeInSection>
            <p className={styles.aboutParagraph__third}>
              My main focus these days is building <strong>accessible</strong>,
              <strong>inclusive products and digital experiences</strong> I have
              a proven track record of creating engaging, dynamic, and
              responsive websites that are optimized for performance and user
              experience.
            </p>
          </FadeInSection>
        </div>
        <div className={styles.aboutImage__grid}>
          <div>
            <FadeInSection>
              <i className="card-icon fa-regular fa-cat-space">
                <img
                  className={styles.aboutAuthor__image}
                  src="img1.png"
                  alt="Profile picture of Aleksandar Prodanovic"
                  width="290px"
                  height="272px"
                />
              </i>
            </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
